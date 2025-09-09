 document.addEventListener("DOMContentLoaded", function() {
     const timerElement = document.getElementById('refresh-timer');
     const initialSeconds = 5 * 60; // 5 minutes
     let totalSeconds = initialSeconds;

     const countdown = setInterval(() => {
         const minutes = Math.floor(totalSeconds / 60);
         const seconds = totalSeconds % 60;

         timerElement.textContent = `${minutes} min ${seconds} secs.`;

         if (totalSeconds <= 0) {
             // Restart the timer
             totalSeconds = initialSeconds;
             return;
         }

         totalSeconds--;
     }, 1000);
 });