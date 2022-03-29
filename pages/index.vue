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
function createEventId() {
  return String(eventGuid++)
}
const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: '木材１',
    start: '2022-03-03T13:00:00',
    end: '2022-03-04T13:00:00',
    constraint: 'businessHours'
  },
  {
    id: createEventId(),
    title: '木材2',
    start: '2022-03-13T11:00:00',
    constraint: 'availableForMeeting', // defined below
    color: '#257e4a'
  },
  {
    id: createEventId(),
    title: '木材3',
    start: '2022-03-18',
    end: '2022-03-20'
  },
  {
    id: createEventId(),
    title: '人工芝1',
    start: '2022-03-29T20:00:00'
  },

  {
    id: createEventId(),
    title: '人工芝2',
    groupId: 'availableForMeeting',
    start: '2022-03-11T10:00:00',
    end: '2022-03-11T16:00:00',
    rendering: 'background'
  },
  {
    id: createEventId(),
    title: '人工芝3',
    groupId: 'availableForMeeting',
    start: '2022-03-13T10:00:00',
    end: '2022-03-13T16:00:00',
    rendering: 'background'
  },

  {
    id: createEventId(),
    title: '梱包材1',
    start: '2022-03-24',
    end: '2022-03-28',
    overlap: false,
    rendering: 'background',
    color: '#ff9f89'
  },
  {
    id: createEventId(),
    title: '梱包材2',
    start: '2022-03-06',
    end: '2022-03-08',
    overlap: false,
    rendering: 'background',
    color: '#ff9f89'
  }
];



export default {
  name: 'calender',
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        locale: 'ja',
        timeZone: 'Asia/Tokyo',
        buttonIcons: false,
        eventTimeFormat: { hour: 'numeric', minute: '2-digit' },
        defaultView: 'listMonth',
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

        eventRender: function(info) {
          info.el.onclick=function(){
            // alert(info.event.id + ":" + info.event.extendedProps.status);
          };
        }
      },


    }
  },

  methods: {
    
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },
    handleDateSelect(selectInfo) {
      let title = prompt('新しくイベント入力')
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
      // this.$router.push({ path: `detail/${clickInfo.event.id}` })
      let target = clickInfo.event;
      // console.log(target);
      // return;
      this.$router.push({ path: '/detail' , 
        query: { 
          it: target.id,
          title: target.title, 
          startStr: target.startStr, 
        }}
      );

    },
    handleEvents(events) {
      this.currentEvents = events
    },
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