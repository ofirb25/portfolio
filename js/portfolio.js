var projs = [
    {
        id: '0',
        name: 'Meme Generator',
        title: 'Create something funny',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a lorem vitae arcu egestas feugiat. Phasellus tincidunt sem convallis nisi ullamcorper maximus. Morbi dignissim mauris enim, porta lobortis elit aliquet et. Pellentesque tempus a ante at rhoncus. Mauris quis commodo nulla, ac congue lacus. Morbi accumsan nulla nunc, eget dignissim arcu mollis id. Quisque porta rutrum nulla, ut eleifend nunc consectetur eu. Phasellus dapibus elit et turpis rhoncus, nec imperdiet massa porta.',
        publishedAt: Date.now(),
        imgThumbPath: 'img/portfolio/memeGen.png',
        imgLargePath: 'img/portfolio/memeGen.png',
        link : 'https://charlesmarlow.github.io/sprint2/#',
        github : 'https://github.com/CharlesMarlow/sprint2',
        labels: ['Canvas', 'Responsive', 'Meme']
    },
    {
        id: '1',
        name: 'Appsus',
        title: 'All your apps in one place',
        desc: 'SPA frontend application built with vue',
        publishedAt: Date.now(),
        imgThumbPath: 'img/portfolio/appsus.png',
        imgLargePath: 'img/portfolio/appsus.png',
        link : 'https://ofirb25.github.io/appsus/',
        github : 'https://github.com/ofirb25/appsus',
        labels: ['VueJS','Responsive', 'SPA']
    },
    {
        id: '2',
        name: 'Mine Sweeper',
        title: 'Memories from the past',
        desc: 'Nulla facilisi. Duis malesuada lectus vitae urna commodo, vel iaculis turpis sodales. Nam porttitor ornare hendrerit. Aliquam facilisis augue dolor, a posuere dui mollis a. Fusce rutrum, libero vel efficitur accumsan, leo dui viverra est, a pellentesque quam elit et metus. Maecenas tincidunt accumsan lacinia. Nullam sed pretium nulla. Praesent quis faucibus metus. Donec augue arcu, varius pellentesque lectus vel, aliquet vulputate lorem. Mauris dictum scelerisque lacus sed ultrices.',
        publishedAt: Date.now(),
        imgThumbPath: 'img/portfolio/mines.png',
        imgLargePath: 'img/portfolio/mines.png',
        link : 'https://ofirb25.github.io/minesweeper/',
        github : 'https://github.com/ofirb25/minesweeper',
        labels: ['Matrixes', 'Keyboard Events', 'Game', 'Vanilla JS']
    },
    {
        id: '3',
        name: 'Sokoban Game',
        title: 'push it to the end',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a lorem vitae arcu egestas feugiat. Phasellus tincidunt sem convallis nisi ullamcorper maximus. Morbi dignissim mauris enim, porta lobortis elit aliquet et. Pellentesque tempus a ante at rhoncus. Mauris quis commodo nulla, ac congue lacus. Morbi accumsan nulla nunc, eget dignissim arcu mollis id. Quisque porta rutrum nulla, ut eleifend nunc consectetur eu. Phasellus dapibus elit et turpis rhoncus, nec imperdiet massa porta.',
        publishedAt: Date.now(),
        imgThumbPath: 'img/portfolio/soko.png',
        imgLargePath: 'img/portfolio/soko.png',
        link : 'https://ofirb25.github.io/sokoban/',
        github : 'https://github.com/ofirb25/sokoban',
        labels: ['Matrixes', 'Keyboard Events', 'Game','Vanilla JS']
    },
    {
        id: '4',
        name: 'Bloggin App',
        title: 'Tell us something new',
        desc: 'Nulla facilisi. Duis malesuada lectus vitae urna commodo, vel iaculis turpis sodales. Nam porttitor ornare hendrerit. Aliquam facilisis augue dolor, a posuere dui mollis a. Fusce rutrum, libero vel efficitur accumsan, leo dui viverra est, a pellentesque quam elit et metus. Maecenas tincidunt accumsan lacinia. Nullam sed pretium nulla. Praesent quis faucibus metus. Donec augue arcu, varius pellentesque lectus vel, aliquet vulputate lorem. Mauris dictum scelerisque lacus sed ultrices.',
        publishedAt: Date.now(),
        imgThumbPath: 'img/portfolio/bloggin.png',
        imgLargePath: 'img/portfolio/bloggin.png',
        link : 'https://ofirb25.github.io/bloggin/',
        github : 'https://github.com/ofirb25/bloggin',
        labels: ['PSD2HTML', 'Flexbox', 'Responsive Design']
    },

    {
        id: '5',
        name: 'Book Shop',
        title: 'Did you read my last post?',
        desc: 'Nulla facilisi. Duis malesuada lectus vitae urna commodo, vel iaculis turpis sodales. Nam porttitor ornare hendrerit. Aliquam facilisis augue dolor, a posuere dui mollis a. Fusce rutrum, libero vel efficitur accumsan, leo dui viverra est, a pellentesque quam elit et metus. Maecenas tincidunt accumsan lacinia. Nullam sed pretium nulla. Praesent quis faucibus metus. Donec augue arcu, varius pellentesque lectus vel, aliquet vulputate lorem. Mauris dictum scelerisque lacus sed ultrices.',
        publishedAt: Date.now(),
        imgThumbPath: 'img/portfolio/bookshop.png',
        imgLargePath: 'img/portfolio/bookshop.png',
        link : 'https://ofirb25.github.io/book-shop/',
        github : 'https://github.com/ofirb25/book-shop',
        labels: ['Matrixes', 'Keyboard Events', 'Game']
    }
]
var gAnimationInterval = setInterval(replayAnimation, 4000)

function replayAnimation() {
    document.querySelector('.offcanvas-btn').classList.toggle('animate');
}
function onInit() {
    $('body>section,footer').addClass('hidden')
    setTimeout(()=>{
        $('body>section,footer').removeClass('hidden')
        $('.loader-background').fadeOut(500, function() { $(this).remove(); })

    },1400)
    var elPortContainer = document.querySelector('.portfolio-grid');
    var strHTML = ''
    for (var i = 0; i < projs.length; i++) {
        var proj = projs[i];
        strHTML +=
            '<div class="col-lg-4 col-md-6 portfolio-item">' +
            '<a class="portfolio-link" data-toggle="modal"' +
            ' href="#portfolioModal" onclick="getModalData(' + proj.id + ')">' +
            '<div class="portfolio-hover">' +
            '<div class="portfolio-hover-content">' +
            '<i class="fa fa-plus fa-3x"></i>' +
            '</div> ' +
            '</div>' +
            '<img class="img-fluid" src=' + proj.imgThumbPath + ' alt="">' +
            '</a>' +
            '<div class="portfolio-caption">' +
            '<h4>' + proj.name + '</h4>' +
            '<p class="text-muted">' + proj.title + '</p>' +
            '</div>' +
            '</div>'
    }
    elPortContainer.innerHTML = strHTML;
}

function getModalData(projId) {
    var proj = projs[projId]
    if(!proj) return false;
    document.querySelector('.modal-proj-name').innerText = proj.name;
    document.querySelector('.modal-proj-title').innerText = proj.title;
    document.querySelector('.modal-proj-description').innerText = proj.desc;
    document.querySelector('.modal-proj-img').setAttribute('src', proj.imgLargePath);
    var elProjLabels = document.querySelector('.modal-proj-labels');
    var projLabels = proj.labels;
    var labelStrHTML = '';
    for (var i = 0; i < projLabels.length; i++) {
        labelStrHTML += '<li><span class="badge badge-warning">' + projLabels[i] + '</span></li>'
    }
    var elPlayIcon = document.querySelector('.modal-icons-play');
    var elGitHIcon = document.querySelector('.modal-icons-github');
    
    if(proj.link) elPlayIcon.setAttribute('href',proj.link) ;
    if(proj.github) elGitHIcon.setAttribute('href',proj.github); 
    elProjLabels.innerHTML = labelStrHTML;
    document.querySelector('#itemIdPlaceholder').setAttribute('data-itemId', proj.id);
    //next/ previous button in modal
    if (projs[projId + 1]) {
        document.querySelector('.next-item').style.visibility = 'visible';
    } else {
        document.querySelector('.next-item').style.visibility = 'hidden';
    }
    if (projs[projId - 1]) {
        document.querySelector('.prev-item').style.visibility = 'visible';
    } else {
        document.querySelector('.prev-item').style.visibility = 'hidden';
    }
}

function renderNextItem() {
    var curItem = +document.querySelector('#itemIdPlaceholder').getAttribute('data-itemId');
    getModalData(curItem + 1);
}
function renderPrevItem() {
    var curItem = +document.querySelector('#itemIdPlaceholder').getAttribute('data-itemId');
    getModalData(curItem - 1);
}

function submitContact() {
    var formSender = document.querySelector('#InputEmail').value;
    var formSubject = document.querySelector('#InputSubject').value;
    var formBody = document.querySelector('#InputMessageBody').value;
    var gmailStr = ' https://mail.google.com/mail/?view=cm&fs=1&to=ofzir11@gmail.com&su=' + formSubject + '&body=' + formBody
    window.open(gmailStr, '_blank');
}

function changeModal(e) {
    if (e.key === 'ArrowLeft') renderPrevItem();
    else if (e.key === 'ArrowRight') renderNextItem();
    else return
    
}

