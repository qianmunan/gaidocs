import{_ as a,o,c as s,z as t,a as r,t as i,V as l}from"./chunks/framework.29cad062.js";const v=JSON.parse('{"title":"验证 Ros2 安装","description":"","frontmatter":{"title":"验证 Ros2 安装","lang":"en-US"},"headers":[],"relativePath":"ros/base/validation.md","lastUpdated":1681960495000}'),n={name:"ros/base/validation.md"},c={id:"frontmatter-title",tabindex:"-1"},d=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}} :camel:"'},"​",-1),_=l('<p>在ROS2中已经内置了一些案例，安装完毕之后，就可以运行这些案例，以测试ROS2的安装与配置是否正常，在此，我们选用ROS2内置的小乌龟案例，具体操作如下。</p><p>1.打开两个终端(可以使用快捷键Ctrl + Alt + T)；</p><p>2.终端1中输入指令：<code>ros2 run turtlesim turtlesim_node</code>，执行完毕，会启动一个绘有小乌龟的窗口；</p><p>3.终端2中输入指令：<code>ros2 run turtlesim turtle_teleop_key</code>，执行完毕，可以在此终端中通过键盘控制乌龟运动。</p><p>运行结果示例如下：</p><div class="danger custom-block"><p class="custom-block-title">注意</p><p>如果想要让小乌龟动起来，请将光标放在第二条命令所在的终端下，进行方向的键入</p></div>',6);function p(e,m,u,f,h,S){return o(),s("div",null,[t("h1",c,[r(i(e.$frontmatter.title)+" 🐫 ",1),d]),_])}const b=a(n,[["render",p]]);export{v as __pageData,b as default};