//Set date we are counting down to
var countDownDate = new Date("Aug 30, 2022 15:00:00");

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


giveaway.textContent = `giveaway ends on ${countDownDate}`;

var x = setInterval(function(){

    //Get today's date and time
    var now = new Date().getTime();

    //Find the distance between now and the countdown date
    var distance = countDownDate - now;

    //Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Display the result in the element with id
    const values = [days, hours, minutes, seconds];
    function format(item){
        return item
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });
    
    // If the count down is over, write some text
    if(distance < 0){
        clearInterval(x);
        deadline.innerHTML = `<h4 class="expired"> Sorry, this giveaway has expired!</h4>`;
    }
});
