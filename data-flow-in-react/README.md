## 背景
  - 2016 react 对于前端，似乎是一个绕不开的话题，加之 react-native 的风生水起，不禁让我们惊呼，react 的 age 到来了(画外音: 虽然不能确定，这种风光还能维持多久，vue挟weex来势汹汹,ng2带着傲娇的姿态以及typeScript誓言要为mvvm正名，加之，业界目前内心深处还是更加倾向于mvvm这类大而全的框架)
  - react 剥离外壳，本质就是一个 带有先验知识的特殊的时间复杂度为o(n)的 virtual dom 的 diff 和 patch 的算法.
  － 因此，其本质是一个专注于 view 层的解决方案,(组件通过修改state进入react的上下文,react根据最新的state进行渲染)
  - 然而，我们现在所面对的信息展示分层逻辑，应该是 view + data, react 在源码级别对 data 的支持太弱了，或者说特意将这块内容剥离出来
  - 因此，针对 data flow 出现了很多基于react view 的解决方案，本文，我们将一起探讨下