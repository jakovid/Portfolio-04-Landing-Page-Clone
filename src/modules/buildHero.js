function buildHero() {
    let htmlBody = document.getElementById('body');
    // create elements
    let heroContainer = document.createElement('div');
    let backgroundImg = document.createElement('img');
    //add id
    heroContainer.id = 'heroContainer';
    backgroundImg.id = 'heroBackgroundImg';
    // add src
    backgroundImg.src = '../img/heroBackground.jpg';
    //append
    heroContainer.append(backgroundImg);
    htmlBody.append(heroContainer);
}

export { buildHero };