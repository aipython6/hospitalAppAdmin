import 'xe-utils'
import { App } from 'vue'

import {
  VXETable, Header, Footer,Icon, Filter,
  Edit, Menu, Export, Keyboard, Validator,
  Colgroup, Column, Grid,Tooltip,Toolbar,
  Pager, Form, FormItem, FormGather, Checkbox,
  CheckboxGroup, Radio, RadioGroup, RadioButton,
  Switch, Input, Select, Optgroup, Option,
  Textarea, Button, Modal, List, Pulldown,
  // 表格
  Table
} from "vxe-table";
import zhCNLocat from "vxe-table/lib/locale/lang/zh-CN";
import XEUtils from "xe-utils";

// 全局默认参数
VXETable.setup({
  size: "medium",
  version: 0,
  zIndex: 1002,
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCNLocat, key), args),
  table: {
    // 自动监听父元素的变化去重新计算表格
    autoResize: true,
    // 鼠标移到行是否要高亮显示
    highlightHoverRow: true
  },
  input: {
    clearable: true
  }
});

export function setupTable(app: App) {
  app
    .use(Header)
    .use(Footer)
    .use(Icon)
    .use(Filter)
    .use(Edit)
    .use(Menu)
    .use(Export)
    .use(Keyboard)
    .use(Validator)

    // 可选组件
    .use(Column)
    .use(Colgroup)
    .use(Grid)
    .use(Tooltip)
    .use(Toolbar)
    .use(Pager)
    .use(Form)
    .use(FormItem)
    .use(FormGather)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(Radio)
    .use(RadioGroup)
    .use(RadioButton)
    .use(Switch)
    .use(Input)
    .use(Select)
    .use(Optgroup)
    .use(Option)
    .use(Textarea)
    .use(Button)
    .use(Modal)
    .use(List)
    .use(Pulldown)
    // 安装表格
    .use(Table);
}
