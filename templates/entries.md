# 可复制的内容格式

将下面代码块中的条目复制到 `content/` 下对应文件中，再替换内容。
此文件只作为填写示例，不会发布到网站。不要把整个文件复制进页面。

## News → `content/about.md`

放在 News 列表顶部。旧消息可移动到同一文件的 `Earlier news` 区域中。

```markdown
- **Nov 2026** Your news text. [Read more](https://example.org/)
```

没有链接时直接省略 `[Read more](...)`。

## Publication → `content/research.md`

放在对应研究分类下。保留空行，以及作者、期刊行开头的两个空格。

```markdown
- **Paper title**

  First Author, **Qiang Zou**\*, Other Authors

  *Journal name (2026)*
```

`\*` 是可选的通讯作者标记。标题、作者顺序和发表信息按实际论文填写。

## Technical report → `content/research.md`

放在 Technical Reports 下；如果没有 arXiv 编号，不要保留示例编号。

```markdown
- **Report title**

  **Qiang Zou**, Other Authors

  *arXiv preprint arXiv:XXXX.XXXXX (2026)*

  [Read report](/projects/your-report/)
```

## Code project → `content/code.md`

图片放在 `images/codes/`。一条项目依次为图片、标题、说明、资源链接四个段落。

```markdown
- [![Description of the project illustration](/images/codes/example.png)](/images/codes/example.png){: #project-name}

  **Project name**

  One sentence describing the project.

  [Code](https://github.com/owner/repository) · [Paper](https://doi.org/example)
```

没有 Paper 链接可以只保留 Code；没有资源链接则省略最后一段。
`#project-name` 是可选锚点，同一页面内不能重名。

## Student → `content/group.md`

放在 Ph.D. Students、MASc Students 或 Alumni 对应列表中。

```markdown
1. Student Name, 2026.9 – , Research topic: research topic
```

列表编号全部写 `1.` 即可，页面会自动连续编号。

## Course → `content/teaching.md`

```markdown
1. 2026 – , Course Name, ZJU, Instructor.
```

## Award / Talk / Service

奖项和报告放在 `content/research.md` 对应栏目中；学术服务放在 `content/service.md`。

```markdown
1. Entry description, 2026. [Optional link](https://example.org/)
```

## Section headings

```markdown
## Main Section

### Subsection
```

标题层级决定排版，不需要额外填写字号、颜色或 HTML。
