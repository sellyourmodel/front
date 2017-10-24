function subscribe(){
    var email = $(".js-subscribe-email").val();

    var submit = $(".js-subscribe-submit");
    submit.attr('data-old-val', submit.val()).val('Подождите...');

    $.ajax({
        type: "POST",
        url: Routing.generate('subscribe'),
        data: {email: email},
        dataType: "json",
        before: function () {

        },
        success: function (data, status, object) {
            if (data.error) {
                $('.js-subscribe-message').removeClass('subscribe__success').addClass('subscribe__error').html(data.error_text).fadeIn();
            }
            else {
                $('.js-subscribe-message').removeClass('subscribe__error').addClass('subscribe__success').html("Вы успешно подписались на рассылку").fadeIn();
            }
            submit.val(submit.attr('data-old-val'));
            setTimeout(function(){
                $('.js-subscribe-message').removeClass('error').removeClass('success').html("").fadeOut();
            }, 5000);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $('.js-subscribe-message').removeClass('subscribe__success').addClass('subscribe__error').html("Подписка временно недоступна").fadeIn();
            submit.val(submit.attr('data-old-val'));
            setTimeout(function(){
                $('.js-subscribe-message').removeClass('subscribe__error').removeClass('subscribe__success').html("").fadeOut();
            }, 5000);
        }
    });
}

$(function(){
    $(".js-subscribe-email").keypress(function(e) {
        if(e.which == 13) {
            subscribe();
        }
    });
});

