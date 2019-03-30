function ajaxModeration() {

    var form = $(".js-moderation-form");

    var submit = form.find('input[type=submit]');
    submit.attr('data-old-val', submit.val()).val('Подождите...');

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
                $.fancybox.close();
                $(".js-model-info").html(data.modelInfo);
            }
            submit.val(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxWithdrawalError("Модерация временно недоступна");
            submit.val(submit.attr('data-old-val'));
        }
    });
}

function ajaxBlock() {

    var form = $(".js-block-form");

    var submit = form.find('input[type=submit]');
    submit.attr('data-old-val', submit.val()).val('Подождите...');

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
                $.fancybox.close();
                $(".js-model-info").html(data.modelInfo);
            }
            submit.val(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxWithdrawalError("Модерация временно недоступна");
            submit.val(submit.attr('data-old-val'));
        }
    });
}

function ajaxAdminComment() {

    var form = $(".js-commentAdmin-form");

    var submit = form.find('input[type=submit]');
    submit.attr('data-old-val', submit.val()).val('Подождите...');

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
                $.fancybox.close();
                $(".js-model-info").html(data.modelInfo);
                $(".js-commentAdmin-textarea").val('');
            }
            submit.val(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxWithdrawalError("Модерация временно недоступна");
            submit.val(submit.attr('data-old-val'));
        }
    });
}

function ajaxUnBlock() {

    var form = $(".js-unblock-form");

    var submit = form.find('input[type=submit]');
    submit.attr('data-old-val', submit.val()).val('Подождите...');

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
                $.fancybox.close();
                $(".js-model-info").html(data.modelInfo);
            }
            submit.val(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxWithdrawalError("Модерация временно недоступна");
            submit.val(submit.attr('data-old-val'));
        }
    });
}

function ajaxDelete() {

    var form = $(".js-delete-form");

    var submit = form.find('input[type=submit]');
    submit.attr('data-old-val', submit.val()).val('Подождите...');

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
                $.fancybox.close();
                $(".js-model-info").html(data.modelInfo);
            }
            submit.val(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxWithdrawalError("Удаление временно недоступно");
            submit.val(submit.attr('data-old-val'));
        }
    });
}