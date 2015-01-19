jQuery Ajax Logger
=============

jQuery Ajax Logger is a bookmarklet to log jQuery ajax calls and the source codes which triggered it.

It makes it easy to trace back what files and functions are triggering what ajax calls.

## Usage

Create a bookmarklet with the following content:

    javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://rawgit.com/srizzo/jqueryajaxlogger/master/dist/jqueryajaxlogger.min.js';})();

Activate the bookmarklet, open the Javascript Console and interact with your page.

See it in use [here](http://srizzo.github.io/jqueryajaxlogger/)