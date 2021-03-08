import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {  Meta } from '@storybook/react/types-6-0';

import { BarChart } from '../components/BarChart';

export default {
  title: 'components/BarChart',
  component: BarChart,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const barChart = () => <BarChart series={[438484,179148,269564,38650]} />;
