/*---timer---*/
document.addEventListener("DOMContentLoaded", function (event) {
    var fullTime = new Date().getTime() + 41100000; 
    $('.countdown-container').countdown(fullTime, function (event) {
        $(this).html(event.strftime(
            '<span class="time time_hours">%H</span>'
            + '<span class="time time_minutes">%M</span>'
            + '<span class="time time_seconds">%S</span>'));
    })});

/*---header---*/

var options = {
  offset: '#showHere'
}

var header = new Headhesive('.header', options);



