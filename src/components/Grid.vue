<template>
  <div class="grid__container" :style="`--rows:${rowsCount}; --columns:${columnsCount};`">
    <Cell v-for="number in cellsCount" :key="number" :isAlive="isCellAlive(number)" @click.native="toggleCellState((number))"></Cell>
  </div>
</template>

<script>
    import Cell from './Cell.vue';
    import { getCellIdFromIndex } from "../services/grid-helper.js"
    export default {
        name: "Grid",
        components: { Cell },
        props: {
            rowsCount: {
                type: Number, 
                required: true,
            },
            columnsCount: {
                type: Number,
                required: true 
            },
            aliveCellsMap: {
                type: Object
            },
            toggleCellStateCallback: {
                type: Function
            }
        },
        computed: {
            cellsCount: function() {
                return this.rowsCount * this.columnsCount;
            }
        },
        methods: {
            isCellAlive: function(index) {
                let cellId = getCellIdFromIndex(index, this.columnsCount)
                return this.aliveCellsMap[cellId] === true;
                // return this.aliveCellsMap[index] !== null;
            },
            // getIndex: function(index) {
            //     // console.log(getCellIdFromIndex(index, this.columnsCount));
            //     return getCellIdFromIndex(index, this.columnsCount)
            // },
            toggleCellState: function(index) {
                this.toggleCellStateCallback(getCellIdFromIndex(index, this.columnsCount));
            }

        }
    }
</script>

<style>
.grid__container {
  width: 90vw;
  height: 30vw;
  margin: auto;
  display: grid;
  border: solid 1px black;
  background-color: black;
  grid-gap: 1px;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
}
</style>