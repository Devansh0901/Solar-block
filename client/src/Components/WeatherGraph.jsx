import React from "react";
import { useState,useEffect } from "react";

import { Data2 } from "../assets/Data2";

import LineGraph from "./LineGraph";
import { Group, Stack } from "@mantine/core";

const WeatherGraph = props => {
    const logs_data = Data2.logs;
    
    const fetchWeatherData = async() =>{
        try{

        }catch{

        }
    }

    useEffect(() => {
        fetchWeatherData();
    }, []);

    // const labels = logs_data.map((log) => {
    //     const tmp = new Date(log.DATE_TIME);
    //     const hr = tmp.getHours()>10?tmp.getHours():['0',tmp.getHours()].join('');
    //     const minutes = tmp.getMinutes()>10?tmp.getMinutes():['0',tmp.getMinutes()].join('');
    //     return [hr,':',minutes].join('');
    // });

    const labels = logs_data.map((log) => log.DATE_TIME.slice(11,16));
    const AmbTempData = logs_data.map((log) => log.AMBIENT_TEMPERATURE);
    const IrraditonData = logs_data.map((log) => log.MODULE_TEMPERATURE);
    const ModTempData = logs_data.map((log) => log.IRRADIATION);
    
    return (<>
        <Stack pb={20}>
            <Group  justify="center">
                <LineGraph data ={AmbTempData} labels={labels} title ="Daily Yield of the Inverter" name="Ambient Temperature in the Plant"/>
                <LineGraph data ={IrraditonData} labels={labels} title ="Daily Yield of the Inverter" name="Irradiation in the Plant"/>
            </Group>
            <Group justify="center" >
                <LineGraph data ={ModTempData} labels={labels} title ="Daily Yield of the Inverter" name="Module Temperature"/>
            </Group>
        </Stack>
    </>);
}

export default WeatherGraph;