function buildHeader() {
    let htmlBody = document.getElementById('body');
    // create elements
    let headerContainer = document.createElement('div');
    let logo = document.createElement('img');
    let menuContainer = document.createElement('div');
    let letsCreate = document.createElement('div');
    let productsSolutions = document.createElement('div');
    let consultingServices = document.createElement('div');
    let learnSupport = document.createElement('div');
    let exploreMore = document.createElement('div');
    let searchContainer = document.createElement('div');
    let searchBox = document.createElement('div');
    let searchIcon = document.createElement('div');
    let loginIcon = document.createElement('img');
    let burgerIcon = document.createElement('img');
    // add classes

    //add ids
    headerContainer.id = 'headerContainer';
    menuContainer.id = 'menuContainer';
    logo.id = 'headerLogo';
    //add src
    logo.src = '../img/ibm.jpg';
    loginIcon.src = '../img/profile.png';
    burgerIcon.src = '../img/burger.png';
    // add inner HTML
    letsCreate.innerHTML = `Let's Create`;
    productsSolutions.innerHTML = 'Products & Solutions';
    consultingServices.innerHTML = 'Consulting & Services';
    learnSupport.innerHTML = 'Learning & Support';
    exploreMore.innerHTML = 'Explore more';

    //append items
    menuContainer.append(letsCreate,productsSolutions,consultingServices,learnSupport,exploreMore);
    searchContainer.append(searchBox,searchIcon);
    headerContainer.append(logo,menuContainer,searchContainer,loginIcon,burgerIcon);
    htmlBody.appendChild(headerContainer);
};

export { buildHeader };