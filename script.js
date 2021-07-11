// The poor man's jQuery
var $ = function(query){
    return document.querySelector(query);
};

console.log($("one"));