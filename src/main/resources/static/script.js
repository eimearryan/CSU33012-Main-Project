google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawPieChart);
function drawPieChart() {
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

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawColumnChart);
function drawColumnChart() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density"],
    ["Copper", 8.94],
    ["Silver", 10.49],
    ["Gold", 19.30],
    ["Platinum", 21.45]
  ]);

  var options = {
    title: "Density of Precious Metals, in g/cm^3",
    width: 600,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none",
    textStyle: {color: 'white'}},
    backgroundColor: "transparent",
    chartArea:{backgroundColor: "transparent"},
    titleTextStyle: {color: 'white'},
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(data, options);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(newChart);
function newChart(result){
  var jsonData = JSON.parse(document.getElementById("jsonData").value);
  var data = new google.visualization.DataTable();
  // assumes "word" is a string and "count" is a number
  data.addColumn('string', 'word');
  data.addColumn('number', 'count');

  for (var i = 0; i < jsonData.length; i++) {
      data.addRow([jsonData[i].user.login, 5]);
  }

  var options = {
    title: "Density of Precious Metals, in g/cm^3",
    width: 600,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none",
    textStyle: {color: 'white'}},
    backgroundColor: "transparent",
    chartArea:{backgroundColor: "transparent"},
    titleTextStyle: {color: 'white'},
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("chartData"));
  chart.draw(data, options);
}
