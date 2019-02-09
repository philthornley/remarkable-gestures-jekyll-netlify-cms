---
layout: post
title: Bookmarking within a page
h1: Bookmarking within a page
permalink: /bookmarking-within-a-page/
date: '2014-09-23 22:06:51'
categories: general
description: A shameful admission. This is one of the simplest things you can do in HTML markup, it's been available since day one but for some strange reason I can never remember the syntax
strapline: A shameful admission...
published: false
---

This is one of the simplest things you can do in HTML markup, it's been available since day one. Why the hell are you writing about this???

For some strange reason **I can never remember the syntax** for this, I've been writing HTML markup for 16 years but I always need to go back to a project or page I've worked on in the past, look at the source and feel ashamed by my inability to remember this.   

So this is a post just for me so I can ashamedly reference it quickly. Hopefully by writing this out, it may finally go in. Don't tell anyone :-)

## The code

There are two ways to do this (maybe why I'm confused)

### Method one (What I usually use)
Add an `id` to an existing element and anchor to it

    //The link to the bookmark
    <a href="#name-of-bookmark-link">Skip to the example bookmark</a>
    
    //Add the id to an existing element on the page (in this case just a <h2> tag) 
    <h2 id="name-of-bookmark-link">Example element</h2>

### Method two
Add an empty `<a>` tag with the name property filled in and anchor to it

    //The link to the bookmark
    <a href="#name-of-bookmark-link">Skip to the example bookmark</a>
    
     //The bookmark on the page, place it just before the place on the page 
    <a name="name-of-bookmark-link"></a> 
