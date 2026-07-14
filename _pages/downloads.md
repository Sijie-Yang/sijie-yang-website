---
layout: page
title: downloads
title_zh: 下载
permalink: /downloads/
description: Shareable slides, notes, and other materials for download.
description_zh: 可分享的幻灯片、笔记及其他资料下载。
bilingual: true
default_lang: en
nav: true
nav_order: 7
---

<div class="downloads-list">
{%- assign items = site.data.downloads | sort: "date" | reverse -%}
{%- if items.size == 0 -%}
<p class="lang-content" data-lang="en">No downloads yet.</p>
<p class="lang-content" data-lang="zh">暂无可下载内容。</p>
{%- else -%}
<ul class="downloads-items" style="list-style: none; padding-left: 0;">
{%- for item in items -%}
  <li class="download-item" style="margin-bottom: 1.25rem;">
    <div style="color: var(--global-text-color-light); font-size: 0.9rem;">{{ item.date }} · {{ item.category }}</div>
    <div class="lang-content" data-lang="en">
      <strong><a href="{{ item.file | relative_url }}" download>{{ item.title }}</a></strong>
      {%- if item.description -%}
      <div style="margin-top: 0.25rem;">{{ item.description }}</div>
      {%- endif -%}
    </div>
    <div class="lang-content" data-lang="zh">
      <strong><a href="{{ item.file | relative_url }}" download>{{ item.title_zh | default: item.title }}</a></strong>
      {%- if item.description_zh or item.description -%}
      <div style="margin-top: 0.25rem;">{{ item.description_zh | default: item.description }}</div>
      {%- endif -%}
    </div>
  </li>
{%- endfor -%}
</ul>
{%- endif -%}
</div>
