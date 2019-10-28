<template>
  <div class="textbox" :class="{ 'has-error': hasError(name) }">
    <v-textarea
      v-model="currentVals.content"
      :label="label"
      auto-grow
      outlined
      rows="1"
      row-height="15"
      @input="onInput"
    >
      <template v-if="isRequired" v-slot:label>
        {{ label }}<span  class="required"> ※必須</span>
      </template>
    </v-textarea>
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
  name: 'MyTextbox',
  props: {
    name: String,
    label: String,
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      error: [],
    };
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
::v-deep .v-textarea {
  .v-label,
  textarea {
    font-size: 0.8em;
  }
  .v-text-field__details {
    display: none;
  }
  .theme--light.v-label {
    color: #d0d0d0;
  }
  .theme--light.v-text-field--outlined fieldset {
    transition: ease .6s;
  }
}
.has-error {
  ::v-deep .theme--light.v-text-field--outlined fieldset {
    border-color: #d16376;
  }
}
</style>
