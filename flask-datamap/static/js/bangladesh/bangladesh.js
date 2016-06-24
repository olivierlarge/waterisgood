$(document).ready(function() {
        var dataArray_zoomtemp = [[Date.UTC(1901,1,1),68.0872818333], [Date.UTC(1911,1,1),58.832693875], [Date.UTC(1921,1,1),63.5086635], [Date.UTC(1931,1,1),61.4030746083], [Date.UTC(1941,1,1),65.7505643083], [Date.UTC(1951,1,1),62.8041961833], [Date.UTC(1961,1,1),62.7201187], [Date.UTC(1971,1,1),60.4749143667], [Date.UTC(1981,1,1),59.3407795417], [Date.UTC(1991,1,1),56.435765025], [Date.UTC(2001,1,1),57.3520231583], [Date.UTC(2011,1,1),56.3761012167]];
        var options = {
			chart: {
				renderTo: 'myhighchartsBangladesh'
				
			},
			title: {
                text: 'Rainfall- Bangladesh'
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