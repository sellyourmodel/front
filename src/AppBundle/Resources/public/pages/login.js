function ajaxLoginError(text) {
    $(".js-login-error").html(text).fadeIn();
    setTimeout(function () {
        $(".js-login-error").html('').fadeOut();
    }, 5000);
}

function ajaxLogin() {

    var form = $(".js-login");

    var login = form.find("input[name=_username]").val();
    var pass = form.find("input[name=_password]").val();

    if (login == '' || pass == '') {
        ajaxLoginError("Введите e-mail и пароль");
        return;
    }

    var submit = form.find('input[type=submit]');
    submit.attr('data-old-val', submit.val()).val('Подождите...');

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxLoginError(data.error_text);
            }
            else {
                window.location.reload();
            }
            submit.val(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxLoginError("Вход на сайт времено недоступен");
            submit.val(submit.attr('data-old-val'));
        }
    });
}