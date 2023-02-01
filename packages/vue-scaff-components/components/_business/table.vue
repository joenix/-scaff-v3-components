<template>
  <div class="table">
    <!-- Lister -->
    <a-table v-if="source.length" :row-key="selectionOptions.rowKey" :row-selection="{ ...selectionOptions }" :columns="headers" :dataSource="source" :pagination="pagination" :scroll="{ x: 'calc(480px + 50%)' }">
      <template #bodyCell="{ column, record, index }">
        <!-- Slots Operation -->
        <slot name="operation" v-if="column.dataIndex === `operation`" :data="record" :index="index" />
        <!-- Slots File Url -->
        <template v-else-if="column.dataIndex === `fileUrl`">
          <a-image :width="180" :src="record.fileUrl" v-if="record.filrUrl" />
          <file-image-outlined :style="{ fontSize: `48px`, color: `#555` }" v-else />
        </template>
        <!-- Slots Column -->
        <slot name="column" v-else :header="column" :data="record" :index="index" />
      </template>
    </a-table>

    <!-- Empty -->
    <a-empty v-else />
  </div>
</template>

<script>
export default {
  name: 'bs-table',

  props: {
    /**
     * 0 | false: MERGE
     * 1 | true:  OR
     * ======== ======= ========
     */
    mode: {
      type: [Number, Boolean],
      default: 0,
    },

    columns: {
      type: [Array],
      default: [],
    },

    source: {
      type: [Array],
      default: [],
    },

    selection: {
      type: [Object, null],
      default: null,
    },

    pagination: {
      type: [Object],
      default: {},
    },
  },

  computed: {
    headers() {
      // Mode OR
      if (this.columns.length && this.mode) {
        return this.columns;
      }

      // Auto create Headers from  Source
      const headers = this.$util.foreach(this.source[0], (value, key, index) => {
        return { title: key, dataIndex: key, key };
      });

      // Mode MERGE
      if (this.columns.length && !this.mode) {
        this.columns.forEach(column => {
          if (headers[column.key]) {
            headers[column.key] = Object.assign(headers[column.key], column);
          }
        });
      }

      // Slots Operation
      if (this.$slots.operation) {
        headers.operation = {
          dataIndex: 'operation',
          key: 'operation',
          title: 'operation',
        };
      }

      // New Headers
      return Object.values(headers);
    },
  },

  data() {
    return {
      // https://www.antdv.com/components/table-cn#rowSelection
      selectionOptions() {
        return {
          fixed: true,
          rowKey: record => record,
        };
      },
    };
  },

  created() {
    Object.assign(this.selectionOptions, this.selection);
  },
};
</script>
