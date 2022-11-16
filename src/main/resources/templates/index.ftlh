<!DOCTYPE html>
<html>
  <head>
    <title>Calculator App</title>
    <link rel="stylesheet" href="stylesheet.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {/*from  w  w  w . j  a v a  2 s  . co  m*/
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);
        var options = {
          title: 'My Daily Activities',
          pieHole: 0.4,
          pieSliceText: "none",
          backgroundColor: "transparent",
          legend: {textStyle: {color: 'white'}},
          titleTextStyle: {color: 'white'},
          animation: {
            duration: 1000,
            easing: 'in',
            startup: true
          }
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
        var percent = 0;
        var handler = setInterval(function(){
          // values increment
          percent += 1;
          // apply new values
          data.setValue(0, 1, percent);
          data.setValue(1, 1, 100 - percent);
          // update the pie
          chart.draw(data, options);
          // check if we have reached the desired value
          if (percent > 74) clearInterval(handler);
          }, 30);
        }
    </script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250],
          ['2016', 660, 1120, 300],
          ['2017', 1030, 540, 350]
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          },
          bars: 'horizontal', // Required for Material Bar Charts.
          backgroundColor: "transparent",
          chartArea:{backgroundColor: "transparent"},
          legend: {textStyle: {color: 'white'}},
          titleTextStyle: {color: 'white'},
          animation: {
            duration: 1000,
            easing: 'in',
            startup: true
          }
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
    </script>
  </head>
  <body>
    <div class="header">Co-operate</div>
    <div style="padding-top: 8vw">
      <div class="bodyElements">
        <div style="width: 100%; display: table; background-color: hsl(0deg 0% 89%); color: black;">
          <div style="display: table-row">
            <div style="width: 540px; display: table-cell;">
              <h4>Welcome to Cooperate!</h4>
            </div>
            <div style="display: table-cell;">
              <p style="font-size: 15px; text-align: end; padding-right: 20px;">A team tracking software by Group 7</p>
            </div>
          </div>
        </div>
        <div>
          <div id="piechart" style="width: 400px; height: 400px; text-align: -webkit-left"></div>
          <div id="barchart_material" style="width: 400px; height: 400px; text-align: -webkit-right"></div>
        </div>
        <!-- <div style="height: 500px; width: auto; text-align: -webkit-right;">
          <canvas id="myChart" style="display: block; box-sizing: border-box; height: 300px; width: auto;" width="auto" height="300px"></canvas>
        </div> -->
        <!-- <script src="https://cdn.jsdelivr.net/npm/chart.js" style="height:300px; weight:auto;"></script>
        <script>
          const ctx = document.getElementById('myChart');

          new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: ['Track', 'Your', 'Teammate\'s', 'Progress', 'With', 'Ease'],
              datasets: [{
                data: [5, 4, 9, 8, 4, 4],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        </script> -->
      </div>
  </body>
</html>
