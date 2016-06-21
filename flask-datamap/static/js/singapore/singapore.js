$(document).ready(function() {
        var dataArray_zoomtemp = [[Date.UTC(1901,1,1),158.841666667], [Date.UTC(1911,1,1),177.01], [Date.UTC(1921,1,1),199.258333333], [Date.UTC(1931,1,1),201.170833333], [Date.UTC(1941,1,1),179.9875], [Date.UTC(1951,1,1),208.315833333], [Date.UTC(1961,1,1),188.4], [Date.UTC(1971,1,1),175.5475], [Date.UTC(1981,1,1),174.6575], [Date.UTC(1991,1,1),189.261666667], [Date.UTC(2001,1,1),205.495], [Date.UTC(2011,1,1),202.73125]];
		var options = {
			chart: {
				renderTo: 'myhighchartsSingapore'
				
			},
			title: {
                text: 'Rainfall- Singapore'
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
		//	options.series[0].data = data;
			var chart = new Highcharts.Chart(options);
		//});

	});