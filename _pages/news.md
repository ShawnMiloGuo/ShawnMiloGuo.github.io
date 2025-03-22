---
layout: page
title: 学术活动
permalink: /news/
nav: false
nav_order: 5
---

团队会不定期举行多种学术交流活动，这里是一些近期组织的学术讨论会。


{% include scripts/mathjax_macros.html %}

---

<ol>
    {% for summary in site.news reversed %}
    <li>
        <a href="{{ summary.url | relative_url }}">
            ({{ summary.date | date: '%b %-d, %Y' }})
            {{ summary.title }}
        </a>
    </li>
    {% endfor %}
</ol>

