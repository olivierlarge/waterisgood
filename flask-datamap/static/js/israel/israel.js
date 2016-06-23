$(document).ready(function() {
        var dataArray_zoomtemp = [[Date.UTC(1901,1,1),19.8496212733], [Date.UTC(1911,1,1),30.8397727444], [Date.UTC(1921,1,1),27.7414394934], [Date.UTC(1931,1,1),24.3120831832], [Date.UTC(1941,1,1),25.4230300644], [Date.UTC(1951,1,1),26.5753032203], [Date.UTC(1961,1,1),23.1551894116], [Date.UTC(1971,1,1),25.9610227283], [Date.UTC(1981,1,1),25.2759470241], [Date.UTC(1991,1,1),26.088257739], [Date.UTC(2001,1,1),23.9011740247], [Date.UTC(2011,1,1),22.6649243143]];
		var options = {
			chart: {
				renderTo: 'myhighchartsIsrael'
				
			},
			title: {
                text: 'Rainfall- Israel'
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