# Qiang Zou — academic website

Jekyll source for <https://qiang-zou.github.io/>.

**模板负责排版，Markdown 文件负责内容。** 新增新闻、论文或项目，只需编辑对应的 `.md` 文件，不需要修改 HTML 模板、CSS 或 JSON 数据文件。

## 内容放在哪里

| 要修改的内容 | 文件 |
| --- | --- |
| 首页侧栏信息、简介、招生说明、全部 News | `_pages/about.md` |
| Technical reports、论文、奖项、Talks | `_pages/research.md` |
| 代码项目、图片、Code / Paper 链接 | `_pages/codes.md` |
| 课题组与学生 | `_pages/group.md` |
| 教学、学术服务、中文简介 | `_pages/teaching.md`、`_pages/services.md`、`_pages/about-cn.md` |
| 导航栏目及顺序 | `_data/navigation.yml` |
| 邮箱、学术主页等共用链接 | `_config.yml` |

保留文件顶部 `---` 之间的页面配置，正文使用普通 Markdown。首页侧栏的姓名、照片、身份和地点在 `about.md` 顶部的 `profile` 配置中修改。

## 四个主页面与首页目录

主导航为 **Home、Code、Group、Chinese**。首页按 About、News、Research、Teaching、Service 排列；研究、教学和服务仍分别编辑原来的 Markdown 文件，由 `_layouts/home.html` 读取并组合，不要把正文复制到模板里。

`_data/home.yml` 只维护首页合并栏目的标题、锚点和源文件路径。首页的 About、News、Research、Teaching、Service 是同级二级标题。`research.md` 和 `services.md` 中的分类直接使用 `###`，再下一级用 `####`；模板不再隐式转换标题级别。

大屏右侧显示固定目录，滚动时高亮当前栏目；窄屏目录移到正文上方，可展开收起。代表作由你在 `research.md` 中逐篇标记，数量不限，见下方说明。Awards、Talks、Teaching 和 Service 完整显示，不按固定数量截断。News 继续由 `about.md` 中的 `<details>` 手动控制。

`/research/`、`/teaching/`、`/services/` 保留为跳转入口，指向首页对应栏目；旧研究分类锚点也保留。请保留这三个文件顶部的 `layout: section-redirect` 和 `home_section` 配置。

## 新增一条 News

在 `about.md` 的 `## News` 下方插入一行即可：

```markdown
- **Nov 2026** Your news text. [Read more](https://example.org/)
```

最新消息放在列表顶部；不需要链接时，删去链接即可。日期与正文之间不需要 HTML 标签，也不需要填写样式类名。

折叠范围由你决定：放在 `<details>` 外面的消息直接显示；放在里面的消息默认折叠。旧消息和新消息使用完全相同的写法：

```markdown
<details markdown="1">
<summary>Earlier news</summary>

- **July 2023** Your earlier news text.
- **June 2023** Another news item.

</details>
```

`markdown="1"` 用于让 Jekyll 正确解析折叠区内的 Markdown，请保留。当前保留了你将 March 2026 SIGGRAPH 新闻移出折叠区的调整；显示数量不再由模板固定。

## 新增一篇论文

在 `research.md` 的相应分类下复制以下结构。空行和条目内的两个空格缩进用于区分标题、作者、期刊与链接，模板自动完成排版。

```markdown
- **Paper title**
  {: data-year="2026" data-selected="true"}

  First Author, **Qiang Zou**

  *Journal name (2026)*

  [Paper](https://example.org/paper) · [Code](https://example.org/code)
```

没有 Code 链接时直接删去，没有链接时整行删去。论文标题本身保留为文字。新增研究分类用 `### 分类名称`；现有标题后的 `{#...}` 是稳定的页面锚点，请保留。奖项和 Talks 继续使用普通有序列表。

### 手动选择代表作与完整列表

每篇论文标题下的 `{: data-year="2026" data-selected="true"}` 是内容属性，保留两个空格缩进，并紧接标题行。`data-year` 写发表年份；将 `data-selected` 改为 `true` 即选为代表作，`false` 表示未选。可以选择任意年份、任意数量的论文。

- 默认展示该分类中所有标记为 `true` 的论文，按 Markdown 中的顺序排列。
- 点击 **View all … publications** 后，同一列表切换为该分类的全部论文，按 `data-year` 倒序排列。代表作不固定在顶部，也不会重复出现；同年论文保留源文件的相对顺序。
- 点击 **Show selected publications**，恢复你选择的论文及其源文件顺序。
- 一个分类没有任何 `true` 标记时，默认收起论文，保留 **View all … publications** 入口；展开后全部按年份倒序排列，可用 **Collapse publications** 再次收起。不自动选取前几篇作为代表作。
- 禁用 JavaScript 时仍能阅读源文件中的完整论文列表。

当前没有代你标记代表作；请将你选中的条目改为 `true`。不要复制一份代表作清单，每篇论文只维护一次。

Technical report 可以使用更短的结构：

```markdown
- **Report title**

  [Read report](/projects/your-report/)
```

## 新增一个代码项目

把图片放入 `images/codes/`，然后在 `codes.md` 的相应分类下添加：

```markdown
- [![Project illustration](/images/codes/example.png)](/images/codes/example.png)

  **Project title**

  A short project description.

  [Code](https://example.org/code) · [Paper](https://example.org/paper)
```

每个项目是一条 Markdown 列表项：图片、标题、说明和链接各占一个段落。模板自动显示为左图右文，手机上自动上下排列。图片外层链接用于查看原图。请替换示例路径和链接；现有图片链接后的 `{: #project-id}` 是可选的项目锚点，不是样式配置。

## 新建其他页面

在 `_pages/` 下新建 Markdown 文件：

```markdown
---
layout: page
title: "Page title"
permalink: /new-page/
---

Write your introduction here.

## Section title

- First item
- Second item
```

它会自动使用全站相同的导航、字号、颜色和页脚。`title` 用于浏览器标签和无障碍页面名称，默认不会在正文上方重复显示。若某页需要可见页标题，在顶部配置中加入 `show_title: true`；描述文字另用 `show_description: true` 开启。如需出现在导航栏，再向 `_data/navigation.yml` 添加标题与路径。

## 标题与字号

正文用普通段落；栏目用 `##`，栏目内的子标题用 `###`。论文题目仍用条目内的 `**加粗文字**`，不要把论文题目写成栏目标题。英文栏目标题统一使用标题式大小写，不加末尾冒号。

桌面端正文 22px、作者与链接 20px；首页主栏目标题 36px、子栏目 25px、论文题目 23px。主栏目使用深蓝大字和分隔线，子栏目使用浅蓝底色，论文题目使用深灰色。手机端正文 20px、作者与链接 19px，首页主栏目标题 32px。字号统一在 `assets/css/site.css` 的变量中维护。

## 模板和样式

- `_layouts/default.html`：共用页头、主内容区域和页脚。
- `_layouts/home.html`：首页头像侧栏、组合正文和右侧目录框架。
- `_layouts/section-redirect.html`：旧研究、教学和服务链接的跳转页。
- `_layouts/page.html`：其他页面的标题和正文框架。
- `_includes/`：共用导航、页头元信息和页脚。
- `assets/css/site.css`：全站蓝色配色、字号，以及普通 Markdown 标题、列表、论文和项目的排版。
- `assets/css/home.css`：圆形头像、侧栏图标、News、右侧目录与响应式布局。
- `assets/js/home.js`：目录高亮、手动代表作与完整列表切换、手机端联系信息展开。

新闻、论文和项目正文都在各自的 Markdown 文件中，不存放在模板或额外的 JSON 文件里。无需为每一条内容手写 CSS 类名。当前保留 29 条 News、31 篇论文与 14 个代码项目；独立报告 `projects/icad-eval-report/` 保持自身布局。

## 本地预览与检查

```sh
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

打开 <http://127.0.0.1:4000/>。发布前运行：

```sh
bundle exec jekyll build
python3 scripts/check_site.py _site
```

提交源码并推送到 GitHub Pages 分支后发布。不要提交 `_site/`、本地 gem 安装目录或 `.DS_Store`。
