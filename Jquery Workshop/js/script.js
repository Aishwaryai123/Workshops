let a;
$(document).ready(function() {



    $('button.login').click(function() {

        var name = $("input[name='username']").val();
        var password = $("input[name='password']").val();
        console.log(name)
        console.log(password)

        $.ajax({
            url: "https://mocki.io/v1/98d1ef5f-a330-4a92-b8d1-8df23031c8d5",
            type: "GET",
            success: function(result) {

                if (result.username == name && result.password == password) {
                    $(location).attr('href', "../html/registration.html")
                }
            },
            error: function(error) {
                alert("something went wrong")
            }
        })
    })

})