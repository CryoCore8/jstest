window.onload = function() {
    // Button function
    var bananaButton = document.getElementById('Filip');
    bananaButton.addEventListener('click', function() {
      window.location.href = 'https://og-cs.hr/'; 
    });
  
    // Filip part
    var inputElement = document.querySelector('input[type="text"]');
    inputElement.addEventListener('input', function(event) {
      var inputValue = event.target.value;
      if (inputValue.toLowerCase() !== 'filip' && inputValue.length > 5) {
        window.prompt('Okay');
      }
    });
    inputElement.addEventListener('keydown', function(event) {
      var inputValue = event.target.value;
      if (event.keyCode === 13 && inputValue.toLowerCase() !== 'filip' && inputValue.length > 1) {
        window.prompt('Okay');
      }
    });
// Search button function
var searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function() {
  var inputValue = inputElement.value;
  if (inputValue.toLowerCase() === 'filip') {
    window.prompt('Sucks to be you');
  }
});
};  

  
 