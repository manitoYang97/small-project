<template>
  <label
    class="eu-radio"
    :class="{'is-checked'
    :label===model}"
  >
    <!-- 小圆 -->
    <span class="eu-radio__input">
      <span class="eu-radio__inner"></span>
      <input
        class="eu-radio__original"
        type="radio"
        :value="label"
        v-model="model"
        :name="name"
      >
    </span>
    <span class="eu-radio__label">
      <slot></slot>
      <!-- 如果没有插槽，就显示label -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
name :'EuRadio',
  inject:{
    radioGroup:{
      default:''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup?this.radioGroup.value:this.value
      },
      set (value) {
        this.$emit('input', value)
       this.isGroup?this.radioGroup.$emit('input',value):this.$emit('input',value)
      }
    },
    isGroup(){
      return !!this.radioGroup
    }
  },
props: {
    label: {
        type: [String,Number,Boolean],
        default: ''
    },
    value: null,
    name: {
        type: String,
        default: ''
    }
}
}
</script>

<style lang="scss">
.eu-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .eu-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .eu-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    .eu-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .eu-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.eu-radio.is-checked {
  .eu-radio__input {
    .eu-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .eu-radio__label {
    color: #409eff;
  }
}
</style>