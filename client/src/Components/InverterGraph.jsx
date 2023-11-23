import React from "react";
import { useState,useEffect } from "react";
import { NativeSelect,Group,Stack } from "@mantine/core";

import LineGraph from "./LineGraph";

import { Data } from "../assets/Data";

const InverterGraph = props =>{
    const logs_data = Data.logs_data;
    
    const fetchGenerationData = async() =>{
      try{

      }catch{

      }
    }

    useEffect(() => {
        fetchGenerationData();
    }, []);

    // const labels = logs_data.map((log) => {
    //     const tmp = new Date(log.DATE_TIME);
    //     console.log();
    //     const hr = tmp.getHours()>10?tmp.getHours():['0',tmp.getHours()].join('');
    //     const minutes = tmp.getMinutes()>10?tmp.getMinutes():['0',tmp.getMinutes()].join('');
    //     return [hr,':',minutes].join('');
    // });

    const labels = logs_data.map((log) => log.DATE_TIME.slice(11,16));
    const YieldData = logs_data.map((log) => log.DAILY_YIELD)
    const ACPowerData = logs_data.map((log) => log.AC_POWER)
    const DCPowerData = logs_data.map((log) => log.DC_POWER)
    
    return (<>
        <div style={{marginLeft:"auto",marginRight:"auto",alignContent:'center',justifyContent:"center"}}>
            <NativeSelect w={500} mr="auto" ml="auto" radius="lg" label="Inverter ID" description="Select Inverter ID" data={props.Inverters} />;
            <Stack pb={20}>
              <Group  justify="center">
                  <LineGraph data ={YieldData} labels={labels} title ="Daily Yield of the Inverter" name="Total Yield of the Inverter"/>
                  <LineGraph data ={ACPowerData} labels={labels} title ="Daily Yield of the Inverter" name="AC Power of the Inverter"/>
              </Group>
              <Group justify="center" >
                  <LineGraph data ={DCPowerData} labels={labels} title ="Daily Yield of the Inverter" name="DC Power of the Inverter"/>
              </Group>
          </Stack>
        </div>
    </>);
}

export default InverterGraph;