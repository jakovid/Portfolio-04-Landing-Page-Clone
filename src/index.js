import { buildHeader } from "./modules/buildHeader";
import { buildHero } from "./modules/buildHero";
import { productsSolutionsMenu } from "./modules/productsSolutionsMenu";

(function(){
    var buildIbmClone = {
        init: function() {
            buildHeader();
            // buildHero();
            productsSolutionsMenu();
        }
    }
    buildIbmClone.init();
})();