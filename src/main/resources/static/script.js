// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawPieChart);
// function drawPieChart() {
//   var data = google.visualization.arrayToDataTable([
//     ['Task', 'Hours per Day'],
//     ['Work',     11],
//     ['Eat',      2],
//     ['Commute',  2],
//     ['Watch TV', 2],
//     ['Sleep',    7]
//   ]);
//   var options = {
//     title: 'My Daily Activities',
//     pieHole: 0.4,
//     pieSliceText: "none",
//     backgroundColor: "transparent",
//     legend: {textStyle: {color: 'white'}},
//     titleTextStyle: {color: 'white'},
//     animation: {
//       duration: 1000,
//       easing: 'in',
//       startup: true
//     }
//   };
//   var chart = new google.visualization.PieChart(document.getElementById('piechart'));
//   chart.draw(data, options);
//   var percent = 0;
//   var handler = setInterval(function(){
//     // values increment
//     percent += 1;
//     // apply new values
//     data.setValue(0, 1, percent);
//     data.setValue(1, 1, 100 - percent);
//     // update the pie
//     chart.draw(data, options);
//     // check if we have reached the desired value
//     if (percent > 74) clearInterval(handler);
//   }, 30);
// }

// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawColumnChart);
// function drawColumnChart() {
//   var data = google.visualization.arrayToDataTable([
//     ["Element", "Density"],
//     ["Copper", 8.94],
//     ["Silver", 10.49],
//     ["Gold", 19.30],
//     ["Platinum", 21.45]
//   ]);

//   var options = {
//     title: "Density of Precious Metals, in g/cm^3",
//     width: 600,
//     height: 400,
//     bar: {groupWidth: "95%"},
//     legend: { position: "none",
//     textStyle: {color: 'white'}},
//     backgroundColor: "transparent",
//     chartArea:{backgroundColor: "transparent"},
//     titleTextStyle: {color: 'white'},
//     vAxis: {
//       textStyle:{color: 'white'}
//     },
//     hAxis: {
//       textStyle:{color: 'white'}
//     },
//     animation: {
//       duration: 1000,
//       easing: 'in',
//       startup: true
//     }
//   };
//   var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
//   chart.draw(data, options);
// }

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(newChart);
function newChart(){
  var jsonUnchanged = document.getElementById("jsonDataOpen").value;
  
  console.log(jsonUnchanged);//
  
  var issues = JSON.parse(jsonUnchanged);
  
  console.log(issues);
  
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'User');
  data.addColumn('number', 'Opened Issues');
  data.addColumn('number', 'Closed Issues');
  
  console.log(data);

  for (var i = 0; i < issues.length; i++) {
    data.addRow([issues[i].name, issues[i].open, issues[i].closed]);
  }
  
  console.log(data);

  var options = {
    title: "Open vs Closed Issues per User",
    width: 1300,
    height: 900,
    bar: {groupWidth: "95%"},
    legend: { position: "none",
    textStyle: {color: 'white'}},
    backgroundColor: "transparent",
    chartArea:{backgroundColor: "transparent"},
    titleTextStyle: {color: 'white'},
    vAxis: {
      textStyle:{color: 'white'}
    },
    hAxis: {
      textStyle:{color: 'white'}
    },
    // isStacked: true,
    // animation: {
    //   duration: 1000,
    //   easing: 'in',
    //   startup: true
    // }
  };
  var chart = new google.charts.Bar(document.getElementById('chartData'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(addDelChart);
function addDelChart(){
  //var jsonUnchanged = document.getElementById("jsonDataIssues").value;
  
  //console.log(jsonUnchanged);//
  
  //var issues = JSON.parse(jsonUnchanged);
  
  //console.log(issues);
  
  var jsonUnchanged = document.getElementById("jsonDataContrib").value;
  var contributions = JSON.parse(jsonUnchanged);
  console.log(contributions);
  
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'User');
  data.addColumn('number', 'Additions');
  data.addColumn('number', 'Deletions');

  for (var i = 0; i < contributions.length; i++) {
    data.addRow([contributions[i].user, contributions[i].additions, contributions[i].deletions]);
  }

  var options = {
    title: "Commits",
    width: 1300,
    height: 900,
    bar: {groupWidth: "95%"},
    legend: { position: "none",
    textStyle: {color: 'white'}},
    backgroundColor: "transparent",
    chartArea:{backgroundColor: "transparent"},
    titleTextStyle: {color: 'white'},
    vAxis: {
      textStyle:{color: 'white'}
    },
    hAxis: {
      textStyle:{color: 'white'}
    },
    // isStacked: true,
    // animation: {
    //   duration: 1000,
    //   easing: 'in',
    //   startup: true
    // }
  };
  var chart = new google.charts.Bar(document.getElementById('chartDataAddDel'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(commitChart);
function commitChart(){
  var jsonUnchanged = document.getElementById("jsonDataContrib").value;
  var contributions = JSON.parse(jsonUnchanged);
  console.log(contributions);
  
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'User');
  data.addColumn('number', 'Commits');

  for (var i = 0; i < contributions.length; i++) {
    data.addRow([contributions[i].user, contributions[i].total]);
  }

  var options = {
    title: "Commits",
    width: 1300,
    height: 900,
    bar: {groupWidth: "95%"},
    legend: { position: "none",
    textStyle: {color: 'white'}},
    backgroundColor: "transparent",
    chartArea:{backgroundColor: "transparent"},
    titleTextStyle: {color: 'white'},
    vAxis: {
      textStyle:{color: 'white'}
    },
    hAxis: {
      textStyle:{color: 'white'}
    },
    // isStacked: true,
    // animation: {
    //   duration: 1000,
    //   easing: 'in',
    //   startup: true
    // }
  };
  var chart = new google.charts.Bar(document.getElementById('chartDataContrib'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(percentageChart);
function percentageChart() {
  var jsonUnchanged = document.getElementById("jsonDataOpen").value;
  var percentage = JSON.parse(jsonUnchanged);

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'User');
  data.addColumn('number', 'Number of Closed Issues');

  percentage.sort((a, b) => parseFloat(b.closed) - parseFloat(a.closed));

  for (var i = 0; i < 5; i++) {
    if ( i < percentage.length ) data.addRow([percentage[i].name, percentage[i].closed]);
  }
  
  var options = {
    title: 'Top Users (Most Issues Resolved)',
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
  // var percent = 0;
  // var handler = setInterval(function(){
  //   // values increment
  //   percent += 1;
  //   // apply new values
  //   data.setValue(0, 1, percent);
  //   data.setValue(1, 1, 100 - percent);
  //   // update the pie
  //   chart.draw(data, options);
  //   // check if we have reached the desired value
  //   if (percent > 74) clearInterval(handler);
  // }, 30);
}
