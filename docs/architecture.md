# 项目结构与维护

## 内容 → 模板 → 网站

```text
content/*.md + _config.yml + _data/navigation.yml
                       ↓ Jekyll
              _layouts/ + _includes/
                       ↓
          HTML + assets/ + images/ + projects/
                       ↓ GitHub Pages
                 qiang-zou.github.io
```

| 目录 / 文件 | 职责 | 日常内容编辑 |
| --- | --- | --- |
| `content/` | 可编辑的页面正文与页面信息 | 是 |
| `images/` | 头像、项目图片；保留现有公开路径 | 添加图片时 |
| `templates/` | 可复制的内容条目和新页面示例 | 复制使用 |
| `_config.yml` | 全站信息、构建配置、页面样式关联 | 偶尔 |
| `_data/navigation.yml` | 导航数据 | 偶尔 |
| `_layouts/` | 共用页面框架 | 否 |
| `_includes/` | 导航、横幅、页头元信息、页脚 | 否 |
| `assets/` | 样式、脚本、字体和装饰图片 | 否 |
| `projects/` | 有独立设计的报告 / 项目页面及其附件 | 对应项目更新时 |
| `docs/` | 编辑指南和结构说明 | 否 |
| `scripts/`、`Makefile` | 构建、预览和检查入口 | 否 |

`_layouts`、`_includes`、`_data` 的名称遵循 Jekyll 约定，不再嵌套或改名。
只需三种共用模板：`default.html` 提供外框，`page.html` 排版普通页面，
`home.html` 提供头像侧栏。Research 与 Code 通过配置中的 CSS 类使用专用列表样式。
论文、News 和学生名单均留在 Markdown，没有硬编码进模板。

`templates/` 是给编辑者复制的填写示例；`_layouts/` 是 Jekyll 实际执行的页面模板，两者用途不同。

## 样式约定

沿用蓝白视觉、实验室横幅和 Open Sans 本地字体。
栏目标题使用深蓝色；论文和报告题目使用深棕色（`--publication-title`）及 700 字重，区分两种层级。
`site.css` 中的 `--text`、`--small`、`--section` 等变量统一控制桌面和手机字号。
新增内容应沿用相应 Markdown 结构，不给单条内容添加字体或颜色。

Open Sans 字体许可证位于 `assets/fonts/OpenSans-OFL.txt`。
图标字体许可说明位于 `assets/css/home.css` 顶部。

## 构建产物

`_site/`、`.sass-cache/`、`.jekyll-cache/`、`.jekyll-metadata` 是生成文件，
无需编辑或提交，可以在停止预览后清理。`vendor/` 和 `.bundle/` 是本地依赖配置。
这些路径已被 Git 忽略；保留 Gemfile 和 Gemfile.lock 以固定依赖版本。

`docs/`、`templates/`、`scripts/`、README、Makefile 不发布到网站。
不提交生成后的 HTML，不手工维护 `_site/`。

## 本次目录迁移

| 原文件 | 现文件 | 公开地址 |
| --- | --- | --- |
| `_pages/about.md` | `content/about.md` | `/`，保留 `/about/`、`/about.html` 跳转 |
| `_pages/research.md` | `content/research.md` | `/research/` |
| `_pages/codes.md` | `content/code.md` | `/codes/` |
| `_pages/group.md` | `content/group.md` | `/group/` |
| `_pages/teaching.md` | `content/teaching.md` | `/teaching/` |
| `_pages/services.md` | `content/service.md` | `/services/` |
| `_pages/about-cn.md` | `content/chinese.md` | `/about-chinese/` |
| `_pages/must_knows.md` | `content/group-guide.md` | `/group/must_know/` |

公开路径由 `permalink` 固定，源文件迁移不改变网站链接。
图片和独立报告也保持原路径。若以后重命名 Research、Code 或 About 源文件，
应同时更新 `_config.yml` 中对应的 `defaults.scope.path`。

## 验证

运行 `make check`；也可用 `make check DEST=/tmp/website-build` 指定输出位置。
自动检查主要页面、站内资源、锚点、重复 ID 及维护文件排除规则。
更改目录或模板时，额外比较改动前后的生成 HTML，避免正文丢失、导航缺项或版式变化。

现有 GitHub Pages 在 `main` 更新后自动构建发布；未增加第二套部署流程。
