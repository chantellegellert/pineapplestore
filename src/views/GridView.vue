<template>
  <v-main>
    <v-btn class="primary" @click="updateCustomers()">Refresh Data</v-btn>
    <GridComponent :rowdata="customers" />
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { customerService } from "@/services/customer.service";
import GridComponent from "../components/GridComponent.vue";

@Component({
  components: {
    GridComponent,
  },
})
export default class GridView extends Vue {
  created() {
    customerService.updateCustomers();
  }

  get customers() {
    return customerService.customers;
  }

  async updateCustomers() {
    await customerService.updateCustomers();
  }
}
</script>

<style scoped></style>
