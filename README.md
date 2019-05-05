| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-spin.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-spin.svg?style=flat-square)

[![xy-spin](https://nodei.co/npm/xy-spin.png)](https://npmjs.org/package/xy-spin)

# xy-spin

基于`React Hooks` + `typescript`的基础组件

## 安装

```bash
# yarn
yarn add xy-spin classnames
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import Spin from "xy-spin";
ReactDOM.render(<Spin spinning={true} />, container);
```

## API

| 属性      | 说明                                                               | 类型            | 默认值    |
| --------- | ------------------------------------------------------------------ | --------------- | --------- |
| children  | 包裹内容                                                           | React.ReactNode | -         |
| inline    | 是否内联模式                                                       | boolean         | true      |
| indicator | 自定义加载指示符                                                   | React.ReactNode | -         |
| spinning  | 是否加载中                                                         | boolean         | false     |
| size      | 设置大小，可选值为 `small` `large` 或者不设                        | string          | `default` |
| type      | 设置按钮类型，可选值为 `primary` `dashed` `text` `danger` 或者不设 | string          | -         |
| tips      | 自定义描述                                                         | React.ReactNode | -         |

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-spin is released under the MIT license.
