import { mockData } from '.'
import React from 'react'
import { LineChart } from '../../components/LineChart'

export const Corefan = () => (
  <div>
    <LineChart {...mockData} />
  </div>
)
