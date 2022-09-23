import { headerMenuInformation } from "./headerMenuInformation";
import { populateDropDownMenuInfo } from "./populateDropDownMenuInfo";

function dropDownHeaderMenu(mainIndex) {
    let anchor = document.getElementById('dropDownMenuAnchor');
    //clear anchor
    anchor.innerHTML = '';
    //create elements
    let dropDownMenu = document.createElement('div');
    let dropDownMenuItems = document.createElement('div');
    let dropDownMenuItemInfo = document.createElement('div');
    let dropDownMenuItemInfoTitle = document.createElement('div');
    let dropDownMenuItemInfoDescription = document.createElement('div');
    let dropDownMenuItemInfoLinks = document.createElement('div');
    //add ids
    dropDownMenu.id = 'dropDownMenu';
    dropDownMenuItems.id = 'dropDownMenuItems';
    dropDownMenuItemInfo.id = 'dropDownMenuItemInfo'
    dropDownMenuItemInfoTitle.id = 'dropDownMenuItemInfoTitle';
    dropDownMenuItemInfoDescription.id = 'dropDownMenuItemInfoDescription';
    dropDownMenuItemInfoLinks.id = 'dropDownMenuItemInfoLinks';
    //append items
    dropDownMenuItemInfo.append(dropDownMenuItemInfoTitle,dropDownMenuItemInfoDescription,dropDownMenuItemInfoLinks);
    dropDownMenu.append(dropDownMenuItems,dropDownMenuItemInfo)
    anchor.append(dropDownMenu);
    //populate dropDownMenuItems
    for (let i=0; i<headerMenuInformation[mainIndex][1].length; i++) {
        let menuItem = document.createElement('div');
        menuItem.innerHTML = headerMenuInformation[mainIndex][1][i].itemName;
        menuItem.className = 'dropDownMenuItem';
        menuItem.addEventListener('click', e => {
            populateDropDownMenuInfo(mainIndex,i)
        });
        dropDownMenuItems.append(menuItem);
    }
    populateDropDownMenuInfo(mainIndex,0)
}

export { dropDownHeaderMenu };