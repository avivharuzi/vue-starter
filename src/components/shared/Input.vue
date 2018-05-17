<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input :type="type" v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
    class="form-control" :class="[size ? 'form-control-' + size : null, error ? 'is-invalid' : null]"
    :placeholder="label">
    <small v-if="message" class="form-text text-muted">{{ message }}</small>
    <div v-if="error" class="invalid-feedback">{{ error }}</div>
  </div>
</template>

<script>
  export default {
    props: ['label', 'type', 'value', 'size', 'message', 'error'],
    data () {
      return {
        type: 'text'
      }
    }
  }
</script>
