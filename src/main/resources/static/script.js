google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(openedIssues);
function openedIssues(){
  var jsonUnchanged = document.getElementById("jsonDataOpen").value;

  //console.log(jsonUnchanged);//

  var issues = JSON.parse(jsonUnchanged);

  //console.log(issues);

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'User');
  data.addColumn('number', 'Opened Issues');

  //console.log(data);

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].open > 0) data.addRow([issues[i].name, issues[i].open]);
  }
  data.sort({column: 1});
  //console.log(data);

  var options = {
    title: "Open Issues per User",
    width: 700,
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
  var chart = new google.charts.Bar(document.getElementById('chartDataOpen'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(closedIssues);
function closedIssues(){
  var jsonUnchanged = document.getElementById("jsonDataOpen").value;

  //console.log(jsonUnchanged);//

  var issues = JSON.parse(jsonUnchanged);

  //console.log(issues);

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'User');
  data.addColumn('number', 'Closed Issues');

  //console.log(data);

  for (var i = 0; i < issues.length; i++) {
    if ( issues[i].closed > 0 ) data.addRow([issues[i].name, issues[i].closed]);
  }
  data.sort({column: 1});
  //console.log(data);

  var options = {
    title: "Closed Issues per User",
    width: 700,
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
    colors: ['#D3D3D3'],
    // isStacked: true,
    // animation: {
    //   duration: 1000,
    //   easing: 'in',
    //   startup: true
    // }
  };
  var chart = new google.charts.Bar(document.getElementById('chartDataClosed'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(addChart);
function addChart(){
  //var jsonUnchanged = document.getElementById("jsonDataIssues").value;

  //console.log(jsonUnchanged);//

  //var issues = JSON.parse(jsonUnchanged);

  //console.log(issues);

  var jsonUnchanged = document.getElementById("jsonDataContrib").value;
  var contributions = JSON.parse(jsonUnchanged);
  //console.log(contributions);

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'User');
  data.addColumn('number', 'Additions');

  for (var i = 0; i < contributions.length; i++) {
    if ( contributions[i].additions > 2000 ) data.addRow([contributions[i].user, contributions[i].additions]);
  }

  data.sort({column: 1});

  var options = {
    title: "Additions per User",
    width: 700,
    bar: {
      groupWidth: "95%",
    },
    colors: ['#7CFC00'],
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
  var chart = new google.charts.Bar(document.getElementById('chartDataAdd'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(delChart);
function delChart(){
  //var jsonUnchanged = document.getElementById("jsonDataIssues").value;

  //console.log(jsonUnchanged);//

  //var issues = JSON.parse(jsonUnchanged);

  //console.log(issues);

  var jsonUnchanged = document.getElementById("jsonDataContrib").value;
  var contributions = JSON.parse(jsonUnchanged);
  //console.log(contributions);

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'User');
  data.addColumn('number', 'Deletions');

  for (var i = 0; i < contributions.length; i++) {
    if ( contributions[i].deletions > 2000 ) data.addRow([contributions[i].user, contributions[i].deletions]);
  }

  data.sort({column: 1});

  var options = {
    title: "Deletions per User",
    width: 700,
    bar: {
      groupWidth: "95%",
    },
    colors: ['red'],
    legend: { position: "none",
    textStyle: {color: 'white'}},
    backgroundColor: "transparent",
    chartArea:{backgroundColor: "transparent"},
    titleTextStyle: {color: 'white'},
    vAxis: {
      textStyle:{color: 'white'},
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
  var chart = new google.charts.Bar(document.getElementById('chartDataDel'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(commitChart);
function commitChart(){
  var jsonUnchanged = document.getElementById("jsonDataContrib").value;
  var contributions = JSON.parse(jsonUnchanged);
  //console.log(contributions);

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'User');
  data.addColumn('number', 'Commits');

  for (var i = 0; i < contributions.length; i++) {
    if ( contributions[i].total > 1 )
    data.addRow([contributions[i].user, contributions[i].total]);
  }

  data.sort({column: 1});

  var options = {
    title: "Commits",
    width: 700,
    bar: {groupWidth: "95%"},
    legend: { position: "none"},
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
    title: 'Top Five Users (Most Issues Resolved)',
    width:  700,
    pieHole: 0.4,
    pieSliceText: "none",
    backgroundColor: "transparent",
    legend: { position: "none"},
    titleTextStyle: {color: 'white'},
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    }
  };
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}


$(document).ready(function() {
  $("#btn").on("click", function() {
    userChart();
  });
});

google.charts.load('current', {'packages':['line']});

function userChart() {
  var data = new google.visualization.DataTable();
  var jsonUnchanged = document.getElementById("jsonDataContrib").value;
  var contributions = JSON.parse(jsonUnchanged);
  var user = document.getElementById("userSearch").value;

  data.addColumn('string', 'Date');
  data.addColumn('number', 'Additions');
  data.addColumn('number', 'Deletions');
  data.addColumn('number', 'Commits');

  var newArray = contributions.filter(function (el) {
    return el.user === user;
  });

  console.log(newArray[0].all);

  for (var i = 0; i < newArray[0].all.length; i++) {
    data.addRow([newArray[0].all[i].string[0], newArray[0].all[i].a, newArray[0].all[i].d, newArray[0].all[i].c]);
  }

  var options = {
    chart: {
      title: newArray[0].user,
    },
    width: 1500,
    legend:{textStyle: {color: 'white'}},
    backgroundColor: "transparent",
    chartArea:{backgroundColor: "transparent"},
    titleTextStyle: {color: 'white'},
    vAxis: {
      textStyle:{color: 'white'},
      scaleType: 'log'
    },
    hAxis: {
      textStyle:{color: 'white'}
    },
  };

  var chart = new google.charts.Line(document.getElementById('lineUser'));

  chart.draw(data, google.charts.Line.convertOptions(options));
}
