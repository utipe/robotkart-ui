<template>
  <div class="hello">
    <HeaderUI />
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-8">
                <CreateRobot @createRobot="robotCreate($event)" />
            </div>
            <div class="col-md-4">
                <DisplayBoard :numberOfRobots="numberOfRobots" @getAllRobots="getAllRobots()" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <RobotsUI v-if="robots.length > 0" :robots="robots" />
    </div>
  </div>
</template>

<script>
import HeaderUI from './HeaderUI.vue'
import CreateRobot from './CreateRobot.vue'
import DisplayBoard from './DisplayBoard.vue'
import RobotsUI from './RobotsUI.vue'
import { getAllRobots, createRobot } from '../services/api.js'
export default {
  name: 'DashboardUI',
  components: {
    HeaderUI,
    CreateRobot,
    DisplayBoard,
    RobotsUI
  },
  data() {
      return {
          robots: [],
          numberOfRobots: 0
      }
  },
  methods: {
    getAllRobots() {
      getAllRobots().then(response => {
        console.log(response)
        this.robots = response
        this.numberOfRobots = this.robots.length
      })
    },
    robotCreate(data) {
      console.log('data:::', data)
      createRobot(data).then(response => {
        console.log(response);
        this.getAllRobots();
      });
    }
  },
  mounted () {
    this.getAllRobots();
  }
}
</script>