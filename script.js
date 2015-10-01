$(document).ready(function() {

  $("form").validate({
    rules: {
      matchingemail: {
        email: true,
        equalTo: "#email"
      },
      zipcode: {
        number: true,
        maxlength: 5,
        minlength: 5
      },
      password: {
        rangelength: [6, 32]
      },
      confirm_password: {
        equalTo: "#password",
        rangelength: [6, 32]
      }
    },

    messages: {
      email: "Please input a valid email",
      matchingemail: "Email addresses do not match"
    },

    highlight: function(element, errorClass, validClass) {
      $(element).addClass(errorClass).removeClass(validClass);
    },
    unhilight: function(element, errorClass, validClass) {
      $(element).removeClass(errorClass).addClass(validClass);
    }
  });

});
