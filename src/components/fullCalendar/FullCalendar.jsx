import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../assets/css/MiniCalendar.css";
import { Text, Icon } from "@chakra-ui/react";
//FullCalendar
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import { v4 as uuid } from "uuid";
import esLocale from '@fullcalendar/core/locales/es';
import multiMonthPlugin from '@fullcalendar/multimonth';
// Chakra imports
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// Custom components
import Card from "../card/Card";

export default  function FullCalendarx(props) {
  const [events, setEvents] = useState([]);
  
  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          id: uuid(),
        },
      ]);
    }    
  };
  const EventItem = ({ info }) => {
    const { event } = info;
    return (
        <p>{event.title}</p>
    );
  };
  const WeekItem = ({ info }) => {
    const { event } = info;
    const { week } = 1;    
    return (
        {week}                       
    );
  };
  const getCalendarViews = () => ({
    resourceTimelineWeek: {
      type: 'resourceTimeline',
      duration: {
        week: 1,
      },
    },
    resourceDayGridWeek: {
      type: 'resourceDayGrid',
      duration: {
        week: 3,
      },
    },
    resourceTimelineMonth: {
      type: 'resourceTimeline',
      duration: {
        month: 1,
      },
    },
    resourceDayGridMonth: {
      type: 'resourceDayGrid',
      duration: {
        month: 1,
      },
    },
    multiMonthFourMonth: {
      type: 'multiMonth',
      duration: { months: 4 }
    }
  });  
  const views = getCalendarViews();
  
  return (
    <FullCalendar
        /* BASE */
        /* plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth" */
        
        /* headerToolbar={{
          start: "today prev next",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        plugins={[dayGridPlugin]}
        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]} */

        /* editable
        selectable
        events={events}
        select={handleSelect}
        headerToolbar={{
          start: "today prev next",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        plugins={[dayGridPlugin, interactionPlugin]}
        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]} */

        editable
        selectable
        events={events}
        select={handleSelect}
        selectMirror
        dayMaxEvents
        firstDay={1}
        views={views}
        locale={esLocale}
        fixedWeekCount={false} //cantidad de semanas por mes
        weekText = ""
        /* initialView = 'multiMonthFourMonth' */
        /* dayMinWidth={96} */
        /* columnFormat= {
          month: 'ddd',
          week: 'ddd',
          day: 'dddd M/d'
        } */
        /* weekNumbers={true}  */ //numero de semanas del año
        /* weekNumberCalculation={(info) => <WeekItem info={info} />} */
        headerToolbar={{
          start: "today prev next",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        eventContent={(info) => <EventItem info={info} />}        
        /* eventContent={console.log(events)} */
        plugins={[dayGridPlugin, interactionPlugin]}
        /* views={["dayGridMonth", "dayGridWeek", "dayGridDay"]} */
      />
  )



  /* const { selectRange, ...rest } = props;
  const [value, onChange] = useState(new Date());
  return (
    <Card
      align='center'
      direction='column'
      w='100%'
      maxW='max-content'
      p='20px 15px'
      h='max-content'
      {...rest}>
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={selectRange}       
        view={"month"}
        tileContent={<Text color='brand.500'></Text>}
        prevLabel={<Icon as={MdChevronLeft} w='24px' h='24px' mt='4px' />}
        nextLabel={<Icon as={MdChevronRight} w='24px' h='24px' mt='4px' />}
      />
    </Card>
  ); */
}

function FullCalendary(props) {
  const getCalendarViews = () => ({
    resourceTimelineWeek: {
      type: 'resourceTimeline',
      duration: {
        week: 1,
      },
    },
    resourceDayGridWeek: {
      type: 'resourceDayGrid',
      duration: {
        week: 3,
      },
    },
    resourceTimelineMonth: {
      type: 'resourceTimeline',
      duration: {
        month: 1,
      },
    },
    resourceDayGridMonth: {
      type: 'resourceDayGrid',
      duration: {
        month: 1,
      },
    },
  });
  
  const views = getCalendarViews();
  
  <FullCalendar
          ref={ref}
          editable
          selectable
          selectMirror
          dayMaxEvents
          firstDay={1}
          views={views}
          events={events}
          dayMinWidth={96}
          plugins={plugins}
          resources={resources}
          headerToolbar={false}
          resourceAreaWidth="240px"
          slotDuration={{ days: 1 }}
          eventStartEditable={false}
          datesAboveResources={false}
          eventDurationEditable={false}
          eventResizableFromStart={false}
          initialView={CalendarGridView.HORIZONTAL_WEEK}
          schedulerLicenseKey={FULL_CALENDAR_LICENSE_KEY}
          filterResourcesWithEvents={hideEmptyResourcesModel.value}
          slotLabelContent={slot => <CalendarDateCell slot={slot} />}
          eventContent={e => <RentEvent fcEvent={e} events={rentals} />}
          resourceLabelContent={args => <CalendarResourceLabel label={args.resource.title} />}
          resourceAreaColumns={[
            {
              headerContent: <CalendarResourceHeader productSection={productsSection} />,
            },
          ]}
  />
}
