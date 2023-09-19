import Chart from 'chart.js/auto'

(async function () {
    const Values = [30,50,70,90,110,130,150,170,190,210]
    const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
    const aValues = [55, 70, 75, 87, 92, 100, 116, 130, 135, 147, 170];
    const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
    const bValues = [7, 9, 9, 10, 10, 11, 12, 10, 16, 16, 17];
    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

    new Chart(document.getElementById('minMax').getContext("2d"), {
        type: "line",
        data:
        {
            labels: Values,
            datasets: [
                {
                    label: 'Volume',
                    data: xValues,
                    backgroundColor: "rgba(0,0,255,1.0)",
                    // data: yValues,
                    borderColor: "red",
                    fill: false
                },
                {
                    label: 'Net Working Capital',
                    data: aValues,
                    backgroundColor: "rgb(29, 247, 14)",
                    // data: bValues,
                    borderColor: "green",
                    fill: false
                }
            ]
        },
        options: {
            legend: {display: false}
          },
    }
    );
})();