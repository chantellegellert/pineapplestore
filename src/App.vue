<template>
  <v-app>
    <Header />
    <Sidebar />
    <transition name="slide">
      <router-view style="flex-grow : 1;"></router-view>
    </transition>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from '@/components/navigation/Header.vue';
import Sidebar from '@/components/navigation/Sidebar.vue';

@Component({
  components: {
    Header,
    Sidebar
  },
})
export default class App extends Vue {
  showNavigation = false;

  hideSidebar() {
    this.showNavigation = false;
  }
}
</script>
