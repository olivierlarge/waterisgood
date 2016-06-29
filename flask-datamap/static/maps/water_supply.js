    function Water_supply(annee) {

    document.getElementById('container').innerHTML = "";
    document.getElementById("titre").innerHTML = "Access Ratios to Sanitation Facilities";
    document.getElementById("titre").style.color = "#C61331";
    

    var serie_water_1995 = [['AFG', 20.6], ['ALB', 79.4], ['DZA', 81.7], ['ASM', 61.1], ['AND', 100.0], ['AGO', 25.5], ['AIA', 91.5], ['ATG', 79.6], ['ARG', 89.5], ['ARM', 89.4], ['ABW', 98.4], ['AUS', 100.0], ['AUT', 100.0], ['AZE', 62.7], ['BHS', 88.0], ['BHR', 99.1], ['BGD', 40.0], ['BRB', 83.4], ['BLR', 95.0], ['BEL', 99.5], ['BLZ', 79.3], ['BEN', 9.4], ['BTN', 23.6], ['BOL', 33.2], ['BIH', 95.0], ['BWA', 46.1], ['BRA', 70.8], ['VGB', 97.5], ['BGR', 85.5], ['BFA', 9.2], ['BDI', 43.0], ['KHM', 7.7], ['CMR', 41.0], ['CAN', 99.8], ['CPV', 34.6], ['CYM', 95.6], ['CAF', 15.6], ['TCD', 8.8], ['CHL', 88.3], ['CHN', 53.2], ['COL', 72.0], ['COM', 21.3], ['COK', 91.7], ['CRI', 90.0], ['CIV', 16.2], ['HRV', 97.3], ['CUB', 84.1], ['CYP', 100.0], ['CZE', 99.1], ['PRK', 53.3], ['COD', 20.3], ['DNK', 99.6], ['DJI', 65.1], ['DMA', 81.1], ['DOM', 75.2], ['ECU', 63.5], ['EGY', 78.8], ['SLV', 56.9], ['GNQ', 81.1], ['ERI', 9.8], ['EST', 96.9], ['ETH', 3.0], ['FJI', 66.3], ['FIN', 97.3], ['FRA', 98.7], ['GUF', 76.6], ['PYF', 97.9], ['GAB', 38.3], ['GMB', 60.3], ['GEO', 97.8], ['DEU', 99.2], ['GHA', 8.6], ['GRC', 94.0], ['GRL', 100.0], ['GRD', 98.0], ['GUM', 88.9], ['GTM', 50.9], ['GIN', 10.6], ['GNB', 10.6], ['GUY', 77.3], ['HTI', 19.2], ['HND', 55.9], ['HUN', 98.0], ['ISL', 98.8], ['IND', 20.8], ['IDN', 41.0], ['IRN', 73.8], ['IRQ', 71.5], ['IRL', 89.3], ['ISR', 100.0], ['ITA', 99.5], ['JAM', 80.3], ['JPN', 100.0], ['JOR', 97.5], ['KAZ', 96.5], ['KEN', 25.7], ['KIR', 30.5], ['KWT', 100.0], ['KGZ', 91.3], ['LAO', 20.4], ['LSO', 22.7], ['LBR', 13.1], ['LBY', 96.5], ['LTU', 84.7], ['LUX', 97.7], ['MDG', 9.9], ['MWI', 31.9], ['MYS', 88.8], ['MDV', 69.7], ['MLI', 16.0], ['MLT', 100.0], ['MHL', 67.4], ['MRT', 18.2], ['MUS', 91.1], ['MEX', 70.7], ['FSM', 25.0], ['MCO', 100.0], ['MNG', 46.0], ['MSR', 74.8], ['MAR', 58.8], ['MOZ', 11.5], ['MMR', 54.4], ['NAM', 25.7], ['NRU', 65.7], ['NPL', 13.1], ['NLD', 98.2], ['NCL', 100.0], ['NIC', 49.2], ['NER', 5.2], ['NGA', 36.0], ['NIU', 68.5], ['MNP', 71.2], ['NOR', 98.1], ['OMN', 84.8], ['PAK', 27.8], ['PLW', 64.5], ['PSE', 87.0], ['PAN', 63.0], ['PNG', 19.7], ['PRY', 60.6], ['PER', 58.0], ['PHL', 60.5], ['PRT', 94.5], ['PRI', 99.3], ['QAT', 99.9], ['KOR', 100.0], ['MDA', 71.7], ['REU', 98.0], ['ROU', 72.3], ['RUS', 72.6], ['RWA', 40.2], ['KNA', 87.3], ['LCA', 80.6], ['VCT', 68.2], ['WSM', 92.5], ['STP', 18.2], ['SAU', 93.9], ['SEN', 37.9], ['SRB', 96.9], ['SYC', 98.4], ['SLE', 10.7], ['SGP', 99.4], ['SVK', 98.9], ['SVN', 99.1], ['SOM', 21.4], ['ZAF', 53.8], ['ESP', 99.9], ['LKA', 76.0], ['SDN', 26.9], ['SUR', 81.1], ['SWZ', 49.5], ['SWE', 99.3], ['CHE', 99.9], ['SYR', 85.4], ['TJK', 89.5], ['THA', 89.1], ['TLS', 37.1], ['TGO', 11.5], ['TKL', 47.6], ['TON', 93.7], ['TTO', 90.3], ['TUN', 77.8], ['TUR', 85.5], ['TKM', 62.0], ['TCA', 81.4], ['TUV', 75.7], ['UGA', 14.4], ['UKR', 94.5], ['ARE', 97.4], ['GBR', 99.2], ['TZA', 7.8], ['USA', 99.6], ['VIR', 96.4], ['URY', 92.3], ['UZB', 84.6], ['VUT', 35.6], ['VEN', 85.3], ['VNM', 44.6], ['YEM', 31.6], ['ZMB', 40.5], ['ZWE', 39.6]]

    var serie_water_2005 = [['AFG', 26.3], ['ALB', 87.4], ['DZA', 85.3], ['ASM', 61.9], ['AND', 100.0], ['AGO', 39.0], ['AIA', 94.7], ['ATG', 89.5], ['ARG', 93.2], ['ARM', 89.4], ['ABW', 98.0], ['AUS', 100.0], ['AUT', 100.0], ['AZE', 73.7], ['BHS', 90.0], ['BHR', 99.2], ['BGD', 50.7], ['BRB', 90.1], ['BLR', 94.6], ['BEL', 99.5], ['BLZ', 86.0], ['BEN', 14.5], ['BTN', 39.0], ['BOL', 42.2], ['BIH', 94.9], ['BWA', 56.3], ['BRA', 77.7], ['VGB', 97.5], ['BGR', 85.9], ['BFA', 14.4], ['BDI', 45.6], ['KHM', 24.9], ['CMR', 43.4], ['CAN', 99.8], ['CPV', 54.0], ['CYM', 95.5], ['CAF', 18.9], ['TCD', 10.7], ['CHL', 94.8], ['CHN', 64.9], ['COL', 77.1], ['COM', 28.9], ['COG', 13.4], ['COK', 94.2], ['CRI', 92.8], ['CIV', 19.2], ['HRV', 97.2], ['CUB', 89.2], ['CYP', 100.0], ['CZE', 99.1], ['PRK', 70.4], ['COD', 24.8], ['DNK', 99.6], ['DJI', 53.9], ['DMA', 81.1], ['DOM', 79.9], ['ECU', 75.3], ['EGY', 90.0], ['SLV', 66.8], ['GNQ', 78.0], ['ERI', 13.0], ['EST', 97.1], ['ETH', 15.2], ['FJI', 82.3], ['FIN', 97.5], ['FRA', 98.7], ['GUF', 86.5], ['PYF', 98.2], ['GAB', 39.8], ['GMB', 59.2], ['GEO', 92.5], ['DEU', 99.2], ['GHA', 12.0], ['GRC', 97.1], ['GRL', 100.0], ['GRD', 98.0], ['GLP', 95.4], ['GUM', 89.4], ['GTM', 58.1], ['GIN', 15.3], ['GNB', 15.6], ['GUY', 81.2], ['HTI', 23.7], ['HND', 70.5], ['HUN', 98.0], ['ISL', 98.8], ['IND', 30.6], ['IDN', 52.1], ['IRN', 83.8], ['IRQ', 79.3], ['IRL', 89.7], ['ISR', 100.0], ['ITA', 99.5], ['JAM', 81.1], ['JPN', 100.0], ['JOR', 98.2], ['KAZ', 97.1], ['KEN', 28.0], ['KIR', 36.5], ['KWT', 100.0], ['KGZ', 92.3], ['LAO', 43.4], ['LVA', 83.5], ['LBN', 82.0], ['LSO', 26.2], ['LBR', 14.3], ['LBY', 96.5], ['LTU', 88.5], ['LUX', 97.7], ['MDG', 10.8], ['MWI', 36.5], ['MYS', 93.4], ['MDV', 89.1], ['MLI', 20.2], ['MLT', 100.0], ['MHL', 72.7], ['MTQ', 91.7], ['MRT', 29.5], ['MUS', 92.0], ['MEX', 78.6], ['FSM', 43.4], ['MCO', 100.0], ['MNG', 52.7], ['MNE', 90.9], ['MSR', 82.9], ['MAR', 68.9], ['MOZ', 16.5], ['MMR', 69.4], ['NAM', 29.8], ['NRU', 65.7], ['NPL', 29.9], ['NLD', 97.9], ['NCL', 100.0], ['NIC', 59.6], ['NER', 7.9], ['NGA', 32.2], ['NIU', 89.9], ['MNP', 76.2], ['NOR', 98.1], ['OMN', 93.3], ['PAK', 45.9], ['PLW', 98.0], ['PSE', 90.2], ['PAN', 69.6], ['PNG', 19.1], ['PRY', 75.8], ['PER', 67.6], ['PHL', 67.1], ['POL', 90.6], ['PRT', 97.6], ['PRI', 99.3], ['QAT', 98.8], ['KOR', 100.0], ['MDA', 73.9], ['REU', 98.2], ['ROU', 75.6], ['RUS', 72.4], ['RWA', 52.2], ['KNA', 87.3], ['LCA', 85.7], ['VCT', 76.1], ['WSM', 92.0], ['STP', 26.9], ['SAU', 99.7], ['SEN', 42.6], ['SRB', 96.7], ['SYC', 98.4], ['SLE', 11.9], ['SGP', 100.0], ['SVK', 98.9], ['SVN', 99.1], ['SLB', 26.8], ['SOM', 22.4], ['ZAF', 60.4], ['ESP', 99.9], ['LKA', 86.4], ['SDN', 24.0], ['SUR', 80.3], ['SWZ', 54.1], ['SWE', 99.3], ['CHE', 99.9], ['SYR', 91.7], ['TJK', 92.1], ['MKD', 90.0], ['THA', 93.2], ['TLS', 37.8], ['TGO', 11.4], ['TKL', 71.4], ['TON', 92.3], ['TTO', 91.1], ['TUN', 85.6], ['TUR', 90.6], ['TKM', 62.6], ['TCA', 81.4], ['TUV', 81.1], ['UGA', 16.8], ['UKR', 95.1], ['ARE', 97.5], ['GBR', 99.2], ['TZA', 11.0], ['USA', 99.8], ['VIR', 96.4], ['URY', 94.5], ['UZB', 97.3], ['VUT', 49.1], ['VEN', 90.7], ['VNM', 61.4], ['YEM', 47.3], ['ZMB', 41.7], ['ZWE', 38.6]]

    var serie_water_2015 = [['AFG', 31.9], ['ALB', 93.2], ['DZA', 87.6], ['ASM', 62.5], ['AND', 100.0], ['AGO', 51.6], ['AIA', 97.9], ['ARG', 96.4], ['ARM', 89.5], ['ABW', 97.7], ['AUS', 100.0], ['AUT', 100.0], ['AZE', 89.3], ['BHS', 92.0], ['BHR', 99.2], ['BGD', 60.6], ['BRB', 96.2], ['BLR', 94.3], ['BEL', 99.5], ['BLZ', 90.5], ['BEN', 19.7], ['BTN', 50.4], ['BOL', 50.3], ['BIH', 94.8], ['BWA', 63.4], ['BRA', 82.8], ['VGB', 97.5], ['BGR', 86.0], ['BFA', 19.7], ['BDI', 48.0], ['KHM', 42.4], ['CMR', 45.8], ['CAN', 99.8], ['CPV', 72.2], ['CYM', 95.6], ['CAF', 21.8], ['TCD', 12.1], ['CHL', 99.1], ['CHN', 76.5], ['COL', 81.1], ['COM', 35.8], ['COG', 15.0], ['COK', 97.6], ['CRI', 94.5], ['CIV', 22.5], ['HRV', 97.0], ['CUB', 93.2], ['CYP', 100.0], ['CZE', 99.1], ['PRK', 81.9], ['COD', 28.7], ['DNK', 99.6], ['DJI', 47.4], ['DOM', 84.0], ['ECU', 84.7], ['EGY', 94.7], ['SLV', 75.0], ['GNQ', 74.5], ['ERI', 15.7], ['EST', 97.2], ['ETH', 28.0], ['FJI', 91.1], ['FIN', 97.6], ['FRA', 98.7], ['PYF', 98.5], ['GAB', 41.9], ['GMB', 58.9], ['GEO', 86.3], ['DEU', 99.2], ['GHA', 14.9], ['GRC', 99.0], ['GRL', 100.0], ['GRD', 98.0], ['GUM', 89.8], ['GTM', 63.9], ['GIN', 20.1], ['GNB', 20.8], ['GUY', 83.7], ['HTI', 27.6], ['HND', 82.6], ['HUN', 98.0], ['ISL', 98.8], ['IND', 39.6], ['IDN', 60.8], ['IRN', 90.0], ['IRQ', 85.6], ['IRL', 90.5], ['ISR', 100.0], ['ITA', 99.5], ['JAM', 81.8], ['JPN', 100.0], ['JOR', 98.6], ['KAZ', 97.5], ['KEN', 30.1], ['KIR', 39.7], ['KWT', 100.0], ['KGZ', 93.3], ['LAO', 70.9], ['LVA', 87.8], ['LBN', 80.7], ['LSO', 30.3], ['LBR', 16.9], ['LBY', 96.6], ['LTU', 92.4], ['LUX', 97.6], ['MDG', 12.0], ['MWI', 41.0], ['MYS', 96.0], ['MDV', 97.9], ['MLI', 24.7], ['MLT', 100.0], ['MHL', 76.9], ['MRT', 40.0], ['MUS', 93.1], ['MEX', 85.2], ['FSM', 57.1], ['MCO', 100.0], ['MNG', 59.7], ['MNE', 95.9], ['MAR', 76.7], ['MOZ', 20.5], ['MMR', 79.6], ['NAM', 34.4], ['NRU', 65.6], ['NPL', 45.8], ['NLD', 97.7], ['NCL', 100.0], ['NIC', 67.9], ['NER', 10.9], ['NGA', 29.0], ['NIU', 100.0], ['MNP', 79.7], ['NOR', 98.1], ['OMN', 96.7], ['PAK', 63.5], ['PLW', 100.0], ['PSE', 92.3], ['PAN', 75.0], ['PNG', 18.9], ['PRY', 88.6], ['PER', 76.2], ['PHL', 73.9], ['POL', 97.2], ['PRT', 99.7], ['PRI', 99.3], ['QAT', 98.0], ['KOR', 100.0], ['MDA', 76.4], ['REU', 98.2], ['ROU', 79.1], ['RUS', 72.2], ['RWA', 61.6], ['LCA', 90.5], ['WSM', 91.5], ['STP', 34.7], ['SAU', 100.0], ['SEN', 47.6], ['SRB', 96.4], ['SYC', 98.4], ['SLE', 13.3], ['SGP', 100.0], ['SVK', 98.8], ['SVN', 99.1], ['SLB', 29.8], ['ZAF', 66.4], ['SSD', 6.7], ['ESP', 99.9], ['LKA', 95.1], ['SUR', 79.2], ['SWZ', 57.5], ['SWE', 99.3], ['CHE', 99.9], ['SYR', 95.7], ['TJK', 95.0], ['MKD', 90.9], ['THA', 93.0], ['TLS', 40.6], ['TGO', 11.6], ['TKL', 90.5], ['TON', 91.0], ['TTO', 91.5], ['TUN', 91.6], ['TUR', 94.9], ['UGA', 19.1], ['UKR', 95.9], ['ARE', 97.6], ['GBR', 99.2], ['TZA', 15.6], ['USA', 100.0], ['VIR', 96.4], ['URY', 96.4], ['UZB', 100.0], ['VUT', 57.9], ['VEN', 94.4], ['VNM', 78.0], ['ZMB', 43.9], ['ZWE', 36.8]]


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
            .range(["#F9E7EA","#C61331"]); // red color
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
                    '<br>Access Ratios to Sanitation Facilities: <strong>', data.numberOfThings,'%', '</strong>',
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