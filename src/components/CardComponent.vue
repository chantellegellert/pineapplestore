<template>
  <v-card>
    <v-list-item v-for="key in Object.keys(customer)" :key="key.id">
      <v-row no-gutters>
        <v-col md="40">
          <strong class="capitalize pr-10">{{ key }}</strong>
        </v-col>
        <v-col md="60">
          {{ customer[key] }}
        </v-col>
      </v-row>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ICustomer } from "@/services/customer.service";

@Component
export default class CardComponent extends Vue {
  @Prop() readonly customer!: ICustomer;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.capitalize {
  text-transform: capitalize;
}
</style>
