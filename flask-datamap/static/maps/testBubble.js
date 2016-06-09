    function Population() {

    document.getElementById('container').innerHTML = "";

    var series = [['AFG', 32006788.0], ['ALB', 3196981.0], ['DZA', 40633464.0], ['ASM', 74208.0], ['AND', 91672.0], ['AGO', 22819926.0], ['AIA', 16607.0], ['ATG', 91822.0], ['ARG', 42154914.0], ['ARM', 2989467.0], ['ABW', 103889.0], ['AUS', 23923101.0], ['AUT', 8557761.0], ['AZE', 9612580.0], ['BHS', 387549.0], ['BHR', 1359726.0], ['BGD', 160411249.0], ['BRB', 287482.0], ['BLR', 9259666.0], ['BEL', 11183411.0], ['BLZ', 347598.0], ['BEN', 10879828.0], ['BMU', 65576.0], ['BTN', 776461.0], ['BOL', 11024522.0], ['BIH', 3819684.0], ['BWA', 2056370.0], ['BRA', 203657210.0], ['VGB', 24363.0], ['BRN', 428539.0], ['BGR', 7112641.0], ['BFA', 17914625.0], ['BDI', 10812619.0], ['KHM', 15677059.0], ['CMR', 23393129.0], ['CAN', 35871283.0], ['CPV', 508315.0], ['CYM', 58592.0], ['CAF', 4803082.0], ['TCD', 13605625.0], ['CIS', 163534.0], ['CHL', 17924062.0], ['CHN', 1401586609.0], ['HKG', 7313557.0], ['MAC', 584420.0], ['COL', 49529208.0], ['COM', 770058.0], ['COG', 4671142.0], ['COK', 20840.0], ['CRI', 5001657.0], ['CIV', 21295284.0], ['HRV', 4255374.0], ['CUB', 11248783.0], ['CYP', 1164695.0], ['CZE', 10777060.0], ['PRK', 25155326.0], ['COD', 71246355.0], ['DNK', 5661723.0], ['DJI', 899658.0], ['DMA', 67784.0], ['DOM', 10652135.0], ['ECU', 16225691.0], ['EGY', 84705681.0], ['SLV', 6426002.0], ['GNQ', 799372.0], ['ERI', 6737634.0], ['EST', 1280227.0], ['ETH', 98942102.0], ['FRO', 49831.0], ['FLK', 3060.0], ['FJI', 892727.0], ['FIN', 5460592.0], ['FRA', 64982894.0], ['GUF', 261728.99999999997], ['PYF', 282764.0], ['GAB', 1751199.0], ['GMB', 1970081.0], ['GEO', 4304540.0], ['DEU', 82562004.0], ['GHA', 26984328.0], ['GRC', 11125833.0], ['GRL', 57272.0], ['GRD', 106694.0], ['GLP', 470168.0], ['GUM', 169885.0], ['GTM', 16255094.0], ['GIN', 12347766.0], ['GNB', 1787793.0], ['GUY', 807611.0], ['HTI', 10603731.0], ['HND', 8423917.0], ['HUN', 9911396.0], ['ISL', 336728.0], ['IND', 1282390303.0], ['IDN', 255708785.0], ['IRN', 79476308.0], ['IRQ', 35766702.0], ['IRL', 4726856.0], ['IMN', 84773.0], ['ISR', 7919528.0], ['ITA', 61142221.0], ['JAM', 2813276.0], ['JPN', 126818019.0], ['JOR', 7689760.0], ['KAZ', 16770447.0], ['KEN', 46748617.0], ['KIR', 105555.0], ['KWT', 3583399.0], ['KGZ', 5707529.0], ['LAO', 7019652.0], ['LVA', 2031361.0], ['LBN', 5053624.0], ['LSO', 2120116.0], ['LBR', 4503439.0], ['LBY', 6317080.0], ['LIE', 37449.0], ['LTU', 2998969.0], ['LUX', 543261.0], ['MDG', 24235390.0], ['MWI', 17308685.0], ['MYS', 30651176.0], ['MDV', 357981.0], ['MLI', 16258587.0], ['MLT', 431239.0], ['MHL', 58567.0], ['MTQ', 405688.0], ['MRT', 4080224.0], ['MUS', 1253581.0], ['MYT', 233993.0], ['MEX', 125235587.0], ['FSM', 104460.0], ['MCO', 35471.0], ['MNG', 2923050.0], ['MNE', 621556.0], ['MSR', 6201.0], ['MAR', 33955157.0], ['MOZ', 27121827.0], ['MMR', 54164262.0], ['NAM', 2392370.0], ['NRU', 10563.0], ['NPL', 28440629.0], ['NLD', 16844195.0], ['ANT', 208023.0], ['NCL', 263147.0], ['NZL', 4596396.0], ['NIC', 6256510.0], ['NER', 19268380.0], ['NGA', 183523432.0], ['NIU', 1276.0], ['MNP', 66489.0], ['NOR', 5142842.0], ['OMN', 4157783.0000000005], ['PAK', 188144040.0], ['PLW', 21295.0], ['PSE', 4548815.0], ['PAN', 3987866.0], ['PNG', 7631819.0], ['PRY', 7032942.0], ['PER', 31161167.0], ['PHL', 101802706.0], ['POL', 38221584.0], ['PRT', 10610014.0], ['PRI', 3680058.0], ['QAT', 2350549.0], ['KOR', 49750234.0], ['MDA', 3436828.0], ['REU', 895099.0], ['ROU', 21579201.0], ['RUS', 142098141.0], ['RWA', 12428005.0], ['KNA', 55595.0], ['LCA', 184937.0], ['VCT', 109374.0], ['WSM', 193228.0], ['SMR', 32526.000000000004], ['STP', 202781.0], ['SAU', 29897741.0], ['SEN', 14967446.0], ['SRB', 9424030.0], ['SYC', 93754.0], ['SLE', 6318575.0], ['SGP', 5618866.0], ['SVK', 5457889.0], ['SVN', 2079085.0], ['SLB', 584482.0], ['SOM', 11122711.0], ['ZAF', 53491333.0], ['SSD', 12152321.0], ['ESP', 47199069.0], ['LKA', 21611842.0], ['SDN', 39613217.0], ['SUR', 548456.0], ['SWZ', 1285519.0], ['SWE', 9693883.0], ['CHE', 8238610.000000001], ['SYR', 22264996.0], ['TJK', 8610384.0], ['MKD', 2109251.0], ['THA', 67400746.0], ['TLS', 1172668.0], ['TGO', 7170797.0], ['TKL', 1152.0], ['TON', 106379.0], ['TTO', 1346697.0], ['TUN', 11235248.0], ['TUR', 76690509.0], ['TKM', 5373487.0], ['TCA', 40797.0], ['TUV', 9942.0], ['UGA', 40141262.0], ['UKR', 44646131.0], ['ARE', 9577128.0], ['GBR', 63843856.0], ['TZA', 52290796.0], ['USA', 325127634.0], ['VIR', 106906.0], ['URY', 3429997.0], ['UZB', 29709932.0], ['VUT', 263888.0], ['VEN', 31292702.0], ['VNM', 93386630.0], ['ESH', 604298.0], ['YEM', 25535086.0], ['ZMB', 15519604.0], ['ZWE', 15046102.0]]
    
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
            .domain([Math.log(minValue),Math.log(maxValue)])
            .range(["#EFEFFF","#02386F"]); // blue color
    // fill dataset in appropriate format
    series.forEach(function(item){ //
        // item example value ["USA", 70]
        var iso = item[0],
                value = item[1];
        dataset[iso] = { numberOfThings: value, fillColor: paletteScale(Math.log(value)) };
    });
    // render map
    var map = new Datamap({
        element: document.getElementById('container'),
        projection: 'mercator', // big world map
        // countries don't listed in dataset will be painted with this color
        fills: { defaultFill: '#F5F5F5', classi: 'green' },
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
                    '<br>Population: <strong>', data.numberOfThings, '</strong>',
                    '</div>'].join('');
            }
        }
    });
    map.bubbles([
      {
        name: 'Bengladesh',
        radius: 20,
        centered: 'BGD',
        fillKey: 'classi',
        minitex: 'pauvreté et abondance d\'eau'
      },
      {
        name: 'Soudan',
        radius: 20,
        centered: 'ISR',
        fillKey: 'classi',
        minitex: 'en Afrique'
      },
      {
        name: 'France',
        radius: 20,
        centered: 'FRA',
        fillKey: 'classi',
        minitex: 'maison'
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
     map.svg.selectAll('.bubbles').on('click', function() {
        $("html, body").animate({ scrollTop: 1000 }, 1000);
    });
    //return map;


}