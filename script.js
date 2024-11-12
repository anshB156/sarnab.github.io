// script.js
window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('content').style.display = 'block';
    }, 6000); // 6000 milliseconds = 6 seconds
  });