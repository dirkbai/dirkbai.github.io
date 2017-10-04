var alert = document.querySelectorAll('.alert .close_button');

for (var i = 0; i < alert.length; i++) {
  alert[i].addEventListener("click", function(e){
     alert[$('.alert .close_button').index(this)].parentElement.style.display = 'none';
  });
}

Chart.defaults.global.legend.display = false;

var ctx = document.getElementById('traffic_chart_hourly').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["5min", "10min", "20min", "30min", "40min", "45min", "55min"],
        datasets: [{
            backgroundColor: '#B4527F',
            borderColor: '#B42867',
            data: [0.5, 1.45, 5.10, 2, 7.2, 0.20, 6.30],
        }]
    },

    // Configuration options go here
    options: {

    }
});

var ctx = document.getElementById('traffic_chart_daily').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["8am", "10am", "12pm", "1pm", "3pm", "5pm", "8pm", "10pm", "11pm"],
        datasets: [{
            backgroundColor: '#2E7581',
            borderColor: '#2A5F67',
            data: [0.5, 0.9, 5.10, 2.5, 7.2, 10.20, 8.30, 10.5, 2.5],
        }]
    },

    // Configuration options go here
    options: {

    }
});

var ctx = document.getElementById('traffic_chart_weekly').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Mon", "Tus", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            backgroundColor: '#B4527F',
            borderColor: '#B42867',
            data: [0.5, 10.45, 1.10, 2.5, 8.2, 6.20, 8.30],
        }]
    },

    // Configuration options go here
    options: {

    }
});

var ctx = document.getElementById('traffic_chart_monthly').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct","Nov","Dec"],
        datasets: [{
            backgroundColor: '#B4527F',
            borderColor: '#B42867',
            data: [8.5, 1.45, 11.10, 8.5, 4.2, 9.20, 8.30, 5.40, 4.30, 0.5, 2.5, 3.0],
        }]
    },

    // Configuration options go here
    options: {

    }
});

var ctx = document.getElementById('daily_traffic_chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["8am", "10am", "12pm", "1pm", "3pm", "5pm", "8pm"],
        datasets: [{
            backgroundColor: '#2A5F67',
            borderColor: '#B42867',
            data: [200, 50, 250, 300, 156, 232, 80],
        }]
    },

    // Configuration options go here
    options: {

    }
});


var ctx = document.getElementById('mobile_users_chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            backgroundColor: ['#2A5F67','#B42867', '#C0B76B'],
            data: [200, 50, 250],
        }]
    },

    // Configuration options go here
    options: {

    }
});

    // Chart Font
Chart.defaults.global.defaultFontFamily = 'Titillium Web';


var focusBtn = document.getElementById('focus_default').focus();

const chartHourly = document.getElementById('traffic_chart_hourly');
const chartDaily = document.getElementById('traffic_chart_daily');
const chartWeekly = document.getElementById('traffic_chart_weekly');
const chartMonthly = document.getElementById('traffic_chart_monthly');
var chartBtn = document.querySelectorAll('.menu_btn');

chartHourly.style.display='none';
chartDaily.style.display='none';
chartMonthly.style.display='none';

var chartsMain = document.querySelectorAll('.main_traffic_charts');

for (var i = 0; i < chartBtn.length; i++) {
  chartBtn[i].index = i;
  chartBtn[i].addEventListener("click", function(e){
     for (var i = 0; i < chartBtn.length; i++) {
       chartsMain[i].style.display = 'none';
     }
     chartsMain[this.index].style.display = 'flex';

  });
}

//
// ------------------------- Submit Button

var submitBtn = document.getElementById('submit_btn');
var userSearch = document.getElementById('search_user');


const confirmationMessage = document.getElementById('confirmation');
const errorMessage = document.getElementById('error');

submitBtn.addEventListener("click", function(e){
 e.preventDefault();


   // Message User elements
   const messageForm = $('#message_user_form');
   const messageForUser = document.getElementById('message_for_user');
   const messageSent = $('message-sent');
   const messageError = $('message-error');
   const sendBtn = $('#submit_btn');
   // Get Input and Textarea values
   let userName = userSearch.value;
   let userMessage = messageForUser.value;

   // Confirmation
   let sentDialogHtml = '';
   let systemNotice = '';
   // Create a sent or error confirmation based on conditions
   if (userName.length > 0 && userMessage.length > 0) {
     // Sent notice
    confirmation.style.display = 'flex';
   } else {
     // Error notice
     errorMessage.style.display = 'flex';
   }

});


// ------------------------- Lokal Storrage

let mailNotifications = $('#e-mail-notification-switch');
let settingProfilePublic = $('#public-switch');
let selectTimezone = $('#select_timezone');

$('#save-btn').on('click', (e) => {
  e.preventDefault();

  // Variables to store setting values
  let mailNotificationsStatus = mailNotifications.prop('checked');
  let profileStatus = settingProfilePublic.prop('checked');
  let timezoneValue = selectTimezone.val();
  //Set LocalStorage keys and values
  localStorage.setItem('notifications', JSON.stringify(mailNotificationsStatus));
  localStorage.setItem('profile', JSON.stringify(profileStatus));
  localStorage.setItem('timezone', JSON.stringify(timezoneValue));
});

// Click event to reset settings and remove localStorage
$('#cancel-btn').on('click', () => {
  localStorage.clear();
});

$(window).on("load", () => {
  // Call function to check if localStorage exists
  if (supportsLocalStorage() )  {
    // If localStorage exists, retrieve settings values and set to variables below
    let mailNotificationsStatus = JSON.parse(localStorage.getItem('notifications'));
    let profileStatus = JSON.parse(localStorage.getItem('profile'));
    let timezoneValue = JSON.parse(localStorage.getItem('timezone'));
    // Set toggle switches and select field to retrieved values
    mailNotifications.prop('checked', mailNotificationsStatus);
    settingProfilePublic.prop('checked', profileStatus);
    selectTimezone.val(timezoneValue);
  }
});

let supportsLocalStorage = () => {
  try {
    return 'localStorage' in window && window.localStorage !== null;
  } catch (e) {
    return false;
  }
};


// -------------- Dorpdown

var dropBtn = document.getElementById("dropbtn");

dropBtn.addEventListener('click', () => {
    var dropDwn = document.getElementById("myDropdown")
    dropDwn.classList.toggle("show");
});
