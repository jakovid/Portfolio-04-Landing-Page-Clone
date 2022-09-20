import { productsSolutionsInfo } from "./headerMenuInformation";

function productsSolutionsMenu() {
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
    for (let i=0; i<productsSolutionsInfo.length; i++) {
        let menuItem = document.createElement('div');
        menuItem.innerHTML = productsSolutionsInfo[i].itemName;
        dropDownMenuItems.append(menuItem);
    }
    console.log('click');
}

export {productsSolutionsMenu};