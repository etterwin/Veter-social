$(document).ready(function() {

    /*-------------------------------Получить дату и день недели. Записать в области----------------------------------*/
    // Текущая дата
    let day = new Date();
    let day_of_week = new Date();
    let timezone = new Date();
    // Текущая дата
    $('#current_date').text(day.getDate());

    // Записать даты в боковой блок
    $('#first_day h2 .day').text(day.getDate());
    $('#second_day h2 .day').text();
    $('#third_day h2 .day').text();
    $('#fourth_day h2 .day').text();
    $('#fifth_day h2 .day').text();
    $('#sixth_day h2 .day').text();
    $('#seventh_day h2 .day').text();

    // День недели
    if (day_of_week.getDay() === 0) {
        $('#current_week_day').text('Воскресение');
        $('#first_day h2 .day_of_the_week').text('Вт');

        $('#second_day h2 .day_of_the_week').text('Ср');
        $('#third_day h2 .day_of_the_week').text('Чт');
        $('#fourth_day h2 .day_of_the_week').text('Пт');
        $('#fifth_day h2 .day_of_the_week').text('Сб');
        $('#sixth_day h2 .day_of_the_week').text('Вс');
        $('#seventh_day h2 .day_of_the_week').text('Пн');
    }
    else if (day_of_week.getDay() === 1) {
        $('#current_week_day').text('Понедельник');
        $('#first_day h2 .day_of_the_week').text('Пн');

        $('#second_day h2 .day_of_the_week').text('Вт');
        $('#third_day h2 .day_of_the_week').text('Ср');
        $('#fourth_day h2 .day_of_the_week').text('Чт');
        $('#fifth_day h2 .day_of_the_week').text('Пт');
        $('#sixth_day h2 .day_of_the_week').text('Сб');
        $('#seventh_day h2 .day_of_the_week').text('Вс');
    }
    else if (day_of_week.getDay() === 2) {
        $('#current_week_day').text('Вторник');
        $('#first_day h2 .day_of_the_week').text('Вт');

        $('#second_day h2 .day_of_the_week').text('Ср');
        $('#third_day h2 .day_of_the_week').text('Чт');
        $('#fourth_day h2 .day_of_the_week').text('Пт');
        $('#fifth_day h2 .day_of_the_week').text('Сб');
        $('#sixth_day h2 .day_of_the_week').text('Вс');
        $('#seventh_day h2 .day_of_the_week').text('Пн');
    }
    else if (day_of_week.getDay() === 3) {
        $('#current_week_day').text('Среда');
        $('#first_day h2 .day_of_the_week').text('Ср');

        $('#second_day h2 .day_of_the_week').text('Чт');
        $('#third_day h2 .day_of_the_week').text('Пт');
        $('#fourth_day h2 .day_of_the_week').text('Сб');
        $('#fifth_day h2 .day_of_the_week').text('Вс');
        $('#sixth_day h2 .day_of_the_week').text('Пн');
        $('#seventh_day h2 .day_of_the_week').text('Вт');
    }
    else if (day_of_week.getDay() === 4) {
        $('#current_week_day').text('Четверг');
        $('#first_day h2 .day_of_the_week').text('Чт');

        $('#second_day h2 .day_of_the_week').text('Пт');
        $('#third_day h2 .day_of_the_week').text('Сб');
        $('#fourth_day h2 .day_of_the_week').text('Вс');
        $('#fifth_day h2 .day_of_the_week').text('Пн');
        $('#sixth_day h2 .day_of_the_week').text('Вт');
        $('#seventh_day h2 .day_of_the_week').text('Ср');
    }
    else if (day_of_week.getDay() === 5) {
        $('#current_week_day').text('Пятница');
        $('#first_day h2 .day_of_the_week').text('Пт');

        $('#second_day h2 .day_of_the_week').text('Сб');
        $('#third_day h2 .day_of_the_week').text('Вс');
        $('#fourth_day h2 .day_of_the_week').text('Пн');
        $('#fifth_day h2 .day_of_the_week').text('Вт');
        $('#sixth_day h2 .day_of_the_week').text('Ср');
        $('#seventh_day h2 .day_of_the_week').text('Чт');
    }
    else {
        $('#current_week_day').text('Суббота');
        $('#first_day h2 .day_of_the_week').text('Сб');

        $('#second_day h2 .day_of_the_week').text('Вс');
        $('#third_day h2 .day_of_the_week').text('Пн');
        $('#fourth_day h2 .day_of_the_week').text('Вт');
        $('#fifth_day h2 .day_of_the_week').text('Ср');
        $('#sixth_day h2 .day_of_the_week').text('Чт');
        $('#seventh_day h2 .day_of_the_week').text('Пт');
    }

    // Часовой пояс
    if (-timezone.getTimezoneOffset() / 60 > 0) {
        $('#timezone').text('GTM +' + (-timezone.getTimezoneOffset() / 60))
    }
    else {
        $('#timezone').text('GTM -' + (-timezone.getTimezoneOffset() / 60))
    }

    // Задача, задач и задачи - изменение склонения слова в зависимости от количества задач
    $(function () {
        $('ul.planning-list.more').each(function () {
            let summ_of_children = $(this).children('.planning-item').length; // Берем длинну массива
            let elem_of_num = summ_of_children.toString().split('', -1); // Приводим к строке и делим массив по символам

            if (summ_of_children === 0) {
                $(this).siblings('label').text('(Нет задач)');
            }
            else if (summ_of_children === 1) {
                $(this).siblings('label').text('(' + summ_of_children + ' задача)');
            }
            else if (summ_of_children === 2 || summ_of_children === 3 || summ_of_children === 4) {
                $(this).siblings('label').text('(' + summ_of_children + ' задачи)');
            }
            else if (elem_of_num.length > 1) {
                if (elem_of_num[elem_of_num.length - 1] === '2' && summ_of_children !== 12) {
                    $(this).siblings('label').text('(' + summ_of_children + ' задачи)');
                }
                else if (elem_of_num[elem_of_num.length - 1] === '3' && summ_of_children !== 13) {
                    $(this).siblings('label').text('(' + summ_of_children + ' задачи)');
                }
                else if (elem_of_num[elem_of_num.length - 1] === '4' && summ_of_children !== 14) {
                    $(this).siblings('label').text('(' + summ_of_children + ' задачи)');
                }
                else {
                    $(this).siblings('label').text('(' + summ_of_children + ' задач)');
                }
            }
            else {
                $(this).siblings('label').text('(' + summ_of_children + ' задач)');
            }
        });
    });

});