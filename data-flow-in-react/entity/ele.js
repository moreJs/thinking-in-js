'use strict';

/**
 * ele class
 *   opt = {
      tagName: 'ul', // 节点标签名
      props: { // DOM的属性，用一个对象存储键值对
        id: 'list'
      },
      children: [ // 该节点的子节点
        {tagName: 'li', props: {class: 'item'}, children: ["Item 1"]},
        {tagName: 'li', props: {class: 'item'}, children: ["Item 2"]},
        {tagName: 'li', props: {class: 'item'}, children: ["Item 3"]},
      ]
    }
    <ul id='list'>
      <li class='item'>Item 1</li>
      <li class='item'>Item 2</li>
      <li class='item'>Item 3</li>
    </ul>
 */
class Element{
  constructor(opt) {
    this.opt = opt;
  }
  // 节点标签名称
  get tagName() {
    return this.opt.tagName;
  }
  // 属性集合 key: value 的 map
  get props(name) {
    let result = name ? this.opt.props[name] : this.opt.props;
    return result;
  }
  // 所有的孩子节点
  get children() {
    return this.opt.children;
  }
  // 渲染方法
  render() {
    let props = this.props;
    let realEle = document.createElement(this.tagName);
    for(let propsName in props) {
      realEle.setAttribute(propsName,props[propsName]);
    }
    let children = this.children.map(item => {
      return item instanceof Element ? item : item.render();
    });
    realEle.appendChild(children);
    return realEle;
  }
  // factory func
  static create(opt) {
    return new Element(opt);
  }
}