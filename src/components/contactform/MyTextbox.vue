<template>
  <div class="textbox" :class="{ 'has-error': hasError(name) }">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="8" md="6">
        <v-textarea
          :label="label"
          auto-grow
          outlined
          rows="1"
          row-height="15"
        ></v-textarea>
        <template v-if="hasError(name)">
          <div class="error-area" v-for="(error, i) in errors['name']" :key="i">
            {{ error }}
          </div>
        </template>
        </v-col>
      </v-row>
    </v-container>
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
::v-deep .v-label,
::v-deep textarea {
  font-size: .8em;
}
</style>
