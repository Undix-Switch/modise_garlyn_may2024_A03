document.addEventListener("DOMContentLoaded", function() {
  // After the content is loaded, hide the loading screen and show the content
  setTimeout(function() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 7600); // Change the delay (in milliseconds) as needed
});
