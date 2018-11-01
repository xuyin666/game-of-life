<template>
  <div id="game-of-life">
    <div class="logos-container">
      <img class="theodo-logo" alt="Theodo logo" src="./assets/theodo-logo.png">
      <img class="vue-logo" alt="Vue logo" src="./assets/vue-logo.png">
    </div>
    <Grid :rowsCount="rowsCount" :columnsCount="columnsCount" :aliveCellsMap="aliveCellsMap" :toggleCellStateCallback="toggleCellState"/>
    <div class="buttons-container">
      <button @click="randomizeMap()">Random</button>
    </div>
    <div class="buttons-container">
      <button @click="updateAliveCellsMap()">Life Game</button>
    </div>
    <div class="buttons-container">
      <button @click="clearMap()">Clear All</button>
    </div>
  </div>
</template>

<script>

import Cell from "./components/Cell.vue";
import Grid from "./components/Grid.vue";
import { getRandomizedMap } from './services/grid-helper.js'
import {getNextMap} from './services/conway-rules'

const initialRowsCount = 10;

export default {
  name: 'GameOfLife',
  components: {
    Cell,
    Grid
  },
  data(){
    return {
      rowsCount : initialRowsCount,
      aliveCellsMap: {
        R6C15: true,
        R9C13: true,
        R8C18: true,
        R1C25: true,
        R5C24: true,
      }
    }
  },
  computed: {
    columnsCount: function() {
      return 3 * this.rowsCount;
    }
  },
  methods: {
    randomizeMap: function () {
      this.aliveCellsMap = getRandomizedMap(this.rowsCount, this.columnsCount)
    },
    toggleCellState: function (cellId) {
      const newAliveCellsMap = { ...this.aliveCellsMap }

      newAliveCellsMap[cellId] = !this.aliveCellsMap[cellId]

      this.aliveCellsMap = newAliveCellsMap
    },
    updateAliveCellsMap: function () {
      this.aliveCellsMap = getNextMap(this.rowsCount, this.columnsCount, this.aliveCellsMap)
    },
    clearMap: function() {
      this.aliveCellsMap = {}
    }
  }
}
</script>

<style>
#game-of-life {
  padding: 60px 40px;
  position: relative;
}
.logos-container {
  position: absolute;
  top: 0;
  left: 0;
}
.logos-container img {
  height: 40px;
}
.logos-container img + img {
  margin-left: 5px;
}

.buttons-container {
  margin: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: rgba(220, 220, 220, 0.5);
}
</style>
