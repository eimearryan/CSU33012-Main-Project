<!DOCTYPE html>
<html>
  <head>
      <title>Calculator App</title>
      <link rel="stylesheet" href="stylesheet.css">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <!--<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://www.gstatic.com/charts/loader.js"></script>
      <script src="semantic/dist/semantic.min.js"></script>
      <script src="script.js"></script>
  </head>
  
  <body>
    <div class="header">Co-Operate</div>
    <div style="padding-top: 8vw">
      <div class="bodyElements">
        <div style="padding:10px; width: 100%; display: table;">
          <div style="display: table-row">
            <div id="piechart" style="width: 50%; display: table-cell;"></div>
            <div id="columnchart_values" style="width:50%; display: table-cell; text-align: -webkit-right;"></div>
            <div id="columnchart_values2" style="width:50%; display: table-cell; text-align: -webkit-right;"></div>
          </div>
        </div>
        <input type="hidden" id="jsonDataOpen" value="${outputOpen}">
        <input type="hidden" id="jsonDataIssues" value="${outputIssues}">
        <input type="hidden" id="jsonDataContrib" value="${outputContrib}">
        <div id="chartData" style="width: 1000px; height: 1000px"></div>
        <div id="chartDataAddDel" style="width: 1000px; height: 1000px"></div>
        <div id="chartDataContrib" style="width: 1000px; height: 1000px"></div>
      </div>
    </div>
  </body>
</html>
