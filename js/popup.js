(function (window, document) {
    'use strict';

    var myPopUp = (function () {

        var $private = {};
        var $public = {};
        var $myWindow;
        //var $documentUrl = document.URL;

        $public.init = function() {
            window.onload = function(e) { 

                var popupElements = document.getElementsByClassName("popup");

                for (var i = 0; i < popupElements.length; i++) {
                    popupElements[i].addEventListener('click', $private.configPopUp, false);
                }
            };              
        };

        $private.configPopUp = function(event) {
            event.preventDefault();
                    
            var $this = this;
            var $url = $this.getAttribute('href');
            $url = encodeURI($url);
            
            $private.openPopUp($url,'');
        };

        $private.openPopUp = function($url, $name) {

            var $width = $private.setPopUpWidth();
            var $height = $private.setPopUpHeight();

            var $left = (screen.width/2)-($width/2);
            var $top = (screen.height/2)-($height/2);
            
            var $parameters = 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + $width + ', height=' + $height + ', top=' + $top +', left=' + $left;

            $myWindow = window.open($url,$name,$parameters);  
            if (window.focus) {$myWindow.focus()};
        };

        $private.setPopUpWidth = function() {
            var max = 610;
            var min = 305;
            var screenW = screen.width;
            var width = $private.getPercent(screenW, 60);
            
            if (width > max)
            width = max;

            if (width > min)
            width = min;

            return width;
        };

        $private.setPopUpHeight = function() {
            var max = 600;
            var min = 300;
            var screenH = screen.height;
            var height = $private.getPercent(screenH, 60);
            
            if (height > max)
            height = max;

            if (height > min)
            height = min;

            return height;
        };

        $private.getPercent = function(num, percentage) {
            return num * percentage / 100;
        };

        return $public;
    })();

    // Global
    window.myPopUp = myPopUp;
    myPopUp.init();
})(window, document);

