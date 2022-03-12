export const econChartData = {
    type: "line",
    data: {
      labels: ["1970", "1980", "1990", "2000", "2010", "2017"],
      datasets: [
        {
          label: "Luxembourg",
          data: [4449,17113, 34645, 48736, 104965, 107361],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
          borderWidth: 3
        },
        {
          label: "Brunei",
          data: [1382, 25422, 13607, 18012, 35270, 28571],
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 3
        },
        {
          label: "Ireland",
          data: [1486, 6373, 14033, 26246, 48698, 70413],
          backgroundColor: "rgba(204, 196, 0, 0.5)",
          borderColor: "#CCC400",
          borderWidth: 3
        },
        {
          label: "Qatar",
          data: [2755, 35010, 15454, 29976, 67403, 59124],
          backgroundColor: "rgba(0, 33, 204, 0.5)",
          borderColor: "#0021CC",
          borderWidth: 3
        },
        {
          label: "Singapore",
          data: [925, 4928, 11861, 23852, 47236, 61176],
          backgroundColor: "rgba(227, 70, 35, 0.5)",
          borderColor: "#E34623",
          borderWidth: 3
        },
        {
          label: "UAE",
          data: [4551, 42764, 27729, 33291, 33893, 40644],
          backgroundColor: "rgba(204, 0, 159, 0.5)",
          borderColor: "#CC009F",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              callback: (value) => {
                return new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(value)
              },
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default econChartData;