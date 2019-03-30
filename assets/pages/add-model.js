function deleteMainImg(e){
    $(e).closest('.model-files__item').remove();
    $('.js-image-add-input').slideDown();
}

function deleteOtherFiles(e){
    $(e).closest('.model-files__item').remove();
}

function cropPhoto(points, zoom){
    if($(".js-crop-btn").hasClass('disabled')){
        return false;
    }
    $(".js-crop-btn").addClass('disabled');

    console.log(points, zoom);

    return;
    $.ajax({
        type        : "POST",
        url         : linkCrop,
        data:       {points:points, zoom: zoom, orientation:orientation},
        dataType: 'json',
        before: function(){

        },
        success     : function(data, status, object) {
            if (data.error) {
                $(".js-modal-error").html(data.error_text).slideDown();
                $(".js-modal-success").html("");
            }
            else {
                $(".js-avatar").attr('src',data.image + "?rand=" + getRandomInt(0,100000));
                $('#avatarModal').modal('hide');
                $(".js-avatar-error").html("");
                $(".js-avatar-success").html("Аватар успешно изменен");
            }
            $(".js-cropper-btn").html($(".js-cropper-btn").data('old-val')).removeClass('disabled');
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $(".js-modal-error").html("Корректировка фото временно недоступна").slideDown();
            $(".js-modal-success").html("");
            $(".js-cropper-btn").html($(".js-cropper-btn").data('old-val')).removeClass('disabled');
        }
    });
}

function cropImage() {
    $.fancybox({
        'href' : '#crop'
    });
}

function ajaxAddModelError(text) {
    /*alert(text);
    return;*/
    $(".js-add-model-result").html(text).removeClass('add-model__success').addClass('add-model__error').fadeIn();
    setTimeout(function () {
        $(".js-add-model-result").html('').removeClass('add-model__success').removeClass('add-model__error').fadeOut();
    }, 5000);
}


function addModel(){

    var form = $(".js-add-model-form");
    var submit = form.find("[type=submit]");
    submit.attr('data-old-val', submit.html()).html('Подождите...').prop('disabled', true);

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxAddModelError(data.error_text);
            }
            else {
                $(".js-add-model-btn").hide();
                $(".js-add-model-result").html('Модель добавлена, <a href="' + data.url + '">перейти к ее карточке</a>').removeClass('add-model__error').fadeIn();
                /*setTimeout(function () {
                    $(".js-add-model-result").html('').removeClass('add-model__success').removeClass('add-model__error').fadeOut();
                }, 5000);*/
            }
            submit.html(submit.attr('data-old-val')).prop('disabled', false);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxAddModelError("Добавление модели времено недоступно");
            submit.html(submit.attr('data-old-val')).prop('disabled', false);
        }
    });
}

function editModel(){

    var form = $(".js-add-model-form");
    var submit = form.find("[type=submit]");
    submit.attr('data-old-val', submit.html()).html('Подождите...');

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxAddModelError(data.error_text);
            }
            else {
                $(".js-add-model-result").html('Модель отредактирована').removeClass('add-model__error').fadeIn();
                setTimeout(function () {
                    $(".js-add-model-result").html('').removeClass('add-model__success').removeClass('add-model__error').fadeOut();
                }, 5000);
            }
            submit.html(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxAddModelError("Редактирование модели времено недоступно");
        }
    });
}