<!DOCTYPE html>
<html>
  <head>
      <title>Microsoft Calculator Git</title>
      <link rel="stylesheet" href="stylesheet.css">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <!--<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://www.gstatic.com/charts/loader.js"></script>
      <script src="semantic/dist/semantic.min.js"></script>
      <script type="text/javascript" src="https://code.jquery.com/jquery-1.7.1.min.js"></script>
      <script src="script.js"></script>
  </head>

  <body>
    <div class="header">
      <div style="width: 100%; display: table;">
        <div style="display: table-cell;">
          Microsoft Issues Statistics
        </div>
        <div style="display: table-cell; text-align: -webkit-right;">
          <input type="text" id="userSearch" placeholder="Enter Username">
        </div>
        <button id="btn" style="display: table-cell; text-align: -webkit-right;">Search</button>
      </div>
    </div>
    <div>
      <div class="bodyElements">
        <div style="padding:25px; padding-top: 8vw; width: 100%; display: table;">
          <div style="display: table-row">
            <div id="piechart" style="width: 50%; height: 600px; display: table-cell;"></div>
            <div id="chartDataContrib" style="width:50%; height: 600px; display: table-cell; text-align: -webkit-right;"></div>
          </div>
          <div style="display: table-row">
            <div id="chartDataAdd" style="width: 50%; height: 600px; display: table-cell;"></div>
            <div id="chartDataDel" style="width:50%; height: 600px; display: table-cell; text-align: -webkit-right;"></div>
          </div>
          <div style="display: table-row">
            <div id="chartDataOpen" style="width: 50%; height: 600px; display: table-cell;"></div>
            <div id="chartDataClosed" style="width:50%; height: 600px; display: table-cell; text-align: -webkit-right;"></div>
          </div>
        </div>
        <div id="lineUser" style="height: 600px"></div>
        <input type="hidden" id="jsonDataOpen" value="${outputOpen}">
        <input type="hidden" id="jsonDataIssues" value="${outputIssues}">
        <input type="hidden" id="jsonDataContrib" value="${outputContrib}">
      </div>
    </div>
  </body>
</html>
