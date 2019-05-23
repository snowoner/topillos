<template>
<v-container grid-list-md text-xs-center class="backGround">
    <v-layout row wrap>
      <v-flex xs12>
        <h1>HIT THE TOPILLO</h1>
        <!-- <v-img class="elevation-5" width="100%" src="./logo.jpg"></v-img> -->
      </v-flex>
      <v-flex xs12>
        <v-btn @click="goGame">Start The Game</v-btn>
      </v-flex>
    </v-layout>
</v-container>
 
</template>

<script>


  export default {
    data() {
      return {
        
      }
    },
    methods: {
      goGame(){
        this.$router.replace("/game");
      }
    },
    components: {
 
    }
  }
</script>
<style>
.backGround {
  background-color: goldenrod;
}
</style>

