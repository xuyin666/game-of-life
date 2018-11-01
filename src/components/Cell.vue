<template>
    <div class="cell" v-bind:class="{alive: isAlive}"></div>
</template>

<script>
    export default {
        name: 'Cell',
        props: {
            //message: String,
            isAlive: Boolean
        } 
    }
</script>

<style>
.cell {
  /* height: 10px;
  width: 10px;
  border: 1px solid black; */
  background-color: white;
}
.alive {
  background-color: black;
}
</style>
