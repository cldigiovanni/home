let elem = document.getElementById("text");
let header = document.querySelectorAll("header")[0];
// 13rem * 16px * 15 lines
let line_size = 13 * 16 * 15;
setInterval(function() {
    // console.log(elem.scrollTop);
    header.innerText = elem.scrollTop.toString();

    elem.scrollTop += 1;
    if (elem.scrollTop > line_size)
        elem.scrollTop = 1;

}, 1000 / 60)

