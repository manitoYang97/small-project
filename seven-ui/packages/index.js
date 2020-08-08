// 导入颜色选择器组件
// import ColorPicker from './color-picker'
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox-group'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import Form from './form'
import FormItem from './form-item'
import './fonts/font.scss'
// 存储组件列表
const components = [
        // ColorPicker,
        Button,
        Dialog,
        Input,
        Checkbox,
        CheckboxGroup,
        Radio,
        RadioGroup,
        Switch,
        Form,
        FormItem
    ]
    // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
        // 遍历注册全局组件
        components.forEach(item => {
            Vue.component(item.name, item)
        })
    }
    // 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install
    // 以下是具体的组件列表

}