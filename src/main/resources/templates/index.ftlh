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
      <script src="script.js"></script>
  </head>

  <body>
    <div class="header">Microsoft Issues Statistics</div>
    <div>
      <div class="bodyElements">
        <div style="padding:10px; padding-top: 8vw; width: 100%; display: table;">
          <div style="display: table-row">
            <div id="piechart" style="width: 50%; height: 900px; display: table-cell;"></div>
            <div id="chartDataContrib" style="width:50%; height: 900px; display: table-cell; text-align: -webkit-right;"></div>
          </div>
          <div style="display: table-row">
            <div id="chartDataAdd" style="width: 50%; height: 900px; display: table-cell;"></div>
            <div id="chartDataDel" style="width:50%; height: 900px; display: table-cell; text-align: -webkit-right;"></div>
          </div>
          <div style="display: table-row">
            <div id="chartDataOpen" style="width: 50%; height: 900px; display: table-cell;"></div>
            <div id="chartDataClosed" style="width:50%; height: 900px; display: table-cell; text-align: -webkit-right;"></div>
          </div>
        </div>
        <input type="hidden" id="jsonDataOpen" value="${outputOpen}">
        <input type="hidden" id="jsonDataIssues" value="${outputIssues}">
        <input type="hidden" id="jsonDataContrib" value="${outputContrib}">
      </div>
    </div>
  </body>
</html>
