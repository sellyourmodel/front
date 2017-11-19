function ajaxRegistrationError(text) {
    if($(window).scrollTop() > $(".js-registration").offset().top - 120){
        $('html, body').animate({
            scrollTop: $(".js-registration").offset().top - 120
        }, 1000);
    }
    $(".js-registration-error").html(text).fadeIn();
    setTimeout(function () {
        $(".js-registration-error").html('').fadeOut();
    }, 5000);
}

function ajaxRegistration() {

    var form = $(".js-registration");

    var login = form.find("input[name=email]").val();
    var nickname = form.find("input[name=nickname]").val();
    var pass = form.find("input[name=password]").val();
    var pass2 = form.find("input[name=password_repeat]").val();

    if (login == '' || nickname == '' || pass == '' || pass2 == '') {
        ajaxRegistrationError("Заполните все поля");
        return;
    }

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxRegistrationError(data.error_text);
            }
            else {
                window.location.reload();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxRegistrationError("Регистрация времено недоступна");
        }
    });
}