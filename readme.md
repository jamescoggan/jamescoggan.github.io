# jamescoggan.com

James Coggan's Personal webpage

Based on the [Labrador Jekyll Theme](https://github.com/donini/labrador-jekyll-theme) 

## Directory structure

``` ruby
labrador/
+-- .gitignore
+-- .htaccess
+-- _config.yml
+-- blog.md
+-- en.md
+-- pt.md
+-- _data
    +-- lang
    ¦   +-- [language_code].json 
    +-- social.json
+-- _includes
    +-- general
    ¦   +-- blog
    +-- sections
+-- _layouts
+-- _posts
+-- assets
    +-- css
    |   +-- blog
    |   +-- sass
    +-- fonts
    +-- img
    +-- js
+-- media
```

### Components

On _includes folder are located the componentes used on this theme.

There is two folders:
* _general_ where are located the general componentes, like header, footer, menu, language change, social links and blog elements.
* _sections_ where are located the blocks of each section of front page (single-paged).

### Blog posts

The blog posts are located in _posts folder, each file, need this header:
```
---
layout: post
title:  "[THE_TITLE_OF_YOUR_POST]"
subtitle: "[THE_SUBTITLE_OF_YOUR_POST]"
date:   [POST_DATE]
tags: [TAG1],[TAG2]
image: /media/[IMAGE_THAT_REPRESENT_YOUR_POST]
lang: [CODE_OF_LANGUAGE]
permalink: /blog/:year/:month/:day/:title/ --> [THIS_PERMALINK_PATTERN_CAN_BE_CHANGE_AS_YOU_DESIRE]
---
```

The _image:_ variable is used with a placeholder in the middle of content as you desire.

### Media files for posts

This folder contains the resources for posts, like images, documents, etc.

### License

Open sourced under the [MIT license](https://github.com/donini/labrador-jekyll-theme/blob/master/LICENSE.md).CENSE.md).