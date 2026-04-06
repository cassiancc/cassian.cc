---
layout: post
title:  "Making of TechOlympics: Envision"
yr: 2026
type: "gallery"
length: 3
height: "300px"
---

This year, as I did for the last seven, I helped plan and execute TechOlympics, the largest student-run tech conference in the nation.
<!--more-->
For those who don't know, TechOlympics is an annual tech conference held by the INTERalliance of Greater Cincinnati, and it holds the important distinction of being almost entirely student-run. This year, we had [38 student volunteers](https://interalliance.org/programs/ilc/), who handled everything from registration data, to marketing the event, to even coordinating with our corporate sponsors and speakers.

TechOlympics is the largest event INTERalliance puts on. We held the event at the GE Aerospace Learning Center in Evendale, Ohio, and we had over 670 people registered, including 360 students, 91 speakers, and 164 adult volunteers, mostly from our [corporate sponsors](https://techolympics.org/for-sponsors/). How do you plan an event like that?

Well, this post will take you through how our team goes about organizing TechOlympics, as well as my own involvement as one of INTERalliance's few adult employees. For those who read last year's [Making of TechOlympics: Inspire](https://cassian.cc/2025/02/22/making-of-techolympics-inspire.html), a lot of this process will be familiar, with some twists and turns from the new venue and new challlenges.

First though, a quick breakdown of our various teams, focused on how they help make TechOlympics a reality.

### The INTERalliance Leadership Council (ILC)

- The Chapters Team manages the INTERalliance chapters in schools, allowing for a more direct connection to students and teachers. At TechOlympics, their primary responsibility is managing the Chapter Showcase, where Chapters build a proof of concept to show off to judges for a chance to win.
- The Programs Team's primary responsibility is TechOlympics itself. They handle contacting speakers, organizing the event schedule, and organizing other elements like INTERalliance's own competitions and the Networking Lounge.
- The Marketing Team handles making sure our students, speakers, and volunteers know that TechOlympics is happening, from our various social medias to our newsletter. While they do *some* graphic design for these posts, the event's logo and other elements of branding are done by our contracted graphic designer.
- The Data Team manages TechOlympics registration, as well as other various forms like early dismissal and the TechOlympics scholarship form.
- The IT Team manages the TechOlympics website and laptops.
- The Finance Team recruits sponsors and volunteers, and also manage sourcing prizes and the TechOlympics script.

Got it? While each team is independent, the intent is for them to work together to make TechOlympics a reality.  The full team usually meets monthly - with more meetings closer to February, but individual teams will meet every week to handle their own tasks.

With all that covered, let's move into where work for the ILC starts, in September.

## September

September started off with the ILC Retreat. It's a chance for the ILC to get to know each other, and make their general plan for the whole year. Our Programs team put together an early draft of the event schedule, and invited past speakers from previous years to speak at this year's event. They make their decisions based off of feedback from the students, in the form of the post-TechOlympics survey and each session's feedback form, to ensure that the sessions we offer are the ones that students want to see.

September and October also saw Marketing and our Graphic Designer working together on the logo for the event. For those who don't know, the logo concept for TechOlympics is actually designed by students *at* the previous years TechOlympics at the TO Logo Design competition. Those students are told the 2027 theme early (which was picked by our Leadership Council the week prior), and have an hour to design what they think the logo should be for that year. That concept is then improved on by our graphic designer, and was finalized by the feedback from ILC. In a way, it really comes full circle!

In past years, we'd also have the logo done by September, but this year saw a significant amount of back and forth work between our graphic designer and Marketing team, each with their own ideas of how to make the logo a reality. This ended up causing the site and an early version of the logo ended up not going live until October alongside registration.

## October

October is where we really got to work. By the end of October, we needed to have registration on the [TechOlympics website](https://envision.techolympics.org/) open alongside the new theme and logo. Maintaining the website is one of my primary responsibilities, so I worked closely with the graphic designer to make sure the new theme fit the website well. I'm very proud of how it came together.

<img width="50%" loading="lazy" src="/content/20260305/envision-site.avif" alt="The website for TechOlympics 2026: Envision, showing a Save the Date animation." title="The website for TechOlympics 2026: Envision, showing a Save the Date animation.">

I worked closely with our Data Team to launch TechOlympics registration on October 23rd. We try and launch this as early as possible, so that we can understand how many people are interested in the event as early as possible. Students who make our lives easier and sign up early get their registration discounted, and students who register late - that's a majority of them - pay the full price. Registration has been handled through Whova for the last few years, which made it easy to reuse registration forms from previous years, and prevents us from forgetting to capture important data like emergency contact information.

Our Finance Team was hard at work that month on contacting previous speakers and sponsors to get them signed on for this years TechOlympics. Funding and support from corporate sponsors makes TechOlympics possible, and cuts down on the amount we have to charge students to register. For the companies, they get their name and brand in front of students and are able to  see the students they'll likely hire as part of the [INTERalliance intern program](https://interalliance.org/programs/internships/).

Programs also launched the [Call for Speakers](https://inspire.techolympics.org/for-speakers/) form alongside the Save the Date website, giving new speakers the opportunity to present at TechOlympics! New talent is essential to making TechOlympics a continued draw for returning attendees - I filled out the form myself a few years ago when President of Norse IoT Club, and our session that year was such a hit that we came back every following year, completely redoing the session each time. This year marked the first time they did it fully without me, as I've since graduated from NKU and am not involved.

The Marketing Team also helps with the Call for Speakers, marketing it on our social media platforms, including [Facebook](https://www.facebook.com/interalliance/), [LinkedIn](https://www.linkedin.com/company/the-interalliance-of-greater-cincinnati) and [Instagram](https://www.instagram.com/interalliancegc/).

<img loading="lazy" width="50%" src="/content/20260305/register.avif" alt="A marketing image for TechOlympics Registration." title="A marketing image for TechOlympics Registration.">

## November

November brings with it the launch of both the [Chapter Showcase](https://envision.techolympics.org/showcase/) application and the start of the development of our own registration platform - INTERlink.

In previous years, we used a platform called Signup.com to register volunteers. Signup.com's primary advantage was making it clear to potential volunteers what spots were open, and allowing for hundreds of volunteers to be easily registered to specific timeslots. The primary disadvantage, however, was the fact it offered no amount of customization on questions, and the default questions did not match up well with Whova, where we store all attendee data. While we looked into alternative solutions, the most obvious being Whova's own Call for Volunteers, none of them fit our needs. With that in mind, I begun development on our own registration platform designed to handle volunteer registration.

With the need for this platform to be working as soon as possible, I felt it important to have something useable, even if it would need reworks later. With that in mind, I tried to keep the structure of the site pretty familiar. The frontend of the site was written in [Pug](https://pugjs.org/api/getting-started.html), which despite the fact I hadn't used it before, felt similar enough to HTML/JS for me to feel comfortable while still integrating with the [Node.JS](https://nodejs.org/en) backend I had planned to use. I am not a backend developer - so keeping the backend lightweight and easy for me and future maintainers to understand to was a priority, while giving me the freedom to be more flexible with the frontend as frontend work is what I'm familiar with.

On the Leadership Council side - the Marketing Team is also now able to market the event being open. They launch social media posts throughout November on all of our platforms, as well as in our email newsletter for everyone who doesn't [follow us on social media](https://bsky.app/profile/interalliance.org).

<img width="40%" loading="lazy" src="/content/20260305/registration-open.avif" alt="A marketing image showcasing TechOlympics registration. The text states that registration is open, and students shouldn't miss out on the chance to shape their future." title="A marketing image showcasing TechOlympics registration. The text states that registration is open, and students shouldn't miss out on the chance to shape their future.">

The Chapters Team also launches [Showcase registration](https://inspire.techolympics.org/showcase/) around this time. Even though Showcase projects also tend to be registered last minute, as students tend to wait for their projects to be done - or as close to done as they can be, we want to make sure rules and guidelines are updated and no one is working with inaccurate information. Thankfully, this tends not to change too much from year to year.

November tends to be focused on ongoing work, as Programs and Finance are finalizing speakers and sponsors.

## December

In December, our Graphic Designer finished up the design for the TechOlympics T-Shirts, and we finalized our list of speakers for the event.

December is usually a quiet month, with most of the ILC busy with exams and the holidays. This marked the end of 2024.

## January

Work really starts picking up in January. It marks the end of Early Bird Registration, and our Programs Team finalizes the schedule for the event. Around this time, I'm working with our Data Team to rebuild that schedule in Whova. That Whova schedule will be the one that the students can RSVP to, and will be [embedded onto the website](https://inspire.techolympics.org/schedule/) as a showcase of what the event offers. Our Finance Team is also finalizing the list of sponsors, which will also be added to Whova and the website.

<img loading="lazy" src="/content/20260305/registration.avif" alt="A graphic with the heading 'There's still time!' followed by the text 'Regular registration is open from now until February 2nd (while spots are available) for the price of $100! Don't miss this chance to attend the nation's largest student-run tech conference." title="A graphic with the heading 'There's still time!' followed by the text 'Regular registration is open from now until February 2nd (while spots are available) for the price of $100! Don't miss this chance to attend the nation's largest student-run tech conference.">

Marketing and the Graphic Designer also finish designing the branding for Whova and the name badges around this time, and Chapters sends out registration for timeslots to registered Showcase participants.

Near the end of the month, our team also tours the venue for the first time to really understand what we're working with. This helps Programs understand the rooms that they're assigning speakers to, allows Finance to understand where to place Sponsor Booths, allows IT to find a room to store laptops in, allows Data to understand where we can set up registration tables, and allows us to understand where we'll need to place signage and other INTERalliance tables.

## February

February in many ways is the make or break point for TechOlympics. With only two weeks to finish *everything* that's been left as a "to-do" (we had about 81 tasks remaining out of the ~160 in our Runbook), it can be easy to get stressed, but this group of ILC really took it in stride.

Before we get into logistics, we do have one fun thing in February! Every year, the ILC choose the theme for the next year. They start by submitting all their ideas into a Google Form, and then our Finance Team cuts it down to a few highlights and the full group votes on the theme. This year, the winning theme was Ascend!

We close registration in February after one final push from Marketing, and open up Whova for students to begin registering for sessions. With an (almost) final list of attendees, we can begin printing, assembling, and sorting name badges.

<img style="align-self: center;" loading="lazy" width="30%" src="/content/20260305/final-push.avif" alt="A graphic with the text 1 day left and a link to techolympics.org" title="A graphic with the text 1 day left and a link to techolympics.org">

We'll also design, print, and order other elements of signage and printed material around this point, like the T-Shirts, banners, and schedules.

With a finalized agenda, our IT Team can begin imaging laptops with a final list of software. I help with that as much as I can, but at this point, I'm pretty much living and breathing Whova. From post-registration "late adds", to issues with speakers or sessions with incorrect info, there's always something to fix!

Around this time, the graphic designer will finish up the TechOlympics kickoff animations - a 30 minute loading animation, which had fun facts about Cincinnati and TechOlympics as a whole, and a 10 second countdown that kicked off the event.

<video src="/content/20260305/intro.mp4" preload="none" muted autoplay loop></video>

With those animations finished, Finance Team is able to send them off alongside the final scripts and slide decks to our AV partners that GE works with. While we can't know *everything* that will make it into the script at this point (things like competition winners will be found out during the event), having a script that is as finished as possible allows us one less thing to worry about during the day. I actually helped a bit with the slide deck - this very post started as part of an ILC Info Session we held, but most of it was deemed not relevant.  

With everything (we can think of!) finished, the only left to do is set up...

## The Day Before (Friday!)

Our team arrives at GE Aerospace at 3pm the day before for final setup.

We set up as much as we can on Friday, as there's not much time Saturday morning to set up before students begin to arrive. This includes the registration tables, placing signage and shirts in their locations, and setting up the rooms for our sessions with their materials and laptops. Sponsors arrive on Friday as well to set up their sponsor booths.

<img loading="lazy" src="/content/20260305/friday.avif" alt="A photo of the registration table, set up and ready for Saturday morning.">

We end the day with a quick training on the registration process that I wrote up for the event. I've been working registration long enough that I have it down to a science at this point. These days, we use Whova's attendee check-in feature, which is a real time saver. All our staff need to do is scan the QR code on the students badge, and they'll be checked in. No more are the days of trying to find the person's name in a massive spreadsheet.

At 6pm, we depart GE. Our staff stays in a hotel over the weekend, which cuts down on driving time!

## Saturday

TechOlympics goes by in a flash. There's always something to do, somewhere to *be*, some problem to solve. There's nothing like it, for me at least.

Our team arrives at 7am to get everything in place, setting up registration tables and laptops. IT will also be at work setting up laptops for the morning sessions, and Programs will be preparing for the start of day kickoff.

For everyone else, the day starts out with registration. Attendees arrive and are directed to one of our three registration tables, based on their last name. Attendees are asked to present their ID, checked in via the Whova app, and given a name badge. If a name badge has not been printed for one reason or another, they are sent to the Exceptions Table for a new badge. Once checked in, students are directed to sponsor booths and the main auditorium.

At 9am, TechOlympics begins with the kickoff! All students are in the main auditorium, as well as a majority of the event staff. Registration tables remain open for late arrivals as well as volunteers.

<iframe width="451" height="306" src="https://www.youtube.com/embed/QUBvHUp88Xo" title="TechOlympics 2026: Kickoff!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

At 9:30am, speakers began arriving for their sessions. ILC is on hand to direct them to their rooms.

At 10am, we dismiss students and direct them to their first breakout of the day. Each room has 1-2 dedicated members of ILC present to introduce the speaker (and just enjoy the session). IT Team is monitoring for technical issues, and Programs Team has one member acting as a runner, delivering required materials to sessions.

<img loading="lazy" src="/content/20260305/nkcyber.avif" alt="A photo of students in a breakout presentation. A speaker can be seen smiling.">

Throughout the day, we're also holding Showcase Presentations. As mentioned, these groups of students have been working on their projects throughout the entire school year, so this is an incredibly important part of the day for them. 

At 11am, we break for lunch. This year, we had attendees eat lunch in the same rooms they had their 10am sessions in, to avoid the A/B lunch system we used last year.

At noon, students are directed back to the Auditorium for an ILC Info Session. This session is a panel discussion with both current ILC and alumni, covering why students may want to join ILC. After all, without the ILC, there is no TechOlympics!

<img src="/content/20260305/ilc-info.avif" alt="A photo of the ILC Info Session. Six people are onstage, sitting down for a panel discussion. Their names are visible on the screen beind them: Andrew Heckart, Caleb Petros, Erika Long, Eva Winchester, and Wissam Nusair." title="A photo of the ILC Info Session. Six people are onstage, sitting down for a panel discussion. Their names are visible on the screen beind them: Andrew Heckart, Caleb Petros, Erika Long, Eva Winchester, and Wissam Nusair.">

At 1pm, we have three more rounds of breakout sessions. I consider this to be the “calmest” part of the day. Most sessions are ready to go at this point, and technical issues are less common. This is also the point where we start condensing registration tables and cleaning up where we can.

Among the 1pm sessions are three rounds of IT&U, a round table discussion between students and corporate volunteers. This is always a highlight of the event, and one we encourage all students to attend. Volunteers always leave incredibly impressed by the students professionalism and questions, and students leave with a better understanding of what corporate life is like.

<img src="/content/20260305/it-u.avif" alt="An image of students sitting at a table, centered around one presenter. The students look contemplative." title="An image of students sitting at a table, centered around one presenter. The students look contemplative. The sign on the table indicates they are discussing cybersecurity.">

At 4:30pm, all attendees return to the Auditorium for a brief dismissal ceremony, where we collect their badges for tomorrow morning. 

At 5pm, ILC is debriefed for the day, get food, and return to the hotel ready for Sunday Morning.

## Sunday

Sunday is always the calmer day. Its a smaller number of attendees, since not everyone comes back, we have prior experience since we've just run Saturday, and its a shorter day, ending at 3pm. We did have some unique challenges this year - pretty bad snow caused us to lose a speaker. Apologies to anyone who had their sessions change around that day - we were making the best of the situation.

The day follows a similar format: registration, to first round of breakouts, to lunch. New to this year: after lunch, we allow our top five Showcase presentations to be presented to the entire audience. Students are then able to vote on their favourite presentations, giving them direct influence on the winner of Showcase for the first time.

<img loading="lazy" src="/content/20260305/showcase.avif" alt="A photo of students presenting their Showcase project on stage. A crowd is visible." title="A photo of students presenting their Showcase project on stage. A crowd is visible.">

We wrap the day with one more round of breakouts, followed by the Awards Ceremony. We collect badges, and begin teardown, cleaning up the venue and loading up all remaining gear to be delivered back to the office.

## Post-Event

After the event, we're finally able to breathe. We have one more meeting to review the event and go over the lessons we learned from this year. INTERlink alone has over a dozen specific issues that I want to fix before we use it again for next year's registration. This is also around the time we receive photos from our event photographers, which we shared out via Whova.

And that's that! I'm always shocked by how quickly the event goes - and how exhausted I am afterwards. This is an event that's incredibly special to me, as the school I attended had little in terms of tech education.

If you aren't already involved, and somehow interested enough to read through this whole article, you should consider getting involved! TechOlympics 2027: Ascend promises to be just as incredible as it was last year. We'll have more details over at [techolympics.org](https://techolympics.org) around November, when this process repeats all over again.
