// var app = chrome.runtime.getBackgroundPage();

function script1() {
  chrome.tabs.executeScript({
    file: 'script1.js'
  }); 
}

function script2() {
  chrome.tabs.executeScript({
    file: 'script2.js'
  }); 
}

function script3() {
  chrome.tabs.executeScript({
    file: 'script3.js'
  }); 
}

function script4() {
  chrome.tabs.executeScript({
    file: 'script4.js'
  }); 
}

function captcha() {
  chrome.tabs.executeScript({
    file: 'captcha.js'
  }); 
}

document.getElementById('clickme1').addEventListener('click', script1);

document.getElementById('clickme2').addEventListener('click', script2);

document.getElementById('clickme3').addEventListener('click', script3);

document.getElementById('clickme4').addEventListener('click', script4);

document.getElementById('clickme5').addEventListener('click', op);

document.getElementById('clickme6').addEventListener('click', captcha);

function op() {
var e = document.getElementById('hide')
if (e.style.display == 'block') {e.style.display = 'none';document.getElementById("html").style.width="380px";} else {e.style.display = 'block';document.getElementById("html").style.width="525px";};}

document.getElementById('clickme6').addEventListener('click', op);



