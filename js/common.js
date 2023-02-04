$("#sendMail").on("click", function () {
  var name = $("#name").val().trim();
  var phone = $("#phone").val().trim();
  var message = $("#message").val().trim();

  if (name == "") {
    $("#errorMess").text("Input name");
    return false;
  } else if (phone == "") {
    $("#errorMess").text("Input phone");
    return false;
  } else if (message == "") {
    $("#errorMess").text("Input message");
    return false;
  }
  $("errorMess").text("");

  $.ajax({
    type: "POST",
    url: "js/mail.php",
    cache: false,
    data: { name: name, phone: phone, message: message },
    dataType: "html",
    beforeSend: function () {
      $("#sendEmail").prop("disabled", true);
    },
    success: function (data) {
        if(!data)
      alert('error,the message has not been sent');
      else
      $("#form").trigger('reset');
      $("#sendEmail").prop("disabled", false);
    },
  });
});
