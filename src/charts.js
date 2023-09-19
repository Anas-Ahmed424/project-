import Chart from 'chart.js/auto'


(async function () {
    var data = ['0', "30"];
    var data1 = [56, 44];
    var barColors = [
        "#D2C6C6",
        "#1E18EB"
    ];

    new Chart(
        document.getElementById('charts').getContext("2d"),
        {
            type: 'doughnut',
            data: {
                labels: data,
                datasets: [
                    {
                        backgroundColor: barColors,
                        data: data1
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: "Current Ratio"
                }
            }
        }
    );

    var data = ['0', "31"];
    var data1 = [50, 50];
    var barColors = [
        "#D2C6C6",
        "#EBEB18"
    ];

    new Chart(
        document.getElementById('charts1').getContext("2d"),
        {
            type: 'doughnut',
            data: {
                labels: data,
                datasets: [
                    {
                        backgroundColor: barColors,
                        data: data1
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: "Day Sales Inventory"
                }
            }
        }
    );

    var data = ['0', "31"];
    var data1 = [77, 23];
    var barColors = [
        "#D2C6C6",
        "#EB18EB"
    ];

    new Chart(
        document.getElementById('charts2').getContext("2d"),
        {
            type: 'doughnut',
            data: {
                labels: data,
                datasets: [
                    {
                        backgroundColor: barColors,
                        data: data1
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: "Day Sales Outstanding"
                }
            }
        }
    );

    var data = ['0', "31"];
    var data1 = [10, 90];
    var barColors = [
        "#D2C6C6",
        "#1DF70E"
    ];

    new Chart(
        document.getElementById('charts3').getContext("2d"),
        {
            type: 'doughnut',
            data: {
                labels: data,
                datasets: [
                    {
                        backgroundColor: barColors,
                        data: data1
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: "Days Payable Outstanding"
                }
            }
        }
    );}) ();
