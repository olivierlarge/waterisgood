    function Water_improved(annee) {

    document.getElementById('container').innerHTML = "";
    document.getElementById("titre").innerHTML = "Ratios d'accès à l'eau améliorée";
    document.getElementById("titre").style.color = "#004000";
    

    var serie_water_1995 = [['AFG', 21.5], ['ALB', 95.7], ['DZA', 91.2], ['ASM', 95.7], ['AND', 100.0], ['AGO', 46.1], ['AIA', 93.4], ['ATG', 97.6], ['ARG', 95.1], ['ARM', 90.5], ['ABW', 92.6], ['AUS', 100.0], ['AUT', 100.0], ['AZE', 70.2], ['BHS', 96.3], ['BHR', 96.0], ['BGD', 72.1], ['BRB', 96.9], ['BLR', 99.5], ['BEL', 100.0], ['BLZ', 79.0], ['BEN', 61.7], ['BTN', 76.9], ['BOL', 73.9], ['BIH', 97.1], ['BWA', 93.7], ['BRA', 91.1], ['VGB', 94.8], ['BGR', 99.8], ['BFA', 50.7], ['BDI', 70.3], ['KHM', 30.3], ['CMR', 56.5], ['CAN', 99.8], ['CPV', 79.9], ['CYM', 92.3], ['CAF', 60.2], ['TCD', 42.3], ['CHL', 92.7], ['CHN', 73.9], ['COL', 89.2], ['COM', 90.1], ['COK', 99.9], ['CRI', 94.0], ['CIV', 76.9], ['HRV', 98.2], ['CUB', 89.6], ['CYP', 100.0], ['CZE', 99.8], ['PRK', 100.0], ['COD', 45.2], ['DNK', 100.0], ['DJI', 78.9], ['DMA', 94.5], ['DOM', 87.0], ['ECU', 76.8], ['EGY', 94.6], ['SLV', 76.2], ['GNQ', 47.3], ['ERI', 48.4], ['EST', 98.9], ['ETH', 19.5], ['FJI', 88.3], ['FIN', 100.0], ['FRA', 100.0], ['GUF', 83.1], ['PYF', 100.0], ['GAB', 80.0], ['GMB', 79.3], ['GEO', 85.8], ['DEU', 100.0], ['GHA', 63.2], ['GRC', 98.2], ['GRL', 100.0], ['GRD', 96.6], ['GLP', 97.8], ['GUM', 99.6], ['GTM', 80.3], ['GIN', 57.6], ['GNB', 43.8], ['GUY', 82.3], ['HTI', 62.2], ['HND', 77.0], ['HUN', 97.1], ['ISL', 100.0], ['IND', 75.6], ['IDN', 73.7], ['IRN', 93.0], ['IRQ', 78.2], ['IRL', 96.4], ['ISR', 100.0], ['ITA', 100.0], ['JAM', 93.3], ['JPN', 100.0], ['JOR', 96.7], ['KAZ', 94.0], ['KEN', 47.4], ['KIR', 53.3], ['KWT', 99.0], ['KGZ', 75.0], ['LAO', 39.9], ['LVA', 98.3], ['LBN', 83.3], ['LSO', 78.0], ['LBR', 61.3], ['LBY', 71.2], ['LTU', 89.1], ['LUX', 100.0], ['MDG', 34.0], ['MWI', 52.7], ['MYS', 92.2], ['MDV', 93.5], ['MLI', 36.8], ['MLT', 99.9], ['MHL', 92.5], ['MTQ', 81.5], ['MRT', 35.7], ['MUS', 99.2], ['MEX', 85.6], ['FSM', 90.7], ['MCO', 100.0], ['MNG', 53.7], ['MSR', 97.9], ['MAR', 75.8], ['MOZ', 37.0], ['MMR', 60.9], ['NAM', 74.1], ['NPL', 71.6], ['NLD', 100.0], ['NZL', 100.0], ['NIC', 75.8], ['NER', 38.7], ['NGA', 46.0], ['NIU', 99.2], ['MNP', 94.8], ['NOR', 100.0], ['OMN', 80.3], ['PAK', 87.4], ['PLW', 91.5], ['PSE', 96.0], ['PAN', 86.9], ['PNG', 33.6], ['PRY', 63.6], ['PER', 77.1], ['PHL', 85.5], ['POL', 95.0], ['PRT', 97.1], ['PRI', 93.6], ['QAT', 98.7], ['KOR', 90.6], ['MDA', 84.2], ['REU', 99.0], ['ROU', 79.8], ['RUS', 94.2], ['RWA', 62.4], ['KNA', 98.3], ['LCA', 93.4], ['VCT', 90.8], ['WSM', 91.1], ['STP', 74.0], ['SAU', 93.3], ['SEN', 63.7], ['SRB', 99.4], ['SYC', 95.7], ['SLE', 42.0], ['SGP', 100.0], ['SVK', 99.8], ['SVN', 99.6], ['SOM', 21.0], ['ZAF', 84.0], ['ESP', 99.9], ['LKA', 74.0], ['SDN', 65.5], ['SUR', 88.3], ['SWZ', 42.7], ['SWE', 100.0], ['CHE', 100.0], ['SYR', 86.1], ['TJK', 57.7], ['MKD', 99.3], ['THA', 89.6], ['TLS', 52.8], ['TGO', 50.5], ['TKL', 90.3], ['TON', 98.6], ['TTO', 92.5], ['TUN', 86.5], ['TUR', 89.2], ['TKM', 59.0], ['TCA', 87.0], ['TUV', 91.9], ['UGA', 48.4], ['UKR', 97.5], ['ARE', 99.7], ['GBR', 100.0], ['TZA', 54.2], ['USA', 98.6], ['VIR', 100.0], ['URY', 95.4], ['UZB', 89.6], ['VUT', 69.2], ['VEN', 90.0], ['VNM', 70.1], ['YEM', 63.3], ['ZMB', 51.0], ['ZWE', 79.5]]

    var serie_water_2005 = [['AFG', 39.1], ['ALB', 96.0], ['DZA', 87.7], ['ASM', 99.9], ['AND', 100.0], ['AGO', 46.0], ['AIA', 94.0], ['ATG', 97.8], ['ARG', 97.3], ['ARM', 95.5], ['ABW', 95.8], ['AUS', 100.0], ['AUT', 100.0], ['AZE', 78.5], ['BHS', 97.3], ['BHR', 100.0], ['BGD', 79.8], ['BRB', 98.4], ['BLR', 99.5], ['BEL', 100.0], ['BLZ', 91.1], ['BEN', 70.3], ['BTN', 90.4], ['BOL', 82.9], ['BIH', 98.3], ['BWA', 95.3], ['BRA', 95.2], ['VGB', 94.9], ['BGR', 99.6], ['BFA', 69.1], ['BDI', 73.3], ['KHM', 52.9], ['CMR', 66.9], ['CAN', 99.8], ['CPV', 85.6], ['CYM', 95.0], ['CAF', 64.8], ['TCD', 47.2], ['CHL', 96.7], ['CHN', 86.3], ['COL', 90.5], ['COM', 90.1], ['COG', 71.7], ['COK', 99.9], ['CRI', 96.2], ['CIV', 79.2], ['HRV', 98.7], ['CUB', 92.1], ['CYP', 100.0], ['CZE', 99.9], ['PRK', 99.8], ['COD', 49.0], ['DNK', 100.0], ['DJI', 85.7], ['DMA', 94.4], ['DOM', 86.5], ['ECU', 82.3], ['EGY', 97.1], ['SLV', 86.0], ['GNQ', 47.3], ['ERI', 53.7], ['EST', 99.2], ['ETH', 38.3], ['FJI', 92.9], ['FIN', 100.0], ['FRA', 100.0], ['GUF', 88.3], ['PYF', 100.0], ['GAB', 87.9], ['GMB', 85.9], ['GEO', 93.0], ['DEU', 100.0], ['GHA', 77.0], ['GRC', 99.4], ['GRL', 100.0], ['GRD', 96.6], ['GLP', 98.6], ['GUM', 99.6], ['GTM', 87.3], ['GIN', 67.8], ['GNB', 60.7], ['GUY', 90.2], ['HTI', 60.6], ['HND', 84.5], ['HUN', 99.2], ['ISL', 100.0], ['IND', 85.5], ['IDN', 81.3], ['IRN', 95.1], ['IRQ', 82.8], ['IRL', 96.9], ['ISR', 100.0], ['ITA', 100.0], ['JAM', 93.6], ['JPN', 100.0], ['JOR', 96.8], ['KAZ', 93.5], ['KEN', 56.0], ['KIR', 62.2], ['KWT', 99.0], ['KGZ', 82.3], ['LAO', 56.8], ['LVA', 98.6], ['LBN', 91.7], ['LSO', 79.9], ['LBR', 66.8], ['LTU', 93.0], ['LUX', 100.0], ['MDG', 42.1], ['MWI', 71.8], ['MYS', 95.7], ['MDV', 96.9], ['MLI', 56.7], ['MLT', 100.0], ['MHL', 93.7], ['MTQ', 95.9], ['MRT', 48.3], ['MUS', 99.5], ['MEX', 91.4], ['FSM', 89.7], ['MCO', 100.0], ['MNG', 60.2], ['MNE', 97.9], ['MSR', 99.0], ['MAR', 80.8], ['MOZ', 44.8], ['MMR', 72.3], ['NAM', 83.0], ['NRU', 94.4], ['NPL', 82.2], ['NLD', 100.0], ['NCL', 95.5], ['NZL', 100.0], ['NIC', 81.9], ['NER', 48.7], ['NGA', 57.8], ['NIU', 98.8], ['MNP', 96.4], ['NOR', 100.0], ['OMN', 87.8], ['PAK', 89.5], ['PLW', 94.3], ['PSE', 80.3], ['PAN', 91.4], ['PNG', 37.1], ['PRY', 82.1], ['PER', 82.3], ['PHL', 88.6], ['POL', 96.8], ['PRT', 98.8], ['QAT', 99.7], ['KOR', 96.1], ['MDA', 86.2], ['REU', 99.1], ['ROU', 91.1], ['RUS', 95.6], ['RWA', 69.8], ['KNA', 98.3], ['LCA', 94.9], ['VCT', 95.1], ['WSM', 95.5], ['STP', 87.0], ['SAU', 96.7], ['SEN', 71.1], ['SRB', 99.3], ['SYC', 95.7], ['SLE', 52.3], ['SGP', 100.0], ['SVK', 99.9], ['SVN', 99.6], ['SLB', 80.0], ['SOM', 28.4], ['ZAF', 88.9], ['ESP', 100.0], ['LKA', 85.4], ['SDN', 58.5], ['SUR', 91.7], ['SWZ', 61.1], ['SWE', 100.0], ['CHE', 100.0], ['SYR', 88.7], ['TJK', 64.6], ['MKD', 99.3], ['THA', 94.3], ['TLS', 60.9], ['TGO', 56.7], ['TKL', 96.2], ['TON', 98.7], ['TTO', 94.1], ['TUN', 92.9], ['TUR', 95.7], ['TKM', 60.2], ['TCA', 87.0], ['TUV', 96.0], ['UGA', 64.5], ['UKR', 97.2], ['ARE', 99.7], ['GBR', 100.0], ['TZA', 54.7], ['USA', 99.0], ['VIR', 100.0], ['URY', 97.9], ['UZB', 87.8], ['VUT', 82.2], ['VEN', 91.9], ['VNM', 84.5], ['YEM', 56.5], ['ZMB', 57.3], ['ZWE', 78.8]]

    var serie_water_2015 = [['AFG', 55.3], ['ALB', 95.1], ['DZA', 83.6], ['ASM', 100.0], ['AND', 100.0], ['AGO', 49.0], ['AIA', 94.6], ['ATG', 97.9], ['ARG', 99.1], ['ARM', 100.0], ['ABW', 98.1], ['AUS', 100.0], ['AUT', 100.0], ['AZE', 87.0], ['BHS', 98.4], ['BHR', 100.0], ['BGD', 86.9], ['BRB', 99.7], ['BLR', 99.7], ['BEL', 100.0], ['BLZ', 99.5], ['BEN', 77.9], ['BTN', 100.0], ['BOL', 90.0], ['BIH', 99.9], ['BWA', 96.2], ['BRA', 98.1], ['BGR', 99.4], ['BFA', 82.3], ['BDI', 75.9], ['KHM', 75.5], ['CMR', 75.6], ['CAN', 99.8], ['CPV', 91.7], ['CYM', 97.4], ['CAF', 68.5], ['TCD', 50.8], ['CHL', 99.0], ['CHN', 95.5], ['COL', 91.4], ['COM', 90.1], ['COG', 76.5], ['COK', 99.9], ['CRI', 97.8], ['CIV', 81.9], ['HRV', 99.6], ['CUB', 94.9], ['CYP', 100.0], ['CZE', 100.0], ['PRK', 99.7], ['COD', 52.4], ['DNK', 100.0], ['DJI', 90.0], ['DOM', 84.7], ['ECU', 86.9], ['EGY', 99.4], ['SLV', 93.8], ['GNQ', 47.9], ['ERI', 57.8], ['EST', 99.6], ['ETH', 57.3], ['FJI', 95.7], ['FIN', 100.0], ['FRA', 100.0], ['PYF', 100.0], ['GAB', 93.2], ['GMB', 90.2], ['GEO', 100.0], ['DEU', 100.0], ['GHA', 88.7], ['GRC', 100.0], ['GRL', 100.0], ['GRD', 96.6], ['GLP', 99.3], ['GUM', 99.5], ['GTM', 92.8], ['GIN', 76.8], ['GNB', 79.3], ['GUY', 98.3], ['HTI', 57.7], ['HND', 91.2], ['HUN', 100.0], ['ISL', 100.0], ['IND', 94.1], ['IDN', 87.4], ['IRN', 96.2], ['IRQ', 86.6], ['IRL', 97.9], ['ISR', 100.0], ['ITA', 100.0], ['JAM', 93.8], ['JPN', 100.0], ['JOR', 96.9], ['KAZ', 92.9], ['KEN', 63.2], ['KIR', 66.9], ['KWT', 99.0], ['KGZ', 90.0], ['LAO', 75.7], ['LVA', 99.3], ['LBN', 99.0], ['LSO', 81.8], ['LBR', 75.6], ['LTU', 96.6], ['LUX', 100.0], ['MDG', 51.5], ['MWI', 90.2], ['MYS', 98.2], ['MDV', 98.6], ['MLI', 77.0], ['MLT', 100.0], ['MHL', 94.6], ['MTQ', 100.0], ['MRT', 57.9], ['MUS', 99.9], ['MEX', 96.1], ['FSM', 89.0], ['MCO', 100.0], ['MNG', 64.4], ['MNE', 99.7], ['MSR', 99.0], ['MAR', 85.4], ['MOZ', 51.1], ['MMR', 80.6], ['NAM', 91.0], ['NRU', 96.5], ['NPL', 91.6], ['NLD', 100.0], ['NCL', 98.5], ['NZL', 100.0], ['NIC', 87.0], ['NER', 58.2], ['NGA', 68.5], ['NIU', 98.5], ['MNP', 97.5], ['NOR', 100.0], ['OMN', 93.4], ['PAK', 91.4], ['PSE', 58.4], ['PAN', 94.7], ['PNG', 40.0], ['PRY', 98.0], ['PER', 86.7], ['PHL', 91.8], ['POL', 98.3], ['PRT', 100.0], ['QAT', 100.0], ['MDA', 88.4], ['REU', 99.1], ['ROU', 100.0], ['RUS', 96.9], ['RWA', 76.1], ['KNA', 98.3], ['LCA', 96.3], ['VCT', 95.1], ['WSM', 99.0], ['STP', 97.1], ['SAU', 97.0], ['SEN', 78.5], ['SRB', 99.2], ['SYC', 95.7], ['SLE', 62.6], ['SGP', 100.0], ['SVK', 100.0], ['SVN', 99.5], ['SLB', 80.8], ['ZAF', 93.2], ['SSD', 58.7], ['ESP', 100.0], ['LKA', 95.6], ['SUR', 94.8], ['SWZ', 74.1], ['SWE', 100.0], ['CHE', 100.0], ['SYR', 90.1], ['TJK', 73.8], ['MKD', 99.4], ['THA', 97.8], ['TLS', 71.9], ['TGO', 63.1], ['TKL', 100.0], ['TON', 99.6], ['TTO', 95.1], ['TUN', 97.7], ['TUR', 100.0], ['TUV', 97.7], ['UGA', 79.0], ['UKR', 96.2], ['ARE', 99.6], ['GBR', 100.0], ['TZA', 55.6], ['USA', 99.2], ['VIR', 100.0], ['URY', 99.7], ['VUT', 94.5], ['VEN', 93.1], ['VNM', 97.6], ['ZMB', 65.4], ['ZWE', 76.9]]

    if ((annee == 1995)){
        series=serie_water_1995;
    }

    else if((annee == 2005)){
        series=serie_water_2005;
    }

    else if((annee == 2015)){
        series=serie_water_2015;
    }


    // Datamaps expect data in format:
    // { "USA": { "fillColor": "#42a844", numberOfWhatever: 75},
    //   "FRA": { "fillColor": "#8dc386", numberOfWhatever: 43 } }
    var dataset = {};
    // We need to colorize every country based on "numberOfWhatever"
    // colors should be uniq for every value.
    // For this purpose we create palette(using min/max series-value)
    var onlyValues = serie_water_2015.map(function(obj){ return obj[1]; });
    var minValue = Math.min.apply(null, onlyValues),
            maxValue = Math.max.apply(null, onlyValues);

    // create color palette function
    // color can be whatever you wish
    var paletteScale = d3.scale.linear()
            .domain([minValue,maxValue])
            .range(["#e4f9e3","#044900"]); // green color
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