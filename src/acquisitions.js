import Chart from 'chart.js/auto'

(async function() {
  const data = [
    { year: 'current', count: 250000 },
    { year: '1-30', count: 150000 },
    { year: '31-60', count: 120000 },
    { year: '61-90', count: 50000 },
    { year: '91+', count: 20000 },
  ];
  const data1 = [
    { year: 'current', count: 200000 },
    { year: '1-30', count: 90000 },
    { year: '31-60', count: 110000 },
    { year: '61-90', count: 100000 },
    { year: '91+', count: 10000 },
  ];

  new Chart(
    document.getElementById('acquisitions').getContext("2d"),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Accounts Receivable',
            backgroundColor: "blue",
            data: data.map(row => row.count)
          },
          {
            label: 'Accounts Payable',
            backgroundColor: "red",
            data: data1.map(row => row.count)
          }
        ]
      }
    }
  );
})();
