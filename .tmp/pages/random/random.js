import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, ActionSheetController, Content, AlertController, ViewController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import { Http } from '@angular/http';
import { RedditService } from '../../providers/reddit-service';
import 'rxjs/add/operator/map';
export var RandomPage = (function () {
    function RandomPage(navCtrl, http, loadingCtrl, actionSheetCtrl, redditService, alertCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.redditService = redditService;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.hasFilter = false;
        this.searchTerm = '';
        this.olderPosts = "https://www.reddit.com/hot.json?after=";
        this.newerPosts = "https://www.reddit.com/hot.json?before=";
        this.url = "https://www.reddit.com/hot.json";
        this.fetchContent();
    }
    RandomPage.prototype.filterItems = function () {
        var _this = this;
        this.hasFilter = false;
        this.noticias = this.noFilter.filter(function (item) {
            return item.data.title.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    RandomPage.prototype.resetaLista = function () {
        var _this = this;
        this.content.scrollToTop();
        var loading = this.loadingCtrl.create({
            content: 'Atualizando Conteudo...'
        });
        loading.present();
        this.redditService.fetchData(this.url).then(function (data) {
            _this.noticias = data;
            _this.noFilter = _this.noticias;
            loading.dismiss();
        });
    };
    RandomPage.prototype.fetchContent = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Atualizando Conteudo...'
        });
        loading.present();
        this.redditService.fetchData(this.url).then(function (data) {
            _this.noticias = data;
            _this.noFilter = _this.noticias;
            loading.dismiss();
        });
    };
    RandomPage.prototype.itemSelecionado = function (url) {
        //alert(noticia.data.url);
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Continuar',
            message: 'O post será aberto em outra página, tem certeza?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () { }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Carregando Página...'
                        });
                        loading.present();
                        new InAppBrowser(url, '_blank', 'zoon=false, toolbarposition=top,');
                        loading.dismiss();
                    }
                }
            ]
        });
        confirm.present();
    };
    RandomPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        var paramsUrl = (this.noticias.length > 0) ? this.noticias[this.noticias.length - 1].data.name : "";
        this.redditService.fetchData(this.olderPosts + paramsUrl).then(function (data) {
            _this.noticias = _this.noticias.concat(data);
            _this.noFilter = _this.noticias;
            _this.hasFilter = false;
            infiniteScroll.complete();
        });
    };
    RandomPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        var paramsUrl = this.noticias[0].data.name;
        this.redditService.fetchData(this.newerPosts + paramsUrl).then(function (data) {
            _this.noticias = data.concat(_this.noticias);
            _this.noFilter = _this.noticias;
            _this.hasFilter = false;
            refresher.complete();
        });
    };
    RandomPage.prototype.showFilters = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Filter options:',
            buttons: [
                {
                    text: 'Music',
                    handler: function () {
                        _this.noticias = _this.noFilter.filter(function (item) { return item.data.subreddit.toLowerCase() === "music"; });
                        _this.hasFilter = true;
                    }
                },
                {
                    text: 'Movies',
                    handler: function () {
                        _this.noticias = _this.noFilter.filter(function (item) { return item.data.subreddit.toLowerCase() === "movies"; });
                        _this.hasFilter = true;
                    }
                },
                {
                    text: 'Movies',
                    handler: function () {
                        _this.noticias = _this.noFilter.filter(function (item) { return item.data.subreddit.toLowerCase() === "movies"; });
                        _this.hasFilter = true;
                    }
                },
                {
                    text: 'Games',
                    handler: function () {
                        _this.noticias = _this.noFilter.filter(function (item) { return item.data.subreddit.toLowerCase() === "gaming"; });
                        _this.hasFilter = true;
                    }
                },
                {
                    text: 'Pictures',
                    handler: function () {
                        _this.noticias = _this.noFilter.filter(function (item) { return item.data.subreddit.toLowerCase() === "pics"; });
                        _this.hasFilter = true;
                    }
                },
                {
                    text: 'Ask Reddit',
                    handler: function () {
                        _this.noticias = _this.noFilter.filter(function (item) { return item.data.subreddit.toLowerCase() === "askreddit"; });
                        _this.hasFilter = true;
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.noticias = _this.noFilter;
                        _this.hasFilter = false;
                    }
                }
            ]
        });
        actionSheet.present();
    };
    RandomPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-random',
                    templateUrl: 'random.html'
                },] },
    ];
    /** @nocollapse */
    RandomPage.ctorParameters = [
        { type: NavController, },
        { type: Http, },
        { type: LoadingController, },
        { type: ActionSheetController, },
        { type: RedditService, },
        { type: AlertController, },
        { type: ViewController, },
    ];
    RandomPage.propDecorators = {
        'content': [{ type: ViewChild, args: [Content,] },],
    };
    return RandomPage;
}());
//# sourceMappingURL=random.js.map