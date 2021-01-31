<template>
  <v-row no-gutters>
    <v-col cols="50">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Show / Hide Columns
          </v-btn>
        </template>

        <v-list class="show_hide_list">
          <v-list-item v-for="col in columndefs" :key="col.field">
            <v-checkbox
              v-on:change="colChanged(col)"
              v-model="col.hide"
              :true-value="false"
              :false-value="true"
              :label="col.headerName"
            >
            </v-checkbox>
          </v-list-item>
        </v-list>
      </v-menu>
      <ag-grid-vue
        style="width: 100%; height: 500px;"
        class="ag-theme-alpine grid-body"
        :columnDefs="columndefs"
        :rowData="rowdata"
        :defaultColDef="defColDef"
        :gridOptions="gridOptions"
        @selection-changed="selectionChanged"
      >
      </ag-grid-vue>
    </v-col>

    <v-col cols="12" sm="4" v-if="selectedRow">
      <v-btn class="primary close" @click="close">Close</v-btn>
      <CardComponent :customer="selectedRow" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AgGridVue } from "ag-grid-vue";
import { ColDef, GridOptions, RowNode } from "ag-grid-community";

import { ICustomer } from "@/services/customer.service";
import CardComponent from "@/components/CardComponent.vue";

export const PAGE_SIZE = 20;

@Component({
  components: {
    AgGridVue,
    CardComponent,
  },
})
export default class GridComponent extends Vue {
  // readonly so can't be set by developer, ! is so typescript will allow it to go uninitialized
  @Prop() readonly rowdata!: ICustomer[];

  columndefs: ColDef[] = [
    { headerName: "ID", field: "id", hide: true, width: 150 },
    { headerName: "Created", field: "createdAt", hide: true, width: 150 },
    { headerName: "First Name", field: "first_name", hide: false, width: 150 },
    { headerName: "Last Name", field: "last_name", hide: false, width: 150 },
    {
      headerName: "Street Address",
      field: "street_address",
      hide: true,
      width: 150,
    },
    { headerName: "City", field: "city", hide: true, width: 150 },
    { headerName: "State", field: "state", hide: false, width: 150 },
    { headerName: "Country", field: "country", hide: false, width: 150 },
    { headerName: "Email", field: "email", hide: false, width: 250 },
    {
      headerName: "Phone Number",
      field: "phone_number",
      hide: true,
      width: 100,
    },
  ];
  selectedRow: any | null = null;

  defColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
  };

  gridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: PAGE_SIZE,
    cacheBlockSize: PAGE_SIZE,
    suppressCellSelection: true,
    rowSelection: "single", // crtl + click row to deselect
  };

  constructor() {
    super();
  }

  created() {}

  selectionChanged() {
    // We only ever allow 1 row to be selected
    this.selectedRow = this.gridOptions.api?.getSelectedRows()[0];
  }

  close() {
    this.gridOptions.api?.deselectAll();
  }

  colChanged(col: ColDef) {
    if (col.field)
      this.gridOptions.columnApi?.setColumnVisible(col.field, !col.hide);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show_hide_list {
  height: 200px;
}

.v-list-item {
  background: white;
}
</style>
