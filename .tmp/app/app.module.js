import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TopPage } from '../pages/top/top';
import { RandomPage } from '../pages/random/random';
import { TabsPage } from '../pages/tabs/tabs';
import { RedditService } from '../providers/reddit-service';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MyApp,
                        HomePage,
                        TopPage,
                        RandomPage,
                        TabsPage
                    ],
                    imports: [
                        IonicModule.forRoot(MyApp)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        MyApp,
                        HomePage,
                        TopPage,
                        RandomPage,
                        TabsPage
                    ],
                    providers: [RedditService]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map