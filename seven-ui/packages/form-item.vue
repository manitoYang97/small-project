<template>
  <div class="eu-form-item">
    <label
      class="eu-form-item__label"
      :style="{width:this.Form.labelWidth}"
    >{{label}} </label>
    <div class="eu-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
name:'EuFormItem',
props:{
    label:String
},
inject:['Form']
}
</script>

<style lang="scss">
.eu-form-item {
  margin-bottom: 25px;
  .eu-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .eu-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>