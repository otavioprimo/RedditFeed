import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the RedditService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var RedditService = (function () {
    function RedditService(http) {
        this.http = http;
    }
    RedditService.prototype.fetchData = function (url) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(url).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.feeds = data.data.children;
                _this.feeds.forEach(function (e, i, a) {
                    if (!e.data.thumbnail || e.data.thumbnail.indexOf('b.thumbs.redditmedia.com') === -1) {
                        e.data.thumbnail = 'http://www.redditstatic.com/icon.png';
                    }
                });
                resolve(_this.feeds);
            }, function (err) { return console.log(err); });
        });
    };
    RedditService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RedditService.ctorParameters = [
        { type: Http, },
    ];
    return RedditService;
}());
//# sourceMappingURL=reddit-service.js.map