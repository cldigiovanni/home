let elem = document.getElementById("text");
let header = document.querySelectorAll("header")[0];

// 13rem * 16px * 19 lines
let line_size = 13 * 16 * 19;
setInterval(function() {
    elem.scrollTop += 1;
    if (elem.scrollTop > line_size)
        elem.scrollTop = 1;
}, 1000 / 60);
