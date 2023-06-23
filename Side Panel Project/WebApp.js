function showContent(component) {
    var contentDiv = document.getElementById('content');
    var links = document.getElementsByClassName('component-link');
    var content = '';

    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }

    if (component === 'home') {
        content = '<h2 class="content-title">Home</h2><p class="content-text">Content for Home goes here.</p>';
    } else if (component === 'contact') {
        content = '<h2 class="content-title">Contact</h2><p class="content-text">Contact information goes here.</p>';
    } else if (component === 'information') {
        content = '<h2 class="content-title">Information</h2><p class="content-text">Information goes here.</p>';
    } else if (component === 'guide') {
        content = '<h2 class="content-title">Guide</h2><p class="content-text">Guide information goes here.</p>';
    }

    contentDiv.innerHTML = content;
    document.getElementById(component).classList.add('active');
}