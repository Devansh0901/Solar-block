import React from "react";
import { useState } from "react";

import { Button, Grid ,GridCol,Stack} from "@mantine/core";

const Home = props => {
    return (
        <>
        <div>
            <h1 style={{textAlign:"center",marginTop:"50px"}}>Portfolio</h1>
            <Stack style={{height:700,width:1200,marginLeft:'auto',marginRight:'auto'}} mt={70}>
                <Grid >
                    <Grid.Col span="auto"><Button variant="default" fullWidth bg="teal">Plant 1</Button></Grid.Col>
                    <Grid.Col span="auto"><Button variant="default" fullWidth bg="teal">Today	0.00	kWh</Button></Grid.Col>
                    <Grid.Col span="auto"><Button variant="default" fullWidth bg="teal">This Month	3.45	MWh</Button></Grid.Col>
                </Grid>

                <Grid>
                    <Grid.Col span="auto"><Button variant="default" fullWidth bg="teal">Installed Capacity	41.89	kW</Button></Grid.Col>
                    <Grid.Col span="auto"><Button variant="default" fullWidth bg="teal" >This Week	632.43	kWh</Button></Grid.Col>
                    <Grid.Col span="auto"><Button variant="default" fullWidth bg="teal">This Year	53.67	MWh</Button></Grid.Col>
                </Grid>  
    
            </Stack>
        </div>
        </>
    );
}

export default Home;