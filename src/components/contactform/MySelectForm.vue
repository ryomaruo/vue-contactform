<template>
  <div class="select-from" :class="{ 'has-error': hasError(name) !== undefined }">
    <label class="block-label">
      <p class="label-txt">{{ label }}</p>
      <v-select
        v-model="currentVals.service"
        :items="options"
        item-text="label"
        item-value="val"
        single-line
      ></v-select>
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
  name: 'MySelectForm',
  props: {
    name: String,
    options: Array,
    label: String,
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
.v-input {
  font-size: .8rem;
}
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
</style>
