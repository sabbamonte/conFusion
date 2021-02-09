$(document).ready(function() {
    $("#mycarousel").carousel({interval: 2000})
    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        }
        else {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        }
        
    })
    $('#reserve').click(function() {
        $('#reserveModal').modal('show');
    })
    $('#close-reserve').click(function() {
        $('#reserveModal').modal('hide');
    })

    $('#login-button').click(function() {
        $('#loginModal').modal('show');
    })
    $('#close-login').click(function() {
        $('#loginModal').modal('hide');
    })
    
})