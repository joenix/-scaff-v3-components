<template>
  <vs-section class="condition">
    <template #footer>
      <vs-flex justify="end" v-if="buttonSubmit">
        <a-space>
          <a-button type="primary" html-type="submit" @click="submit" v-if="buttonSubmit">{{ buttonSubmit }}</a-button>
          <a-button type="default" html-type="reset" @click="reset" v-if="buttonReset">{{ buttonReset }}</a-button>
        </a-space>
      </vs-flex>
    </template>

    <http :api="api" :params="source" v-slot="{ data }" :immediate="false" :wait="false" ref="httpCondition">
      <a-form :model="source" :label-col="{ span: label }" ref="condition">
        <a-row :gutter="gutter">
          <template v-for="(field, key) in source">
            <a-col v-if="$slots[key] !== undefined" :span="6" :xs="{ span: 24 }" :sm="{ span: 12 }" :md="{ span: 8 }" :lg="{ span: 6 }" :xl="{ span: 6 }" :xxl="{ span: 4 }">
              <a-form-item :label="field.label">
                <slot :name="key" :field="field" />
              </a-form-item>
            </a-col>
          </template>
        </a-row>
      </a-form>
    </http>
  </vs-section>
</template>

<script>
export default {
  name: 'bs-condition',

  props: {
    api: {
      type: [String],
      default: '',
    },

    source: {
      type: [Object],
      default: {},
    },

    gutter: {
      type: [Number, Array, Object],
      default: [16, 16],
    },

    label: {
      type: [Number],
      default: 10,
    },

    buttonSubmit: {
      type: [String, Boolean],
      default: 'Submit',
    },

    buttonReset: {
      type: [String, Boolean],
      default: 'Reset',
    },
  },

  data() {
    return {
      params: {},
    };
  },

  watch: {
    source: {
      handler(data) {
        this.$emit('modify', (this.params = this.filter(this.source)));
      },

      deep: true,
      immediate: true,
    },
  },

  methods: {
    filter(data) {
      return this.$util.foreach(data, ({ value }) => value + '');
    },

    async submit() {
      if (!this.api) {
        return;
      }

      this.$emit('submit', await this.$refs.httpCondition.get(this.params));
    },

    reset() {
      this.$util.foreach(this.source, (field, key) => (field.value = ''));
      this.$refs.condition.resetFields();
    },
  },
};
</script>
