<script setup lang="ts">
import { ResponsiveTableType } from "../types/responsive_table.type";

// crédits to Nathan Shumate: https://codepen.io/nzshumate/pen/YRZPqW

const props = defineProps<{
  table: ResponsiveTableType;
}>();
</script>

<template>
  <div id="table-demo" class="container">
    <table :class="{ 'with-header': props.table.bold }">
      <tr
        v-for="(row, x) in props.table.matrix"
        :key="x"
        :class="{ bold: props.table.bold && x === 0 }"
      >
        <td
          v-for="(col, y) in row"
          :key="y"
          :data-th="props.table.matrix[0][y].value"
        >
          {{ col.value }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="scss">
$breakpoint: 600px;

#table-demo {
  margin: 20px 0;

  table {
    min-width: 300px;
    width: 100%;
    height: fit-content;
    overflow-y: scroll;
    border-collapse: collapse;
    border: 1px solid #000;

    tr {
      td {
        border: 1px solid #000;
        padding: 10px;
      }
    }

    .bold {
      border-right: none;
      border-left: none;
      background: #ddd;
      border-bottom: 1px solid #c2c2c2;
      td {
        background: #fff;
        color: #000;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }

  .with-header {
    tr:first-of-type {
      td {
        border: none;
      }
    }

    @media (max-width: $breakpoint) {
      tr:first-of-type {
        display: none;
      }

      tr {
        border: 1px solid #000;

        td {
          display: block;
          border: none;
          text-align: left;

          &:first-child {
            padding-top: 0.5em;
          }

          &:last-child {
            padding-bottom: 0.5em;
          }

          &:before {
            content: attr(data-th) ": ";
            font-weight: bold;
            display: block;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
