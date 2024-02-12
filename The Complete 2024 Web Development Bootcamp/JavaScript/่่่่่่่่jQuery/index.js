let bigState = false;

$("h1").click(function(){
    if (bigState === false ){
        $("h1").removeClass("h1");
        $("h1").addClass("big-title margin-50");
        $("h1").text("Why u so clicky!");
        bigState = true;
        
    }else{
        $("h1").removeClass("big-title margin-50");
        $("h1").addClass("h1");
        $("h1").text("No More Clicky!")
        bigState = false;
    }
});


$(".button-1").click(function(){
    $("h1").css("color", "red");
    $(".button-1").prepend("<h1>OMG</h1>");
    $("h1").toggle();
});