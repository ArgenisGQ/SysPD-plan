import React, { useState } from "react"
import { Month_Names_Short, Weekday_Names_Short } from "./utils/calanderUtils"
import {
  Flex,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure
} from "@chakra-ui/react"
import { CalendarPanel } from "./components/calendarPanel"
import { format } from "date-fns"
import FocusLock from "react-focus-lock"

export const RangeCalendarPanel = ({
  dayzedHookProps,
  configs,
  propsConfigs,
  selected
}) => {
  const [hoveredDate, setHoveredDate] = useState(null)

  // Calendar level
  const onMouseLeave = () => {
    setHoveredDate(null)
  }

  // Date level
  const onMouseEnterHighlight = date => {
    if (!Array.isArray(selected) || !selected?.length) {
      return
    }
    setHoveredDate(date)
  }

  const isInRange = date => {
    if (!Array.isArray(selected) || !selected?.length) {
      return false
    }
    let firstSelected = selected[0]
    if (selected.length === 2) {
      let secondSelected = selected[1]
      return firstSelected < date && secondSelected > date
    } else {
      return (
        hoveredDate &&
        ((firstSelected < date && hoveredDate >= date) ||
          (date < firstSelected && date >= hoveredDate))
      )
    }
  }

  return (
    <Flex onMouseLeave={onMouseLeave}>
      <CalendarPanel
        dayzedHookProps={dayzedHookProps}
        configs={configs}
        propsConfigs={propsConfigs}
        isInRange={isInRange}
        onMouseEnterHighlight={onMouseEnterHighlight}
      />
    </Flex>
  )
}

const DefaultConfigs = {
  dateFormat: "MM/dd/yyyy",
  monthNames: Month_Names_Short,
  dayNames: Weekday_Names_Short,
  firstDayOfWeek: 0,
  monthsToDisplay: 2
}

export const RangeDatepicker = ({
  configs,
  propsConfigs = {},
  id,
  name,
  usePortal,
  defaultIsOpen = false,
  closeOnSelect = true,
  ...props
}) => {
  const { selectedDates, minDate, maxDate, onDateChange, disabled } = props

  // chakra popover utils
  const [dateInView, setDateInView] = useState(selectedDates[0] || new Date())
  const [offset, setOffset] = useState(0)
  const { onOpen, onClose, isOpen } = useDisclosure({ defaultIsOpen })

  const datepickerConfigs = {
    ...DefaultConfigs,
    ...configs
  }

  const onPopoverClose = () => {
    onClose()
    setDateInView(selectedDates[0] || new Date())
    setOffset(0)
  }

  const handleOnDateSelected = ({ selectable, date }) => {
    if (!selectable) {
      return
    }
    let newDates = [...selectedDates]
    if (selectedDates.length) {
      if (selectedDates.length === 1) {
        let firstTime = selectedDates[0]
        if (firstTime < date) {
          newDates.push(date)
        } else {
          newDates.unshift(date)
        }
        onDateChange(newDates)

        if (closeOnSelect) onClose()
        return
      }

      if (newDates.length === 2) {
        onDateChange([date])
        return
      }
    } else {
      newDates.push(date)
      onDateChange(newDates)
    }
  }

  // eventually we want to allow user to freely type their own input and parse the input
  let intVal = selectedDates[0]
    ? `${format(selectedDates[0], datepickerConfigs.dateFormat)}`
    : ""
  intVal += selectedDates[1]
    ? ` - ${format(selectedDates[1], datepickerConfigs.dateFormat)}`
    : ""

  const PopoverContentWrapper = usePortal ? Portal : React.Fragment

  return (
    <Popover
      placement="bottom-start"
      variant="responsive"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onPopoverClose}
      isLazy
    >
      <PopoverTrigger>
        <Input
          onKeyPress={e => {
            if (e.key === " " && !isOpen) {
              e.preventDefault()
              onOpen()
            }
          }}
          id={id}
          autoComplete="off"
          isDisabled={disabled}
          name={name}
          value={intVal}
          onChange={e => e.target.value}
          {...propsConfigs.inputProps}
        />
      </PopoverTrigger>
      <PopoverContentWrapper>
        <PopoverContent
          width="100%"
          {...propsConfigs?.popoverCompProps?.popoverContentProps}
        >
          <PopoverBody {...propsConfigs.popoverCompProps?.popoverBodyProps}>
            <FocusLock>
              <RangeCalendarPanel
                dayzedHookProps={{
                  onDateSelected: handleOnDateSelected,
                  selected: selectedDates,
                  monthsToDisplay: datepickerConfigs.monthsToDisplay,
                  date: dateInView,
                  minDate: minDate,
                  maxDate: maxDate,
                  offset: offset,
                  onOffsetChanged: setOffset,
                  firstDayOfWeek: datepickerConfigs.firstDayOfWeek
                }}
                configs={datepickerConfigs}
                propsConfigs={propsConfigs}
                selected={selectedDates}
              />
            </FocusLock>
          </PopoverBody>
        </PopoverContent>
      </PopoverContentWrapper>
    </Popover>
  )
}
