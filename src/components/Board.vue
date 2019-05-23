<template>
  <v-container grid-list-md text-xs-center xs12>
    <v-layout class="center">
      <v-flex class="recuadro center" id="1"></v-flex>
      <v-flex class="recuadro center" id="2"></v-flex>
      <v-flex class="recuadro center" id="3"></v-flex>
    </v-layout>
    <v-layout class="center">
      <v-flex class="recuadro center" id="4"></v-flex>
      <v-flex class="recuadro center" id="5"></v-flex>
      <v-flex class="recuadro center" id="6"></v-flex>
    </v-layout>
    <v-layout class="center">
      <v-flex class="recuadro center" id="7"></v-flex>
      <v-flex class="recuadro center" id="8"></v-flex>
      <v-flex class="recuadro center" id="9"></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    setClickFunction() {
      for (let i = 0; i < 9; i++) {
        let div = document.getElementById(i + 1);
        div.addEventListener("click", this.addEvent);
      }
    },
    setClickFunction2() {
      document.addEventListener(
        "click",
        event => {
          // console.log("yE");
          // // If the clicked element doesn't have the right selector, bail
          // if (!event.target.classList.includes("active")) return;

          // // Don't follow the link
          // event.preventDefault();

          // // Log the clicked element in the console
          // console.log(event.target);
          // console.log(event.target.id);
          // console.log(event.target.classList);
          if(event.target.classList.value.includes("active")){
            this.$store.commit("add50");
          }
          else {
            this.$store.commit("add1");
          }

        },
        false
      );
    },
    addPoint() {
 
    },
    addEvent() {
     
      let num = Math.floor(Math.random() * 9 + 1);
      let div2 = document.getElementById(num);
      this.change(div2);
      for (let i = 0; i < 9; i++) {
        if (i + 1 != num) {
          this.remove(i + 1);
        }
      }
    },
    change(div) {
      div.classList.add("active");
    },
    remove(num) {
      let div = document.getElementById(num);

      div.classList.remove("active");
    }
  },
  mounted() {
    this.setClickFunction();
    this.setClickFunction2();
  }
};
</script>

<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.recuadro {
  border: 1px solid black;
  background-color: green;
  height: 100px;
}
.active {
  background-image: url("../../public/descarga.jpg");
  background-position: center;
  background-size: cover;
}
</style>
