---
layout: post
title: Anchor CMS notes
h1: Anchor CMS notes
permalink: /anchor-cms-notes/
date: '2014-09-21 22:06:51'
categories: general
description: A mix of code snippets and my notes from using the Anchor CMS framework...
strapline: Handy snippets for Anchor CMS
---

## Update
I converted the site to run on Jeykll with Netlify CMS

## Original article...

After many tests and trials of different open source CMS systems I stumbled across Anchor CMS.

This article is simply a list of useful snippets to help you customise your code should you want to use Anchor CMS on your next project (go on give it a go).

[Skip the drivel and get to the snippets](#snippets "Go straight to the good stuff")

## Why did I choose Anchor CMS
Originally I was looking for a Flat-file based solution as they are [usually] super quick and can be really minimal but I also wanted something that would allow me to apply a load of custom code when I wanted to do something fancy. This was to be an antidote to my experience of Wordpress which out of the box I find to be a bit sluggish and comes with a bucket load of unnecessary code (css classes etc). 

Now I don't want to diss Wordpress, I actually think it's an amazing CMS and there are so many good plugins to help speed it up such as W3 Total Cache etc and I'm used to creating my own themes and functions but for this project I just wanted a blank canvas, something really simple that I could build on to meet my needs and nothing more. 

Anchor CMS is not Flat-file based (it is database driven) but is, so-far, really super quick and simple in that it's got the bare bones of what you need and nothing more (that's not to suggest that you can't do anything complex on it, you can).

<h2 id="snippets">The Snippets</h2>
 Note: This is not a comprehensive guide to Anchor CMS, just a list of useful snippets to help you customise your code.

## #Referencing scripts / file paths
Use this so that you don't need to update all your file/path references if they change.
	
The following...

    //References theme folder
    <script>var base = '<?php echo theme_url(); ?>';</script>
    //References folder within theme folder
    <script src="<?php echo theme_url('/js/main.js'); ?>"></script>
    //References anchor core assets folder 
    <script src="<?php echo asset_url('/js/zepto.js'); ?>"></script>


Generates...

    <script>var base = '/themes/remarkable/';</script>
    <script src="/themes/remarkable/js/main.js"></script>
    <script src="/anchor/views/assets/js/zepto.js"></script>



## #Site Search


	<form id="search" action="<?php echo search_url(); ?>" method="post">
	  <label for="term">Search my blog:</label>
	  <input type="search" id="term" name="term" placeholder="To search, type and hit enter…" value="<?php echo search_term(); ?>">
	</form>


## #Categories


	<aside>
	  <b>Categories</b>
	  <ul>
	    <?php while(categories()): ?>
	    <li>
	      <a href="<?php echo category_url(); ?>" title="<?php echo category_description(); ?>">
	        <?php echo category_title(); ?> <span><?php echo category_count(); ?></span>
	      </a>
	    </li>
	    <?php endwhile; ?>
	  </ul>
	</aside>



## #Linking to the base URL
In this example, linking up the logo

	<a id="logo" href="<?php echo base_url(); ?>"><?php echo site_name(); ?></a>


## #Navigation
	<?php if(has_menu_items()): ?>
	  <nav id="main" role="navigation">
	    <ul>
	      <?php while(menu_items()): ?>
	      <li <?php echo (menu_active() ? 'class="active"' : ''); ?>>
	        <a href="<?php echo menu_url(); ?>" title="<?php echo menu_title(); ?>">
	          <?php echo menu_name(); ?>
	        </a>
	     </li>
	     <?php endwhile; ?>
	
	     <li class="tray">
	       <a href="#tray" class="linky"><img src="<?php echo theme_url('img/categories.png'); ?>" alt="Categories" title="View my posts by category"></a>
	     </li>
	    </ul>
	  </nav>
	<?php endif; ?>


## #Date Year & Site Name
	<small>© <?php echo date('Y'); ?> <?php echo site_name(); ?>. All rights reserved.</small>


## #RSS url link
<pre><code>`
	<a href="<?php echo rss_url(); ?>">RSS</a>
`</code></pre>

## #Twitter link
<pre><code>`
	<?php if(twitter_account()): ?>
		<a href="<?php echo twitter_url(); ?>">@<?php echo twitter_account(); ?></a>
	<?php endif; ?>
`</code></pre>


## #Admin url link
<pre><code>`<a href="<?php echo base_url('admin'); ?>" title="Administer your site!">Admin area</a>`</code></pre>


## #There is a hidden admin page to alter the order of your menu


    ...yoururl/admin/menu


## #To make the menu ordering work change this...

    Route::collection(array('before' => 'auth,csrf'), function() {

to this...

<pre><code>
Route::collection(array('before' => 'auth'), function() {
</code></pre>

in the following file

<pre><code>
.../anchor/routes/menu.php
</code></pre>

Note that I've found this snippet of code on many more pages



## #Custom fields (Meta fields)

Set up in the admin as

<pre><code>sidebar_image</code></pre>

In the template...

    <?php if (($img = article_custom_field('sidebar_image')) || ($img = page_custom_field('sidebar_image'))): ?>


And the $img is referenced...
	
<pre><code>
.sidebar {
  background: url("<?php echo $img; ?>") center no-repeat;
  background-size: cover;
  color: white;
  text-shadow: 0px 1px 5px rgba(0,0,0,0.3);
}
</code></pre>


## #Previous article URL

<pre><code>article_previous_url()</code></pre>


## #Next article URL

<pre><code>article_next_url()</code></pre>


## #Created my own functions for next / previous article titles


<pre><code>
// RETURN the title of the previous article
function article_previous_title() {
	$page = Registry::get('posts_page');
	$query = Post::where('created', '<', Registry::prop('article', 'created'))
				->where('status', '!=', 'draft');
	if($query->count()) {
		$article = $query->sort('created', 'desc')->fetch();
		$page = Registry::get('posts_page');
		return $article->title;
	}
}

// RETURN the title of the next article
function article_next_title() {
	$page = Registry::get('posts_page');
	$query = Post::where('created', '<', Registry::prop('article', 'created'))
				->where('status', '!=', 'draft');
	if($query->count()) {
		$article = $query->sort('created', 'desc')->fetch();
		$page = Registry::get('posts_page');

		return $article->title;
	}
}
</code></pre>