window.onload = function() {
    var t = document.querySelector('.m-trg');
    t.addEventListener('click', show);

    function show() {
        var m = document.querySelector('.m-menu');
        var s = document.querySelector('.m-search');
        var style = window.getComputedStyle(m, null);
        var display = style.display;
        if (display == 'flex') {
            s.style.display = 'none';
            m.style.display = 'none';
        } else if (display == 'none') {
            s.style.display = 'flex';
            m.style.display = 'flex';
        }
    }
    var rowList = document.querySelectorAll('.row li');
    for (i = 0; i < rowList.length; i++) {
        var item = rowList[i];
        item.addEventListener('click', showRow);
    }

    function showRow(e) {
        var item = e.target.nextElementSibling;
        var style = window.getComputedStyle(item, null);
        var display = style.display;
        if (display == 'flex') {
            item.style.display = 'none';
        } else if (display == 'none') {
            item.style.display = 'flex';
        }
    }
}