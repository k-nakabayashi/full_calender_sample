<template>
  <section>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="$router.back()">戻る</button>
    <div>
      <ul>
        <li><p>{{ this.eventData.title }}</p></li>
        <li><p>{{ this.eventData.start }}</p></li>
      </ul>
    </div>
  </section>
</template>

<script>

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
    constraint: 'businessHours',
    test: "sdasdas"
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
  layout: "auth",
  // auth: false,
  name: 'detail',
  components: {
  },
  data() {
    return {
      eventData: {
        title: "default",
        start: "default"
      }
    }
  },
  
  asyncData({params}){


    let targetData = {};
    for (let index = 0; index < Object.keys(INITIAL_EVENTS).length; ++ index) {
      if (INITIAL_EVENTS[index].id == params.id) {
        targetData = INITIAL_EVENTS[index];
        break;
      }
    }

    if (Object.keys(targetData).length < 1) {
      return {}

    } else {
      return {
        eventData: targetData
      }
    };
   
  },

  methods: {
   
  }
}
</script>

<style lang='scss' scoped>

</style>