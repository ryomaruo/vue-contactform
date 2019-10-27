<template>
  <div class="checkbox">
    <p-check :name="name" color="success" v-model="currentVals[name]">{{ label }}</p-check>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MyCheckbox',
  components: {},
  props: {
    name: String,
    label: String,
  },
  computed: {
    ...mapState('contactform', ['currentVals']),
  },
};
</script>

<style scoped lang="scss">
::v-deep label {
  font-size: .8em;
}
</style>
