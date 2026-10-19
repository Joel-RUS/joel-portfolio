// Contact form: opens the visitor's email app with the message already written.
// (GitHub Pages has no server, so the form can't send emails by itself.)

var form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var body = message + "\n\nFrom: " + name + " (" + email + ")";

    window.location.href =
      "mailto:joel52@bugemauniv.ac.ug" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  });
}
