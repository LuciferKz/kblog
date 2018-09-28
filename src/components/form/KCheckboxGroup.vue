<template>
  <section class="k-checkbox-group">
    <k-checkbox
      v-for="opt in options"
      v-model="currentValue"
      :key="opt.value"
      :data="opt">
    </k-checkbox>
  </section>
</template>

<script>
import KCheckbox from './KCheckbox'

export default {
  name: 'KCheckboxGroup',
  components: { KCheckbox },
  props: {
    options: Array,
    value: Array
  },
  data () {
    return {
    }
  },
  computed: {
    currentValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style>
  .k-checkbox-group .k-checkbox {
    margin-bottom: 10px;
  }
</style>
