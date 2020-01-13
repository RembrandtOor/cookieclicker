var cookiecount = 0;

document.getElementById('cookie').onmousedown = function() {
    cookiecount = cookiecount + 1;
    var roundedCookie = Math.round(cookiecount);
    document.getElementById('cookies').innerHTML = roundedCookie;
    document.getElementById('cookie').style.margin = '10px';
    document.getElementById('cookie').style.marginTop = '20px';
    document.getElementById('cookie').style.height = '380px';
    document.getElementById('cookie').style.width = '380px';
    document.getElementById('cookie').style.transition = '0.2s';
    if (cookiecount == 1) {
        document.getElementById('name').innerHTML = 'cookie';
    } else {
        document.getElementById('name').innerHTML = 'cookies';
    }
}

document.getElementById('cookie').onmouseup = function() {
    document.getElementById('cookie').style.height = '400px';
    document.getElementById('cookie').style.width = '400px';
    document.getElementById('cookie').style.margin = '0px';
    document.getElementById('cookie').style.transition = '0.2s';
}

var clickerPrice = 15;
var clickerAmount = 0;
var roundedClicker = clickerPrice;
function clicker() {
    if (document.getElementById('cookies').innerHTML >= roundedClicker) {
        roundedClicker = Math.round(clickerPrice);
        cookiecount = cookiecount - roundedClicker;
        clickerPrice = clickerPrice * 1.15;
        roundedClicker = Math.round(clickerPrice);
        document.getElementById('clickerPrice').innerHTML = roundedClicker;
        document.getElementById('cookies').innerHTML = cookiecount;
        clickerAmount++;
        document.getElementById('clickerAmount').innerHTML = clickerAmount;

        time=setInterval(function(){
            cookiecount = cookiecount + 1;
            var rounded = Math.round(cookiecount);
            document.getElementById('cookies').innerHTML = rounded;
        },10000);
    }
}

var gramPrice = 100;
var gramAmount = 0;
var roundedGram = gramPrice;
function gram() {
    if (document.getElementById('cookies').innerHTML >= gramPrice) {
        roundedGram = Math.round(gramPrice);
        cookiecount = cookiecount - roundedGram;
        gramPrice = gramPrice * 1.15;
        roundedGram = Math.round(gramPrice);
        document.getElementById('gramPrice').innerHTML = roundedGram;
        document.getElementById('cookies').innerHTML = cookiecount;
        gramAmount++;
        document.getElementById('gramAmount').innerHTML = gramAmount;
        
        time=setInterval(function(){
            cookiecount = cookiecount + 1;
            var rounded = Math.round(cookiecount);
            document.getElementById('cookies').innerHTML = rounded;
        },1000);
    }
}

var factoryPrice = 100;
var factoryAmount = 0;
var roundedFactory = factoryPrice;
function factory() {
    if (document.getElementById('cookies').innerHTML >= factoryPrice) {
        roundedFactory = Math.round(factoryPrice);
        cookiecount = cookiecount - roundedFactory;
        factoryPrice = factoryPrice * 1.15;
        roundedFactory = Math.round(factoryPrice);
        document.getElementById('factoryPrice').innerHTML = roundedFactory;
        document.getElementById('cookies').innerHTML = roundedFactory;
        factoryAmount++;
        document.getElementById('factoryAmount').innerHTML = factoryAmount;

        time=setInterval(function(){
            cookiecount = cookiecount + 8;
            var rounded = Math.round(cookiecount);
            document.getElementById('cookies').innerHTML = cookiecount;
        },1000);
    }
}