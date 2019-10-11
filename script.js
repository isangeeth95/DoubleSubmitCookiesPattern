$(document).ready(function(){
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

 	// alert(getCookie("token"));

    var token = getCookie("token");
    var el = '<input id="login-username" type="hidden" class="form-control" name="csrf_token" value="test">';
    $('#hidden_input').append(el);
    $('[name="csrf_token"]').val(token);
});

