# 日常编辑指南

日常只需要编辑 `content/` 中的 Markdown，添加图片时使用 `images/`。
网站会自动套用共用导航、实验室横幅、字体和页面布局。

## 修改现有页面

| 内容 | 编辑文件 |
| --- | --- |
| 首页简介、头像侧栏和全部 News | [`content/about.md`](../content/about.md) |
| 论文、Technical Reports、Awards、Talks | [`content/research.md`](../content/research.md) |
| 开源代码项目 | [`content/code.md`](../content/code.md) |
| 实验室介绍、经费、学生 | [`content/group.md`](../content/group.md) |
| 教学 | [`content/teaching.md`](../content/teaching.md) |
| 学术服务、Webinars | [`content/service.md`](../content/service.md) |
| 中文简介 | [`content/chinese.md`](../content/chinese.md) |
| 学生须知 | [`content/group-guide.md`](../content/group-guide.md) |

在 [`templates/entries.md`](../templates/entries.md) 中复制所需条目的格式，再填写内容即可。
所有条目都按 Markdown 中的顺序显示，不会自动改写、筛选或重新排序。

页面开头两条 `---` 之间是页面信息。保留现有 `permalink`，它决定公开网址，
与 Markdown 文件所在目录无关。`title` 用于浏览器标签与无障碍页面名称；
一般不在正文重复显示。`show_title: true` 可以显示一个页标题。

## 首页与 News

简介、招生说明和 News 均在 `about.md`，没有拆到模板或其他数据文件里。
侧栏信息在文件顶部的 `profile` 中；共用邮箱及学术主页链接在 `_config.yml` 的 `author` 中。

新增 News 放在 `## News` 下列表的顶部。需要折叠的消息放在同一文件的以下区域内：

```markdown
<details markdown="1">
<summary>Earlier news</summary>

- **Dec 2025** Earlier news text.

</details>
```

保留 `markdown="1"` 和空行。折叠范围由你决定，不会在跨年时自动移动条目。

## Research 层级

三个主栏目使用 `##`：Publications (Selected)、Awards、Talks。
Technical Reports 和研究分类使用 `###`；论文标题使用列表中的 `**加粗文字**`。

保留现有标题末尾的 `{#publications}` 等锚点，避免旧链接失效。
Research 论文不添加 Paper / Code 链接，资源链接在 Code 页维护；Technical Reports 保留 Read report。
论文列表完整展示，不设数量限制、不折叠。

## 图片与项目

代码项目图片放在 `images/codes/`，正文中写 `/images/codes/文件名.png`。
相同图片只存一份；推荐使用小写英文文件名，用连字符分隔单词。
不要仅为统一命名而移动旧图片：其公开地址可能已经被其他网站引用。

独立报告位于 `projects/icad-eval-report/`，保持自己的页面、PDF 和配图。
它不是普通 Markdown 页面，不会因修改共用样式而改变自身设计。

## 新增页面

1. 将 `templates/page.md` 复制到 `content/`，例如 `content/resources.md`。
2. 填写 `title`、唯一的 `permalink`，然后填写正文。
3. 如需顶部导航入口，在 `_data/navigation.yml` 中添加标题和对应网址。

不需要创建新的 HTML 模板。现有 Research 和 Code 页有专用列表样式，
由 `_config.yml` 的 `defaults` 关联到其源文件；普通新页面使用通用排版。

## 预览、检查与自动发布

本地需要 Ruby、Bundler、Python 3 和 Make。首次安装依赖：

```sh
make setup
```

开始预览：

```sh
make preview
```

打开 <http://127.0.0.1:4000/>。保存 Markdown 后自动重新生成并刷新浏览器。
修改 `_config.yml` 后，需要停止并重新运行预览。`Ctrl+C` 停止预览。

发布前检查：

```sh
make check
```

该命令会构建网站，并检查主要页面、站内文件链接、锚点、重复 ID，以及维护文件是否被意外发布。
它不检查外部网址是否可访问，也不会替你核实论文信息。

提交并同步到 GitHub 的 `main` 分支后，GitHub Pages 会自动构建和发布。
**只保存本地文件不会更新线上网站**。也可以直接在 GitHub 中编辑 `content/` 文件并提交，
无需本地安装工具。发布进度可在仓库的 Actions 中查看。

## 修改共用信息和样式

- `_config.yml`：实验室名、横幅文案、共用联系方式和页面样式关联。首页浏览器标题自动使用姓名和实验室名。
- `_data/navigation.yml`：顶部导航的名称、顺序和链接。
- `assets/css/site.css`：字号变量、配色及共用样式。
- `assets/css/home.css`：首页侧栏、News 和手机布局。

普通内容更新不需要修改 `_layouts/` 或 `_includes/`。
