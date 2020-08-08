<template>
  <div id="app">
    <!-- 按钮组件 -->
    <h3>button组件</h3>
    <div class="row">
      <eu-button
        disabled
        @click="fn"
      >默认按钮</eu-button>
      <eu-button type="primary">确认按钮</eu-button>
      <eu-button type="success">成功按钮</eu-button>
      <eu-button type="info">信息按钮</eu-button>
      <eu-button type="warning">警告按钮</eu-button>
      <eu-button type="danger">危险按钮</eu-button>
    </div>

    <div class="row">
      <eu-button plain>朴素按钮</eu-button>
      <eu-button
        plain
        type="primary"
      >确认按钮</eu-button>
      <eu-button
        plain
        type="success"
      >成功按钮</eu-button>
      <eu-button
        plain
        type="info"
      >信息按钮</eu-button>
      <eu-button
        plain
        type="warning"
      >警告按钮</eu-button>
      <eu-button
        plain
        type="danger"
      >危险按钮</eu-button>
    </div>

    <div class="row">
      <eu-button round>圆角按钮</eu-button>
      <eu-button
        round
        type="primary"
      >确认按钮</eu-button>
      <eu-button
        round
        type="success"
      >成功按钮</eu-button>
      <eu-button
        round
        type="info"
      >信息按钮</eu-button>
      <eu-button
        round
        type="warning"
      >警告按钮</eu-button>
      <eu-button
        round
        type="danger"
      >危险按钮</eu-button>
    </div>

    <div class="row">
      <eu-button
        circle
        icon="el-icon-search"
      ></eu-button>
      <eu-button
        circle
        icon="el-icon-edit"
        type="primary"
      ></eu-button>
      <eu-button
        circle
        icon="el-icon-check"
        type="success"
      ></eu-button>
      <eu-button
        circle
        icon="el-icon-message"
        type="info"
      ></eu-button>
      <eu-button
        circle
        icon="el-icon-star-off"
        type="warning"
      ></eu-button>
      <eu-button
        circle
        icon="el-icon-delete"
        type="danger"
      ></eu-button>
    </div>

    <div class="row">
      <eu-button
        disabled
        @click="fn"
        icon="el-icon-search"
      >搜索</eu-button>
      <eu-button
        disabled
        plain
        type="primary"
        icon="el-icon-edit"
      >编辑</eu-button>
      <eu-button
        disabled
        plain
        type="success"
        icon="el-icon-check"
      >确认</eu-button>
      <eu-button
        disabled
        type="info"
        plain
        icon="el-icon-message"
      >信息</eu-button>
      <eu-button
        disabled
        plain
        type="warning"
        icon="el-icon-star-off"
      >警告</eu-button>
      <eu-button
        disabled
        plain
        type="danger"
        icon="el-icon-delete"
      >删除</eu-button>
    </div>
    <hr>
    <!-- diglog组件 -->
    <!-- 控制头部的提示文本 -->
    <h3>diglog组件</h3>
    <div>
      <eu-dialog title="你好"></eu-dialog>
      <eu-dialog>
        <template v-slot:title>
          <h3>我是标题</h3>
        </template>
      </eu-dialog>
      <!-- 控制样式和文本和底部以及显示和隐藏 -->
      <eu-button
        type="primary"
        @click="visible=true"
      >点击弹出模态框</eu-button>
      <eu-dialog
        width="40%"
        top='50px'
        :visible.sync="visible"
      >
        <p>都看到这里了，给个面试机会吧</p>
        <!-- <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul> -->
        <template v-slot:footer>
          <eu-button
            type="primary"
            @click="visible=false"
          >确定</eu-button>
          <eu-button @click="visible=false">取消</eu-button>
        </template>
      </eu-dialog>
    </div>
    <hr>

    <!-- input组件 -->
    <h3>input组件</h3>
    <div>
      <br>

      <!-- 清空vaule功能 -->
      <div>
        用户名：<eu-input
          placeholder="请输入用户名"
          clearable
          v-model="username"
        ></eu-input>
      </div>
      <br>
      <div>
        密码： <eu-input
          type="password"
          placeholder="请输入密码"
          show-password
          v-model="password"
        ></eu-input>
      </div>
    </div>
    <hr>

    <!-- switch组件 -->
    <h3>switch组件</h3>
    <div>
      <eu-switch v-model="active1"></eu-switch>
      <br>
      <eu-switch
        v-model="active"
        active-color="red"
        inactive-color="green"
        name='username'
      ></eu-switch>
      <hr>
    </div><br>

    <!-- radio组件 -->
    <h3>radio组件</h3>
    <eu-radio
      label="1"
      v-model="gender"
    >男</eu-radio>
    <eu-radio
      label="0"
      v-model="gender"
    >女</eu-radio>

    <!-- radio-group -->
    <eu-radio-group v-model="gender">
      <eu-radio label="1">男</eu-radio>
      <eu-radio label="0">女</eu-radio>
    </eu-radio-group>
    <br>

    <!-- checkbox -->
    <h3>checkbox组件</h3>
    <eu-checkbox v-model="active2">是否选中</eu-checkbox>

    <eu-checkbox-group v-model="hobby">
      <eu-checkbox label="吃饭"></eu-checkbox>
      <eu-checkbox label="睡觉"></eu-checkbox>
      <eu-checkbox label="打豆豆"></eu-checkbox>

    </eu-checkbox-group><br>
    <h3>form组件</h3>
    <eu-form
      :model="model"
      label-width='100px'
    >
      <eu-form-item label="用户名">
        <eu-input
          placeholder="请输入用户名"
          v-model="model.username"
        ></eu-input>
      </eu-form-item>

      <eu-form-item label="选择">
        <eu-switch v-model="model.active"></eu-switch>
      </eu-form-item>
    </eu-form>
  </div>
</template>

<script>


export default {
  data() {
    return{
      visible: false,
      username: '',
      password:'',
      // active: false,
      gender:'1',
      active:false,
      active1:false,
      active2:false,
      hobby:['抽烟',"喝酒","烫头"],
      model:{
        active:true,
        username:''
      }
      }
  },
  methods:{
    fn(){
      console.log(123);
    },
    close(value){
      this.visible=value
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .eu-button {
    margin-right: 20px;
  }
}
</style>

