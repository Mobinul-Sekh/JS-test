$(".confirm").click(function () { 

    $(".cancel").removeClass("green");
    $(".update").removeClass("green");
    $(".pending").removeClass("green");
    $(this).addClass("green");

});
$(".cancel").click(function () { 

    $(".confirm").removeClass("green");
    $(".update").removeClass("green");
    $(".pending").removeClass("green");
    $(this).addClass("green");

});
$(".update").click(function () { 

    $(".cancel").removeClass("green");
    $(".confirm").removeClass("green");
    $(".pending").removeClass("green");
    $(this).addClass("green");

});
$(".pending").click(function () { 

    $(".cancel").removeClass("green");
    $(".update").removeClass("green");
    $(".confirm").removeClass("green");
    $(this).addClass("green");
    
});