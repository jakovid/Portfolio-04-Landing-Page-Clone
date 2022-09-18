import { buildHeader } from "./modules/buildHeader";
import { buildHero } from "./modules/buildHero";

(function(){
    var buildIbmClone = {
        init: function() {
            buildHeader();
            buildHero();
        }
    }
    buildIbmClone.init();
})();