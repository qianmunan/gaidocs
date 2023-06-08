import{_ as a,o as l,c as p,z as s,a as n,t as c,V as r}from"./chunks/framework.055571f3.js";const C=JSON.parse('{"title":"简单复习一下 C++","description":"","frontmatter":{"title":"简单复习一下 C++"},"headers":[],"relativePath":"scattered/dataStruct/cpp.md","filePath":"scattered/dataStruct/cpp.md","lastUpdated":1686207654000}'),o={name:"scattered/dataStruct/cpp.md"},i={id:"frontmatter-title",tabindex:"-1"},t=s("img",{src:"https://gaidocs.oss-cn-hangzhou.aliyuncs.com/intenet/202305171013458.png",width:"46",height:"46",alt:"图片描述",style:{display:"inline","margin-bottom":"-6px"}},null,-1),b=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}} <img src="https://gaidocs.oss-cn-hangzhou.aliyuncs.com/intenet/202305171013458.png" width="46" height="46" alt="图片描述" style="display:inline; margin-bottom: -6px"/>"'},"​",-1),u=r(`<div class="tip custom-block"><p class="custom-block-title">说在前面</p><p>最为新手，在学习数据结构之前务必学会一种变成语言，无论是C++、java、python等。这样你才能在实际编写向线性表、栈、队列、二叉树的例子中，才能得心应手。</p><p>对于数据结构中，我们需要了解关于C++以下知识点：</p><ul><li>C++的输入/输出方法</li><li>函数的引用参数传递</li><li>类的定义、类与对象的关系、类与对象的使用</li><li>动态内存分配</li><li>指向对象的指针、对象数组、指向对象的指针数组</li><li>简单类的继承</li><li>理解虚函数</li></ul></div><h2 id="c-简介" tabindex="-1">C++简介 <a class="header-anchor" href="#c-简介" aria-label="Permalink to &quot;C++简介&quot;">​</a></h2><p>C++是一种通用的编程语言，既支持过程性编程（例如C语言那样的结构化编程方式），也支持面向对象编程。</p><p>C++是由Bjarne Stroustrup于1983年在贝尔实验室开发的。他将C语言进行了扩展，增加了一些面向对象的特性，如类、封装、继承、多态等，同时仍保留了C语言的许多特性，如控制流结构、指针操作等。这使得C++成为一门功能丰富而高效的编程语言。基于C++的应用程序广泛应用于计算机软件、网络和游戏开发等领域。</p><p>C++的特点包括：</p><ul><li>面向对象：C++通过类和对象来实现面向对象编程，具有封装、继承和多态等特征。</li><li>性能优秀：C++代码可以直接编译成机器语言执行，因此其运行速度较快。</li><li>功能丰富：C++提供了许多底层操作的特性，如内存管理、指针操作等，使得程序员更容易调优程序并使用系统资源。</li><li>跨平台：由于C++的编译器和库已经被移植到许多不同的操作系统和平台上，因此C++具有较好的可移植性。</li></ul><p>虽然C++具有许多优点，但其使用也需要注意内存管理和错误处理等问题。</p><h2 id="c-的输入输出" tabindex="-1">C++的输入输出 <a class="header-anchor" href="#c-的输入输出" aria-label="Permalink to &quot;C++的输入输出&quot;">​</a></h2><p>在 C++ 中，输入和输出操作分别由 iostream 头文件中的 <code>cin</code> 和 <code>cout</code> 对象完成。</p><p>可以使用 <code>&lt;&lt;</code> 运算符向 <code>cout</code> 对象输出信息。例如，下面的代码将字符串 <code>&quot;Hello, world!&quot;</code> 输出到控制台：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    std::cout &lt;&lt; &quot;Hello, world!&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在代码中，<code>std::cout</code> 是一个输出流对象，<code>&lt;&lt;</code> 运算符用于将右侧的字符串写入流中，而 <code>std::endl</code> 表示换行操作。需要注意的是，在使用 <code>cout</code> 对象时要包含 <code>iostream</code> 头文件。</p><p>同样地，可以使用 <code>&gt;&gt;</code> 运算符从 <code>cin</code> 对象中读取输入信息，如下所示：</p><p>cmake --install . --prefix=C:\\software\\SDK\\fmtInst</p><p>C:\\software\\SDK\\fmtInst\\include\\fmt</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;string&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    std::string name;</span></span>
<span class="line"><span style="color:#e1e4e8;">    std::cout &lt;&lt; &quot;Please enter your name: &quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    std::cin &gt;&gt; name;</span></span>
<span class="line"><span style="color:#e1e4e8;">    std::cout &lt;&lt; &quot;Hello, &quot; &lt;&lt; name &lt;&lt; &quot;!&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>在上面的代码中，我们通过 <code>std::cin</code> 对象接收用户的输入，并将其存储在名为 <code>name</code> 的字符串变量中。然后，我们使用 <code>std::cout</code> 将欢迎信息和用户名一起输出到控制台。</p><p>需要注意的是，<code>std::cin</code> 在读取输入时会自动跳过空格和换行符，但不能处理超出缓冲区大小的输入，如果用户输入的数据过长，则可能会导致缓冲区溢出。因此，在使用输入流时，我们应该注意有效性和安全性。</p><h2 id="函数引用参数传递" tabindex="-1">函数引用参数传递 <a class="header-anchor" href="#函数引用参数传递" aria-label="Permalink to &quot;函数引用参数传递&quot;">​</a></h2><p>在 C++ 中，函数除了可以通过值传递（pass by value）和指针传递（pass by pointer）来传递参数之外，还可以使用引用传递（pass by reference）来传递函数参数。当我们使用引用传递时，函数的参数将会直接操作调用它的函数中的变量，而不是通过复制变量或者指向变量的指针来间接操作。</p><p>下面是一个简单的例子，演示了使用引用参数传递：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">void swap(int &amp;x, int &amp;y) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int temp = x;</span></span>
<span class="line"><span style="color:#e1e4e8;">    x = y;</span></span>
<span class="line"><span style="color:#e1e4e8;">    y = temp;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int a = 1, b = 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">    std::cout &lt;&lt; &quot;Before swapping: a=&quot; &lt;&lt; a &lt;&lt; &quot;, b=&quot; &lt;&lt; b &lt;&lt; &quot;\\n&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    swap(a, b);</span></span>
<span class="line"><span style="color:#e1e4e8;">    std::cout &lt;&lt; &quot;After swapping: a=&quot; &lt;&lt; a &lt;&lt; &quot;, b=&quot; &lt;&lt; b &lt;&lt; &quot;\\n&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>在上面的代码中，<code>swap</code> 函数定义了两个引用参数 <code>x</code> 和 <code>y</code>，并交换了它们的值。然后，在 <code>main</code> 函数中，我们创建了两个整型变量 <code>a</code> 和 <code>b</code>，并输出它们的初始值。接着，我们调用了 <code>swap</code> 函数，并再次输出了变量 <code>a</code> 和 <code>b</code> 的值。从结果可以看到，<code>swap</code> 函数进行了正确的值交换，并且修改了 <code>a</code> 和 <code>b</code> 变量的值。</p><p>需要注意的是，在使用引用传递参数时，我们需要在函数声明和定义中都加上 <code>&amp;</code> 符号，以表示它是一个引用类型的参数。同时，变量本身会成为函数中引用参数的别名，因此对于引用参数的任何修改都会直接反映在原始变量上。</p><p>使用引用参数传递可以提高程序的执行效率，因为避免了复制过程，同时也可避免指针传递所带来的空指针问题。不过，需要注意的是，在引用传递中修改参数直接影响原始变量，因此需要设计良好的代码，避免造成意外的结果。</p><h2 id="类的定义" tabindex="-1">类的定义 <a class="header-anchor" href="#类的定义" aria-label="Permalink to &quot;类的定义&quot;">​</a></h2><p>在C++中，类（Class）是抽象数据类型的一种实现方式。它可以将数据和函数封装在一起，形成一个独立、可重复使用且易于维护的程序组件。定义类包括两个主要部分：类声明部分和类成员函数定义部分。</p><p>类声明部分通常放在头文件（.h或.hpp）中，用于向编译器提供类的接口信息，包括类名称、公共接口等内容。例如：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">class MyClass {</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    void setData(int data); // 公共接口之一：设置数据</span></span>
<span class="line"><span style="color:#e1e4e8;">    int getData() const; // 公共接口之二：获取数据</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">private:</span></span>
<span class="line"><span style="color:#e1e4e8;">    int m_data; // 类的私有数据成员</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在上述代码中，我们定义了一个名为 <code>MyClass</code> 的类，并声明了两个公共成员函数 <code>setData</code> 和 <code>getData</code>，以及一个私有成员变量 <code>m_data</code>。其中，公共成员函数可以通过<code>.</code>运算符访问，在本例中被用来控制和查询类的数据成员。此外，<code>const</code> 修饰符表示该函数是一个常量函数，不会修改类的数据成员。</p><p>类成员函数定义部分通常放在源文件（.cpp）中，用于实现类声明中列出的成员函数的具体功能。例如：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &quot;MyClass.hpp&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">void MyClass::setData(int data) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    m_data = data;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int MyClass::getData() const {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return m_data;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>在上述代码中，我们定义了 <code>setData</code> 和 <code>getData</code> 两个公共成员函数的具体实现。这里注意到，类成员函数前缀需要加上类名称和“::”符号，以便编译器能够识别它们是属于哪个类的成员函数。</p><p>总之，C++中类的定义包括声明和定义两个部分，并且要注意保证类的封装性和高内聚性，防止类的数据在外部被非法修改，同时遵循良好的编码规范，提高程序的可读性和可维护性。</p><h2 id="类与对象的关系" tabindex="-1">类与对象的关系 <a class="header-anchor" href="#类与对象的关系" aria-label="Permalink to &quot;类与对象的关系&quot;">​</a></h2><p>在C++中，类（Class）是抽象数据类型的一种实现方式，而对象（Object）则是类的一个具体实例。可以将类看作是一种自定义的数据类型，它定义了一组属性和方法来描述某个实体的特征和行为，而对象则代表这个实体的具体表现。</p><p>例如，我们可以定义一个名为 <code>Person</code> 的类，用于描述一个人的基本信息，代码如下：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">class Person {</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    void setName(const std::string&amp; name);</span></span>
<span class="line"><span style="color:#e1e4e8;">    void setAge(int age);</span></span>
<span class="line"><span style="color:#e1e4e8;">    void setGender(char gender);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    std::string getName() const;</span></span>
<span class="line"><span style="color:#e1e4e8;">    int getAge() const;</span></span>
<span class="line"><span style="color:#e1e4e8;">    char getGender() const;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">private:</span></span>
<span class="line"><span style="color:#e1e4e8;">    std::string m_name;</span></span>
<span class="line"><span style="color:#e1e4e8;">    int m_age;</span></span>
<span class="line"><span style="color:#e1e4e8;">    char m_gender;</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>上述代码中，我们声明了 <code>Person</code> 类，并定义了三个成员函数 <code>setName</code>、<code>setAge</code> 和 <code>setGender</code> 来设置人的姓名、年龄和性别，以及三个成员函数 <code>getName</code>、<code>getAge</code> 和 <code>getGender</code> 用于查询人的属性。同时，我们还定义了三个私有成员变量 <code>m_name</code>、<code>m_age</code> 和 <code>m_gender</code>，用于存储人的姓名、年龄和性别信息。</p><p>接着，我们可以创建 <code>Person</code> 类的多个对象，每个对象都代表一个具体的人。例如：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">Person person1, person2;</span></span>
<span class="line"><span style="color:#e1e4e8;">person1.setName(&quot;Alice&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">person1.setAge(20);</span></span>
<span class="line"><span style="color:#e1e4e8;">person1.setGender(&#39;F&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">person2.setName(&quot;Bob&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">person2.setAge(25);</span></span>
<span class="line"><span style="color:#e1e4e8;">person2.setGender(&#39;M&#39;);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在上述代码中，我们先创建了两个 <code>Person</code> 类的对象 <code>person1</code> 和 <code>person2</code>，并分别使用类的成员函数对它们的属性进行赋值。其中，<code>person1</code> 对象代表一个20岁的女性，名叫 Alice，而 <code>person2</code> 对象则代表一个25岁的男性，名叫 Bob。</p><p>这样，通过定义和使用类与对象可以更加简洁、可维护和易于扩展地描述软件设计和实现中的某些问题，例如人员管理、学生信息系统等。</p><h2 id="类与对象的使用" tabindex="-1">类与对象的使用 <a class="header-anchor" href="#类与对象的使用" aria-label="Permalink to &quot;类与对象的使用&quot;">​</a></h2><p>在C++中，类（Class）是一种自定义数据类型，而对象（Object）则是类的一个具体实例。通过定义和使用类与对象可以更加简洁、可维护和易于扩展地描述软件设计和实现中的某些问题。</p><p>下面以一个简单的矩形类为例，介绍如何使用C++中的类与对象。</p><p>首先，我们可以定义一个表示矩形的 <code>Rectangle</code> 类，用于存储矩形的位置和尺寸信息，代码如下：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">class Rectangle {</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 构造函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle(double x = 0, double y = 0, double w = 0, double h = 0)</span></span>
<span class="line"><span style="color:#e1e4e8;">        : m_x(x), m_y(y), m_width(w), m_height(h) {}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 成员方法：获取矩形面积</span></span>
<span class="line"><span style="color:#e1e4e8;">    double getArea() const { return m_width * m_height; }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 成员方法：移动矩形的位置</span></span>
<span class="line"><span style="color:#e1e4e8;">    void move(double xOffset, double yOffset) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        m_x += xOffset;</span></span>
<span class="line"><span style="color:#e1e4e8;">        m_y += yOffset;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 成员变量：矩形左上角顶点的x坐标</span></span>
<span class="line"><span style="color:#e1e4e8;">    double m_x;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 成员变量：矩形左上角顶点的y坐标</span></span>
<span class="line"><span style="color:#e1e4e8;">    double m_y;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 成员变量：矩形的宽度</span></span>
<span class="line"><span style="color:#e1e4e8;">    double m_width;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 成员变量：矩形的高度</span></span>
<span class="line"><span style="color:#e1e4e8;">    double m_height;</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>在上述代码中，我们声明了一个 <code>Rectangle</code> 类，并定义了四个成员变量 <code>m_x</code>、<code>m_y</code>、<code>m_width</code> 和 <code>m_height</code>，用于存储矩形的位置和尺寸。此外，我们还定义了一个构造函数，以便创建对象时可以为矩形的坐标和大小进行初始化。</p><p>接下来，我们可以使用 <code>Rectangle</code> 类来创建多个具体的矩形对象，并调用相关成员方法和变量。例如：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle rect1(0, 0, 10, 20);</span></span>
<span class="line"><span style="color:#e1e4e8;">    std::cout &lt;&lt; &quot;rect1 area = &quot; &lt;&lt; rect1.getArea() &lt;&lt; std::endl; // 输出：200</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    ++rect1.m_width;</span></span>
<span class="line"><span style="color:#e1e4e8;">    std::cout &lt;&lt; &quot;rect1 new area = &quot; &lt;&lt; rect1.getArea() &lt;&lt; std::endl; // 输出：220</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    rect1.move(2, -3);</span></span>
<span class="line"><span style="color:#e1e4e8;">    std::cout &lt;&lt; &quot;rect1 new pos = (&quot; &lt;&lt; rect1.m_x &lt;&lt; &quot;, &quot; &lt;&lt; rect1.m_y &lt;&lt; &quot;)&quot; &lt;&lt; std::endl; // 输出：(2, -3)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle rect2(-5, 10, 7.5, 15);</span></span>
<span class="line"><span style="color:#e1e4e8;">    std::cout &lt;&lt; &quot;rect2 area = &quot; &lt;&lt; rect2.getArea() &lt;&lt; std::endl; // 输出：112.5</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>在上述代码中，我们先定义了一个名为 <code>rect1</code> 的矩形对象，并设置它的坐标为 (0, 0)，大小为 10 x 20。然后，我们调用了 <code>getArea</code> 成员方法，计算出该矩形的面积并输出到屏幕上。接着，我们更新了矩形的宽度变量，并再次计算矩形的面积。最后，我们调用了 <code>move</code> 成员方法，将矩形整体向右2个单位、向下3个单位移动，并输出其新的坐标。类似地，我们还定义并使用了另一个名为 <code>rect2</code> 的矩形对象。</p><p>综上所述，通过定义和使用类与对象，可以使程序更具表现性、可重复使用性和易扩展性，有助于提高程序的开发效率和代码质量。</p><h2 id="如何创建对象" tabindex="-1">如何创建对象 <a class="header-anchor" href="#如何创建对象" aria-label="Permalink to &quot;如何创建对象&quot;">​</a></h2><p>C++中可以使用以下方法来创建对象：</p><ol><li>声明对象 通过在类外声明一个类，再在程序中创建该类的实例来创建一个对象。例如：</li></ol><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">using namespace std;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Rectangle {</span></span>
<span class="line"><span style="color:#e1e4e8;">   private:</span></span>
<span class="line"><span style="color:#e1e4e8;">    double length;</span></span>
<span class="line"><span style="color:#e1e4e8;">    double width;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        cout &lt;&lt; &quot;Rectangle object is created&quot; &lt;&lt; endl; </span></span>
<span class="line"><span style="color:#e1e4e8;">        length = 0.0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        width = 0.0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle(double l, double w) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        cout &lt;&lt; &quot;Rectangle object is created&quot; &lt;&lt; endl; </span></span>
<span class="line"><span style="color:#e1e4e8;">        length = l;</span></span>
<span class="line"><span style="color:#e1e4e8;">        width = w;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    double area() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return length * width;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle rect;   // 创建一个默认构造函数提供的矩形对象</span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle rect1(4.5, 6.5); // 创建一个参数化的矩形对象</span></span>
<span class="line"><span style="color:#e1e4e8;">    cout &lt;&lt; &quot;Area of rectangle: &quot; &lt;&lt; rect.area() &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    cout &lt;&lt; &quot;Area of rectangle: &quot; &lt;&lt; rect1.area() &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><ol start="2"><li>new运算符分配动态内存 使用new运算符来在堆上为对象分配内存空间，例如</li></ol><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">Rectangle *rectPtr = new Rectangle();   // 动态分配了一个默认构造函数提供的Rectangle对象并返回指向其地址的指针</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>需要注意，在使用完这个对象后，还需要显示调用delete释放内存空间。 比如：<code> delete rectPtr;</code></p><ol start="3"><li>栈上创建对象，可以不使用new操作符来手动管理内存。例如：</li></ol><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">Rectangle rect;   // 在栈上创建一个矩形对象调用默认构造函数</span></span>
<span class="line"><span style="color:#e1e4e8;">Rectangle rect1(4.5, 6.5);  // 带参数的构造函数创建对象</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>需要注意，当该对象超出作用域时，自动释放其分配到的内存空间。</p><p>无论是在堆上还是再栈上创建对象都可以十分方便地完成，其中在栈上创建对象效率更高，在处理不必要动态内存管理操作时可以考虑增加栈上创建对象的使用比例，但需注意不要因过度占用栈内存而导致堆栈溢出。</p><h2 id="熟悉构造函数" tabindex="-1">熟悉构造函数 <a class="header-anchor" href="#熟悉构造函数" aria-label="Permalink to &quot;熟悉构造函数&quot;">​</a></h2><p>在C++中，构造函数（Constructor）是一种特殊的成员函数，用于初始化对象的数据成员。当我们创建一个新对象时，编译器会自动调用该对象的构造函数来完成初始化工作。构造函数可以带有参数，也可以不带参数。</p><p>构造函数的语法如下：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">class MyClass {</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 默认构造函数（可以不写）</span></span>
<span class="line"><span style="color:#e1e4e8;">    MyClass();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 带参数的构造函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    MyClass(int arg1, double arg2);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 拷贝构造函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    MyClass(const MyClass&amp; other);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 其他成员函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    ...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">private:</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 数据成员</span></span>
<span class="line"><span style="color:#e1e4e8;">    int m_intValue;</span></span>
<span class="line"><span style="color:#e1e4e8;">    double m_doubleValue;</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>其中，类中可以定义多个不同的构造函数。如果没有显式地声明任何构造函数，则编译器会自动创建一个默认的无参构造函数（Default Constructor），用于初始化所有非static数据成员。</p><p>下面举个例子说明不同类型的构造函数在实际应用中的用法：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Person {</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 默认构造函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    Person() : m_name(&quot;No Name&quot;), m_age(0) {}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 参数构造函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    Person(std::string name, int age) : m_name(name), m_age(age) {}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 拷贝构造函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    Person(const Person&amp; other) : m_name(other.m_name), m_age(other.m_age) {}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 成员方法</span></span>
<span class="line"><span style="color:#e1e4e8;">    void introduce() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        std::cout &lt;&lt; &quot;My name is &quot; &lt;&lt; m_name &lt;&lt; &quot;, and I am &quot; &lt;&lt; m_age &lt;&lt; &quot; years old.&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">private:</span></span>
<span class="line"><span style="color:#e1e4e8;">    std::string m_name;</span></span>
<span class="line"><span style="color:#e1e4e8;">    int m_age;</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 使用默认构造函数创建对象</span></span>
<span class="line"><span style="color:#e1e4e8;">    Person p1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    p1.introduce(); // My name is No Name, and I am 0 years old.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 使用参数构造函数创建对象</span></span>
<span class="line"><span style="color:#e1e4e8;">    Person p2(&quot;Alice&quot;, 25);</span></span>
<span class="line"><span style="color:#e1e4e8;">    p2.introduce(); // My name is Alice, and I am 25 years old.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 使用拷贝构造函数创建对象</span></span>
<span class="line"><span style="color:#e1e4e8;">    Person p3 = p2; </span></span>
<span class="line"><span style="color:#e1e4e8;">    p3.introduce(); // My name is Alice, and I am 25 years old.</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>在上面的代码中，我们创建了一个名为Person的类，该类包含了三个不同类型的构造函数。第一个是默认构造函数，用于初始化对象的数据成员为默认值；第二个是带参数的构造函数，用于接受外部传入的参数并将其赋值给对象对应的数据成员；第三个是拷贝构造函数，用于复制一个已有对象的数据成员到新的对象中。</p><p>在main函数中，我们通过分别使用这三种构造函数来创建了三个Person对象，并分别调用其introduce方法输出对象的信息。</p><h2 id="析构函数的定义" tabindex="-1">析构函数的定义 <a class="header-anchor" href="#析构函数的定义" aria-label="Permalink to &quot;析构函数的定义&quot;">​</a></h2><p>在C++中，析构函数（Destructor）是一种特殊的成员函数，用于对象被销毁时自动调用以完成清理工作。通常来说，在程序结束或者一个对象所处的作用域结束时，编译器会自动调用其析构函数。</p><p>析构函数的语法如下：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">class MyClass {</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 构造函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    MyClass();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 析构函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    ~MyClass();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 其他成员函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    ...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">private:</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 数据成员</span></span>
<span class="line"><span style="color:#e1e4e8;">    int m_intValue;</span></span>
<span class="line"><span style="color:#e1e4e8;">    double m_doubleValue;</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>其中，析构函数与构造函数一样也有调用顺序问题，对于继承而来的多个基类，先调用的基类的析构函数会后完成清理工作。当然，每个类如果都没有用到动态分配内存或者开辟了一些资源则可以省略，默认为空即可。</p><p>以下是一个简单示例，展示如何使用析构函数释放资源：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">using namespace std;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Fruit{</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    Fruit(){</span></span>
<span class="line"><span style="color:#e1e4e8;">        cout&lt;&lt;&quot;Fruit was created.&quot;&lt;&lt;endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    virtual ~Fruit(){</span></span>
<span class="line"><span style="color:#e1e4e8;">        cout&lt;&lt;&quot;Fruit was destroyed.&quot;&lt;&lt;endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Apple:public Fruit{</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    Apple(){</span></span>
<span class="line"><span style="color:#e1e4e8;">        cout&lt;&lt;&quot;Apple was created.&quot;&lt;&lt;endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    ~Apple(){</span></span>
<span class="line"><span style="color:#e1e4e8;">        cout&lt;&lt;&quot;Apple was destroyed.&quot;&lt;&lt;endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main(){</span></span>
<span class="line"><span style="color:#e1e4e8;">    Fruit* p = new Apple;</span></span>
<span class="line"><span style="color:#e1e4e8;">    delete p;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>在上述示例代码中，创建了一个基类<code>Fruit</code>和一个派生类<code>Apple</code>。在创建<code>Fruit</code>对象时，会输出一条信息 &quot;Fruit was created.&quot; ，在销毁<code>Fruit</code>对象时（即通过<code>delete p</code>删除）会自动调用<code>Fruit</code>的析构函数来完成资源释放的工作，并输出一条信息 &quot;Fruit was destroyed.&quot; 。在创建<code>Apple</code>对象时，会先调用<code>Fruit</code>的构造函数再调用<code>Apple</code>的构造函数，输出 &quot;Fruit was created.&quot; ，&quot;Apple was created.&quot; 。当删除<code>p</code>指向的对象时，会首先调用<code>Apple</code>的析构函数，输出 &quot;Apple was destroyed.&quot; ，然后再调用<code>Fruit</code>的析构函数释放基类部分的资源并输出 &quot;Fruit was destroyed.&quot;。</p><p>需要注意的是析构函数与构造函数不同，无法接受任何参数，且无法被重载。因此如果需要实现不同类型的清理工作，则需要使用其它方式区别实现。虽然可以使用成员函数手动触发但通常的操作系统自动进行垃圾回收，因此应尽量避免手动请求对象的资源清理。</p><h2 id="动态内存分配" tabindex="-1">动态内存分配 <a class="header-anchor" href="#动态内存分配" aria-label="Permalink to &quot;动态内存分配&quot;">​</a></h2><p>在C++中，动态内存分配（Dynamic Memory Allocation）是一种专门用于在程序运行期间手动开辟、释放内存的技术，可以通过new、delete运算符实现。</p><p>动态内存分配通常用于以下情况：</p><ol><li>程序无法预知所需内存大小时，只能根据实际情况来动态分配内存；</li><li>程序需要在多个函数或不同的对象之间共享数据；</li><li>需要控制程序中的内存使用情况，避免出现内存泄漏等问题。</li></ol><p>下面让我们看一个简单的例子，介绍如何使用new和delete进行动态内存分配：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">using namespace std;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int* p = new int;  // 分配一个整型变量所占用的内存空间</span></span>
<span class="line"><span style="color:#e1e4e8;">    *p = 10;           // 将所分配的内存空间设置为10</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    cout &lt;&lt; &quot;The value at address &quot; &lt;&lt; p &lt;&lt; &quot; is: &quot; &lt;&lt; *p &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    delete p;          // 释放所分配的内存空间，以便 reuse or delete</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>在上述示例代码中，首先使用new关键字动态分配了一个int类型变量所需要的内存空间，并将返回指针赋值给变量<code>p</code>。然后给所分配的内存空间赋值为10。最后输出该地址对应的值，再使用delete操作符释放<code>p</code>所指向的内存空间。</p><p>需要注意的是，在使用new分配动态内存时，如果分配不成功会返回一个空指针。因此在每次进行new分配时都需要检查该指针是否为NULL。在释放该指针指向的内存空间后，其对应的指针值不为 NULL 但可能没有任何意义，因此好习惯是将指针赋值为 NULL（通常由宏定于)，避免悬空指针的出现带来未知风险。</p><h2 id="指向对象的指针" tabindex="-1">指向对象的指针 <a class="header-anchor" href="#指向对象的指针" aria-label="Permalink to &quot;指向对象的指针&quot;">​</a></h2><p>在C++中，对象指针（Object Pointer）是一种指向已定义对象的指针变量。因为指针可以用于访问该对象的成员数据和函数，对象指针常用于类的实例化、参数传递和返回等操作，使得对象在程序中更加灵活多变。</p><p>以下是一个简单示例代码，展示如何声明和使用对象指针：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">using namespace std;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Rectangle {</span></span>
<span class="line"><span style="color:#e1e4e8;">   private:</span></span>
<span class="line"><span style="color:#e1e4e8;">    double length;</span></span>
<span class="line"><span style="color:#e1e4e8;">    double width;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle(double l, double w) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        length = l;</span></span>
<span class="line"><span style="color:#e1e4e8;">        width = w;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    double area() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return length * width;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle* ptr;  // 声明一个指向Rectangle类型对象的指针</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle rect(4.5, 6.5);  // 创建一个Rectangle类型对象</span></span>
<span class="line"><span style="color:#e1e4e8;">    ptr = &amp;rect;               // 将对象地址赋值给指针</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    cout &lt;&lt; &quot;Area of the rectangle is: &quot; &lt;&lt; ptr-&gt;area() &lt;&lt; endl;  // 通过指针访问对象成员函数</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>在上述示例代码中，首先定义了一个<code>Rectangle</code>类及其构造方法和计算面积方法。然后声明了一个指向<code>Rectangle</code>类型对象的指针变量<code>ptr</code>。接着创建了一个<code>Rectangle</code>类型的对象<code>rect</code>，将其地址赋值给指针变量<code>ptr</code>，最后通过指针调用了<code>Rectangle</code>类中的计算面积方法来求解面积，并输出结果。</p><p>需要注意的是，在使用对象指针时，必须保证指针不为空（也就是指向一个有效对象），才可以正确访问对象成员。通常在创建对象指针时，可以使用构造函数完成对象初始化，并在使用完后再通过析构函数进行释放。同时还要避免出现悬空指针或者内存泄漏等问题，需要对指针变量进行适当的管理和维护。</p><h2 id="对象数组" tabindex="-1">对象数组 <a class="header-anchor" href="#对象数组" aria-label="Permalink to &quot;对象数组&quot;">​</a></h2><p>在C++中，对象数组（Object Array）是一种存储同类型对象的数组。和普通数组一样，对象数组也可以被声明、初始化并按索引访问。</p><p>以下是一个简单示例代码，展示如何声明和使用对象数组：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">using namespace std;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Rectangle {</span></span>
<span class="line"><span style="color:#e1e4e8;">   private:</span></span>
<span class="line"><span style="color:#e1e4e8;">    double length;</span></span>
<span class="line"><span style="color:#e1e4e8;">    double width;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        length = 0.0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        width = 0.0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle(double l, double w) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        length = l;</span></span>
<span class="line"><span style="color:#e1e4e8;">        width = w;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    double area() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return length * width;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle rects[3];  // 声明一个包含三个Rectangle对象的数组</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    rects[0] = Rectangle(4.5, 6.5);  // 给数组的每个元素赋值</span></span>
<span class="line"><span style="color:#e1e4e8;">    rects[1] = Rectangle(3.8, 7.2);</span></span>
<span class="line"><span style="color:#e1e4e8;">    rects[2] = Rectangle(5.0, 5.0);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    for (int i = 0; i &lt; 3; ++i) {  // 遍历数组并输出每个矩形的面积</span></span>
<span class="line"><span style="color:#e1e4e8;">        cout &lt;&lt; &quot;Area of rectangle &quot; &lt;&lt; i + 1 &lt;&lt; &quot; is: &quot; &lt;&lt; rects[i].area() &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>在上述示例代码中，首先定义了一个<code>Rectangle</code>类及其构造方法和计算面积方法。然后声明了一个包含三个<code>Rectangle</code>对象的数组<code>rects</code>，接着分别给每个数组元素赋值，最后遍历数组并输出每个矩形的面积。</p><p>需要注意的是，在使用对象数组时，必须确保每个对象都已经正确构造或者赋值。同时还要注意控制数组大小，避免出现数组越界或内存溢出等问题。</p><h2 id="指向对象的指针数组" tabindex="-1">指向对象的指针数组 <a class="header-anchor" href="#指向对象的指针数组" aria-label="Permalink to &quot;指向对象的指针数组&quot;">​</a></h2><p>在C++中，指向对象的指针数组（Object Pointer Array）是一种存储同类型对象指针的数组。和普通数组一样，它可以被声明、初始化并按索引访问。因为指针可以用于访问该对象的成员数据和函数，这种指针数组常用于实现动态内存分配和多个对象之间共享数据等操作。</p><p>以下是一个简单示例代码，展示如何声明和使用对象指针数组:</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">using namespace std;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Rectangle {</span></span>
<span class="line"><span style="color:#e1e4e8;">   private:</span></span>
<span class="line"><span style="color:#e1e4e8;">    double length;</span></span>
<span class="line"><span style="color:#e1e4e8;">    double width;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        length = 0.0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        width = 0.0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle(double l, double w) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        length = l;</span></span>
<span class="line"><span style="color:#e1e4e8;">        width = w;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    double area() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return length * width;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Rectangle* rects[3];  // 声明一个包含三个Rectangle对象指针的数组</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    rects[0] = new Rectangle(4.5, 6.5);  // 给数组的每个元素指向新建的Rectangle对象</span></span>
<span class="line"><span style="color:#e1e4e8;">    rects[1] = new Rectangle(3.8, 7.2);</span></span>
<span class="line"><span style="color:#e1e4e8;">    rects[2] = new Rectangle(5.0, 5.0);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    for (int i = 0; i &lt; 3; ++i) {  // 遍历数组并输出每个矩形的面积</span></span>
<span class="line"><span style="color:#e1e4e8;">        cout &lt;&lt; &quot;Area of rectangle &quot; &lt;&lt; i + 1 &lt;&lt; &quot; is: &quot; &lt;&lt; rects[i]-&gt;area() &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    for (int i = 0; i &lt; 3; ++i) {  // 释放每个动态分配的Rectangle对象所占用的内存空间</span></span>
<span class="line"><span style="color:#e1e4e8;">        delete rects[i];</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>在上述示例代码中，首先定义了一个<code>Rectangle</code>类及其构造方法和计算面积方法。然后声明了一个指向<code>Rectangle</code>类型对象的指针数组<code>rects</code>，接着通过new关键字分配了三个矩形对象的内存，并将它们的地址赋值给数组元素。最后遍历数组并输出每个矩形的面积，并在程序结束时，使用delete操作符手动释放每个动态分配的对象所占用的内存空间。</p><p>需要注意的是，在使用对象指针数组时，必须确保每个指针都已经指向正确的对象或者为空指针，同时要避免出现悬空指针或者内存泄漏等问题。另外，在释放该指针指向的内存空间后，其对应的指针值不为 NULL 但可能没有任何意义，因此好习惯是将指针赋值为 NULL 避免悬空指针的出现带来未知风险。</p><h2 id="简单的类继承方法" tabindex="-1">简单的类继承方法 <a class="header-anchor" href="#简单的类继承方法" aria-label="Permalink to &quot;简单的类继承方法&quot;">​</a></h2><p>在 C++ 中，使用类继承（Inheritance）可以创建一个新的类，该新类从已有的类中派生而来，并且可以重用父类中的属性和方法。通过继承，新类可以对父类进行扩展或特化，并且可以实现代码复用和抽象。</p><p>C++ 中的类继承分为三种方式：</p><ol><li>公有继承（Public Inheritance） 公有继承是最常见的一种继承方式，也是默认的继承方式。在公有继承中，派生类能够访问基类中所有可访问的成员（包括公有、保护、私有成员），其中公有成员在派生类中仍然是公有成员，保护成员在派生类中仍然是保护成员，但不能直接访问基类的私有成员。公有继承可以使用如下语法：</li></ol><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">class DerivedClass : public BaseClass {</span></span>
<span class="line"><span style="color:#e1e4e8;">   // derived class body</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>保护继承（Protected Inheritance） 保护继承比较少用，它将基类中所有的成员都变成派生类中的保护成员，基类的公有成员和保护成员在派生类中变成了受保护的成员，不能被外部访问。只有派生类和其子类可以访问这些成员。保护继承的语法如下：</li></ol><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">class DerivedClass : protected BaseClass {</span></span>
<span class="line"><span style="color:#e1e4e8;">   // derived class body</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>私有继承（Private Inheritance） 私有继承是将基类中所有的公共和保护成员变成了派生类中的私有成员，不能被外部访问，只有派生类内部可以使用。私有继承的语法如下：</li></ol><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">class DerivedClass : private BaseClass {</span></span>
<span class="line"><span style="color:#e1e4e8;">   // derived class body</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>需要注意的是，通过继承来获得父类的成员函数时，如果要重载该成员函数，可以使用 override 关键字覆盖父类的同名函数，也可以使用 final 关键字禁止虚函数在子类中被覆盖。</p><p>另外，C++ 11 中引入了 final 和 override 关键字，用于显式声明某个虚函数不能再被继承，或者该函数已经被继承，并且进行了重载处理。在 C++ 中，当我们要判断一个类归属关系是否为另一个类的继承关系，可以使用 dynamic_cast 运算符，以便更安全地操作对象并避免类型转换错误或未定义行为。</p><details class="details custom-block"><summary>私有继承的例子</summary><p>展示了如何使用类来设计车辆和机动车（MotorVehicle）数据结构：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">using namespace std;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Vehicle {</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">  int wheels;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  Vehicle(int w):wheels(w){</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class MotorVehicle : private Vehicle {</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">  string engineType;</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">  MotorVehicle(string et, int w): Vehicle(w), engineType(et){</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  void printInfo(){</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 打印完成车辆信息</span></span>
<span class="line"><span style="color:#e1e4e8;">    cout&lt;&lt;&quot;Engine type: &quot;&lt;&lt;engineType&lt;&lt;endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    cout&lt;&lt;&quot;Wheels: &quot;&lt;&lt;wheels&lt;&lt;endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main(){</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  MotorVehicle car(&quot;Gasoline&quot;, 4);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  car.printInfo();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>在上述代码中，MotorVehicle 是派生类，Vehicle 是基类。MotorVehicle 实现了一个机动车辆（汽车）数据结构，并通过 printInfo 成员函数打印出了汽车的引擎类型和轮数属性。</p><p>在这个例子中，MotorVehicle 类使用了 private 的方式继承自 Vehicle 基类。这意味着，在类定义外部或其他客户端代码内，无法通过 MotorVehicle 对象直接访问 Vehicle 的公共或保护成员。只有 MotorVehicle 中的成员函数可以访问 Vehicle 继承下来的成员，以实现汽车属性的完整性。</p><p>这个例子突出了私有继承在代码重用和抽象化方面的优点。Privacy避免了Vehicle的数据成员暴露给派生类的使用者，在Vehicle内部类继承下定义新的操作。这样，MotorVehicle在API设计时可以隐藏来自Vehicle的实现细节，并根据需要打印某些代码，而不必担心公共接口暴露可能导致的麻烦。</p></details><h2 id="虚函数" tabindex="-1">虚函数 <a class="header-anchor" href="#虚函数" aria-label="Permalink to &quot;虚函数&quot;">​</a></h2><p>C++中的虚函数，是一种实现多态性(polymorphism)和动态绑定(dynamic binding)的机制。通过将函数声明为虚函数，可以在派生类中覆盖（override）基类的实现方式，并且实现在运行时根据对象类型选择调用哪个函数的功能。</p><p>虚函数的概念是通过在基类中添加 virtual 关键字来实现的。派生类通过 override 关键字明确定义要重写的虚拟函数，并可以在其子类中实现不同的版本。当通过基类指针或引用访问派生类对象时，编译器将根据对象类型动态地选择正确的函数版本，从而实现多态性和动态绑定。</p><p>以下是一个简单的例子，展示了如何通过虚函数实现动态绑定：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">using namespace std;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Shape {</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">  virtual double getArea() = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Circle : public Shape {</span></span>
<span class="line"><span style="color:#e1e4e8;">private:</span></span>
<span class="line"><span style="color:#e1e4e8;">  double radius;</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">  Circle(double r): radius(r) {}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  virtual double getArea() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return 3.14*radius*radius;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Rectangle : public Shape {</span></span>
<span class="line"><span style="color:#e1e4e8;">private:</span></span>
<span class="line"><span style="color:#e1e4e8;">  double length, width;</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">  Rectangle(double l, double w): length(l), width(w) {}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  virtual double getArea() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return length*width;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main(){</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  Circle c(2.5);</span></span>
<span class="line"><span style="color:#e1e4e8;">  Rectangle r(4.0, 6.0);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  Shape *p1 = &amp;c;</span></span>
<span class="line"><span style="color:#e1e4e8;">  Shape *p2 = &amp;r;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  cout&lt;&lt;&quot;Area of circle: &quot;&lt;&lt;p1-&gt;getArea()&lt;&lt;endl;  // 动态绑定</span></span>
<span class="line"><span style="color:#e1e4e8;">  cout&lt;&lt;&quot;Area of rectangle: &quot;&lt;&lt;p2-&gt;getArea()&lt;&lt;endl;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p>在这个例子中，Shape 是一个抽象类，其中持有了一个纯虚函数 getArea。Circle 和 Rectangle 是两个派生类，重写了 Shape 类中的虚函数，并使用 override 关键字覆盖基类实现方式。</p><p>在主函数中，通过 Circle 和 Rectangle 的构造函数创建两个不同形状的图形对象，并声明了两个指向基类 Shape 的指针：p1 指针指向 Circle 对象，p2 指针指向 Rectangle 对象。虽然 p1 和 p2 都是指向 Shape 基类指针，但由于 virtual &amp; override 关键字带来的多态性和动态绑定能力，使得在调用 getArea 函数时，编译器会根据运行时当前对象类型（Circle 或 Rectangle）动态地选择正确的函数版本，从而得到每个对象的面积结果。</p><p>这个例子说明了在 C++ 中如何利用虚函数和继承实现动态绑定。</p><p>10.170.10.10</p><p>system</p><p>Admin123</p>`,131);function d(e,m,y,g,h,v){return l(),p("div",null,[s("h1",i,[n(c(e.$frontmatter.title)+" ",1),t,n(),b]),u])}const w=a(o,[["render",d]]);export{C as __pageData,w as default};
