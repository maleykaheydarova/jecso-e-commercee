$(document).ready(function() {
    var targetDateString = "2023-12-31T04:33:30"; 
    var targetDate = new Date(targetDateString);

    $(".count-down").countdown(targetDate, function(event) {
        $(this).find(".count-day .number").text(event.strftime('%D'));
        $(this).find(".count-hour .number").text(event.strftime('%H'));
        $(this).find(".count-min .number").text(event.strftime('%M'));
        $(this).find(".count-sec .number").text(event.strftime('%S'));
    });
});
