$(document).ready(function () {
    console.log("jQuery is ready!");
    $("#ready-msg").text("jQuery is ready!");

    $("#change-style").click(function () {
        $("#by-id").css("color", "red");
        $(".by-class").css("font-weight", "bold");
        $("p").last().html("<b>Changed by Tag Selector</b>");
    });

    $("#hide").click(() => $("#text").hide());
    $("#show").click(() => $("#text").show());
    $("#toggle").click(() => $("#text").toggle());

    $("#fadeOut").click(() => $("#fade-img").fadeOut());
    $("#fadeIn").click(() => $("#fade-img").fadeIn());
    $("#fadeToggle").click(() => $("#fade-img").fadeToggle());

    $("#slideToggle").click(() => $("#panel").slideToggle());

    $("#add").click(() => $("#list").append("<li>New Item</li>"));
    $("#remove").click(() => $("#list li").last().remove());

    $("#name, #email").on("keyup", function () {
        let name = $("#name").val();
        let email = $("#email").val();
        $("#live-output").text("Name: " + name + " | Email: " + email);
    });

    $("#animate").click(function () {
        $("#animate-box").animate({
            width: "200px",
            height: "200px",
            left: "100px"
        }, 1000);
    });
});
