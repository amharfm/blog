---
layout: default
---

# Pages

[Loki](./o/fi)

[Lab PAI](./o/labpai/karena.svg)

# Posts

<ul class="post-list">
  {% for post in site.posts %}
	<li><a style="color:#5678B8; text-decoration: none; font-size:20px" class="post-link" href="{{ post.url | prepend: site.baseurl }}"><strong>{{ post.title }}</strong>

      <br/>
		
      <span style="color:#777; font-size:14px;" class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
		
		
		{% if post.thumbnail %}
		<br/>
			<div style="height:200px;overflow:hidden;">
			<img src="{{site.baseurl}}/assets/img/thumb/{{post.thumbnail}}" style="width:100%;">
			</div>
		{% endif %}
		</a>
		
		{% if post.writing %}
		<br/>
		{{post.excerpt}}
		{% endif %}
		
		{% if post.tags %}
		<br/>
			{% for t in post.tags %}				
				<span style="font-size:12px;">#{{t}}</span>
			{% endfor %}
		{% endif %}
		<br/>
      
    </li>
	<hr>
  {% endfor %}
</ul>

