var gbSeconds = 0;
var gbFrames  = 0;

function gb_Resize_LCD() {
  if ($('BX').value=='Size x2') {
    $('BX').value='Size x3';
    $('LCD').style.width='320px';
    $('LCD').style.height='288px';
  }
  else if ($('BX').value=='Size x3') {
    $('BX').value='Size x1';
    $('LCD').style.width='480px';
    $('LCD').style.height='432px';
  }
  else {
    $('BX').value='Size x2';
    $('LCD').style.width='160px';
    $('LCD').style.height='144px';
  }
}

function gb_Show_Fps() {
return;
  gbFrames+=gbFPS;
  gbSeconds++;
  $('STATUS').innerHTML = 
    'Running: '+gbFPS+' '+
    'fps - Average: '+(gbFrames/gbSeconds).toFixed(2)+' - '+
    'Bank switches/s: '+gbBankSwitchCount;
  gbFPS=0;
  gbBankSwitchCount=0;
}

function closeCartridge () {
  var c = document.getElementById ('Cart');
  c.style.visibility = 'hidden';
}

function openCartridge () {
  var c = document.getElementById ('Cart');
  c.style.visibility = 'visible';
}

window.onload = function() {
  var game = "roms/mario.gb";
  gb_Insert_Cartridge(game, true);

  var c = document.getElementById ('CART');
  c.innerHTML = game;

  var cart = document.getElementById ('Cart');
  cart.onmouseup = function (e) {
    if (e.clientY<120) {
      closeCartridge ();
    } else {
      var url = prompt ("URL to ROM");
      if (url) {
        var c = document.getElementById ('CART');
        try {
          gb_Insert_Cartridge (url, true);
          c.innerHTML = game = url;
          closeCartridge ();
        } catch (x) {
          alert ("Invalid rom" + x);
          c.innerHTML = game = "invalid";
        }
      }
    }
  }
  var lcd = document.getElementById ('LCD');
  lcd.onmouseup = function(e) {
    if (e.clientY<120) {
      openCartridge ();
    }
  }
  var but = document.getElementById ('BUTTONS');
  var img = but.style.backgroundImage;
  const t = but.offsetTop;
  const l = but.offsetLeft;
  var w = 320; //but.style.width;
  var h = 200; //but.style.height;
  function press(e) {
    var _x = e.clientX-l;
    var _y = e.clientY-t;
    var x = (_x*100)/w;
    var y = (_y*100)/h;
    if (x>78) {
      gb_PressKey ('a');
    } else
    if (x>62) {
      gb_PressKey ('b');
    } else
    if (x>46) {
      gb_PressKey ('start');
    } else
    if (x>36) {
      gb_PressKey ('select');
    } else
    if (x>24) {
      gb_PressKey ('right');
    } else
    if (x>17) {
    if (y>39) 
      gb_PressKey ('down');
    else
      gb_PressKey ('up');
    } else {
      gb_PressKey ('left');
    }
  }
  function release(e) {
    var _x = e.clientX-l;
    var _y = e.clientY-t;
    var x = (_x*100)/w;
    var y = (_y*100)/h;
    if (x>78) {
      gb_ReleaseKey ('a');
    } else
    if (x>62) {
      gb_ReleaseKey ('b');
    } else
    if (x>46) {
      gb_ReleaseKey ('start');
    } else
    if (x>36) {
      gb_ReleaseKey ('select');
    } else
    if (x>24) {
      gb_ReleaseKey ('right');
    } else
    if (x>17) {
      if (y>39) 
        gb_ReleaseKey ('down');
      else
        gb_ReleaseKey ('up');
    } else {
      gb_ReleaseKey ('left');
    }
  }
  but.onmousedown = function (e) {
    press (e);
  }
  but.onmouseup = function (e) {
    release (e);
  }
  but.ontouchstart = function (e) {
    for(var i = 0; i < e.touches.length; i++) {
      var touch = e.touches[i];
      e.clientX = touch.clientX;
      e.clientY = touch.clientY;
      press(e);
    }
  }
  but.ontouchend = function (e) {
    for(var i = 0; i < e.touches.length; i++) {
      var touch = e.touches[i];
      e.clientX = touch.clientX;
      e.clientY = touch.clientY;
      release(e);
    }
  }
}

