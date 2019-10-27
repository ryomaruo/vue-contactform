<template>
  <div class="input-form" :class="{ 'has-error': hasError(name) }">
    <label class="block-label">
      <p class="label-txt">{{ label }}</p>
      <input type="text" v-model="currentVals[name]" class="input" :placeholder="placeholder">
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
  },
  mounted() {
    this.validate(this.name);
  },
};
</script>

<style scoped lang="scss">
.block-label {
  width: 50%;
  display: block;
  position: relative;
  margin: 30px auto;
  label {
    margin: 0 10px;
  }
}
label {
  font-size: 1em;
}
.input {
  width: 100%;
  padding-top: 10px;
  font-size: 1.2em;
  color: #707070;
  background: transparent;
  border: none;
  outline: none;
  &::placeholder {
    color: #d0d0d0;
    font-size: .7em;
  }
}

.line-box {
  position: relative;
  width: 100%;
  height: 2px;
  background: #BCBCBC;
  .line {
    position: absolute;
    width: 0%;
    height: 2px;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    background: #8BC34A;
    transition: ease .6s;
  }
}

.input:focus + .line-box .line {
  width: 100%;
}

.label-txt {
  position: absolute;
  top: -1em;
  padding: 2px;
  font-family: sans-serif;
  font-size: .8em;
  letter-spacing: 1px;
  color: #b1b1b1;
  transition: ease .3s;
}

.has-error {
  .error-area {
    font-size: .8em;
  }
  .error-area,
  .label-txt {
    color: #d16376;
  }
  .line-box {
    background: #d16376;
  }
}
</style>
