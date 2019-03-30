function sendUserMessage(id, e){

    var textarea = $(".js-comments-textarea");
    var btn = $(e);

    textarea.removeClass('add-model__error-border');

    var text = textarea.val();
    text = $.trim(text);
    textarea.val(text);

    if(text == ''){
        textarea.addClass('add-model__error-border');
        return;
    }

    btn.attr('data-old-val', btn.html()).html('Идет отправка...').prop('disabled', true);

    $.ajax({
        type: "POST",
        url: Routing.generate('messages_dialog_write', {id:id}),
        data: {text:text},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                $(".js-messages").html(data.html);
                textarea.val("");
            }
            btn.html(btn.attr('data-old-val')).prop('disabled', false);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Данная функция временно недоступна");
            btn.html(btn.attr('data-old-val')).prop('disabled', false);
        }
    });
}