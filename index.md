<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Cookie clicker</title>
    </head>
    <body>
        <h1>Cookie Clicker</h1>
        <div id="whole">
            <div id="cook">
                <span id="cookies">0</span>
                <span id="name">cookies</span>
            </div>

            <div id="upgrades">
                <button class="upgrades" id="clicker" onclick="clicker()">[<span id="clickerPrice">15</span>] Clicker (0.1 cps) <span class="amount" id="clickerAmount">0</span></button>
                <button class="upgrades" id="gram" onclick="gram()">[<span id="gramPrice">100</span>]  Grandma (1 cps) <span class="amount" id="gramAmount">0</span></button>
                <button class="upgrades" id="factory" onclick="factory()">[<span id="factoryPrice">1000</span>] Factory (8 cps) <span class="amount" id="factoryAmount">0</span></button>
            </div>
            <div id="wrapper">
                <a id="cookie" onclick="click()"><img id="cookieimg" src="cookie.png"></a>
            </div>
        </div>

        
        


        <script src="script.js"></script>
    </body>
</html>
