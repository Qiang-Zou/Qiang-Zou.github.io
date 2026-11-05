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

  First Author, **Qiang Zou**

  *Journal name (2026)*

  [Paper](https://example.org/paper) · [Code](https://example.org/code)
```

没有 Code 链接时直接删去，没有链接时整行删去。论文标题本身保留为文字。新增分类用 `## 分类名称`；现有标题后的 `{#...}` 是稳定的页面锚点，请保留。奖项和 Talks 继续使用普通有序列表。

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

它会自动使用全站相同的导航、字号、颜色和页脚。如需出现在导航栏，再向 `_data/navigation.yml` 添加标题与路径。

## 模板和样式

- `_layouts/default.html`：共用页头、主内容区域和页脚。
- `_layouts/home.html`：首页头像侧栏与正文两栏框架。
- `_layouts/page.html`：其他页面的标题和正文框架。
- `_includes/`：共用导航、页头元信息和页脚。
- `assets/css/site.css`：全站蓝色配色、字号，以及普通 Markdown 标题、列表、论文和项目的排版。
- `assets/css/home.css`：圆形头像、原侧栏图标、News 日期对齐与折叠样式。

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
