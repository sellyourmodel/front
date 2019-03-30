function catalogFilter(){

    var form = $(".js-category-filter");

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                $(".js-products").html(data.html);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Фильтр временно недоступен");
        }
    });
}