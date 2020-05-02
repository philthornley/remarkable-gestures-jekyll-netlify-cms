---
layout: post
title: Speeding up my site
h1: Speeding up my site
date: '2020-01-22 10:07:32'
categories: general
description: A basic foundation for a delightful CX
---

We all know that page speed is an important factor in creating a delightful user experience.

When I launched my site I took a MVP approach. Speed wasn't too high on my agenda, getting it live was.

Now I'm ready to tackle it and I thought I'd make a journal of my approach.

##Step 1 - Assess the situation
Let's start by taking a snapshot of the site as it is so we know what we're dealing with.

Here's my score using Google's Page Speed Insights tool (PSIT).

<h3 class="txt-normal">Mobile page speed score - 71/100</h3>
![PageSpeed-Insights-Article-page-Mobile.png](/content/PageSpeed-Insights-Article-page-Mobile.png)

Not bad but definite room for improvement. The user experience score is 100/100 so I'm happy with that however an  automated test is hardly the best measurement of good UX.

<h3 class="txt-normal">Desktop page speed score - 86/100</h3>

![PageSpeed-Insights-Article-page-Desktop.png](/content/PageSpeed-Insights-Article-page-Desktop.png)

A better score but this is to be expected, because desktop users are almost guaranteed to be on a faster connection Google is more lenient in it's algorithm so nothing to be be too proud about.

<h3 class="txt-normal">Measure more than one page and look for differences</h3>
When using Google's PSIT it's good to measure a few different pages to gain an average, the differences can be surprising, it seems as though even the depth of content can have an impact, for example a page with a few paragraphs can have a poorer score than a page with lots of copy and images, the tool seems to form a balanced opinion about what will have the most effect based upon the current site setup, very clever.

Google's PSIT does a good job of summarising areas to improve so now I'm going to move onto... 

<h3 class="txt-normal">Other tools</h3>
Let's now take a look at some other measurements to gain a balanced opinion on what to do next.

<h4 class="txt-normal">WebPageTest.org</h4>
![WebPagetest-initial.png](/content/WebPagetest-initial.png)

We can see here from the waterfall analysis that the DOM loaded within 1.5-2.0 seconds, so you the reader will start to see content fairly quickly. However we can spot a number of problems OR opportunities depending on how you look at it. At a high level, here are some points to note from the diagram above.

The page requires eight assets before the DOM is loaded a) the HTML b) my CSS file c) Images including my site logo and footer image d) the JQuery library.  There is an opportunity to reduce the number of assets required before the the DOM can complete. This technique is called the critical rendering factor, for example, do I really need an image further down the page to load before I first show you the content at the top of the page?

The are clearly some latency issues, we can see that the CSS file has just less then 400ms before the first byte is loaded. This could be more of an issue with the Server / Hosting provider however there is an opportunity to improve the latency by setting up some sort of caching or look at how my PHP is compiling.

The biggest delay in the page fully loading is the download of the content images, they're basically too large and not optimised (my bad). Reducing the file size and scaling the images down alone will really speed things up however later we'll look at more advanced techniques.

<h4 class="txt-normal">Pingdom</h4>
![pingdom-initial.jpg](/content/pingdom-initial.jpg)

<h4 class="txt-normal">ySlow</h4>
![ySlow-initial.jpg](/content/ySlow-initial.jpg)

##Step 2 - List your options and prioritise
To help decide on my next step I quickly listed out some of the obvious options...

![page-speed-list.jpg](/content/page-speed-list.jpg)

Then to help prioritise my options I measured (guessed) each option against the value it would bring (low to high) as well as the effort / complexity of implementing each option (again low to high).

![page-speed-prioritisation.jpg](/content/page-speed-prioritisation.jpg)




 