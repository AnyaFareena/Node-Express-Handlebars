$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $('input[name="burger_name"]').val().trim(),
            devoured: 0
        };
        $.ajax("/api/burgers", {
            method: "POST",
            url: "/api/burgers",
            data: newBurger
        })
            .then(function (data) {
                location.reload();
            });
    });

    $(".devoured").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newDevoured = $(this).data("devoured");
        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        })
            .then(function () {
                location.reload();
            });
    });

    $(".deleteBurger").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id, ("data-id"));
        $.ajax("/api/burgers/" + id, {
            mtype: 'DELETE',
            url: "/api/burgers/delete" + id,
            data: { id: id }
        })
    });
});
