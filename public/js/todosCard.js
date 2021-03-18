window.addEventListener('DOMContentLoaded', () => {
    const object = $('.done')
    const overdue = $('#todoOverdue')
    const today = $('#todoToday')
    const nextWeek = $('#todoNextWeek')

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
                const todo = result['newTodo']

                const date = new Date()
                if(todo) {
                    if (todo['date'] < date) {
                        console.log(overdue)
                    } else if (todo['date'] = date) {
                        let card = `<div class="bg-light">
                        <h6 class="text-center">
                            <a href="">` + todo['title'] + `</a>
                        </h6>
                        <p>
                            <span class="badge badge-secondary">` + todo['objectAddress'] + `</span>
                            <span class="badge badge-secondary">` + todo['date'].toLocaleDateString() + `</span>
                            <span style="color: green" data-toggle="tooltip" data-placement="right"
                                  title="Oznacz jako wykonane">
                                <i data-todo="` + todo['id'] + `" class="done far fa-square"></i>
                            </span>
                        </p>
                    </div>`
                        today.append(card)
                        console.log(today)
                    } else if (todo['date'] > date) {
                        console.log(nextWeek)
                    }
                    console.log(todo)
                }
                setTimeout(function () {
                    selected.parent().parent().parent().empty()
                }, 2000)

            });
    })
})
