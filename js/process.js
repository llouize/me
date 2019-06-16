var myform = $("form#myform");
	myform.submit(function(event){
	event.preventDefault();

  var service_id = "default_service";
  var template_id = "contact_form";

  myform.find("button").text("Sending...");
	emailjs.send(
		"default_service",
		"contact_template",
		{
			user_name: document.getElementById("name").value,
			user_email: document.getElementById("email").value,
			subject: document.getElementById("subject").value,
			text_message: document.getElementById("message").value
		}
		)
  	.then(function(){
    	// alert("Email Sent! Thank you for sending me an email.");
			 $('.alert-success').show();
			 document.getElementById("myform").reset();
			 setTimeout(function() {
			 $('.alert-success').fadeOut();
			}, 10000);
       myform.find("button").text("Submit");
    }, function(err) {
       // alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
			 $('.alert-error').show();
			 document.getElementById("myform").reset();
			 setTimeout(function() {
			 $('.alert-error').fadeOut();
			 }, 10000);
       myform.find("button").text("Submit");
    });
  return false;
});
