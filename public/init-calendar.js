document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      themeSystem: 'jquery-ui',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek'
      },
      buttonText: {
        today: 'today',
        month: 'month',
        agendaWeek: 'week',
        listWeek: 'list',
        day: 'day',
        prev: '<',
        next: '>',
      },
      displayEventTime: false, 
      editable: true,
      eventLimit: true,
      contentHeight: "auto",
      handleWindowResize: true,
      googleCalendarApiKey: 'AIzaSyAcWFi5XIFAY_L9Kkfh2fT46p_rFJyjDHA',
      
      eventSources: [
        {
          url: 'https://donboulton.com/events.data/',
          className: 'fc-event'
        },
        { 
          googleCalendarId: 'donboulton@bibwoe.com',
          className: 'gcalevent' 
        },
        { 
          googleCalendarId: 'en.usa#holiday@group.v.calendar.google.com',
          className: 'fc-event' 
        },
        { 
          googleCalendarId: 'ncaaf_24_%4fklahoma+%53ooners#sports@group.v.calendar.google.com',
          className: 'fc-event'
        }
      ],
      eventClick: function(arg) {

        window.open(arg.event.url, 'gcalevent', 'width=700,height=600');
        arg.jsEvent.preventDefault()
      },
      loading: function(bool) {
        document.getElementById('loading').style.display =
          bool ? 'block' : 'none';
      }
    });
    calendar.render();
  });