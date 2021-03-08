import Chart from "react-apexcharts"
import React from 'react'

type Props = {
  series: number[]
}

export const BarChart =({series}:Props)=>{
  const options = {}
  return( 
  <Chart
    options={options}
    series={series}
    type="line"
    width="500"
  />)
}
