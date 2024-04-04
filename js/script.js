document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your application is under review. An email will be sent upon your approval or denial.");
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.reset();
  });
});
