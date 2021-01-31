<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    left
    permanent
    :mini-variant="miniVariant"
  >
    <v-list-item
      v-for="nav in sideNavigation"
      :key="nav.title"
      :to="{ name: nav.link }"
      link
      exact
    >
      <v-list-item-icon>
        <v-icon>{{ nav.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ nav.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <div
      class="expand-close"
      :class="miniVariant ? 'position-left' : 'position-right'"
    >
      <v-icon @click="miniVariant = !miniVariant">
        {{ miniVariant ? "arrow_right" : "arrow_left" }}
      </v-icon>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { RouteNames } from "@/router";
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Sidebar extends Vue {
  miniVariant = false;
  drawer = null;

  sideNavigation = [
    {
      title: "Home",
      icon: "home",
      link: RouteNames.Home,
    },
    {
      title: "Customer List Grid",
      icon: "mdi-chart-timeline-variant",
      link: RouteNames.GridView,
    },
    {
      title: "Customer List Card",
      icon: "mdi-animation",
      link: RouteNames.CardView,
    },
  ];
}
</script>

<style scoped lang="scss">
.expand-close {
  position: absolute;
  bottom: 16px;
}

.position-left {
  left: 16px;
}

.position-right {
  right: 16px;
}
</style>
