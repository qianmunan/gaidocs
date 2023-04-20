import{_ as a,o as l,c as p,z as s,a as e,t as o,V as r}from"./chunks/framework.29cad062.js";const h=JSON.parse('{"title":"Ros2 安装","description":"","frontmatter":{"title":"Ros2 安装"},"headers":[],"relativePath":"ros/base/install.md","lastUpdated":1681960495000}'),t={name:"ros/base/install.md"},c={id:"frontmatter-title",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}} :kiss:"'},"​",-1),i=r(`<div class="tip custom-block"><p class="custom-block-title">声明</p><p>整体而言，ROS2的安装步骤不算复杂，大致步骤如下：</p><ul><li>设置语言环境；</li><li>启动Ubuntu universe存储库；</li><li>设置软件源；</li><li>安装ROS2；</li><li>配置环境。</li></ul></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>请注意：虽然安装比较简单，但是安装过程比较耗时，需要耐心等待。</p></div><h2 id="设置语言环境" tabindex="-1">设置语言环境 <a class="header-anchor" href="#设置语言环境" aria-label="Permalink to &quot;设置语言环境&quot;">​</a></h2><p>请先检查本地语言环境是否支持UTF-8编码，可调用如下指令检查并设置UTF-8编码：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">locale</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 检查是否支持 UTF-8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 终端输出</span></span>
<span class="line"><span style="color:#E1E4E8;">LANG</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">en_US.UTF-</span><span style="color:#79B8FF;">8</span></span>
<span class="line"><span style="color:#E1E4E8;">LANGUAGE</span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">LC_CTYPE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;en_US.UTF-8&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">LC_NUMERIC</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">zh_CN.UTF-</span><span style="color:#79B8FF;">8</span></span>
<span class="line"><span style="color:#E1E4E8;">LC_TIME</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">zh_CN.UTF-</span><span style="color:#79B8FF;">8</span></span>
<span class="line"><span style="color:#E1E4E8;">LC_COLLATE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;en_US.UTF-8&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">LC_MONETARY</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">zh_CN.UTF-</span><span style="color:#79B8FF;">8</span></span>
<span class="line"><span style="color:#E1E4E8;">LC_MESSAGES</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;en_US.UTF-8&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">LC_PAPER</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">zh_CN.UTF-</span><span style="color:#79B8FF;">8</span></span>
<span class="line"><span style="color:#E1E4E8;">LC_NAME</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">zh_CN.UTF-</span><span style="color:#79B8FF;">8</span></span>
<span class="line"><span style="color:#E1E4E8;">LC_ADDRESS</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">zh_CN.UTF-</span><span style="color:#79B8FF;">8</span></span>
<span class="line"><span style="color:#E1E4E8;">LC_TELEPHONE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">zh_CN.UTF-</span><span style="color:#79B8FF;">8</span></span>
<span class="line"><span style="color:#E1E4E8;">LC_MEASUREMENT</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">zh_CN.UTF-</span><span style="color:#79B8FF;">8</span></span>
<span class="line"><span style="color:#E1E4E8;">LC_IDENTIFICATION</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">zh_CN.UTF-</span><span style="color:#79B8FF;">8</span></span>
<span class="line"><span style="color:#E1E4E8;">LC_ALL</span><span style="color:#F97583;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果不是上述内容，请使用一下命令更正</span></span>
<span class="line"><span style="color:#6A737D;"># but 可能改变你电脑的语言环境</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">locales</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">locale-gen</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">en_US</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">en_US.UTF-</span><span style="color:#79B8FF;">8</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update-locale</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">LC_ALL=en_US.UTF-</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">LANG=en_US.UTF-</span><span style="color:#79B8FF;">8</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> LANG</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">en_US.UTF-</span><span style="color:#79B8FF;">8</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>注意：语言环境可以不同，但必须支持UTF-8编码。</p></div><h2 id="启动ubuntu-universe存储库" tabindex="-1">启动Ubuntu universe存储库 <a class="header-anchor" href="#启动ubuntu-universe存储库" aria-label="Permalink to &quot;启动Ubuntu universe存储库&quot;">​</a></h2><p><strong>图形化操作:</strong> 请打开软件与更新(Software &amp; Updates)窗口，确保启动了universe存储库，以保证可以下载”社区维护的免费和开源软件“，操作示例如下：</p><h2 id="设置软件源" tabindex="-1">设置软件源 <a class="header-anchor" href="#设置软件源" aria-label="Permalink to &quot;设置软件源&quot;">​</a></h2><p>先将ROS 2 apt存储库添加到系统，用apt授权我们的GPG密钥：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gnupg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lsb-release</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-sSL</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://raw.githubusercontent.com/ros/rosdistro/master/ros.key</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/share/keyrings/ros-archive-keyring.gpg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后将存储库添加到源列表：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;deb [arch=$(</span><span style="color:#B392F0;">dpkg</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">--print-architecture</span><span style="color:#9ECBFF;">) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(</span><span style="color:#79B8FF;">source</span><span style="color:#9ECBFF;"> /etc/os-release &amp;&amp; </span><span style="color:#79B8FF;">echo</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">$UBUNTU_CODENAME</span><span style="color:#9ECBFF;">) main&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tee</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/apt/sources.list.d/ros2.list</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/dev/null</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装ros2" tabindex="-1">安装ROS2 <a class="header-anchor" href="#安装ros2" aria-label="Permalink to &quot;安装ROS2&quot;">​</a></h2><p>首先更新apt存储库缓存：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后升级已安装的软件(ROS2软件包建立在经常更新的Ubuntu系统上，在安装新软件包之前请确保您的系统是最新的)：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">upgrade</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装桌面版ROS2(建议)，包含：ROS、RViz、示例与教程，安装命令如下：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ros-humble-desktop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="配置环境" tabindex="-1">配置环境 <a class="header-anchor" href="#配置环境" aria-label="Permalink to &quot;配置环境&quot;">​</a></h2><p>终端下，执行ROS2程序时，需要调用如下命令配置环境：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/opt/ros/humble/setup.bash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>每次新开终端时，都得执行上述命令，或者也可以执行如下命令，将配置环境指令写入 ”~/.bashrc“ 文件，那么每次新启动终端时，不需要在手动配置环境：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;source /opt/ros/humble/setup.bash&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.bashrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>到目前为止，ROS2就已经安装且配置完毕了。</p><h2 id="此外" tabindex="-1">此外 <a class="header-anchor" href="#此外" aria-label="Permalink to &quot;此外&quot;">​</a></h2><p>为了我们方便在终端中调试和编译我们的项目，再此还需要安装一个可以分栏的终端模拟器和colco构建工具</p><h3 id="安装colcon构建工具" tabindex="-1">安装colcon构建工具 <a class="header-anchor" href="#安装colcon构建工具" aria-label="Permalink to &quot;安装colcon构建工具&quot;">​</a></h3><p>colcon是一个命令行工具，用于改进编译，测试和使用多个软件包的工作流程。它实现过程自动化，处理需求并设置环境以便于使用软件包。ROS2中便是使用colcon作为包构建工具的，但是ROS2中没有默认安装colcon，需要自行安装，安装命令如下：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">python3-colcon-common-extensions</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="安装终端模拟器-terminator" tabindex="-1">安装终端模拟器 terminator <a class="header-anchor" href="#安装终端模拟器-terminator" aria-label="Permalink to &quot;安装终端模拟器 terminator&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">terminator</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Terminator 常用快捷键</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">//第一部份：关于在同一个标签内的操作</span></span>
<span class="line"><span style="color:#B392F0;">Alt+Up</span><span style="color:#E1E4E8;">                          </span><span style="color:#9ECBFF;">//移动到上面的终端</span></span>
<span class="line"><span style="color:#B392F0;">Alt+Down</span><span style="color:#E1E4E8;">                        </span><span style="color:#9ECBFF;">//移动到下面的终端</span></span>
<span class="line"><span style="color:#B392F0;">Alt+Left</span><span style="color:#E1E4E8;">                        </span><span style="color:#9ECBFF;">//移动到左边的终端</span></span>
<span class="line"><span style="color:#B392F0;">Alt+Right</span><span style="color:#E1E4E8;">                       </span><span style="color:#9ECBFF;">//移动到右边的终端</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+O</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">//水平分割终端</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+E</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">//垂直分割终端</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+Right</span><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">//在垂直分割的终端中将分割条向右移动</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+Left</span><span style="color:#E1E4E8;">                 </span><span style="color:#9ECBFF;">//在垂直分割的终端中将分割条向左移动</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+Up</span><span style="color:#E1E4E8;">                   </span><span style="color:#9ECBFF;">//在水平分割的终端中将分割条向上移动</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+Down</span><span style="color:#E1E4E8;">                 </span><span style="color:#9ECBFF;">//在水平分割的终端中将分割条向下移动</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+S</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">//隐藏/显示滚动条</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+F</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">//搜索</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+C</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">//复制选中的内容到剪贴板</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+V</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">//粘贴剪贴板的内容到此处</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+W</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">//关闭当前终端</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+Q</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">//退出当前窗口，当前窗口的所有终端都将被关闭</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+X</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">//最大化显示当前终端</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+Z</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">//最大化显示当前终端并使字体放大</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+N</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">or</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Ctrl+Tab</span><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">//移动到下一个终端</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+P</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">or</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Ctrl+Shift+Tab</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">//Crtl+Shift+Tab</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">移动到之前的一个终端</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">第二部份：有关各个标签之间的操作</span></span>
<span class="line"><span style="color:#B392F0;">F11</span><span style="color:#E1E4E8;">                             </span><span style="color:#9ECBFF;">//全屏开关</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+T</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">//打开一个新的标签</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+PageDown</span><span style="color:#E1E4E8;">                   </span><span style="color:#9ECBFF;">//移动到下一个标签</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+PageUp</span><span style="color:#E1E4E8;">                     </span><span style="color:#9ECBFF;">//移动到上一个标签</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+PageDown</span><span style="color:#E1E4E8;">             </span><span style="color:#9ECBFF;">//将当前标签与其后一个标签交换位置</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+PageUp</span><span style="color:#E1E4E8;">               </span><span style="color:#9ECBFF;">//将当前标签与其前一个标签交换位置</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Plus</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">+</span><span style="color:#E1E4E8;">)                   </span><span style="color:#9ECBFF;">//增大字体</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Minus</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;">)                  </span><span style="color:#9ECBFF;">//减小字体</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Zero</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)                   </span><span style="color:#9ECBFF;">//恢复字体到原始大小</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+R</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">//重置终端状态</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+G</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">//重置终端状态并clear屏幕</span></span>
<span class="line"><span style="color:#B392F0;">Super+g</span><span style="color:#E1E4E8;">                         </span><span style="color:#9ECBFF;">//绑定所有的终端，以便向一个输入能够输入到所有的终端</span></span>
<span class="line"><span style="color:#B392F0;">Super+Shift+G</span><span style="color:#E1E4E8;">                   </span><span style="color:#9ECBFF;">//解除绑定</span></span>
<span class="line"><span style="color:#B392F0;">Super+t</span><span style="color:#E1E4E8;">                         </span><span style="color:#9ECBFF;">//绑定当前标签的所有终端，向一个终端输入的内容会自动输入到其他终端</span></span>
<span class="line"><span style="color:#B392F0;">Super+Shift+T</span><span style="color:#E1E4E8;">                   </span><span style="color:#9ECBFF;">//解除绑定</span></span>
<span class="line"><span style="color:#B392F0;">Ctrl+Shift+I</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">//打开一个窗口，新窗口与原来的窗口使用同一个进程</span></span>
<span class="line"><span style="color:#B392F0;">Super+i</span><span style="color:#E1E4E8;">                         </span><span style="color:#9ECBFF;">//打开一个新窗口，新窗口与原来的窗口使用不同的进程</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div>`,35);function F(n,y,b,u,d,B){return l(),p("div",null,[s("h1",c,[e(o(n.$frontmatter.title)+" 💋 ",1),E]),i])}const m=a(t,[["render",F]]);export{h as __pageData,m as default};
