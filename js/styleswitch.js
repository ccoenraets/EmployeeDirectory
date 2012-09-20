if ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ) {
    document.write('<link href="css/styles-ios.css" rel="stylesheet">');
} else {
    document.write('<link href="css/styles-default.css" rel="stylesheet">');
}