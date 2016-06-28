    function Water_improved() {

    document.getElementById('container').innerHTML = "";
    document.getElementById("titre").innerHTML = "Ratios d'accès à l'eau améliorée";
    document.getElementById("titre").style.color = "#004000";
    
    var series = [['AFG', 55.3], ['ALB', 95.1], ['DZA', 83.6], ['ASM', 100.0], ['AND', 100.0], ['AGO', 49.0], ['AIA', 94.6], ['ATG', 97.9], ['ARG', 99.1], ['ARM', 100.0], ['ABW', 98.1], ['AUS', 100.0], ['AUT', 100.0], ['AZE', 87.0], ['BHS', 98.4], ['BHR', 100.0], ['BGD', 86.9], ['BRB', 99.7], ['BLR', 99.7], ['BEL', 100.0], ['BLZ', 99.5], ['BEN', 77.9], ['BTN', 100.0], ['BOL', 90.0], ['BIH', 99.9], ['BWA', 96.2], ['BRA', 98.1], ['BGR', 99.4], ['BFA', 82.3], ['BDI', 75.9], ['KHM', 75.5], ['CMR', 75.6], ['CAN', 99.8], ['CPV', 91.7], ['CYM', 97.4], ['CAF', 68.5], ['TCD', 50.8], ['CHL', 99.0], ['CHN', 95.5], ['COL', 91.4], ['COM', 90.1], ['COG', 76.5], ['COK', 99.9], ['CRI', 97.8], ['CIV', 81.9], ['HRV', 99.6], ['CUB', 94.9], ['CYP', 100.0], ['CZE', 100.0], ['PRK', 99.7], ['COD', 52.4], ['DNK', 100.0], ['DJI', 90.0], ['DOM', 84.7], ['ECU', 86.9], ['EGY', 99.4], ['SLV', 93.8], ['GNQ', 47.9], ['ERI', 57.8], ['EST', 99.6], ['ETH', 57.3], ['FJI', 95.7], ['FIN', 100.0], ['FRA', 100.0], ['PYF', 100.0], ['GAB', 93.2], ['GMB', 90.2], ['GEO', 100.0], ['DEU', 100.0], ['GHA', 88.7], ['GRC', 100.0], ['GRL', 100.0], ['GRD', 96.6], ['GLP', 99.3], ['GUM', 99.5], ['GTM', 92.8], ['GIN', 76.8], ['GNB', 79.3], ['GUY', 98.3], ['HTI', 57.7], ['HND', 91.2], ['HUN', 100.0], ['ISL', 100.0], ['IND', 94.1], ['IDN', 87.4], ['IRN', 96.2], ['IRQ', 86.6], ['IRL', 97.9], ['ISR', 100.0], ['ITA', 100.0], ['JAM', 93.8], ['JPN', 100.0], ['JOR', 96.9], ['KAZ', 92.9], ['KEN', 63.2], ['KIR', 66.9], ['KWT', 99.0], ['KGZ', 90.0], ['LAO', 75.7], ['LVA', 99.3], ['LBN', 99.0], ['LSO', 81.8], ['LBR', 75.6], ['LTU', 96.6], ['LUX', 100.0], ['MDG', 51.5], ['MWI', 90.2], ['MYS', 98.2], ['MDV', 98.6], ['MLI', 77.0], ['MLT', 100.0], ['MHL', 94.6], ['MTQ', 100.0], ['MRT', 57.9], ['MUS', 99.9], ['MEX', 96.1], ['FSM', 89.0], ['MCO', 100.0], ['MNG', 64.4], ['MNE', 99.7], ['MSR', 99.0], ['MAR', 85.4], ['MOZ', 51.1], ['MMR', 80.6], ['NAM', 91.0], ['NRU', 96.5], ['NPL', 91.6], ['NLD', 100.0], ['NCL', 98.5], ['NZL', 100.0], ['NIC', 87.0], ['NER', 58.2], ['NGA', 68.5], ['NIU', 98.5], ['MNP', 97.5], ['NOR', 100.0], ['OMN', 93.4], ['PAK', 91.4], ['PSE', 58.4], ['PAN', 94.7], ['PNG', 40.0], ['PRY', 98.0], ['PER', 86.7], ['PHL', 91.8], ['POL', 98.3], ['PRT', 100.0], ['QAT', 100.0], ['MDA', 88.4], ['REU', 99.1], ['ROU', 100.0], ['RUS', 96.9], ['RWA', 76.1], ['KNA', 98.3], ['LCA', 96.3], ['VCT', 95.1], ['WSM', 99.0], ['STP', 97.1], ['SAU', 97.0], ['SEN', 78.5], ['SRB', 99.2], ['SYC', 95.7], ['SLE', 62.6], ['SGP', 100.0], ['SVK', 100.0], ['SVN', 99.5], ['SLB', 80.8], ['ZAF', 93.2], ['SSD', 58.7], ['ESP', 100.0], ['LKA', 95.6], ['SUR', 94.8], ['SWZ', 74.1], ['SWE', 100.0], ['CHE', 100.0], ['SYR', 90.1], ['TJK', 73.8], ['MKD', 99.4], ['THA', 97.8], ['TLS', 71.9], ['TGO', 63.1], ['TKL', 100.0], ['TON', 99.6], ['TTO', 95.1], ['TUN', 97.7], ['TUR', 100.0], ['TUV', 97.7], ['UGA', 79.0], ['UKR', 96.2], ['ARE', 99.6], ['GBR', 100.0], ['TZA', 55.6], ['USA', 99.2], ['VIR', 100.0], ['URY', 99.7], ['VUT', 94.5], ['VEN', 93.1], ['VNM', 97.6], ['ZMB', 65.4], ['ZWE', 76.9]]

    // Datamaps expect data in format:
    // { "USA": { "fillColor": "#42a844", numberOfWhatever: 75},
    //   "FRA": { "fillColor": "#8dc386", numberOfWhatever: 43 } }
    var dataset = {};
    // We need to colorize every country based on "numberOfWhatever"
    // colors should be uniq for every value.
    // For this purpose we create palette(using min/max series-value)
    var onlyValues = series.map(function(obj){ return obj[1]; });
    var minValue = Math.min.apply(null, onlyValues),
            maxValue = Math.max.apply(null, onlyValues);

    // create color palette function
    // color can be whatever you wish
    var paletteScale = d3.scale.linear()
            .domain([minValue,maxValue])
            .range(["#e4f9e3","#044900"]); // blue color
    // fill dataset in appropriate format
    series.forEach(function(item){ //
        // item example value ["USA", 70]
        var iso = item[0],
                value = item[1];
        dataset[iso] = { numberOfThings: value, fillColor: paletteScale(value) };
    });
    // render map
    var map = new Datamap({
        element: document.getElementById('container'),
        projection: 'mercator', // big world map
        // countries don't listed in dataset will be painted with this color
        fills: { defaultFill: '#F5F5F5' , classi: 'orange' },
        data: dataset,
        geographyConfig: {
            borderColor: '#DEDEDE',
            highlightBorderWidth: 2,
            // don't change color on mouse hover
            highlightFillColor: function(geo) {
                return geo['fillColor'] || '#F5F5F5';
            },
            // only change border
            highlightBorderColor: '#B7B7B7',
            // show desired information in tooltip
            popupTemplate: function(geo, data) {
                // don't show tooltip if country don't present in dataset
                if (!data) { return ; }
                // tooltip content
                return ['<div class="hoverinfo">',
                    '<strong>', geo.properties.name, '</strong>',
                    '<br>Ratio d\'accès à l\'eau ameliorée: <strong>', data.numberOfThings,'%', '</strong>',
                    '</div>'].join('');
            }
        }
    });
    map.bubbles([
      {
        name: 'Bangladesh',
        radius: 20,
        centered: 'BGD',
        fillKey: 'classi',
        minitex: 'Poverty and floods',
        divname: 'bangladesh'
      },
      {
        name: 'SaoPaulo',
        radius: 20,
        centered: 'BRA',
        fillKey: 'classi',
        minitex: 'A megacity without water',
        divname: 'saopaulo'
      },
      {
        name: 'Singapore',
        radius: 20,
        centered: 'MYS',
        fillKey: 'classi',
        minitex: 'High population density island',
        divname: 'singapore'
      },
      {
        name: 'Israel',
        radius: 20,
        centered: 'ISR',
        fillKey: 'classi',
        minitex: 'Water as a source of tenses',
        divname: 'israel'
      }
    ], {
      popupTemplate: function(geo, data) {
                // don't show tooltip if country don't present in dataset
                if (!data) { return ; }
                // tooltip content
                return ['<div class="hoverinfo">',
                    '<strong>', geo.name, '</strong>',
                    '<br>', data.minitex, '</strong>',
                    '</div>'].join('');
            }
    });
     d3.selectAll(".datamaps-bubble").on('click', function(bubble) {
        //console.log("hi ", bubble.divname);
        document.location.href = "/" + bubble.divname;
    });

}