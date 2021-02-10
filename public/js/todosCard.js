window.addEventListener('DOMContentLoaded', () => {
    const object = $('.done')

    object.on('click', function (e) {
        const selected = $(this)
        const todoId = selected.attr("data-todo")
        $.ajax({
            url: `/pl/todo/close/${todoId}`,
            type: "GET",
        })
            .done(function (result) {
                selected.removeClass("far fa-square")
                    .addClass("far fa-check-square")
                setTimeout(function () {
                    selected.parent().parent().parent().empty()
                }, 2000)

            });
    })
})
