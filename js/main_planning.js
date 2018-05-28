$(document).ready(function() {

    /*-------------------------------Получить дату и день недели. Записать в области----------------------------------*/
    // Текущая дата
    let day = new Date();
    let in_week = new Date();
    let day_of_week = new Date();
    let timezone = new Date();
    // Текущая дата
    $('#current_date').text(day.getDate());

    // Записать даты в боковой блок
    /*console.log(in_week.setDate(day.getDate()));
    $('#first_day h2 .day').text(in_week.setDate(day.getDate()));
    $('#second_day h2 .day').text(in_week.setDate(day.getDate() + 1));
    $('#third_day h2 .day').text(in_week.setDate(day.getDate() + 2));
    $('#fourth_day h2 .day').text(in_week.setDate(day.getDate() + 3));
    $('#fifth_day h2 .day').text(in_week.setDate(day.getDate() + 4));
    $('#sixth_day h2 .day').text(in_week.setDate(day.getDate() + 5));
    $('#seventh_day h2 .day').text(in_week.setDate(day.getDate() + 6));*/

    // День недели
    if (day_of_week.getDay() === 0) {
        $('#current_week_day').text('Воскресение');
        $('#seventh_day h2 .day_of_the_week').text('Вс');
    }
    else if (day_of_week.getDay() === 1) {
        $('#current_week_day').text('Понедельник');
        $('#first_day h2 .day_of_the_week').text('Пн');
    }
    else if (day_of_week.getDay() === 2) {
        $('#current_week_day').text('Вторник');
        $('#second_day h2 .day_of_the_week').text('Вт');
    }
    else if (day_of_week.getDay() === 3) {
        $('#current_week_day').text('Среда');
        $('#third_day h2 .day_of_the_week').text('Ср');
    }
    else if (day_of_week.getDay() === 4) {
        $('#current_week_day').text('Четверг');
        $('#fourth_day h2 .day_of_the_week').text('Чт');
    }
    else if (day_of_week.getDay() === 5) {
        $('#current_week_day').text('Пятница');
        $('#fifth_day h2 .day_of_the_week').text('Пт');
    }
    else {
        $('#current_week_day').text('Суббота');
        $('#sixth_day h2 .day_of_the_week').text('Сб');
    }

    // Часовой пояс
    if (-timezone.getTimezoneOffset() / 60 > 0) {
        $('#timezone').text('GTM +' + (-timezone.getTimezoneOffset() / 60))
    }
    else {
        $('#timezone').text('GTM -' + (-timezone.getTimezoneOffset() / 60))
    }

});