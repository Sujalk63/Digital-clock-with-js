function digitalClock() {
    
    const displayTime= document.querySelector("#displayTime")
    const currentDate = new Date();

    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;

    displayTime.innerHTML = timeString;



}
digitalClock()
setInterval(digitalClock, 1000);

function calendarDisplay()
{
    const calendar = document.querySelector("#calendar")
    const currentDate = new Date();

    const day = currentDate.getDate();
    const dayOfWeek = currentDate.toLocaleString('default', { weekday: 'long' });
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    calendar.innerHTML = `${dayOfWeek}, ${month} ${day}, ${year}`;

}
calendarDisplay()

setInterval(calendarDisplay, 10000)
