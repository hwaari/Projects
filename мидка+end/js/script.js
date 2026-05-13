$(document).ready(function () {
    $("#contact-form").on("submit", function (e) {
        e.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let pass = $("#password").val();
        let confirm = $("#confirm-password").val();

        if (!name || !email || !pass || !confirm) {
            $("#modal-text").text("Заполните все поля!");
            $("#infoModal").modal("show");
            return;
        }

        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            $("#modal-text").text("Введите корректный email!");
            $("#infoModal").modal("show");
            return;
        }

        if (pass !== confirm) {
            $("#modal-text").text("Пароли не совпадают!");
            $("#infoModal").modal("show");
            return;
        }

        $("#modal-text").text("Форма успешно отправлена!");
        $("#infoModal").modal("show");

        $("#contact-form")[0].reset();
    });

    $(".filter-btn").on("click", function () {
        let filter = $(this).data("filter");

        if (filter === "all") {
            $(".gallery-img").fadeIn();
        } else {
            $(".gallery-img").fadeOut(200);
            $("." + filter).fadeIn(400);
        }
    });

    $(".open-modal").on("click", function () {
        $("#modal-text").text("Это тестовое сообщение!");
        $("#infoModal").modal("show");
    });
});
