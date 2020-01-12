var cookiecount = 0;

document.getElementById('cookie').onmousedown = function() {
    cookiecount = cookiecount + 1;
    var roundedCookie = Math.round(cookiecount);
    document.getElementById('cookies').value = roundedCookie;
    document.getElementById('cookie').style.margin = '10px';
    document.getElementById('cookie').style.marginTop = '20px';
    document.getElementById('cookie').style.height = '380px';
    document.getElementById('cookie').style.width = '380px';
    document.getElementById('cookie').style.transition = '0.2s';
}

document.getElementById('cookie').onmouseup = function() {
    document.getElementById('cookie').style.height = '400px';
    document.getElementById('cookie').style.width = '400px';
    document.getElementById('cookie').style.margin = '0px';
    document.getElementById('cookie').style.transition = '0.2s';
}

var clickerPrice = 15;
var clickerAmount = 0;
function clicker() {
    if (document.getElementById('cookies').value >= clickerPrice) {
        var roundedClicker = Math.round(clickerPrice);
        cookiecount = cookiecount - roundedClicker;
        clickerPrice = clickerPrice * 1.15;
        roundedClicker = Math.round(clickerPrice);
        document.getElementById('clickerPrice').innerHTML = roundedClicker;
        document.getElementById('cookies').value = cookiecount;
        clickerAmount++;
        document.getElementById('clickerAmount').value = clickerAmount;

        time=setInterval(function(){
            cookiecount = cookiecount + 1;
            var rounded = Math.round(cookiecount);
            document.getElementById('cookies').value = rounded;
        },10000);
    }
}

var gramPrice = 100;
var gramAmount = 0;
function gram() {
    if (document.getElementById('cookies').value >= gramPrice) {
        var roundedGram = Math.round(gramPrice);
        cookiecount = cookiecount - roundedGram;
        gramPrice = gramPrice * 1.15;
        roundedGram = Math.round(gramPrice);
        document.getElementById('gramPrice').innerHTML = roundedGram;
        document.getElementById('cookies').value = cookiecount;
        gramAmount++;
        document.getElementById('gramAmount').value = gramAmount;
        
        time=setInterval(function(){
            cookiecount = cookiecount + 1;
            var rounded = Math.round(cookiecount);
            document.getElementById('cookies').value = rounded;
        },1000);
    }
}

var factoryPrice = 100;
var factoryAmount = 0;
function factory() {
    if (document.getElementById('cookies').value >= factoryPrice) {
        var roundedFactory = Math.round(factoryPrice);
        cookiecount = cookiecount - roundedFactory;
        factoryPrice = factoryPrice * 1.15;
        roundedFactory = Math.round(factoryPrice);
        document.getElementById('gramPrice').innerHTML = roundedFactory;
        document.getElementById('cookies').value = rounded;
        factoryAmount++;
        document.getElementById('factoryAmount').value = factoryAmount;

        time=setInterval(function(){
            cookiecount = cookiecount + 8;
            var rounded = Math.round(cookiecount);
            document.getElementById('cookies').value = cookiecount;
        },1000);
    }
}