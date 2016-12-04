import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { TopPage } from '../top/top';
import { RandomPage } from '../random/random';
export var TabsPage = (function () {
    function TabsPage(nav) {
        this.nav = nav;
        this.homePage = HomePage;
        this.topPage = TopPage;
        this.randomPage = RandomPage;
    }
    TabsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'tabs.html'
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = [
        { type: NavController, },
    ];
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map