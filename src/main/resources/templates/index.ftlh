<!DOCTYPE html>
<html>
  <head>
      <title>Calculator App</title>
      <link rel="stylesheet" href="stylesheet.css">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://www.gstatic.com/charts/loader.js"></script>
      <script src="script.js"></script>
  </head>
  <body>
    <div class="header">Co-operate</div>
    <div style="padding-top: 8vw">
      <div class="bodyElements">
        <div style="width: 100%; display: table; background-color: hsl(0deg 0% 89%); color: black;">
          <div style="display: table-row">
            <div style="padding-left: 20px; width: 540px; display: table-cell;">
              <h4>Welcome to Cooperate!</h4>
            </div>
            <div style="display: table-cell;">
              <p style="font-size: 15px; text-align: end; padding-right: 20px;">A team tracking software by Group 7</p>
            </div>
          </div>
        </div>
        <div style="padding:10px; width: 100%; display: table;">
          <div style="display: table-row">
            <div id="piechart" style="width: 50%; display: table-cell;"></div>
            <div id="columnchart_values" style="width:50%; display: table-cell; text-align: -webkit-right;"></div>
          </div>
        </div>
        <button onclick="newChart()">Click me</button>
        <input type="hidden" id="jsonData" value="${result}">
      </div>
    </div>
  </body>
</html>
