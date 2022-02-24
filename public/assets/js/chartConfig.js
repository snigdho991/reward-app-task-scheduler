  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([


      ['', ''],
      ['Circulating supply ', 49500000000],
      ['BackAnda C.P.P', 27000000000],
      ['Marketing Wallet ', 5400000000],
      ['Team & Advisor ', 4500000000],
      ['Support small business owner ', 3600000000]

    ]);

    var options = {
      title: 'Token Distribution',
      is3D: true,
      backgroundColor: { fill:'transparent' },
      width: '100%',
   height: '100%',
   pieSliceText: 'percentage',
   colors: ['#0A00DB', '#C7BF1A', '#0974FF', '#32BB47', '#D10000'],

   chartArea: {
       left: "3%",
       top: "0%",
       bottom: "0%",
       height: "100%",
       width: "100%"
   }


    };
    $(window).resize(function(){
    drawChart();
    });

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
  }
