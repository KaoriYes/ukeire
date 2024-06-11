# Weekly Nerd | Week 9 | Pre CSS Day 
Op de Pre CSS Day spreken Bramus en Miriam Suzanne over CSS. 

## Onderwerpen
1. Bramus (chrome developer www.bram.us @bramusBlog)  https://slidr.io/bramus/mpa-view-transitions-are-here#23 slides van de presentatie: Aanrader 
Cross-document View Transitions for MPAs are here! live-transitions.pages.dev => Example
View Transitions: Same-Document virew transitions for single-page applications (chrome vorig jaar, Firefox onderweg, Safari atm nog niet)
View Transitions API give seamless transitions between pages. if(!document.startViewTransition){...} else -> browser makes two snapshots between the two changes and the updated content is shown with an animation.
The user-agent stylesheet: 
:root {
    view-transition-name: root;
} -> Browsers that have viewtransitions enabled
Interupted viewtransitions skip to the end.


Crossdocument view transitions:
You can now add a transition between two pages. 
No need for js to do this. a href is enough, now only add the CSS 
    Two conditions:
    1. The two url must have the same origin: https://example.com/page1 and https://example.com/page2 NOT https://login.example.com/page1 and https://example.com/page2
    2. @view-transition { navigation: auto; } -> the browser will do the transition for you.

2. Miriam Suzanne 

https://slides.oddbird.net/cq/pre-cssday/






---

## Leuke dingen 
+ 


## Reflectie