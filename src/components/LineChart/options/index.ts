export const generateOption = (categories) => ({
  chart: {
    toolbar: { show: false }
  },
  xaxis: {
    type: 'category',
    categories: categories
  }
})
