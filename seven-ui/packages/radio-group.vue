<template>
  <div class="eu-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'EuRadioGroup',
    provide(){
        return{
            radioGroup:this
        }
    },
    props: {
        value: null
    }

}
</script>

<style>
</style>