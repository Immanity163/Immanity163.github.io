var image;

$(document).ready(function () {
    //window popup
    $(".photo-element").click(function (event) {
        event.preventDefault();
        $("#Overlay").fadeIn(200, function () {
            $("#Window")
                .css("display", "block")
                .animate({ opacity: 1 }, 150);
        });
        image = $(this).children("img").prop("src")
        $("#Content").attr("src",image);
    });

    //window fade when user clicks on overlay
    $("#Overlay").click(function fade () {
        $("#Window").animate({ opacity: 0 }, 150, function () {
            $(this).css("display", "none");
            $("#Overlay").fadeOut(200);
        });
    });
  
    //window fade when pressed esc
    $(document).keydown(function(e) {
         if (e.key === "Escape") { 
            $("#Window").animate({ opacity: 0 },150, function () {
            $(this).css("display", "none");
            $("#Overlay").fadeOut(200);
        });
        }
    });
});