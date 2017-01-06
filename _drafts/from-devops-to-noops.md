---
layout: post
title:  "From DevOps to NoOps"
date:   2017-01-05 14:24:35 +0200
categories: "software-engineering"
---
[DevOps][devops-wiki] has been a hot buzzword the last couple of years. DevOps is a set of practices that emphasizes the collaboration between software engineering and IT operational teams while also promoting automation of all factors of deploying applications and provisioning infrastructure.

I love the DevOps culture: collaboration and communication between historically-separate, siloed teams is a fantastic practice. Developers work with operations, operations with developers. This is great! But it also starts blurring the line between who-does-what.

In most DevOps teams I've worked in, it was expected from the developers to have a good understanding of the underlying infrastructure - how and where applications are deployed (physical server level), how the load balancing works, how infrastructure gets provisioned and scaled, etc. Also, if the underlying infrastructure went down, it was expected that the developers would be on standby and help troubleshoot the issues.

Developers should not care about the underlying infrastructure of their applications. Developers should care about delivering business value. Thus, instead of moving closer to operations, developers should move closer to business.

Enter [NoOps][noops-forrester].



```bash
heroku apps:create
git push heroku master
heroku addons:create heroku-postgresql:hobby-dev
heroku ps:scale web=2
```


[devops-wiki]: https://en.wikipedia.org/wiki/DevOps
[noops-forrester]: http://blogs.forrester.com/mike_gualtieri/11-02-07-i_dont_want_devops_i_want_noops
