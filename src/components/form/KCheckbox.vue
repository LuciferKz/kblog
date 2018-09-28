<template>
  <section class="k-checkbox">
    <label>
      <input type="checkbox" v-model="currentValue" :value="data.value" >
      <i class="checkbox"></i>
      {{ data.text }}
    </label>
  </section>
</template>

<script>
export default {
  name: 'KCheckbox',
  props: {
    data: Object,
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
  .k-checkbox {
    position: relative;
    padding-left: 20px;
    font-size: 14px;
  }

  .k-checkbox label {
    cursor: pointer;
  }

  .k-checkbox input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .k-checkbox .checkbox {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -7px;
    width: 14px;
    height: 14px;
    border: 1px solid #eff1f2;
    border-radius: 2px;
  }

  .k-checkbox .checkbox::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 10px;
    height: 10px;
    background-color: #333;
    border-radius: 2px;
    transform: scale(0.1);
    transition: all .2s ease;
    opacity: 0;
  }

  .k-checkbox input:checked + .checkbox::before {
    transform: scale(1);
    opacity: 1;
  }
</style>
