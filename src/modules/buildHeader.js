import { dropDownHeaderMenu } from "./dropDownHeaderMenu";

function buildHeader() {
    let htmlBody = document.getElementById('body');
    // create elements
    let headerContainer = document.createElement('div');
    let logo = document.createElement('img');
    let menuContainer = document.createElement('div');
    let letsCreate = document.createElement('div');
    let productsSolutionsBox = document.createElement('div');
    let productsSolutions = document.createElement('div');
    let productsSolutionsIcon = document.createElement('img');
    let consultingServicesBox = document.createElement('div');
    let consultingServices = document.createElement('div');
    let consultingServicesIcon = document.createElement('img');
    let learnSupportBox = document.createElement('div');
    let learnSupport = document.createElement('div');
    let learnSupportIcon = document.createElement('img');
    let exploreMoreBox = document.createElement('div');
    let exploreMore = document.createElement('div');
    let exploreMoreIcon = document.createElement('img');
    let searchContainer = document.createElement('div');
    let searchBox = document.createElement('input');
    let searchIcon = document.createElement('img');
    let rightContainer = document.createElement('div');
    let loginIcon = document.createElement('img');
    let burgerIcon = document.createElement('img');
    let dropDownMenuAnchor = document.createElement('div');
    // add classes
    productsSolutionsBox.classList = 'headerMenuItem';
    consultingServicesBox.classList = 'headerMenuItem';
    learnSupportBox.classList = 'headerMenuItem';
    exploreMoreBox.classList = 'headerMenuItem';
    productsSolutionsIcon.classList = 'headerIcon';
    consultingServicesIcon.classList = 'headerIcon';
    learnSupportIcon.classList = 'headerIcon';
    exploreMoreIcon.classList = 'headerIcon';
    searchIcon.classList = 'headerIcon';
    loginIcon.classList = 'headerIcon';
    burgerIcon.classList = 'headerIcon';

    //add ids
    headerContainer.id = 'headerContainer';
    logo.id = 'headerLogo';
    menuContainer.id = 'menuContainer';
    searchContainer.id = 'searchContainer';
    rightContainer.id = 'rightContainer';
    dropDownMenuAnchor.id = 'dropDownMenuAnchor';
    //add src
    logo.src = '../img/ibm.jpg';
    productsSolutionsIcon.src = '/img/expand.png';
    consultingServicesIcon.src = '/img/expand.png';
    learnSupportIcon.src = '/img/expand.png';
    exploreMoreIcon.src = '/img/expand.png';
    loginIcon.src = '../img/profile.png';
    burgerIcon.src = '../img/burger.png';
    searchIcon.src = '../img/search.png';
    // add inner HTML
    letsCreate.innerHTML = `Let's Create`;
    productsSolutions.innerHTML = 'Products & Solutions';
    consultingServices.innerHTML = 'Consulting & Services';
    learnSupport.innerHTML = 'Learning & Support';
    exploreMore.innerHTML = 'Explore more';
    searchBox.placeholder = 'Search';

    //add event listeners
    productsSolutions.addEventListener('click', e => {
        dropDownHeaderMenu('0');
    });
    consultingServices.addEventListener('click', e => {
        dropDownHeaderMenu('1');
    });

    //append items
    productsSolutionsBox.append(productsSolutions,productsSolutionsIcon);
    consultingServicesBox.append(consultingServices,consultingServicesIcon);
    learnSupportBox.append(learnSupport,learnSupportIcon);
    exploreMoreBox.append(exploreMore,exploreMoreIcon);
    menuContainer.append(letsCreate,productsSolutionsBox,consultingServicesBox,learnSupportBox,exploreMoreBox);
    searchContainer.append(searchBox,searchIcon);
    rightContainer.append(searchContainer,loginIcon,burgerIcon);
    headerContainer.append(logo,menuContainer, rightContainer);
    htmlBody.append(headerContainer, dropDownMenuAnchor);
};

export { buildHeader };