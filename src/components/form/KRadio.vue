<template>
  <section class="k-radio">
    <label>
      <input type="radio" v-model="currentValue" :value="data.value" >
      <i class="radio"></i>
      {{ data.text }}
    </label>
  </section>
</template>

<script>
export default {
  name: 'KRadio',
  props: {
    data: Object,
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
  .k-radio {
    position: relative;
    padding-left: 20px;
    font-size: 14px;
  }

  .k-radio label {
    cursor: pointer;
  }

  .k-radio input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .k-radio .radio {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -7px;
    width: 14px;
    height: 14px;
    border: 1px solid #eff1f2;
    border-radius: 8px;
  }

  .k-radio .radio::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 10px;
    height: 10px;
    background-color: #333;
    border-radius: 6px;
    transform: scale(0.1);
    transition: all .2s ease;
    opacity: 0;
  }

  .k-radio input:checked + .radio::before {
    transform: scale(1);
    opacity: 1;
  }
</style>
