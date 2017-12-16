---
layout: default
---

{% assign sorted_posts = site.posts | sort: 'date' | reverse %}

{% for post in sorted_posts %}
# [{{ post.title }}]({{ post.url }})
{{ post.content | strip_html | truncate: 400 }}

---
{% endfor %}
