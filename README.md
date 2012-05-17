# iOS-CookieCheck.js

Recent issues around iOS cookie support and surprise at the lack of an instant, cheap fix for it lead me to put this together.

[CNET discussion around issues](http://reviews.cnet.com/8301-19512_7-57382153-233/mobile-safaris-default-cookies-settings-changing-randomly/)

##  Details

* A lightweight, vanilla JS file (No need for jQuery, etc.)
* Display a fullscreen overlay preventing users with cookies disabled from interacting with the site 
* Points them to an Apple page with instructions for configuring the appropriate settings.
* Perhaps not the gentlest 'fix' in the world but for plenty of sites it's better than attempting to let them do anything without cookies.

## Compatibility

Currently only tested on iOS 5 on an iPhone 4S but should work on pretty much anything iOS 4+

## Usage

* Upload ios-cookiecheck.min.js to your js folder
* Insert script tag at end of body
    <script type="text/javascript" src="/js/ios-cookiecheck.min.js"></script>

* See included sample.html for an example.

## Misc

Styling and markup for the message are all inline so it can be included anywhere as a single file, it should be easy enough to edit in place, or you could simply remove the inline and use something more appropriate.

Minified version compiled with [Google Closure Compiler](https://developers.google.com/closure/compiler/)

MIT license (ie. Do whatever you want, just don't blame me!)