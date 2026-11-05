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

## 页面结构与标题层级

顶部导航为 **Home、Research、Teaching、Service、Code、Group、Chinese**。每个页面独立维护；首页只显示个人信息、About 和 News。论文及其他页面正文完整展示，不使用代表作筛选或固定数量截断；首页旧 News 单独折叠。

Research 的三个主栏目是 `## Publications (Selected)`、`## Awards`、`## Talks`。Technical Reports 和各研究分类使用 `###`，属于 Publications 下一级。论文题目继续使用普通列表条目中的加粗文字。列表按 Markdown 中的顺序显示，需要调整展示内容或顺序时直接编辑源文件，无需任何筛选标记。

全站使用 Open Sans。主栏目使用大号深蓝粗体；子栏目使用较小的粗体和留白；论文标题、作者、发表信息按字号、字重和颜色区分，不使用子标题底框或逐篇分隔线。保持这些结构即可沿用全站样式。

## 新增一条 News

在 `about.md` 的 `## News` 下方插入一行即可：

```markdown
- **Nov 2026** Your news text. [Read more](https://example.org/)
```

最新消息放在列表顶部；不需要链接时，删去链接即可。日期与正文之间不需要 HTML 标签，也不需要填写样式类名。

2026 年 News 直接显示，2025 年及更早消息放在 `<details markdown="1">` 与 `</details>` 之间，默认折叠，入口为 **Earlier news**。可直接在 `about.md` 中移动条目调整折叠范围；请保留 `markdown="1"`。

## 新增一篇论文

在 `research.md` 的相应分类下复制以下结构。空行和条目内的两个空格缩进用于区分标题、作者与期刊，模板自动完成排版。

```markdown
- **Paper title**

  First Author, **Qiang Zou**

  *Journal name (2026)*
```

Research 的论文条目统一只显示标题、作者和发表信息，不单独放 Paper / Code 链接；资源链接在 Code 页面维护。Technical Reports 保留 Read report 链接。论文标题本身保留为文字。新增研究分类用 `### 分类名称`；现有标题后的 `{#...}` 是稳定的页面锚点，请保留。奖项和 Talks 继续使用普通有序列表。

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

文字排版参考 [MIT HAN Lab Publications](https://hanlab.mit.edu/publications)：Research 论文标题 18px / 600 字重、作者与发表信息 16px / 24px 行高；主栏目 38px / 800 字重，子栏目 24px / 700 字重。发表信息显示为正体。全站一般正文 18px，手机端 17px；手机主栏目 30px、子栏目 22px，论文保持 18px / 16px。字号统一在 `assets/css/site.css` 的变量中维护。

Open Sans 正体和斜体使用本地 WOFF2 可变字体，页面加载不依赖 Google Fonts 网络请求。字体来源为 Google Fonts（Open Sans），SIL OFL 许可证保存在 `assets/fonts/OpenSans-OFL.txt`。参考站的品牌、图片和宣传文案不属于本网站内容。

## 模板和样式

- `_layouts/default.html`：共用页头、主内容区域和页脚。
- `_layouts/home.html`：首页头像侧栏与 About、News 正文的两栏框架。
- `_layouts/page.html`：其他页面的标题和正文框架。
- `_includes/`：共用导航、页头元信息和页脚。
- `assets/css/site.css`：全站蓝色配色、字号，以及普通 Markdown 标题、列表、论文和项目的排版。
- `assets/css/home.css`：圆形头像、侧栏图标、News 日期排版与响应式布局。
- `assets/js/home.js`：手机端联系信息菜单。

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
