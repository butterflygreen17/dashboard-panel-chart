$(function () {
    /* Chart Object, all the methods needed for Dashboard panel chart page */
    var chartsObject = {
        /* Default Dates */
        startDatePicker: '10/13/2014',
        endDatePicker: '10/20/2014',

        /* Default Values for Angry Birds, Advertising for Android and Ios for some different dates */
        values: {
            android: {
                clicks: [
                    [Date.UTC(2014, 9, 13), 340],
                    [Date.UTC(2014, 9, 14), 350],
                    [Date.UTC(2014, 9, 15), 200],
                    [Date.UTC(2014, 9, 16), 500],
                    [Date.UTC(2014, 9, 17), 450],
                    [Date.UTC(2014, 9, 18), 600],
                    [Date.UTC(2014, 9, 19), 370],
                    [Date.UTC(2014, 9, 20), 750],

                    [Date.UTC(2014, 10, 13), 543],
                    [Date.UTC(2014, 10, 14), 678],
                    [Date.UTC(2014, 10, 15), 123],
                    [Date.UTC(2014, 10, 16), 987],
                    [Date.UTC(2014, 10, 17), 567],
                    [Date.UTC(2014, 10, 18), 345],
                    [Date.UTC(2014, 10, 19), 333],
                    [Date.UTC(2014, 10, 20), 555],

                    [Date.UTC(2014, 11, 13), 777],
                    [Date.UTC(2014, 11, 14), 888],
                    [Date.UTC(2014, 11, 15), 999],
                    [Date.UTC(2014, 11, 16), 345],
                    [Date.UTC(2014, 11, 17), 123],
                    [Date.UTC(2014, 11, 18), 432],
                    [Date.UTC(2014, 11, 19), 567],
                    [Date.UTC(2014, 11, 20), 432]
                ],
                impressions: 
                [
                    [Date.UTC(2014, 9, 13), 700],
                    [Date.UTC(2014, 9, 14), 550],
                    [Date.UTC(2014, 9, 15), 340],
                    [Date.UTC(2014, 9, 16), 670],
                    [Date.UTC(2014, 9, 17), 510],
                    [Date.UTC(2014, 9, 18), 340],
                    [Date.UTC(2014, 9, 19), 880],
                    [Date.UTC(2014, 9, 20), 450],

                    [Date.UTC(2014, 10, 13), 345],
                    [Date.UTC(2014, 10, 14), 555],
                    [Date.UTC(2014, 10, 15), 666],
                    [Date.UTC(2014, 10, 16), 777],
                    [Date.UTC(2014, 10, 17), 876],
                    [Date.UTC(2014, 10, 18), 232],
                    [Date.UTC(2014, 10, 19), 123],
                    [Date.UTC(2014, 10, 20), 345],

                    [Date.UTC(2014, 11, 13), 123],
                    [Date.UTC(2014, 11, 14), 234],
                    [Date.UTC(2014, 11, 15), 345],
                    [Date.UTC(2014, 11, 16), 456],
                    [Date.UTC(2014, 11, 17), 678],
                    [Date.UTC(2014, 11, 18), 789],
                    [Date.UTC(2014, 11, 19), 987],
                    [Date.UTC(2014, 11, 20), 876]
                ],
                },
            ios:{
                 clicks: [
                    [Date.UTC(2014, 9, 13), 188],
                    [Date.UTC(2014, 9, 14), 288],
                    [Date.UTC(2014, 9, 15), 299],
                    [Date.UTC(2014, 9, 16), 344],
                    [Date.UTC(2014, 9, 17), 355],
                    [Date.UTC(2014, 9, 18), 567],
                    [Date.UTC(2014, 9, 19), 123],
                    [Date.UTC(2014, 9, 20), 432],

                    [Date.UTC(2014, 10, 13), 456],
                    [Date.UTC(2014, 10, 14), 907],
                    [Date.UTC(2014, 10, 15), 500],
                    [Date.UTC(2014, 10, 16), 432],
                    [Date.UTC(2014, 10, 17), 123],
                    [Date.UTC(2014, 10, 18), 432],
                    [Date.UTC(2014, 10, 19), 567],
                    [Date.UTC(2014, 10, 20), 890],

                    [Date.UTC(2014, 11, 13), 123],
                    [Date.UTC(2014, 11, 14), 345],
                    [Date.UTC(2014, 11, 15), 876],
                    [Date.UTC(2014, 11, 16), 987],
                    [Date.UTC(2014, 11, 17), 345],
                    [Date.UTC(2014, 11, 18), 432],
                    [Date.UTC(2014, 11, 19), 567],
                    [Date.UTC(2014, 11, 20), 987]

                ],
                impressions: 
                [
                    [Date.UTC(2014, 9, 13), 322],
                    [Date.UTC(2014, 9, 14), 233],
                    [Date.UTC(2014, 9, 15), 789],
                    [Date.UTC(2014, 9, 16), 234],
                    [Date.UTC(2014, 9, 17), 444],
                    [Date.UTC(2014, 9, 18), 222],
                    [Date.UTC(2014, 9, 19), 222],
                    [Date.UTC(2014, 9, 20), 111],

                    [Date.UTC(2014, 10, 13), 555],
                    [Date.UTC(2014, 10, 14), 555],
                    [Date.UTC(2014, 10, 15), 333],
                    [Date.UTC(2014, 10, 16), 666],
                    [Date.UTC(2014, 10, 17), 666],
                    [Date.UTC(2014, 10, 18), 789],
                    [Date.UTC(2014, 10, 19), 432],
                    [Date.UTC(2014, 10, 20), 222],

                    [Date.UTC(2014, 11, 13), 356],
                    [Date.UTC(2014, 11, 14), 111],
                    [Date.UTC(2014, 11, 15), 346],
                    [Date.UTC(2014, 11, 16), 122],
                    [Date.UTC(2014, 11, 17), 345],
                    [Date.UTC(2014, 11, 18), 678],
                    [Date.UTC(2014, 11, 19), 900],
                    [Date.UTC(2014, 11, 20), 600]

                ]
                },
        },

    /* Default Chart Options */    
    chartOptions: {
            title: {
                text: 'Summary Chart',
                align: 'left'
            },

            chart: {
                backgroundColor: '#F3F3F3',
                type: 'area',
            },

            xAxis: {
                type: 'datetime',
                    dateTimeLabelFormats: {
                        day: '%b %e, %y',
                        month: '%b %e, %y',
                        year: '%b %e, %y'               
                    },
            },

            yAxis: {
                min: 0,
                max: 1000,
                tickInterval: 300,
                title: {
                    text: null
                },
            },

             tooltip: {
                    crosshairs: true,
                    backgroundColor: '#424043',
                    borderRadius: 5,
                    borderColor: '#424043',
                    dateTimeLabelFormats:{
                        day:"%e %b",
                        month:"%e %b",
                        year:"%e %b"
                    },
                    useHTML: true,
                    formatter: function() {
                         return '<div class="customTooltip"><span>'+ this.point.y + ' ' + this.point.series.name +'</span></br><span>'+ 
                         Highcharts.dateFormat('%e %b', new Date(this.x)) + '</span></div>';
                    }
                },


            legend: {
                align: 'right',
                verticalAlign: 'top',
                useHTML:true,
                labelFormatter: function () {
                    return '<div><div class="rectangle" style="background-color:' + this.color + '"></div>' + this.name + '</div>';
                }
            },

             plotOptions: {
                series: {
                    marker: {
                        enabled: true
                    },
                    fillColor: 'rgba(228,234,234, 0.45)',
                }
            },

            series: [
            {
                name: 'Impressions',
                id: 'impressions',
                data: [
                    [Date.UTC(2014, 9, 13), 700],
                    [Date.UTC(2014, 9, 14), 550],
                    [Date.UTC(2014, 9, 15), 340],
                    [Date.UTC(2014, 9, 16), 670],
                    [Date.UTC(2014, 9, 17), 510],
                    [Date.UTC(2014, 9, 18), 340],
                    [Date.UTC(2014, 9, 19), 880],
                    [Date.UTC(2014, 9, 20), 450]
                ],
                zIndex: 1,
                color: 'blue',
                marker: {
                    fillColor: 'white',
                    lineWidth: 2,
                    lineColor: 'blue',
                    radius: 10,
                    symbol: 'circle'
                }
            },
            {
                name: 'Clicks',
                id: 'clicks',
                data: [ 
                    [Date.UTC(2014, 9, 13), 340],
                    [Date.UTC(2014, 9, 14), 350],
                    [Date.UTC(2014, 9, 15), 200],
                    [Date.UTC(2014, 9, 16), 500],
                    [Date.UTC(2014, 9, 17), 450],
                    [Date.UTC(2014, 9, 18), 600],
                    [Date.UTC(2014, 9, 19), 370],
                    [Date.UTC(2014, 9, 20), 750]
                    ],
                zIndex: 1,
                color: 'red',
                marker: {
                    fillColor: 'white',
                    lineWidth: 2,
                    lineColor: 'red',
                    radius: 10,
                    symbol: 'circle'
                },
            }]
        },

        /* initialise chartsObject methods*/
        init: function() {
           this.createChart(this.startDatePicker, this.endDatePicker);
           this.initialiseDates(this.startDatePicker, this.endDatePicker);
           this.initDateRangePicker(this.startDatePicker, this.endDatePicker);
           this.initEvents();
        },

        /*create new chart with initial dates*/
        createChart: function(startDatePicker, endDatePicker) {
            var series = this.findChartSeriesByDateAndType(startDatePicker, endDatePicker);
            var options = {
                title: {
                    text: this.chartOptions.title.text,
                    align: this.chartOptions.title.align,
                },

                chart: {
                    backgroundColor: this.chartOptions.chart.backgroundColor,
                    type: this.chartOptions.chart.type,
                },

                xAxis: {
                    type: this.chartOptions.xAxis.type,
                    dateTimeLabelFormats: {
                            day: this.chartOptions.xAxis.dateTimeLabelFormats.day,
                            month: this.chartOptions.xAxis.dateTimeLabelFormats.month,
                            year: this.chartOptions.xAxis.dateTimeLabelFormats.year
                    },
                },

                yAxis: {
                    min: this.chartOptions.yAxis.min,
                    max: this.chartOptions.yAxis.max,
                    tickInterval: this.chartOptions.yAxis.tickInterval,
                    zIndex: 2,
                    title: {
                        text: this.chartOptions.yAxis.text
                    },
                },

                tooltip: {
                    crosshairs: this.chartOptions.tooltip.crosshairs,
                    backgroundColor: this.chartOptions.tooltip.backgroundColor,
                    borderRadius: this.chartOptions.tooltip.borderRadius,
                    borderColor: this.chartOptions.tooltip.borderColor,
                    dateTimeLabelFormats:{
                        day: this.chartOptions.tooltip.dateTimeLabelFormats.day,
                        month: this.chartOptions.tooltip.dateTimeLabelFormats.month,
                        year: this.chartOptions.tooltip.dateTimeLabelFormats.year
                    },
                    useHTML: this.chartOptions.tooltip.useHTML,
                    formatter: this.chartOptions.tooltip.formatter
                },

                legend: {
                    align: this.chartOptions.legend.align,
                    verticalAlign: this.chartOptions.legend.verticalAlign,
                    useHTML: this.chartOptions.legend.useHTML,
                    labelFormatter: this.chartOptions.legend.labelFormatter
                },

                plotOptions: {
                    series: {
                        marker: {
                            enabled: this.chartOptions.plotOptions.series.marker.enabled
                        },
                        fillColor: this.chartOptions.plotOptions.series.fillColor,
                    }
                },

                series: [
                {
                    name: this.chartOptions.series[0].name,
                    id: this.chartOptions.series[0].id,
                    data: series.impressions,
                    color: this.chartOptions.series[0].color,
                    marker: {
                        fillColor: this.chartOptions.series[0].marker.fillColor,
                        lineWidth: this.chartOptions.series[0].marker.lineWidth,
                        lineColor: this.chartOptions.series[0].marker.lineColor,
                        radius: this.chartOptions.series[0].marker.radius,
                        symbol: this.chartOptions.series[0].marker.symbol
                    }
                },
                {
                    name: this.chartOptions.series[1].name,
                    id: this.chartOptions.series[1].id,
                    data: series.clicks,
                    color: this.chartOptions.series[1].color,
                    marker: {
                        fillColor: this.chartOptions.series[1].marker.fillColor,
                        lineWidth: this.chartOptions.series[1].marker.lineWidth,
                        lineColor: this.chartOptions.series[1].marker.lineColor,
                        radius: this.chartOptions.series[1].marker.radius,
                        symbol: this.chartOptions.series[1].marker.symbol,
                    },
                }]
            }

            this.showTotalClicksAndImpressions(series.clicks, series.impressions);

            new Highcharts.Chart('chart', options);
        },

        /* draw chart based on new values*/
        drawChart: function(chart, startDate, endDate) {
            var series = this.findChartSeriesByDateAndType(startDate, endDate);
            var serieClicks = chart.get('clicks');
            var serieImpressions = chart.get('impressions');
            serieImpressions.setData(series.impressions);
            serieClicks.setData(series.clicks);

            this.showTotalClicksAndImpressions(series.clicks, series.impressions);
        },

        /* find chart's series by date and type (android, ios) */
        findChartSeriesByDateAndType: function(startDate, endDate) {
            if ($('.android').hasClass('active')) {
                var clicks = [],
                    impressions = [];

                dateStart = new Date(startDate);
                dateEnd = new Date(endDate);

                for (var i=0; i < this.values.android.clicks.length; i++) {
                    dateAndroidClicks = new Date(this.values.android.clicks[i][0]);
                    if (dateStart <= dateAndroidClicks && dateAndroidClicks <= dateEnd) {
                        clicks.push(this.values.android.clicks[i]);
                    }
                }

                for (var i=0; i < this.values.android.impressions.length; i++) {
                    dateAndroidImpressions = new Date(this.values.android.impressions[i][0]);
                    if (dateStart <= dateAndroidImpressions && dateAndroidImpressions <= dateEnd) {
                            impressions.push(this.values.android.impressions[i]);
                    }
                }


            } else {
                var clicks = [],
                    impressions = [];
                dateStart = new Date(startDate);
                dateEnd = new Date(endDate);
                for (var i=0; i < this.values.ios.clicks.length; i++) {
                    dateIosClicks = new Date(this.values.ios.clicks[i][0]);
                    if (dateStart <= dateIosClicks && dateIosClicks <= dateEnd) {
                        clicks.push(this.values.ios.clicks[i]);
                    }
                }

                for (var i=0; i < this.values.ios.impressions.length; i++) {
                    dateIosImpressions = new Date(this.values.ios.impressions[i][0]);
                    if (dateStart <= dateIosImpressions && dateIosImpressions <= dateEnd) {
                            impressions.push(this.values.ios.impressions[i]);
                    }
                }

            }

            return {
                clicks: clicks, 
                impressions: impressions
            };
        },

        /* initialise dates */
        initialiseDates: function(startDatePicker, endDatePicker) {
            var initialDate = startDatePicker + ' - ' + endDatePicker;
            $('#datepicker input').val(initialDate);
        },

        /* initialise date range picker */
        initDateRangePicker: function(startDatePicker, endDatePicker) {
            $('#datepicker').daterangepicker(
              { 
                locale: {
                    format: 'MM/DD/YYYY',
                },
                startDate: startDatePicker,
                endDate: endDatePicker,
                autoUpdateInput: true,
                autoApply: true,
                opens: 'left'
              },
              function(start, end, label) {
                $('#datepicker input').val(start.format('MM/DD/YYYY') + ' - ' + end.format('MM/DD/YYYY'));
                var chart =  $('#chart').highcharts();
                chartsObject.drawChart(chart, start, end);
              }
            );
        },

        /* click on buttons function */
        initEvents: function() {
            $('.btn-types .btn').on('click', function() {
                currentBtn = $(this);
                chartsObject.addActiveBtn(currentBtn);
                var chart =  $('#chart').highcharts();
                var rangeDate = $('input[name="daterange"]').val();
                var split = rangeDate.split('-');
                chartsObject.drawChart(chart, split[0].trim(), split[1].trim());
            });
        },

        /* add active class to the clicked button */
        addActiveBtn: function(currentBtn) {
            $('.btn').each(function() {
                $(this).removeClass('active');
            });
            currentBtn.addClass('active');
        },

        /* calculate total clicks, impressions and percentage */
        calculateTotalClicksAndImpressions: function(clicks, impressions) {
            var data = [],
                dataClicks = 0,
                dataImpressions = 0;
        
            for (var i=0;i < clicks.length;i++) {
                dataClicks += clicks[i][1];
                data['clicks'] = dataClicks;
            }

            for (var i=0;i < impressions.length;i++) {
                dataImpressions += impressions[i][1];
                data['impressions'] = dataImpressions;
            }

            dataPercentage = dataClicks / dataImpressions * 100;
            data['percentage'] = dataPercentage.toFixed(2);

            return data;
        },

        /* show total clicks, impressions and percentage when creating or drawing chart */
        showTotalClicksAndImpressions: function(clicks, impressions) {
            var totalClicksAndImpressions = this.calculateTotalClicksAndImpressions(clicks, impressions);
            if (totalClicksAndImpressions['clicks'] != null || totalClicksAndImpressions['impressions'] != null) {
                $('.impressions-number').html(totalClicksAndImpressions['impressions']);
                $('.clicks-number').html(totalClicksAndImpressions['clicks']);
                $('.ctr-number').html(totalClicksAndImpressions['percentage'] + '%');
            } else {
                $('.impressions-number').html(' ');
                $('.clicks-number').html(' ');
                $('.ctr-number').html(' ');
            }
        }
    }

chartsObject.init();

});