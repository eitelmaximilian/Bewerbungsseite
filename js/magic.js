/*jslint browser: true*/
/*global document*/
/*global $*/


$(document).ready(function () {
    "use strict";

    /*    function scrollToTop() {
            var scrollelement = document.getElementById("scrollaboutme");
            scrollelement.scrollTop(0);
        }*/

    var element;

    $('#fullpage').fullpage({
        normalScrollElements: '.scrollable',

        loopHorizontal: true,
        continuousHorizontal: true,
        fadingEffect: true,

        anchors: ['_intro', '_aboutme', '_skills', '_works', '_contact'],
        afterLoad: function (anchorLink) {
            if (anchorLink === '_skills') {

                element = document.getElementById("html-bar");
                element.classList.add("animate-html-bar");
                element = document.getElementById("css-bar");
                element.classList.add("animate-html-bar");
                element = document.getElementById("js-bar");
                element.classList.add("animate-js-bar");
                element = document.getElementById("wp-bar");
                element.classList.add("animate-wp-bar");
                element = document.getElementById("ps-bar");
                element.classList.add("animate-ps-bar");
            } else if (anchorLink === "_intro") {


                //Unterstrich Animation

                setTimeout(
                    function () {
                        element = document.getElementById("bewerbung");
                        element.classList.add("visible");

                    },
                    1000
                );

                setTimeout(
                    function () {
                        element = document.getElementById("name");
                        element.classList.add("visible");
                    },
                    2000
                );

                setTimeout(
                    function () {
                        element = document.getElementById("bewerbungh1");
                        element.classList.add("change");
                    },
                    4000
                );
            }

        },
        onLeave: function (index) {
            if (index === 3) {

                element = document.getElementById("html-bar");
                element.classList.remove("animate-html-bar");
                element = document.getElementById("css-bar");
                element.classList.remove("animate-html-bar");
                element = document.getElementById("js-bar");
                element.classList.remove("animate-js-bar");
                element = document.getElementById("wp-bar");
                element.classList.remove("animate-wp-bar");
                element = document.getElementById("ps-bar");
                element.classList.remove("animate-ps-bar");



            }
        }
    });

    /*    document.getElementById("scrollaboutme").addEventListener('scroll', function (e) {

            var isFullyScrolled = this.scrollTop + this.clientHeight >= this.scrollHeight,
                isFullyNotScrolled = this.clientTop - this.scrollTop === 0;
            if (isFullyScrolled) {
                element = document.getElementById("scrollaboutme");
                element.classList.remove("scrollable");
                $.fn.fullpage.setAllowScrolling(true);


            } else if (isFullyNotScrolled) {
                element = document.getElementById("scrollaboutme");
                element.classList.remove("scrollable");
                $.fn.fullpage.setAllowScrolling(true);


            }
        });*/

});
