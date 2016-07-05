$(function() {

    Highcharts.setOptions({
     colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', ]

    });

        // Make monochrome colors and set them as default for all pies
    Highcharts.getOptions().plotOptions.pie.colors = (function () {
        var colors = [],
            base = Highcharts.getOptions().colors[3],
            i;

        for (i = 0; i < 10; i += 1) {
            // Start out with a darkened base color (negative brighten), and end
            // up with a much brighter color
            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
        }
        return colors;
    }());

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container1',
            type: 'pie'
        },

        title: {
            text: 'Salted versus fresh water'
        },

        plotOptions: {
            pie: {
                borderColor: '#000000',
                innerSize: '80%'
            }
        },
        series: [{
            data: [
                ['Seas and Oceans', 97],
                ['Fresh water', 3]
                ]}]
    },
    // using 
                                     
    function(chart) { // on complete
        
        var xpos = '50%';
        var ypos = '53%';
        var circleradius = 102;
    
    // Render the circle
    chart.renderer.circle(xpos, ypos, circleradius).attr({
        fill: 'white',
    }).add();

    // Render the image :
   chart.renderer.image('../img/introduction/earth.jpg', '45.5%' , '35.5%', '9%', '38%')
            .add();
    });
});


$(function() {


    Highcharts.setOptions({
     colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', ]

    });

        // Make monochrome colors and set them as default for all pies
    Highcharts.getOptions().plotOptions.pie.colors = (function () {
        var colors = [],
            base = Highcharts.getOptions().colors[3],
            i;

        for (i = 0; i < 10; i += 1) {
            // Start out with a darkened base color (negative brighten), and end
            // up with a much brighter color
            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
        }
        return colors;
    }());


    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container2',
            type: 'pie'
        },

        title: {
            text: 'Origin of fresh water'
        },

        plotOptions: {
            pie: {
                borderColor: '#000000',
                innerSize: '80%'
            }
        },
        series: [{
            data: [
                ['Ice and glaciers', 75],
                ['Ground water and soil moisture', 21],
                ['Rivers and lakes', 4]
                ]}]
    },
    // using 
                                     
    function(chart) { // on complete
        
        var xpos = '50%';
        var ypos = '53%';
        var circleradius = 102;
    
    // Render the circle
    chart.renderer.circle(xpos, ypos, circleradius).attr({
        fill: 'white',
    }).add();

        // Render the image :
   chart.renderer.image('../img/introduction/glass_water.jpg', '45.1%' , '36.8%', '10%', '42%')
            .add();

    });


});
