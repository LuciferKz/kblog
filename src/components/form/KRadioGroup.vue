<template>
  <section class="k-radio-group">
    <k-radio
      v-for="opt in options"
      v-model="currentValue"
      :key="opt.value"
      :data="opt">
    </k-radio>
  </section>
</template>

<script>
import KRadio from './KRadio'

export default {
  name: 'KRadioGroup',
  components: { KRadio },
  props: {
    options: Array,
    value: String
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
  .k-radio-group .k-radio {
    margin-bottom: 10px;
  }
</style>
