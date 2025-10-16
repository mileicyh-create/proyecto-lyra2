function nextPage(id) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function choosePath(path) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    if (path === 'cueva') {
        document.getElementById('page4').style.display = 'block';
    } else {
        document.getElementById('page3').style.display = 'block';
    }
}

function restart() {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById('page1').style.display = 'block';
}
