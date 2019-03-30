function cookieAgree(){
    $.ajax({
        type        : "GET",
        url         : Routing.generate('cookie_agree'),
        dataType: 'json',
        before: function(){

        },
        success     : function(data, status, object) {
            $(".cookie-agree").slideUp();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
    });
}