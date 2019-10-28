<template>
  <div class="input-form" :class="{ 'has-error': hasError(name) }">
    <label class="block-label">
      <p class="label-txt">
        {{ label }}
        <span v-if="isRequired" class="required"> ※必須</span>
      </p>
      <input
        :type="type"
        class="input"
        v-model="currentVals[name]"
        :placeholder="placeholder"
        @input="onInput">
      <div class="line-box">
        <div class="line"></div>
      </div>
    </label>
    <template v-if="hasError(name)">
      <div class="error-area" v-for="(error, i) in errors[name]" :key="i">
        {{ error }}
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'MyInputForm',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: String,
    label: String,
    placeholder: String,
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState('contactform', ['currentVals', 'errors']),
    ...mapGetters('contactform', ['hasError']),
  },
  methods: {
    ...mapActions('contactform', ['validate']),

    onInput(e) {
      this.validate(this.name);
      this.$emit('oninput', e);
    },
  },
};
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  margin-top: 10px;
  font-size: .8em;
  color: #707070;
  background: transparent;
  border: none;
  outline: none;
  &::placeholder {
    color: #d0d0d0;
  }
}

.line-box {
  position: relative;
  width: 100%;
  height: 1px;
  background: #BCBCBC;
  .line {
    position: absolute;
    width: 0%;
    height: 1px;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    background: #1976d2;
    transition: ease .6s;
  }
}

.has-error {
  .line {
    width: 100%;
    background: #d16376;
  }
}

.input:focus + .line-box .line {
  width: 100%;
}
// type=numberのすスピンボタン非表示
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance:textfield;
}
</style>
