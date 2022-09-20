import { headerMenuInformation } from "./headerMenuInformation";

function dropDownHeaderMenu(index) {
    let anchor = document.getElementById('dropDownMenuAnchor');
    //clear anchor
    anchor.innerHTML = '';
    //create elements
    let dropDownMenu = document.createElement('div');
    let dropDownMenuItems = document.createElement('div');
    let dropDownMenuItemInfo = document.createElement('div');
    //append items
    anchor.append(dropDownMenu,dropDownMenuItems,dropDownMenuItemInfo);
    //populate dropDownMenuItems
    for (let i=1; i<headerMenuInformation[index].length; i++) {
        let menuItem = document.createElement('div');
        menuItem.innerHTML = headerMenuInformation[index][i].itemName;
        dropDownMenuItems.append(menuItem);
    }
}

export { dropDownHeaderMenu };