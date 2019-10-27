<template>
  <div class="input-form" :class="{ 'has-error': hasError(name) }">
    <label class="block-label">
      <p class="label-txt">{{ label }}</p>
      <input
        type="text"
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
    name: String,
    label: String,
    placeholder: String,
  },
  computed: {
    ...mapState('contactform', ['currentVals', 'errors']),
    ...mapGetters('contactform', ['hasError']),
  },
  methods: {
    ...mapActions('contactform', ['validate']),
    onInput() {
      this.validate(this.name);
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

.input:focus + .line-box .line {
  width: 100%;
}

</style>
