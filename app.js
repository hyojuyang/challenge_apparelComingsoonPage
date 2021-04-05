document.getElementById("form_email").onclick = 
  function() {myFunction()};

  function myFunction() {
      document.getElementById("warning").innerHTML
          = "Please provide a valid email";
      document.getElementById("warning_img").src
      = "images/icon-error.svg";
    }



  