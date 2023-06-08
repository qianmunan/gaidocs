import{_ as c,o as t,c as o,z as n,a as s,t as i,G as e,B as l,V as p,D as b}from"./chunks/framework.055571f3.js";const N=JSON.parse('{"title":"线性表","description":"","frontmatter":{"title":"线性表"},"headers":[],"relativePath":"scattered/dataStruct/linear.md","filePath":"scattered/dataStruct/linear.md","lastUpdated":1686207654000}'),u={name:"scattered/dataStruct/linear.md"},y={id:"frontmatter-title",tabindex:"-1"},m=n("img",{src:"https://gaidocs.oss-cn-hangzhou.aliyuncs.com/emoji/202305101625732.png",width:"46",height:"46",alt:"图片描述",style:{display:"inline","margin-bottom":"-12px"}},null,-1),E=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}} <img src="https://gaidocs.oss-cn-hangzhou.aliyuncs.com/emoji/202305101625732.png" width="46" height="46" alt="图片描述" style="display:inline; margin-bottom: -12px"/>"'},"​",-1),d=n("h2",{id:"线性表的定义与运算",tabindex:"-1"},[s("线性表的定义与运算 "),n("a",{class:"header-anchor",href:"#线性表的定义与运算","aria-label":'Permalink to "线性表的定义与运算"'},"​")],-1),h=p('<p>线性表主要支持四种运算操作，包括插入、删除、查找和遍历:</p><ol><li><p>插入操作：将新的元素插入到线性表的指定位置，可以在顺序表中任意位置进行插入，而在链式表中则需要找到插入位置前一个节点，然后修改指针指向。</p></li><li><p>删除操作：从线性表中删除指定位置的元素，可以在顺序表中通过覆盖待删除元素的方式实现，而在链式表中需要找到待删除节点的前一个节点，并修改前一个节点的指针指向后继节点。</p></li><li><p>查找操作：查找线性表中某个元素在指定条件下是否存在，可以使用顺序查找或二分查找等算法，也可以在链式表中按照顺序遍历，依次比较每个节点的值，找到匹配的元素。</p></li><li><p>遍历操作：遍历线性表中的所有元素，可以使用for、while循环等方法进行遍历。在顺序表中通过数组下标逐个取出所有元素，而在链式表中则需要依次访问每个节点。</p></li></ol><p>线性表的运算操作是数据结构中最基础的操作之一，对于其他高级数据结构的实现都有重要作用。</p><h2 id="线性表的顺序存储结构" tabindex="-1">线性表的顺序存储结构 <a class="header-anchor" href="#线性表的顺序存储结构" aria-label="Permalink to &quot;线性表的顺序存储结构&quot;">​</a></h2><p>线性表的顺序存储结构是指，将线性表中的元素按照其逻辑关系依次存放到一块连续的存储空间中。在该结构中，用一个一维数组来存储线性表中的所有元素，同时可以利用数组下标来表示各元素之间的逻辑关系。</p><p>具体来说，在线性表的顺序存储结构中，需要使用两个参数来描述该结构：</p><ol><li><p>存储空间的起始位置：即在线性表中第一个元素所在的物理存储位置；</p></li><li><p>线性表的长度：即线性表中元素的个数。</p></li></ol><p>在顺序存储结构中，我们可以通过数组下标访问任何一个数据元素，比如线性表中第i个元素的值可通过数组a[i-1]来得到，其中a为存储线性表的一维数组，因为数组下标从0开始。此外，由于数组在内存中是连续存储的，所以可以像处理普通数组一样，有效地利用计算机系统的缓存机制，提高程序性能。</p><p>但是，线性表的顺序存储结构也存在一些问题。当线性表中需要频繁插入或删除元素时，由于每次操作都要移动其他元素的位置，会导致操作效率很低。另外，如果线性表的长度不确定，而存储空间有限时，可能会造成存储空间的浪费或溢出等问题。</p><h2 id="线性表的链式存储结构" tabindex="-1">线性表的链式存储结构 <a class="header-anchor" href="#线性表的链式存储结构" aria-label="Permalink to &quot;线性表的链式存储结构&quot;">​</a></h2>',10),g=p(`<p>具体来说，链表中的第一个节点称为头节点，通常不存储数据，只有后继指针；最后一个节点称为尾节点，其后继指针为空（或指向空节点）。而对于其他节点，则既有数据域又有指针域，其中指针域的值为该节点的后继节点地址。</p><p>相比于顺序存储结构，链式存储结构具有以下优点：</p><ol><li><p>能够动态管理内存，不需要事先为整个线性表分配固定大小的存储空间，避免了存储空间浪费和溢出问题；</p></li><li><p>支持快速插入和删除操作，只需修改前驱节点和后继节点的指针即可，不需要像顺序存储结构那样移动元素；</p></li><li><p>链表的长度没有限制，可以随时扩充或缩小，比较灵活。</p></li></ol><p>不过链式存储结构也存在一些缺点，如访问链表中的任何一个节点需要遍历整个链表，所以相对于顺序结构，链式结构的访问速度较慢。而且由于每一个元素都需要一个指针域来记录其后继节点地址，因此会占用相对较多的存储空间。</p><h3 id="单链表" tabindex="-1">单链表 <a class="header-anchor" href="#单链表" aria-label="Permalink to &quot;单链表&quot;">​</a></h3><p>链表是通过一组任意的存储单元来存储线性表中的元素</p><p>每一个节点中只有一个指向后继的指针，所以称其为单链表</p><p>单链表节点结构</p><p>结点结构定义</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">typedef int DataType;</span></span>
<span class="line"><span style="color:#e1e4e8;">class Item</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    	DataType data;</span></span>
<span class="line"><span style="color:#e1e4e8;">    	Item* next;</span></span>
<span class="line"><span style="color:#e1e4e8;">    	Item(){next = NULL;}</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Link</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    	Item *head; // 链表头指针</span></span>
<span class="line"><span style="color:#e1e4e8;">    	Link() {head = NULL;} // 构造函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    	~Link() {DeleteAll();}  // 析构函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    	void Initiate(); // 初始化</span></span>
<span class="line"><span style="color:#e1e4e8;">    	void DeleteAll(); // 删除所哟结点</span></span>
<span class="line"><span style="color:#e1e4e8;">    	void HeadCreate(int); // 从头建链表</span></span>
<span class="line"><span style="color:#e1e4e8;">    	void TailCreate(int); // 从尾建链表</span></span>
<span class="line"><span style="color:#e1e4e8;">    	void HeadCreateWithHead(int); // 建立带表头的链表 （从头）</span></span>
<span class="line"><span style="color:#e1e4e8;">    	void TailCreateWithHead(int); // 建立带表头的链表（从尾）</span></span>
<span class="line"><span style="color:#e1e4e8;">    	int length(); // 求表的长度</span></span>
<span class="line"><span style="color:#e1e4e8;">    	Item *Locatex(DataType x); // 查找值为x的数据元素</span></span>
<span class="line"><span style="color:#e1e4e8;">    	Item *Locatei(int i); // 查找第i个元素值</span></span>
<span class="line"><span style="color:#e1e4e8;">    	bool Insert(DataType x, int i); // 在链表第i个节点之前插入x</span></span>
<span class="line"><span style="color:#e1e4e8;">    	bool Deleted(int i); // 删除链表中第i个节点</span></span>
<span class="line"><span style="color:#e1e4e8;">    	void printAll(); // 打印链表</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="顺序表与链式表的比较" tabindex="-1">顺序表与链式表的比较 <a class="header-anchor" href="#顺序表与链式表的比较" aria-label="Permalink to &quot;顺序表与链式表的比较&quot;">​</a></h2><p>顺序表与链式表是两种常见的线性数据结构，它们都用来存储具有相同数据类型的元素的有限序列。它们之间最显著的差别在于其底层实现方式不同：</p><ol><li><p>底层实现： 顺序表使用一段连续的物理空间存储元素，通过下标直接访问；而链表则使用一组任意分散的、独立的节点进行存储，每个节点包含了存储元素的数据域和指向后继节点的指针域。</p></li><li><p>动态性： 由于顺序表需要一开始就为其分配固定大小的连续存储空间，因此其容量不能动态增长或缩小；而链表则不受长度限制，可以随时扩展或收缩。</p></li><li><p>存储效率： 由于顺序表中的元素是连续存储，访问时无需遍历整个线性表，在逻辑上距离较近的元素在物理上也比较靠近，所以它的访问速度相对较快；而链表中的元素需要通过指针互相连接起来，访问时必须从头节点逐步遍历至目标节点，访问效率相对较慢。</p></li><li><p>插入删除的效率： 由于顺序表需要移动大量元素才能在中间位置插入或删除元素，所以其插入、删除操作效率较低；而链表仅需修改节点指针即可完成，效率更高。</p></li></ol><p>因此，选择何种数据结构要根据应用场景具体来定。若存储的数据总量已知且固定，并且需要频繁随机访问，则宜选用顺序表；若存储数据的数量不确定，而需要频繁地增加、删除或查找，则应优先考虑链表。不过两者也经常会结合使用，如对于需要快速访问元素但同时也需要支持高性能插入和删除的情况，可以在顺序表上再加一个较小的链表实现索引。</p><h2 id="算法应用举例" tabindex="-1">算法应用举例 <a class="header-anchor" href="#算法应用举例" aria-label="Permalink to &quot;算法应用举例&quot;">​</a></h2><h3 id="顺序表" tabindex="-1">顺序表 <a class="header-anchor" href="#顺序表" aria-label="Permalink to &quot;顺序表&quot;">​</a></h3><p>以下是使用 C++ 实现顺序表的示例代码。在这个示例中，我们使用数组来实现顺序表结构，并通过类的形式封装相关操作。</p><p>头文件：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#ifndef ARRAY_LIST_H</span></span>
<span class="line"><span style="color:#e1e4e8;">#define ARRAY_LIST_H</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">class ArrayList {</span></span>
<span class="line"><span style="color:#e1e4e8;">private:</span></span>
<span class="line"><span style="color:#e1e4e8;">    int length;   // 当前数组长度</span></span>
<span class="line"><span style="color:#e1e4e8;">    int maxLength;  // 最大数组长度</span></span>
<span class="line"><span style="color:#e1e4e8;">    T* data;     // 存储数据的数组指针</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    ArrayList(int maxLen = 10);   // 构造函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    ~ArrayList();   // 析构函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    void push_back(T value);   // 在数组末尾添加元素</span></span>
<span class="line"><span style="color:#e1e4e8;">    void insert(int position, T value);   // 在指定位置插入元素</span></span>
<span class="line"><span style="color:#e1e4e8;">    void erase(int position);   // 删除指定位置的元素</span></span>
<span class="line"><span style="color:#e1e4e8;">    T&amp; operator[](int index);   // 重载 [] 运算符，实现对顺序表的元素访问</span></span>
<span class="line"><span style="color:#e1e4e8;">    int size();   // 获取数组当前长度</span></span>
<span class="line"><span style="color:#e1e4e8;">    int capacity();   // 获取数组最大长度</span></span>
<span class="line"><span style="color:#e1e4e8;">    void printAll();   // 输出数组中所有元素</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#endif</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>源文件：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &quot;ArrayList.h&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">using namespace std;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">ArrayList&lt;T&gt;::ArrayList(int maxLen) {   // 构造函数，初始化长度为0，最大长度为 maxLen 的空数组</span></span>
<span class="line"><span style="color:#e1e4e8;">    length = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    maxLength = maxLen;</span></span>
<span class="line"><span style="color:#e1e4e8;">    data = new T[maxLength];</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">ArrayList&lt;T&gt;::~ArrayList() {   // 析构函数，释放数组内存</span></span>
<span class="line"><span style="color:#e1e4e8;">    delete[] data;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">void ArrayList&lt;T&gt;::push_back(T value) {   // 在数组末尾添加元素</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (length == maxLength) {   // 如果数组已满，扩展数组大小</span></span>
<span class="line"><span style="color:#e1e4e8;">        maxLength *= 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">        T* newData = new T[maxLength];</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (int i = 0; i &lt; length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            newData[i] = data[i];</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        delete[] data;</span></span>
<span class="line"><span style="color:#e1e4e8;">        data = newData;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    data[length] = value;</span></span>
<span class="line"><span style="color:#e1e4e8;">    length++;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">void ArrayList&lt;T&gt;::insert(int position, T value) {   // 在指定位置插入元素</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (position &gt; length) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        cout &lt;&lt; &quot;Invalid Position.&quot; &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">        return;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (length == maxLength) {   //如果数组已满，扩展数组大小</span></span>
<span class="line"><span style="color:#e1e4e8;">        maxLength *= 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">        T* newData = new T[maxLength];</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (int i = 0; i &lt; length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            newData[i] = data[i];</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        delete[] data;</span></span>
<span class="line"><span style="color:#e1e4e8;">        data = newData;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    for (int i = length; i &gt; position; i--) {   // 将数组元素后移</span></span>
<span class="line"><span style="color:#e1e4e8;">        data[i] = data[i - 1];</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    data[position] = value;</span></span>
<span class="line"><span style="color:#e1e4e8;">    length++;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">void ArrayList&lt;T&gt;::erase(int position) {   // 删除指定位置的元素</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (position &gt;= length) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        cout &lt;&lt; &quot;Invalid Position.&quot; &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">        return;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    for (int i = position + 1; i &lt; length; i++) {   // 将数组元素前移</span></span>
<span class="line"><span style="color:#e1e4e8;">        data[i - 1] = data[i];</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    length--;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">T&amp; ArrayList&lt;T&gt;::operator[](int index) {   // 重载 [] 运算符，实现对顺序表的元素访问</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (index &gt;= length) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        cout &lt;&lt; &quot;Invalid Index.&quot; &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return data[index];</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">int ArrayList&lt;T&gt;::size() {   // 获取数组当前长度</span></span>
<span class="line"><span style="color:#e1e4e8;">    return length;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">int ArrayList&lt;T&gt;::capacity() {   // 获取数组最大长度</span></span>
<span class="line"><span style="color:#e1e4e8;">    return maxLength;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">void ArrayList&lt;T&gt;::printAll() {   // 输出数组中所有元素</span></span>
<span class="line"><span style="color:#e1e4e8;">    for (int i = 0; i &lt; length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        cout &lt;&lt; data[i] &lt;&lt; &quot; &quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    cout &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><p>测试主函数：</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &quot;ArrayList.h&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    ArrayList&lt;int&gt; list;</span></span>
<span class="line"><span style="color:#e1e4e8;">    cout &lt;&lt; &quot;Capacity: &quot; &lt;&lt; list.capacity() &lt;&lt; &quot;, Size: &quot; &lt;&lt; list.size() &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    list.push_back(1);</span></span>
<span class="line"><span style="color:#e1e4e8;">    list.push_back(2);</span></span>
<span class="line"><span style="color:#e1e4e8;">    list.push_back(3);</span></span>
<span class="line"><span style="color:#e1e4e8;">    list.insert(1, 4);</span></span>
<span class="line"><span style="color:#e1e4e8;">    list.erase(2);</span></span>
<span class="line"><span style="color:#e1e4e8;">    list.printAll();</span></span>
<span class="line"><span style="color:#e1e4e8;">    cout &lt;&lt; &quot;Capacity: &quot; &lt;&lt; list.capacity() &lt;&lt; &quot;, Size: &quot; &lt;&lt; list.size() &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    list[1] = 5;</span></span>
<span class="line"><span style="color:#e1e4e8;">    list.printAll();</span></span>
<span class="line"><span style="color:#e1e4e8;">    return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">vcpkg install fmt:x64-windows</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>在上述代码中，我们定义了一个 ArrayList 类，使用模板 T 来指示数组中存储的元素类型。该类包含了一些基本操作，例如在数组末尾添加元素、在指定位置插入元素、删除指定位置的元素、重载 [] 运算符进行元素访问等。我们还在构造函数中设置了最大长度为默认值 10 的空数组，并且实现了自动扩展数组大小的功能。最后，在 main 函数中测试了顺序表的一系列操作。</p><h3 id="链表" tabindex="-1">链表 <a class="header-anchor" href="#链表" aria-label="Permalink to &quot;链表&quot;">​</a></h3><p>以下是实现单链表的C++代码：</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Node</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> data;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Node </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">next;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LinkedList</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">private:</span></span>
<span class="line"><span style="color:#E1E4E8;">    Node </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">head;</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">LinkedList</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Node </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">newNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Node</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        newNode-&gt;data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val;</span></span>
<span class="line"><span style="color:#E1E4E8;">        newNode-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(head </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newNode;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            Node </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">temp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> head;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(temp-&gt;next </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                temp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> temp-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            temp-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newNode;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">display</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(head </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;List is empty!&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        Node </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">temp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> head;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(temp </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> temp-&gt;data </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot; &quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            temp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> temp-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    LinkedList list;</span></span>
<span class="line"><span style="color:#E1E4E8;">    list.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    list.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    list.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    list.</span><span style="color:#B392F0;">display</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><p>这里我们定义了两个类，<code>Node</code>类表示一个节点，包含一个整数值和指向下一个节点的指针；<code>LinkedList</code>类表示链表，包含一个头指针和一些操作函数。其中，<code>add()</code>方法用于添加新元素到末尾，<code>display()</code>方法打印链表中所有元素的值。在主函数中我们创建了一个链表对象，并添加了三个元素，最后打印链表中所有元素的值。</p><h3 id="顺序表和链表的混合使用" tabindex="-1">顺序表和链表的混合使用 <a class="header-anchor" href="#顺序表和链表的混合使用" aria-label="Permalink to &quot;顺序表和链表的混合使用&quot;">​</a></h3><p>以下是使用 C++ 实现顺序表和链表的混合使用，实现可扩展数组的示例代码。其中使用 vector 作为底层存储结构的顺序表，并设置了一个阈值 threshold，当数组元素数量超过该阈值时，将剩余元素存储到链式结构（LinkedList），用一个指针 lastNode 记录链表的最后一个节点。</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;vector&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">using namespace std;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">class LinkedList{</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    T data;</span></span>
<span class="line"><span style="color:#e1e4e8;">    LinkedList* next;</span></span>
<span class="line"><span style="color:#e1e4e8;">    LinkedList(T value){</span></span>
<span class="line"><span style="color:#e1e4e8;">        this-&gt;data = value;</span></span>
<span class="line"><span style="color:#e1e4e8;">        this-&gt;next = NULL;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">class VectorList{</span></span>
<span class="line"><span style="color:#e1e4e8;">private:</span></span>
<span class="line"><span style="color:#e1e4e8;">    vector&lt;T&gt; data;  // 底层顺序表</span></span>
<span class="line"><span style="color:#e1e4e8;">    int threshold;   // 阈值</span></span>
<span class="line"><span style="color:#e1e4e8;">    LinkedList&lt;T&gt;* lastNode;  // 链表的最后一个节点</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;">    VectorList(){</span></span>
<span class="line"><span style="color:#e1e4e8;">        threshold = 10;     // 初始化阈值为10</span></span>
<span class="line"><span style="color:#e1e4e8;">        lastNode = NULL;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    void push_back(T value){</span></span>
<span class="line"><span style="color:#e1e4e8;">        if(data.size() &lt; threshold &amp;&amp; lastNode == NULL){   // 如果底层顺序表未满且没有链表节点，则直接插入底层顺序表</span></span>
<span class="line"><span style="color:#e1e4e8;">            data.push_back(value);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }else{     // 否则，在链式结构中添加新的节点</span></span>
<span class="line"><span style="color:#e1e4e8;">            LinkedList&lt;T&gt;* newNode = new LinkedList&lt;T&gt;(value);</span></span>
<span class="line"><span style="color:#e1e4e8;">            if(lastNode != NULL){    // 如果已有链表节点，则将新节点加入到最后一个节点之后</span></span>
<span class="line"><span style="color:#e1e4e8;">                lastNode-&gt;next = newNode;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }else{     // 如果没有链表节点，则创建一个新链表</span></span>
<span class="line"><span style="color:#e1e4e8;">                lastNode = newNode;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    T&amp; operator[](int index){</span></span>
<span class="line"><span style="color:#e1e4e8;">        if(index &lt; data.size()){</span></span>
<span class="line"><span style="color:#e1e4e8;">            return data[index];</span></span>
<span class="line"><span style="color:#e1e4e8;">        }else{   // 如果索引在链表中，则在链表中查找对应元素</span></span>
<span class="line"><span style="color:#e1e4e8;">            LinkedList&lt;T&gt;* curNode = lastNode;</span></span>
<span class="line"><span style="color:#e1e4e8;">            int curIndex = data.size();</span></span>
<span class="line"><span style="color:#e1e4e8;">            while(curIndex != index){</span></span>
<span class="line"><span style="color:#e1e4e8;">                curNode = curNode-&gt;next;</span></span>
<span class="line"><span style="color:#e1e4e8;">                curIndex++;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            return curNode-&gt;data;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    void printAll(){</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (int i = 0; i &lt; data.size(); ++i)</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">            cout&lt;&lt;data[i]&lt;&lt;&quot; &quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        LinkedList&lt;T&gt;* curNode = lastNode;</span></span>
<span class="line"><span style="color:#e1e4e8;">        while(curNode != NULL){   // 输出链表中的元素</span></span>
<span class="line"><span style="color:#e1e4e8;">            cout&lt;&lt;curNode-&gt;data&lt;&lt;&quot; &quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">            curNode = curNode-&gt;next;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        cout&lt;&lt;endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    int size(){</span></span>
<span class="line"><span style="color:#e1e4e8;">        return data.size() + getListNodeCount();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    int getListNodeCount(){   // 获取链式结构中节点数目</span></span>
<span class="line"><span style="color:#e1e4e8;">        int count = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        LinkedList&lt;T&gt;* curNode = lastNode;</span></span>
<span class="line"><span style="color:#e1e4e8;">        while(curNode != NULL){</span></span>
<span class="line"><span style="color:#e1e4e8;">            count++;</span></span>
<span class="line"><span style="color:#e1e4e8;">            curNode = curNode-&gt;next;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        return count;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    VectorList&lt;int&gt; vecList;</span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList.push_back(1);</span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList.push_back(2);</span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList.push_back(3);</span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList.push_back(4);</span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList.push_back(5);</span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList.push_back(6);</span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList.push_back(7);</span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList.push_back(8);</span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList.push_back(9);</span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList.push_back(10);</span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList.push_back(11);</span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList.push_back(12);</span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList.push_back(13);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    cout&lt;&lt;&quot;Array Size: &quot;&lt;&lt;vecList.size()&lt;&lt;endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList.printAll();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList[6] = 100;   // 修改元素</span></span>
<span class="line"><span style="color:#e1e4e8;">    cout&lt;&lt;&quot;Array Size: &quot;&lt;&lt;vecList.size()&lt;&lt;endl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    vecList.printAll();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br></div></div><p>在上述代码中，我们定义了一个 VectorList 类，其中使用 vector 来作为底层存储结构的顺序表，设置了阈值 threshold，当数组元素数量超过该阈值时，就将剩余元素存储在链式结构（LinkedList）中。同时，为了方便地访问顺序表和链表中的元素，我们在类中重载了运算符 []。如果索引小于底层顺序表的大小，则直接返回该位置对应的元素；否则，在链表结构中查找对应位置的元素并返回。</p><p>最后在 main 函数中，我们测试了添加元素、输出所有元素、获取数组长度、修改元素等功能。</p>`,33);function L(r,v,F,_,T,k){const a=b("font");return t(),o("div",null,[n("h1",y,[s(i(r.$frontmatter.title)+" ",1),m,s(),E]),d,n("p",null,[s("线性表是数据结构中的基本概念之一，指的是具有相同数据类型的n个元素的有限序列(a1, a2, ..., an)。其中，a1是线性表的第一个元素，an是线性表的最后一个元素，"),e(a,{color:"red"},{default:l(()=>[s("除了第一个元素外，其他元素都有且只有一个直接前驱，除了最后一个元素外，其他元素都有且只有一个直接后继。")]),_:1})]),h,n("p",null,[s("线性表的链式存储结构是指，将线性表中的元素按照其逻辑关系使用一组任意的存储单元来存储，"),e(a,{color:"red"},{default:l(()=>[s("每个存储单元包含两部分，即数据域和指针域。")]),_:1}),s("数据域用来存储元素的值，指针域则用来指示下一个节点所在的存储单元地址，在链式结构中通常称为后继指针。通过这种方式，可将所有存储单元串联起来构成一个链表，实现线性表的存储。")]),g])}const f=c(u,[["render",L]]);export{N as __pageData,f as default};
