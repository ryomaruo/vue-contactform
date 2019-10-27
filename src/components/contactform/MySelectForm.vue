<template>
  <div class="select-from" :class="{ 'has-error': hasError(name) !== undefined }">
    <label class="block-label">
      <p class="label-txt">{{ label }}</p>
    </label>
    <select :name="name" v-model="currentVals[name]">
      <option value=""></option>
      <option v-for="(option, i) in options" :key="i" :value="option.val">
        {{ option.label }}
      </option>
    </select>
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
</style>
