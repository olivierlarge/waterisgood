$(document).ready(function() {
        var dataArray_zoomtemp = [[Date.UTC(1931,1,1),145.859361108], [Date.UTC(1941,1,1),142.398027825], [Date.UTC(1951,1,1),145.4476666], [Date.UTC(1961,1,1),144.831981342], [Date.UTC(1971,1,1),144.578471], [Date.UTC(1981,1,1),149.227016142], [Date.UTC(1991,1,1),146.3762673], [Date.UTC(2001,1,1),148.880406075], [Date.UTC(2011,1,1),152.097135817], [Date.UTC(2011,1,1),152.097135817], [Date.UTC(2014,1,1),129.3416667]];
        var options = {
            chart: {
                renderTo: 'myhighcharts',
                backgroundColor: '#d7eced'
            },
            title: {
                text: '80 years of rainfall- Sao Paulo'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Rainfall - mm'
                }
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            }, 
            series: [{
                type: 'area',
                name: 'Rainfall - mm',
                data: dataArray_zoomtemp
            }]
        };
    
        //$.getJSON('tas5_1900_2012_jsondata.json', function(data) {
        //  options.series[0].data = data;
            var chart = new Highcharts.Chart(options);
        //});

    });