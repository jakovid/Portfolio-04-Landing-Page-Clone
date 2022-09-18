function buildHero() {
    let htmlBody = document.getElementById('body');
    // create elements
    let backgroundImg = document.createElement('img');
    //add id
    backgroundImg.id = 'heroBackgroundImg';
    // add src
    backgroundImg.src = '../img/heroBackground.jpg';
    //append
    htmlBody.append(backgroundImg);
}

export { buildHero };