<template>

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


</template>

<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { formatDate } from '@fullcalendar/vue';

import { mapGetters } from 'vuex';

export default {
  layout: "auth",
  name: 'calender',
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },


  data(context) {
    let _event_list = context.$store.state.event_list.data;

    return {
      event_list: _event_list,
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
        initialEvents: _event_list, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,


        // select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        // eventsSet: this.handleEvents,

        eventRender: function(info) {
          // info.el.onclick=function(){
          //   // alert(info.event.id + ":" + info.event.extendedProps.status);
          // };
        }
      }
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

      let target = clickInfo.event;

      this.$store.dispatch('event/act', {
        title: target.title,
        start: target.start,
        extendedProps: target._def.extendedProps
      });

      this.$router.push(`/detail`)
    },
    handleEvents(events) {
      this.currentEvents = events
    },
    logout() {
      this.$auth.logout();
    }
  }
}
</script>

<style lang='css' scoped>
/* h2 {
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
b { //used for event dates/times
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
.fc { //the calendar root
  max-width: 1100px;
  margin: 0 auto;
} */
</style>