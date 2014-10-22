(function () {
    "use strict";
    if (!Modernizr.inputtypes.date) {
        var i = 0;
        var html5onlyElements = document.getElementsByClassName("html5only");
        for (i = 0; i < html5onlyElements.length; i++) {
            html5onlyElements.item(i).style.display = "none";
        }
        var nohtml5Elements = document.getElementsByClassName("nohtml5");
        for (i = 0; i < nohtml5Elements.length; i++) {
            nohtml5Elements.item(i).style.display = "block";
        }
    }
})();