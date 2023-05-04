import{o as d,c as p,z as e,d as v,u as g,h as x,G as m,t as c,b as f,a as o,_ as k,V as q}from"./chunks/framework.055571f3.js";const $={style:{display:"inline-block"},viewBox:"0 0 512 512",width:"1.2em",height:"1.2em"},w=e("path",{fill:"currentColor",d:"M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512zm-56.6-199.4c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"},null,-1),V=[w];function y(s,r){return d(),p("svg",$,V)}const P={name:"fa6-solid-copyright",render:y},C={class:"px-[1.2rem] relative py-[1rem] border-1 border-[var(--vp-c-border)]/[.55] w-full min-h-[32px] border-solid mt-[32px] leading-[24px] rounded-[4px]"},N={class:"flex flex-col gap-y-[8px] overflow-hidden"},T=e("span",{class:"font-bold"},"👨‍🔧 作者： ",-1),G=["href"],S=e("span",{class:"font-bold"},"🔗 文章链接：",-1),A=["href"],B=e("div",null,[e("span",{class:"font-bold"},"📢 版权声明："),e("span",null,[o(" 本博客所有文章除特别声明外，均采用 "),e("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",rel:"noreferrer",target:"_blank"},"CC BY-NC-SA 4.0"),o(" 许可协议。转载请注明来自 "),e("a",{href:"https://www.fwenqian.com/",rel:"noreferrer",target:"_blank"},"qianmunan")]),o("！ ")],-1),H=v({__name:"CopyRight",setup(s){var _,u;const r="qianmunan",{frontmatter:n}=g(),a=x(r);(_=n.value)!=null&&_.author&&(a.value=(u=n.value)==null?void 0:u.author);const h=t=>t==="qianmunan"?"qianmunan":t,i=location.href,l=t=>`https://github.com/${h(t)}`;return(t,E)=>{const b=P;return d(),p("div",C,[m(b,{class:"absolute top-[1rem] right-[1.2rem]"}),e("section",N,[e("div",null,[T,e("span",null,[e("a",{href:l(a.value),rel:"noreferrer",target:"_blank"},c(a.value),9,G)])]),e("div",null,[S,e("span",null,[e("a",{href:f(i),rel:"noreferrer",target:"_blank"},c(f(i)),9,A)])]),B])])}}}),J=JSON.parse('{"title":"关于小锅盖儿网站","description":"","frontmatter":{"title":"关于小锅盖儿网站"},"headers":[],"relativePath":"articles/index.md","filePath":"articles/index.md","lastUpdated":1681816379000}'),D={name:"articles/index.md"},R={id:"frontmatter-title",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),I=q('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>终于在今天 2023年3月17日，基于vitepress创建的文档库部署成功了。这是我第N次做这种工作，繁琐之极。因为无缘无故的把时间花费了好多没有用的地方。这可能是我最后一次搞这些东西。以后的每一次更新，都会在这里，如有需要请记住他<a href="https://www.fwenqian.com" target="_blank" rel="noreferrer">小锅盖儿</a></p></div><h2 id="初衷" tabindex="-1">初衷 <a class="header-anchor" href="#初衷" aria-label="Permalink to &quot;初衷&quot;">​</a></h2><p>作为一个喜欢编程但记性又不太好的人来说，每次学习到新的东西的时候，就在用的那一刻比较清晰，过几天不用又或者下次在用的时候，容易想不起来，这个时候这个网站就显的非常重要了。它能辅助我去记住一些不太常用的知识点，当再次使用的时候，我不需要到处的去百度，google了。在这个同时，如果有人遇到了和我一样的问题，也可以帮助他们解决问题（这是我非常开心的事情）。 最近一段时间非常的痴迷Ros（机器人操作系统）和Matlab，而这些知识目前还在学习阶段，我希望我能把我学到的，获得的记录下来，方便以后复习阅读，同时也激励着我去努力学习，争取每天都能发布质量比较高的文章出来。</p><h2 id="如何实现" tabindex="-1">如何实现 <a class="header-anchor" href="#如何实现" aria-label="Permalink to &quot;如何实现&quot;">​</a></h2><p>一个基于vitepress的个人在线文档库。 首先：介绍一下我所使用的有关技术</p><div class="info custom-block"><p class="custom-block-title">附</p><ul><li>框架的选用的是viepress</li><li>样式使用的是unocss</li><li>代码托管在GitHub</li><li>网站部署在Vercel</li></ul></div><p>然后，根据vitepress的官方文档，创建自己的第一个vitepress应用，说明官方文档已经写的非常详细了，一定要自己阅读官方文档。这样能够快而省的创建属于自己的文档库了。</p><p>在然后，就是将代码提交到GitHub中。一定要提交编译后的代码，你也可以提交自己的vitepress项目。</p><p>部署： 使用GitHub帐号登陆到Vercel中，给vercel访问github仓库的权限，就可以在Vercel中直接导入你的项目源码了，等待Vercel部署完成后，你就可以使用他生成的域名进行访问了。</p><h2 id="工作流" tabindex="-1">工作流 <a class="header-anchor" href="#工作流" aria-label="Permalink to &quot;工作流&quot;">​</a></h2><p>我的工作流程。 由于vitepress编辑文档的时候使用的是Markdown格式的文件。而我使用的系统是Ubuntu操作系统，在linux中比较出名是是大名鼎鼎的Vim编辑器，他是我用过最好好用的编辑器。在日常中一直使用。所以我使用Vim编辑我想要更新的文章。然后在将这些编辑好的文章进行编译，最后推送到Github中去</p><div class="info custom-block"><p class="custom-block-title">工作流</p><ol><li>vim 写文章</li><li>编译</li><li>推送到GitHub</li></ol></div><h2 id="鸣谢" tabindex="-1">鸣谢 <a class="header-anchor" href="#鸣谢" aria-label="Permalink to &quot;鸣谢&quot;">​</a></h2>',13);function M(s,r,n,a,h,i){const l=H;return d(),p("div",null,[e("h1",R,[o(c(s.$frontmatter.title)+" ",1),z]),I,m(l)])}const L=k(D,[["render",M]]);export{J as __pageData,L as default};
