---
layout: default
---

# Pages

[Loki](./o/fi)

[Lab PAI](./o/labpai/karena.svg)

# Posts

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span style="font-size:14px;" class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

      <br/>
        <a style="font-size:20px" class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a><br/><br/>
      
    </li>
  {% endfor %}
</ul>

