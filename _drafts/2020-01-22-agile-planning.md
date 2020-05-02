---
layout: post
title: Agile planning in a nutshell
h1: Agile planning in a nutshell
date: '2020-01-22 10:07:32'
categories: general
description: 
---


Planning in a nutshell
A basic guide of how to plan...

‘Size’ the backlog - size each story relative to the others - Read about the sizing game
Determine Initial velocity – what can “a pair / team” realistically achieve
Determine team size – how many dev pairs could be deployed efficiently
Determine delivery plan – based on how may dev pairs could be deployed and back-log size (Burn up)
Sequence on priority and value - Read about the planning game
Don't know your Velocity?
For new teams that don't have historical data, you can use the Velocity game.

Mix up and distribute a good handful of backlog stories to different dev/qa pairs – without story sizes on them (This has been done in a separate session and the records are hidden)
The pairs determine what they could deliver (not the entire team) into one week iterations by selecting stories from the backlog at random (Tip - it's more effective to use a 1 week iteration for this activity, even if you plan to have 2 week iterations. The reason being for accuracy, it's easier to predict a shorter timescale, just scale it up later)
Using your hidden records, total up the story points for each iteration
Keep repeating the process, passing the stories between groups (so that all groups re-estimate using the same stories) until all stories have been assessed multiple times. 
Finally, taking all the data, average the points per iteration to get the initial velocity for one pair per week, then scale this up to the team size and actual iteration length.


Remember when planning to factor in things that may impact the team 

260 week days per annum less (example considerations)
30 personal holidays
8 Bank Hols
5 days sick
1 day training
1 away days etc
Is the Tech lead going to dev 20%, 40% 60%+ etc
Is there a ramp-up factor i.e. we're all new to this work or area of the code base so overtime we'd expect an increase but for the first iteration we'd expect to deliver 0.5 of the velocity,  0.75 the second iteration and by the third iteration to be closer and then exceed etc.
Use History when you have it
At first you'll use guesswork and the Velocity game to guide your expected velocity/burn up, but quickly you'll start to refine this once you gather some data from your early iterations.





Simple planning - Number of sprints to complete X
Firstly, estimate your Stories (See the sizing game), translate this to points, then divide it by your velocity.  

Number of sprints to complete X = Total Story Points / Velocity

This gives you your raw estimate.







The raw estimate is a bit too definative. Lot's of stuff happens and the further out it is, the less we know. Let's think about the variance or potential range and plot this. Again, you'd use historical data, but without this you can us x0.6 for Low velocity and x1.6 for High velocity.





Great. This gives us a sensible range. Next we need to factor in known impacts to our velocity such as holidays...





We're now done and when our stakeholders ask when we predict to be finished we can give them a range between X and X. Note: Be careful about the high estimate. Often I state the Raw and Low estimate as the range. However, you could say "We'd have a chance to deliver closer to  [ INSERT HIGH ESTIMATE HERE ] if you removed X and X blocker...or gave us XYZ" as a carrot on a stick to help you remove blockers or fix the WiFi etc.

























