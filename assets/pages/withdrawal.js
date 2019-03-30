function ajaxWithdrawalError(text) {
    $(".js-withdrawal-add-error").html(text).fadeIn();
    setTimeout(function () {
        $(".js-withdrawal-add-error").html('').fadeOut();
    }, 5000);
}

function ajaxWithdrawalAdd() {

    var form = $(".js-withdrawal-add-form");

    /*var login = form.find("input[name=_username]").val();
    var pass = form.find("input[name=_password]").val();

    if (login == '' || pass == '') {
        ajaxLoginError("Введите e-mail и пароль");
        return;
    }

    var submit = form.find('input[type=submit]');
    submit.attr('data-old-val', submit.val()).val('Подождите...');*/

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxWithdrawalError(data.error_text);
            }
            else {
                $(".js-withdrawals").html(data.html);
                $(".withdrawals__field input").val('');
                $(".withdrawals__success").slideDown();
                setTimeout(function(){
                    $(".withdrawal__success").slideUp();
                }, 5000);
            }
            submit.val(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxWithdrawalError("Отправка заявок временно недоступна");
            submit.val(submit.attr('data-old-val'));
        }
    });
}