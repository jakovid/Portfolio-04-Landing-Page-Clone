import { headerMenuInformation } from "./headerMenuInformation";

function populateDropDownMenuInfo(mainIndex, subIndex) {
    let infoTitle = document.getElementById('dropDownMenuItemInfoTitle');
    let infoDescription = document.getElementById('dropDownMenuItemInfoDescription');
    let infoLinks = document.getElementById('dropDownMenuItemInfoLinks');
    //clear html
    infoTitle.innerHTML = '';
    infoDescription.innerHTML = '';
    infoLinks.innerHTML = '';
    // populate innHTML
    infoTitle.innerHTML = headerMenuInformation[mainIndex][1][subIndex].itemName;
    infoDescription.innerHTML = headerMenuInformation[mainIndex][1][subIndex].description;
}

export { populateDropDownMenuInfo };