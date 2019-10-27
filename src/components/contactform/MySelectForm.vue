<template>
  <div class="select-from" :class="{ 'has-error': hasError(name) }">
    <label class="block-label">
      <p class="label-txt">{{ label }}</p>
      <v-select
        v-model="currentVals.service"
        :items="options"
        item-text="label"
        item-value="val"
        single-line
      ></v-select>
      <template v-if="hasError(name)">
        <div class="error-area" v-for="(error, i) in errors[name]" :key="i">
          {{ error }}
        </div>
      </template>
    </label>
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
};
</script>

<style scoped lang="scss">
::v-deep .v-input {
  font-size: .8rem;
  .v-text-field__details {
    display: none;
  }
  &.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
      border-color: rgb(188, 188, 188);
  }
}
</style>
