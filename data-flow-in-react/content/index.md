# react-data-flow 的前世今生

## react 是什么？

(1) react出发点

用于开发数据不断变化的大型应用程序:Building large applications with data that changes over time

(2) react的面临的问题域

  * 问题描述

    聊天应用的例子，当一条新的消息过来时,我们应该怎么办？

  * 传统的web开发范式

    ![alt text](../image/QQ20160522-1.png )
  * react的解答方式

    ![alt text](../image/QQ20160522-2.png )
  * react的系统职责

    当数据(state)发生变化后，如何高效的渲染出该组件

(3) react的解决方案

    1.0: 一旦状态发生了变化，就用模版引擎重新渲染整个视图，然后用新的视图更换掉旧的视图

    2.0: Virtual DOM算法

      2.1: 用 JavaScript 对象表示 DOM 信息和结构，当状态变更的时候，重新渲染这个 JavaScript 的对象结构

      2.2: 用新渲染的对象树去和旧的树进行对比，记录这两棵树差异

      2.3: 记录下来的不同就是我们需要对页面真正的 DOM 操作，然后把它们应用在真正的 DOM 树上，页面就变更了

    3.0: 具体算法细节

      3.1 define virtual dom



## data-flow 是什么？

## flux

## reflux
## react-data-binding
## redux
## 写在最后
## 参考文献
    - [颠覆式前端UI开发框架：React] (http://www.infoq.com/cn/articles/subversion-front-end-ui-development-framework-react)
    - [深度剖析：如何实现一个 Virtual DOM 算法] (https://github.com/livoras/blog/issues/13)
