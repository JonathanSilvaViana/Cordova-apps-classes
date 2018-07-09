//it requires the cordova-plugin-inappbrowser plugin

function facebookpage() {
    "use strict";
    var fName = "facebookpage():";
    var link1 = "https://pt-br.facebook.com/qiaojonathan";
    
    console.log(fName, "entry");
    try {
        var ref = window.open('https://pt-br.facebook.com/qiaojonathan', '_blank', 'location=yes');
        console.log(fName, "try, success");
    } catch (e) {
        console.log(fName, "catch, failure");
    }

    console.log(fName, "exit");
}