/*!
 *
 *  Copyright (c) David Bushell | http://dbushell.com/
 *
 */

(function(window, document, undefined)
{
    // helper functions

    var trim = function(str)
    {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    };

    var hasClass = function(el, cn)
    {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    };

    var addClass = function(el, cn)
    {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    };

    var removeClass = function(el, cn)
    {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    };

    var hasParent = function(el, id)
    {
        if (el) {
            do {
                if (el.id === id) {
                    return true;
                }
                if (el.nodeType === 9) {
                    break;
                }
            }
            while((el = el.parentNode));
        }
        return false;
    };

    // normalize vendor prefixes

    var doc = document.documentElement;
    var transform_prop = window.Modernizr.prefixed('transform'),
        transition_prop = window.Modernizr.prefixed('transition'),
        transition_end = (function() {
            var props = {
                'WebkitTransition' : 'webkitTransitionEnd',
                'MozTransition'    : 'transitionend',
                'OTransition'      : 'oTransitionEnd otransitionend',
                'msTransition'     : 'MSTransitionEnd',
                'transition'       : 'transitionend'
            };
            return props.hasOwnProperty(transition_prop) ? props[transition_prop] : false;
        })();

    document.App = (function()
    {
        var _init = false, app = { };

        var inner = document.getElementById('view-container'),

            nav_open = false,

            nav_class = 'js-nav';

        app.init = function()
        {
            if (_init) {
                return;
            }
            _init = true;
            var closeNavEnd = function(e)
            {
                if (e && e.target === inner) {
                    document.removeEventListener(transition_end, closeNavEnd, false);
                }
                nav_open = false;
            };
            app.closeNav =function()
            {
                /*if (nav_open) {
                    // close navigation after transition or immediately
                    var duration = (transition_end && transition_prop) ? parseFloat(window.getComputedStyle(inner, '')[transition_prop + 'Duration']) : 0;
                    if (duration > 0) {
                        document.addEventListener(transition_end, closeNavEnd, false);
                    } else {
                        closeNavEnd(null);
                    }
                }*/
                
                if (!nav_open) {
                    return;
                }
                console.log('@@@inside closeNav() and nav_open is now '+ nav_open);
                removeClass(doc, nav_class);
                nav_open = false;
                console.log('@@@Still inside closeNav() and nav_open is now '+ nav_open);
            };
            app.openNav = function()
            {
                if (nav_open) {
                    return;
                }
                console.log('@@@inside openNav() and nav_open is now '+ nav_open);
                addClass(doc, nav_class);
                nav_open = true;
                console.log('@@@Still inside openNav() and nav_open is now '+ nav_open);
            };

            app.toggleNav = function(e)
            {
	            console.log('////////////////////////////////toggleNav invoked and nav_open is now '+ nav_open);
	            
                if (hasClass(doc, nav_class)) {
                    app.closeNav();
                    console.log('closeNav invoked and nav_open is '+ nav_open);
                    
                } else if (!hasClass(doc, nav_class)){
                    app.openNav();
                    console.log('openNav invoked and nav_open is now '+ nav_open);
                }
                if (e) {
                    e.preventDefault();
                    console.log('preventDefault invoked');
                }
            };

            // open nav with main "nav" button
            document.getElementById('nav-open-btn').addEventListener('click', app.toggleNav, false);

            // close nav with main "close" button
            document.getElementById('nav-close-btn').addEventListener('click', app.toggleNav, false);
            // close nav by touching the partial off-screen content
            document.getElementById('main').addEventListener('click', function(e)
            {
                if (nav_open && !hasParent(e.target, 'nav-links')) {
                    e.preventDefault();
                    app.closeNav();
                }
            },
            true);

            addClass(doc, 'js-ready');
        };

        return app;

    })();

    if (document.addEventListener) {
    	//Changed to load JS after document is loaded anyway, so initiating fuction directly
        //document.addEventListener('DOMContentLoaded', document.App.init, false);
        document.App.init();
    }

})(window, window.document);