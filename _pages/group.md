---
layout: archive
title: Design and Manufacturing Automation Lab (DMA Lab)
permalink: /group/
author_profile: true
---

In DMA Lab, we are interested in questions like: Which parts are computerizable in design and manufacturing processes, especially for those form-related tasks? What are general computational principles underlying design and manufacturing? How can we apply the principles and build tools to automate the processes? These are the sort of stuff we are trying to understand in shaping what it means to **design by the computer and manufacture in the computer**.

<!-- 如何进行跨媒体表达？如何实现大数据融合、匹配与协同计算？如何得出人工智能感知、推理、决策的高效模型？如何实现更具有感受、理解与交互能力的智能系统？ -->

<!-- In the short term, we are working on the following "form-process-property" problems:
1. Geometric modeling of curves, surfaces, solids, and microstructures:
    1. NURBS/B-rep computing, learning, and optimization
    1. Generative/Direct solid modeling
    1. Microstructures modeling (microstructure and microsurfaces)
1. With applied research on:
    1. Intelligent and intuitive CAD
    1. Virtual manufacturing (tool path planning, machining/3D printing simulation and optimization) -->

In the short term, we are working on the following "concept-shape-process" problems:
* Geometric and physical modeling:
  - Surfaces and Solids: NURBS and B-rep
  - Structures: large-scale, multi-scale microstructure representation and manipulation ($\mu$-geometric modeling)
* Intelligent design and manufacturing:
  - AI4CAD/CAM: concept interacting, CAD modeling, and CAM planning
  - Physics-informed CAD/CAM: surfaces, solids, microstructures, and process paths

## Funding:
1. 3D CAD Modeler for Intelligent Engineering Design, 2024.1 - 2026.12, Key R&D Program of Zhejiang Province
1. Intelligent 3D CAD Modeling, 2023.1 - 2024.12, Fundamental Research Funds for the Central Universities, China
1. Robust direct modeling for complex products, 2022.1 - 2024.12, NSF of China
1. Intelligent direct modeling for computer-aided design, 2022.1 - 2024.12, NSF of Zhejiang Province
1. Geometric modeling and constraint solving kernels, 2022.1 - 2023.6, Key R&D Program of Zhejiang Province

## Students:
Some [must-knows](must_knows.md) before working in our group.

### Ph.D. Students
1. Zhijie Yang, 2024.9 - , Research topic: AI for solid modeling
1. Yaonaiming Zhao, 2023.9 - , Research topic: microstructure modeling
1. Yuntao Ma, 2023.9 - , Research topic: GPU solid modeling
1. Ziqi Hao, 2023.9 - , Research topic: GPU solid modeling
1. Guoyue Luo, 2022.9 - , Research topic: microstructure modeling
1. Sifan Chen, 2022.2 - , Research topic: microstructure modeling

### MASc Students
1. Yutong Sun, 2024.9 - , Research topic: AI for solid modeling
1. Jiaming Zhu, 2024.9 - , Research topic: AI for solid modeling
1. Ziqin Gao, 2024.9 - , Research topic: AI for solid modeling
1. Yitong Wang, 2024.9 - , Research topic: GPU solid modeling
1. Lizhen Zhu, 2023.9 - , Research topic: AI for solid modeling
1. Shuo Liu, 2023.9 - , Research topic: AI for solid modeling
1. Jiayu Wu, 2023.9 - , Research topic: GPU NURBS modeling

### Alumni
1. Jianan Wang, MASc, 2022.9 - 2025.9, Research topic: GPU solid modeling
1. Qitong Dong, MASc, 2022.3 - 2025.6, Research topic: NURBS modeling
1. Yunzhu Gao, MASc, 2022.9 - 2025,3, Research topic: GPU solid modeling
1. Ziheng Bao, MASc, 2021.9 - 2024.3, Research topic: GPU NURBS modeling, Now ByteDance







<!-- 
## Locations of key files/directories

* Basic config options: _config.yml
* Top navigation bar config: _data/navigation.yml
* Single pages: _pages/
* Collections of pages are .md or .html files in:
  * _publications/
  * _portfolio/
  * _posts/
  * _teaching/
  * _talks/
* Footer: _includes/footer.html
* Static files (like PDFs): /files/
* Profile image (can set in _config.yml): images/profile.png

## Tips and hints

* Name a file ".md" to have it render in markdown, name it ".html" to render in HTML.
* Go to the [commit list](https://github.com/academicpages/academicpages.github.io/commits/master) (on your repo) to find the last version Github built with Jekyll. 
  * Green check: successful build
  * Orange circle: building
  * Red X: error
  * No icon: not built

## Resources
 * [Liquid syntax guide](https://shopify.github.io/liquid/tags/control-flow/)

## Markdown guide

### Header three

#### Header four

##### Header five

###### Header six

## Blockquotes

Single line blockquote:

> Quotes are cool.

## Tables

### Table 1

| Entry            | Item   |                                                              |
| --------         | ------ | ------------------------------------------------------------ |
| [John Doe](#)    | 2016   | Description of the item in the list                          |
| [Jane Doe](#)    | 2019   | Description of the item in the list                          |
| [Doe Doe](#)     | 2022   | Description of the item in the list                          |

### Table 2

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|-----------------------------|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=============================|
| Foot1   | Foot2   | Foot3   |

## Definition Lists

Definition List Title
:   Definition list division.

Startup
:   A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.

#dowork
:   Coined by Rob Dyrdek and his personal body guard Christopher "Big Black" Boykins, "Do Work" works as a self motivator, to motivating your friends.

Do It Live
:   I'll let Bill O'Reilly [explain](https://www.youtube.com/watch?v=O_HyZ5aW76c "We'll Do It Live") this one.

## Unordered Lists (Nested)

  * List item one 
      * List item one 
          * List item one
          * List item two
          * List item three
          * List item four
      * List item two
      * List item three
      * List item four
  * List item two
  * List item three
  * List item four

## Ordered List (Nested)

  1. List item one 
      1. List item one 
          1. List item one
          2. List item two
          3. List item three
          4. List item four
      2. List item two
      3. List item three
      4. List item four
  2. List item two
  3. List item three
  4. List item four

## Buttons

Make any link standout more when applying the `.btn` class.

## Notices

**Watch out!** You can also add notices by appending `{: .notice}` to a paragraph.
{: .notice}

## HTML Tags

### Address Tag

<address>
  1 Infinite Loop<br /> Cupertino, CA 95014<br /> United States
</address>

### Anchor Tag (aka. Link)

This is an example of a [link](http://github.com "Github").

### Abbreviation Tag

The abbreviation CSS stands for "Cascading Style Sheets".

*[CSS]: Cascading Style Sheets

### Cite Tag

"Code is poetry." ---<cite>Automattic</cite>

### Code Tag

You will learn later on in these tests that `word-wrap: break-word;` will be your best friend.

### Strike Tag

This tag will let you <strike>strikeout text</strike>.

### Emphasize Tag

The emphasize tag should _italicize_ text.

### Insert Tag

This tag should denote <ins>inserted</ins> text.

### Keyboard Tag

This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the `<code>` tag.

### Preformatted Tag

This tag styles large blocks of code.

<pre>
.post-title {
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 38px;
  line-height: 1.2;
  and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;
}
</pre>

### Quote Tag

<q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer

### Strong Tag

This tag shows **bold text**.

### Subscript Tag

Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.

### Superscript Tag

Still sticking with science and Isaac Newton's E = MC<sup>2</sup>, which should lift the 2 up.

### Variable Tag

This allows you to denote <var>variables</var>. -->
