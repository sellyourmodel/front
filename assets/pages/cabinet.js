/*jQuery(function ($) {
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Пред',
        nextText: 'След',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
});*/


function saveSettings(){

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
        ajaxAddSettingsError("Заполните все обязательные поля");
        return false;
    }

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxAddSettingsError(data.error_text);
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
                $(".js-settings-result").html("Профиль обновлен").addClass('settings__success').removeClass('settings__error').fadeIn();
                setTimeout(function () {
                    $(".js-settings-result").html('').removeClass('settings__success').removeClass('settings__error').fadeOut();
                }, 5000);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxAddSettingsError("Редактирование профиля времено недоступено");
        }
    });
}

function ajaxAddSettingsError(text) {
    /*alert(text);
    return;*/
    $(".js-settings-result").html(text).removeClass('settings__success').addClass('settings__error').fadeIn();
    setTimeout(function () {
        $(".js-settings-result").html('').removeClass('settings__success').removeClass('settings__error').fadeOut();
    }, 5000);
}

$(document).ready(function() {
    $(".js-buy-count").keydown(function(event) {
        // Разрешаем: backspace, delete, tab и escape
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // Ничего не делаем
            return;
        }
        else {
            // Обеждаемся, что это цифра, и останавливаем событие keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    });
});