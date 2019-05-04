function addTracker(){

    var form = $(".js-settings-form");

    form.find('input.error').removeClass('error');

    var error = false;

    form.find('.js-require').each(function(){
        var input = $(this);
        input.val($.trim(input.val()));

        if(input.val() == ''){
            input.addClass('error');
            error = true;
        }
    });

    if(error){
        ajaxAddTrackerError("Заполните все обязательные поля");
        return false;
    }

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxAddTrackerError(data.error_text);
                if(data.error_type == 'email'){
                    form.find('input[name=email]').addClass('error');
                }
                if(data.error_type == 'nickname'){
                    form.find('input[name=nickname]').addClass('error');
                }
                if(data.error_type == 'birthdate'){
                    form.find('input[name=birthdate]').addClass('error');
                }
            }
            else {
                window.location.assign(data.url);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxAddTrackerError("Обращение в тех поддержку времено недоступено");
        }
    });
}

function ajaxAddTrackerError(text) {
    /*alert(text);
    return;*/
    $(".js-settings-result").html(text).removeClass('settings__success').addClass('settings__error').fadeIn();
    setTimeout(function () {
        $(".js-settings-result").html('').removeClass('settings__success').removeClass('settings__error').fadeOut();
    }, 5000);
}

function addTrackerComment(id, e){

    var textarea = $(".js-comments-textarea");

    textarea.removeClass('add-model__error-border');

    var text = textarea.val();
    text = $.trim(text);
    textarea.val(text);

    if(text == ''){
        textarea.addClass('add-model__error-border');
    }

    $.ajax({
        type: "POST",
        url: Routing.generate('cabinet_tracker_item_comment_write', {id: id}),
        data: {text:text},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                $(".js-comments").html(data.html);
                textarea.val("");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Данная функция временно недоступна");
        }
    });
}

function ticketSetStatus(id, status){

    $.ajax({
        type: "POST",
        url: Routing.generate('cabinet_tracker_item_status_change', {id:id}),
        data: {status:status},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                $(".js-ticket-data").html(data.html);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Данная функция временно недоступна");
        }
    });
}