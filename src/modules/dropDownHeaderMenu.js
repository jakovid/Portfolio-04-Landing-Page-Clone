import { headerMenuInformation } from "./headerMenuInformation";

function dropDownHeaderMenu(index) {
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
    dropDownMenuItemInfoTitle.id = 'dropDownMenuItemInfoTitle';
    dropDownMenuItemInfoDescription.id = 'dropDownMenuItemInfoDescription';
    dropDownMenuItemInfoLinks.id = 'dropDownMenuItemInfoLinks';
    //append items
    dropDownMenuItemInfo.append(dropDownMenuItemInfoTitle,dropDownMenuItemInfoDescription,dropDownMenuItemInfoLinks);
    anchor.append(dropDownMenu,dropDownMenuItems,dropDownMenuItemInfo);
    //populate dropDownMenuItems
    for (let i=0; i<headerMenuInformation[index][1].length; i++) {
        let menuItem = document.createElement('div');
        menuItem.innerHTML = headerMenuInformation[index][1][i].itemName;
        dropDownMenuItems.append(menuItem);
    }
}

export { dropDownHeaderMenu };