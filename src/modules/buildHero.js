function buildHero() {
    let htmlBody = document.getElementById('body');
    // create elements
    let backgroundImg = document.createElement('img');
    // add src
    backgroundImg.src = '../img/heroBackground.jpg';
    //append
    htmlBody.append(backgroundImg);
}

export { buildHero };