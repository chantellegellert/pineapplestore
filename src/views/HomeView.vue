<template>
  <v-main class="home">
    <div class="card">
      <v-card>
        <div class="welcome-text">Welcome :)</div>
      </v-card>
    </div>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  background-image: url(../assets/pineapple.jpg);
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  .card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: calc(100% - 20%);
    .welcome-text {
      z-index: 1;
      padding: 40px;
      width: 100%;
      max-width: 400px;
      position: relative;
      border-radius: 6px;
      text-align: center;
    }
  }
}
</style>
