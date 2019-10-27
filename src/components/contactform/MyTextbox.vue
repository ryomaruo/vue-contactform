<template>
  <div class="textbox" :class="{ 'has-error': hasError(name) }">
    <label class="block-label">
      <p class="label-txt">{{ label }}</p>
      <textarea :v-model="currentVals[name]" class="input"></textarea>
      <div class="line-box">
      <div class="line"></div>
      </div>
      <template v-if="hasError(name)">
        <div class="error-area" v-for="(error, i) in errors['name']" :key="i">
          {{ error }}
        </div>
      </template>
    </label>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'MyTextbox',
  props: {
    name: String,
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
</style>
