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
    for (let i = 0; i<headerMenuInformation[mainIndex][1][subIndex].links.length; i++) {
        let linkItem = document.createElement('a');
        linkItem.innerHTML = headerMenuInformation[mainIndex][1][subIndex].links[i][0];
        linkItem.href = headerMenuInformation[mainIndex][1][subIndex].links[i][1];
        infoLinks.appendChild(linkItem)
    }
}

export { populateDropDownMenuInfo };