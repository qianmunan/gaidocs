import{_ as c,o as t,c as o,z as n,a as s,t as i,G as e,B as l,V as p,D as b}from"./chunks/framework.055571f3.js";const N=JSON.parse('{"title":"线性表","description":"","frontmatter":{"title":"线性表"},"headers":[],"relativePath":"scattered/dataStruct/linear.md","filePath":"scattered/dataStruct/linear.md","lastUpdated":1686207654000}'),u={name:"scattered/dataStruct/linear.md"},y={id:"frontmatter-title",tabindex:"-1"},m=n("img",{src:"https://gaidocs.oss-cn-hangzhou.aliyuncs.com/emoji/202305101625732.png",width:"46",height:"46",alt:"图片描述",style:{display:"inline","margin-bottom":"-12px"}},null,-1),E=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}} <img src="https://gaidocs.oss-cn-hangzhou.aliyuncs.com/emoji/202305101625732.png" width="46" height="46" alt="图片描述" style="display:inline; margin-bottom: -12px"/>"'},"​",-1),d=n("h2",{id:"线性表的定义与运算",tabindex:"-1"},[s("线性表的定义与运算 "),n("a",{class:"header-anchor",href:"#线性表的定义与运算","aria-label":'Permalink to "线性表的定义与运算"'},"​")],-1),h=p("",10),g=p("",33);function L(r,v,F,_,T,k){const a=b("font");return t(),o("div",null,[n("h1",y,[s(i(r.$frontmatter.title)+" ",1),m,s(),E]),d,n("p",null,[s("线性表是数据结构中的基本概念之一，指的是具有相同数据类型的n个元素的有限序列(a1, a2, ..., an)。其中，a1是线性表的第一个元素，an是线性表的最后一个元素，"),e(a,{color:"red"},{default:l(()=>[s("除了第一个元素外，其他元素都有且只有一个直接前驱，除了最后一个元素外，其他元素都有且只有一个直接后继。")]),_:1})]),h,n("p",null,[s("线性表的链式存储结构是指，将线性表中的元素按照其逻辑关系使用一组任意的存储单元来存储，"),e(a,{color:"red"},{default:l(()=>[s("每个存储单元包含两部分，即数据域和指针域。")]),_:1}),s("数据域用来存储元素的值，指针域则用来指示下一个节点所在的存储单元地址，在链式结构中通常称为后继指针。通过这种方式，可将所有存储单元串联起来构成一个链表，实现线性表的存储。")]),g])}const f=c(u,[["render",L]]);export{N as __pageData,f as default};