<template>
  <main :class="width === 'full' ? 'container-fluid' : 'container'">
    <div class="row" :class="'justify-content-' + align">
      <slot></slot>
    </div>
  </main>
</template>

<script>
  export default {
    props: ['align', 'width'],
    data () {
      return {
        align: 'start',
        width: null
      }
    }
  }
</script>
