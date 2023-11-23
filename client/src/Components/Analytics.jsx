import React from "react";
import { useState,useEffect } from "react";

import { SegmentedControl } from '@mantine/core';

import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

import InverterGraph from "./InverterGraph";
import WeatherGraph from "./WeatherGraph";

Chart.register(CategoryScale);

const Analytics = props => {
    const [Inverters, setInverters] = useState(null);
    const [value,setValue] = useState('Generation');

    const fetchInverters = async ()=> {
        try {
            setInverters(["AA","BB","CC"]);
        } catch {

        }
    }

    useEffect(() => {
        fetchInverters();
    }, []);

    return (
        <div style={{margin:"60px",textAlign:'center'}}>
        <h1 >Critical Hospital</h1>
        <SegmentedControl
            value={value}
            onChange={setValue}
            mb={25}
            data={[
                { label: 'Generation', value: 'Generation' },
                { label: 'Weather', value: 'Weather' },
        ]}
        />
        {value==='Generation' && 
            <InverterGraph Inverters={Inverters}/>
        }
        {value==='Weather' && <WeatherGraph/>}
        </div>
    );
}

export default Analytics;