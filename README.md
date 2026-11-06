# Qiang Zou — academic website

网站：<https://qiang-zou.github.io/>

**在 `content/` 填写内容，模板负责排版；提交到 GitHub 后自动发布。**

## 我应该编辑哪里？

| 要更新的内容 | 文件 |
| --- | --- |
| 首页简介、侧栏、News | [content/about.md](content/about.md) |
| 论文、Technical Reports、Awards、Talks | [content/research.md](content/research.md) |
| 开源项目 | [content/code.md](content/code.md) |
| 实验室与学生 | [content/group.md](content/group.md) |
| 教学 | [content/teaching.md](content/teaching.md) |
| 学术服务 | [content/service.md](content/service.md) |
| 中文简介 | [content/chinese.md](content/chinese.md) |
| 学生须知 | [content/group-guide.md](content/group-guide.md) |
| 实验室名称、共用联系方式 | [_config.yml](_config.yml) |
| 导航名称与顺序 | [_data/navigation.yml](_data/navigation.yml) |

新增一条内容时，复制 [内容填写模板](templates/entries.md) 中对应的格式即可。
新增页面时，复制 [页面模板](templates/page.md) 到 `content/`。
图片放在 `images/`；代码项目图片放在 `images/codes/`。

## 更新流程

1. 编辑对应 Markdown，填写正文。
2. 本地运行 `make preview` 预览，保存后自动重新生成并刷新。
3. 运行 `make check` 检查页面和站内链接。
4. 提交并同步到 GitHub 的 `main` 分支，GitHub Pages 自动发布。

首次本地使用先运行 `make setup`；需要 Ruby、Bundler、Python 3 和 Make。
也可以直接在 GitHub 编辑 `content/` 中的文件并提交，无需本地安装。
**本地保存只更新本地预览；线上更新需要提交并同步到 GitHub。**

## 目录分工

```text
content/       日常填写的 Markdown 内容
images/        头像、项目图片
projects/      独立报告及附件

templates/     可复制的填写示例（不发布）
docs/          编辑说明和结构文档（不发布）

_layouts/      共用页面模板
_includes/     导航、横幅、页头和页脚
_data/         导航等共用数据
assets/        CSS、脚本、字体、装饰图片
scripts/       检查工具
_config.yml    全站配置与页面样式关联
Makefile       预览、构建、检查命令
```

详细说明见 [编辑指南](docs/editing.md) 和 [项目结构](docs/architecture.md)。

页面内容不写入 HTML 模板，不需要另行维护 JSON 数据。
News 的折叠范围在 `content/about.md` 调整；论文完整展示，按你填写的顺序排列。
现有网站样式、导航顺序、公开网址和独立报告均保留。
