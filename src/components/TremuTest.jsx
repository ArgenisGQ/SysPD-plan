import React from 'react'
import { Card, Text, Metric, TextInput, Flex, Grid, Col } from '@tremor/react';
import { SearchIcon } from "@heroicons/react/solid";

function TremuTest() {
  return (
    <main className = "bg-slate-200 h-screen w-full pt-20">
      <Card className="max-w-xs">
        <TextInput icon={SearchIcon} placeholder="Search..."  />
        <TextInput error={true} errorMessage="Wrong username" />
        <TextInput placeholder="Disabled" disabled={true} />
        <TextInput icon={SearchIcon} placeholder="S..." disabled={true}/>
        <TextInput tremor-input  />
      </Card>    
      
      <Card className="bg-slate-200">
        {/* <label className="">
          Edit your post (2): */}
          <textarea
            name="postContent"
            defaultValue="I really enjoyed biking yesterday!"
            rows={4}
            cols={120}
            className=""            
          />
        {/* </label> */}
      </Card>
      <Card className="" >
        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
          <Col numColSpan={1} numColSpanLg={2}>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 1</Metric>
              <TextInput error={true} errorMessage="Wrong username" />
            </Card>
          </Col>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 2</Metric>
            <TextInput error={true} errorMessage="Wrong username" />
          </Card>
          <Col>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 3</Metric>
              <TextInput error={true} errorMessage="Wrong username" />
            </Card>
          </Col>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 4</Metric>
            <TextInput error={true} errorMessage="Wrong username" />
          </Card>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 5</Metric>
            <TextInput error={true} errorMessage="Wrong username" />
          </Card>          
        </Grid>
      </Card>
    </main>
  )
}

export default TremuTest