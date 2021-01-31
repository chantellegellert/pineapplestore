<template>
  <v-main>
    <v-container grid-list-md>
      Note: Card Component is the detailed view for Graph View and reutilized here as
      a demonstration of resuable components.
      <!-- Refresh is to pull from backend again to see if data stale -->
      <v-btn class="primary" @click="updateCustomers()">Refresh Data</v-btn>

      <div>
        <label class="pr-10" 
          ><input type="radio" v-model="sortCategory" value="Firstname" /> First
          Name</label
        >
        <label class="pr-10" 
          ><input type="radio" v-model="sortCategory" value="Lastname" /> Last
          Name</label
        >
        <label class="pr-10" 
          ><input type="radio" v-model="sortCategory" value="None" />
          None</label
        >
      </div>

      <v-text-field label="Filter on all fields" v-model="filterText"></v-text-field>
    </v-container>

    <v-row no-gutters>
      <v-col md="4" v-for="c in customerViewList" :key="c.id">
        <v-container grid-list-md>
          <CardComponent :customer="c" />
        </v-container>
      </v-col>
    </v-row>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { customerService, ICustomer } from "@/services/customer.service";
import CardComponent from "../components/CardComponent.vue";

@Component({
  components: {
    CardComponent,
  },
})
export default class CardView extends Vue {
  sortCategory: string = "None";
  filterText: string = "";

  async created() {
    /* each time enter the view want to get latest customer data */
    await this.updateCustomers();
  }

  get customers() {
    return customerService.customers;
  }

  get customerViewList() {
    if (!this.customers || this.customers.length === 0)
      return this.customers;

    // filter first, also gets new array so sorting here doesn't affect cached version
    const keys = Object.keys(this.customers[0]);
    const filterText = this.filterText.toLowerCase();

    const filtered = this.customers.filter((c: ICustomer) => {
      return keys.some((k) => {
        //@ts-ignore typescript would rather ICustomer have a indexable interface to be able to do this
        let value: string = c[k]?.toString().toLowerCase();
        return value?.includes(filterText);
      })
    });

    if (this.sortCategory === "Firstname") {
      return this.sortByFirstName(filtered);
    } else if (this.sortCategory === "Lastname") {
      return this.sortByLastName(filtered);
    } else {
      return filtered;
    }
  }

  sortByFirstName(customers: ICustomer[]) {
    return customers.sort((a: ICustomer, b: ICustomer) =>
      a.first_name > b.first_name ? 1 : -1
    );
  }

  sortByLastName(customers: ICustomer[]) {
    return customers.sort((a: ICustomer, b: ICustomer) =>
      a.last_name > b.last_name ? 1 : -1
    );
  }

  async updateCustomers() {
    await customerService.updateCustomers();
  }
}
</script>

<style scoped></style>
