<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Cookie clicker</title>
    </head>
    <body>
        <div id="cook">
            <input id="cookies" type="text" value="0">
        </div>

        <div id="upgrades">
            <button id="clicker" onclick="clicker()">[<span id="clickerPrice">15</span>] Clicker (0.1 cps)</button>
            <button id="gram" onclick="gram()">[<span id="gramPrice">100</span>]  Grandma (1 cps)</button>
            <button id="factory" onclick="factory()">[<span id="factoryPrice">1000</span>] Factory (8 cps)</button>
        </div>
        <div>
            <input type="text" class="amount" id="clickerAmount" value="0"></input>
            <input type="text" class="amount" id="gramAmount" value="0"></input>
            <input type="text" class="amount" id="factoryAmount" value="0"></input>
        </div>
        

        <div id="wrapper">
            <a id="cookie" onclick="click()"><img id="cookieimg" src="cookie.png"></a>
        </div>

        
        


        <script src="script.js"></script>
    </body>
</html>