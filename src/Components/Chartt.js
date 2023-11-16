import React, { useState } from 'react'
import Chart from "react-apexcharts";
import'./Style/Chartt.css'

function Chartt() {
    const [state, setstate] = useState({
        options: {
          chart: {
            id: "basic"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "initial",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "current",
            data: [100, 10, 35, 40, 79, 50, 80, 81]
          }
        ]
      }
    )
  return (
    <div className='container'>
        <h1>React Charts</h1>
        <div className='row'>
            <div className='col-4'>

            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
            />
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />

<Chart
              options={state.options}
              series={state.series}
              type="area"
              width="500"
            />

            {/* line,area,histogram */}



            </div>
        </div>
    </div>
  )
}

export default Chartt
