<template>
  <div class="eu-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
name:'EuCheckboxGroup',
props:{
    value:{
        type:Array
    }
},
provide(){
    return {
        CheckboxGroup:this
    }
}
}
</script>

<style>
</style>