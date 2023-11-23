import React from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";

const LineGraph = props => {

  const [chartData, setChartData] = useState({
    labels: props.labels,
    datasets: [
      {
        label: "Yield",
        data: props.data,
        backgroundColor: [ ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

    return (
      <div className="chart-container" style={{height: "530px" , width:"640px",paddingBottom:"70px",marginLeft:'auto',marginRight:"auto"}} >
        <h2 style={{ textAlign: "center" }}>{props.name}</h2>
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text : props.title
              },
              legend: {
                display: false
              }
            },
            maintainAspectRatio : true,
            aspectRatio : 1.6,
            }
            }
        />
      </div>
    );
  }
  export default LineGraph;