<template>

   <div class='demo-app'>
    <div class='demo-app-sidebar'>
      <div class='demo-app-sidebar-section'>
        <h2>Instructions</h2>
        <ul>
          <li>Select dates and you will be prompted to create a new event</li>
          <li>Drag, drop, and resize events</li>
          <li>Click an event to delete it</li>
        </ul>
      </div>
      <div class='demo-app-sidebar-section'>
        <label>
          <input
            type='checkbox'
            :checked='calendarOptions.weekends'
            @change='handleWeekendsToggle'
          />
          toggle weekends
        </label>
      </div>
    
    </div>

   <div class='demo-app-main'>
      <FullCalendar
        class='demo-app-calendar'
        :options='calendarOptions'
      >
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>


  </div>
</template>

<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import { formatDate } from '@fullcalendar/vue';

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // 

const INITIAL_EVENTS = [
  {
    title: 'Business Lunch',
    start: '2022-03-03T13:00:00',
    constraint: 'businessHours'
  },
  {
    title: 'Meeting',
    start: '2022-03-13T11:00:00',
    constraint: 'availableForMeeting', // defined below
    color: '#257e4a'
  },
  {
    title: 'Conference',
    start: '2022-03-18',
    end: '2022-03-20'
  },
  {
    title: 'Party',
    start: '2022-03-29T20:00:00'
  },

  // areas where "Meeting" must be dropped
  {
    groupId: 'availableForMeeting',
    start: '2022-03-11T10:00:00',
    end: '2022-03-11T16:00:00',
    rendering: 'background'
  },
  {
    groupId: 'availableForMeeting',
    start: '2022-03-13T10:00:00',
    end: '2022-03-13T16:00:00',
    rendering: 'background'
  },

  // red areas where no events can be dropped
  {
    start: '2022-03-24',
    end: '2022-03-28',
    overlap: false,
    rendering: 'background',
    color: '#ff9f89'
  },
  {
    start: '2022-03-06',
    end: '2022-03-08',
    overlap: false,
    rendering: 'background',
    color: '#ff9f89'
  }
];

function createEventId() {
  return String(eventGuid++)
}

export default {
  name: 'calender',
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        locale: 'ja',
        timeZone: 'Asia/Tokyo',
        buttonIcons: false,
        eventTimeFormat: { hour: 'numeric', minute: '2-digit' },
        defaultView: 'listMonth',
      },


    }
  },

  methods: {
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },
    handleDateSelect(selectInfo) {
      let title = prompt('Please enter a new title for your event')
      let calendarApi = selectInfo.view.calendar
      calendarApi.unselect() // clear date selection
      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
    },
    handleEventClick(clickInfo) {
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    },
    handleEvents(events) {
      this.currentEvents = events
    }
  }
}
</script>

<style lang='css' scoped>
h2 {
  margin: 0;
  font-size: 16px;
}
ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}
li {
  margin: 1.5em 0;
  padding: 0;
}
b { /* used for event dates/times */
  margin-right: 3px;
}
.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}
.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}
.demo-app-sidebar-section {
  padding: 2em;
}
.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}
.fc { /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}
</style>