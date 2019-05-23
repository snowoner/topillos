<template>
  <v-container grid-list-md text-xs-center class="backGround">
    <v-layout row wrap>
      <v-flex xs12>
        <h1>HIT THE TOPILLO</h1>
        <!-- <v-img class="elevation-5" width="100%" src="./logo.jpg"></v-img> -->
      </v-flex>
      <v-flex v-if="score>=300">
          <h1>You WIn</h1>
      </v-flex>
      <v-flex xs12 v-if="score<300">
        <h2>Your score: {{score}}</h2>
      </v-flex>
       <v-flex xs12 v-if="score>300">
        <h2>Le quitaste la silla al topillo</h2>
      </v-flex>
      <v-flex xs12>
        <Board v-if="score<300"></Board>
      </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import Board from "../components/Board.vue";

export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  computed: {
    score() {
      return this.$store.getters.getScore;
    }
  },
  created() {
    
  },
  components: {
    Board
  }
}
</script>

<style>
.backGround {
  background-color: goldenrod;
}
</style>
