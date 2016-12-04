import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, ActionSheetController, Content, AlertController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import { Http } from '@angular/http';
import { RedditService } from '../../providers/reddit-service';
import 'rxjs/add/operator/map';
export var TopPage = (function () {
    function TopPage(navCtrl, http, loadingCtrl, actionSheetCtrl, redditService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.redditService = redditService;
        this.alertCtrl = alertCtrl;
        this.hasFilter = false;
        this.searchTerm = '';
        this.olderPosts = "https://www.reddit.com/top.json?after=";
        this.newerPosts = "https://www.reddit.com/top.json?before=";
        this.url = "https://www.reddit.com/top.json";
        this.fetchContent();
    }
    TopPage.prototype.filterItems = function () {
        var _this = this;
        this.hasFilter = false;
        this.noticias = this.noFilter.filter(function (item) {
            return item.data.title.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    TopPage.prototype.resetaLista = function () {
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
    TopPage.prototype.fetchContent = function () {
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
    TopPage.prototype.itemSelecionado = function (url) {
        var _this = this;
        //alert(noticia.data.url);
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
                        new InAppBrowser(url, '_system', 'location=yes');
                        loading.dismiss();
                    }
                }
            ]
        });
        confirm.present();
    };
    TopPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        var paramsUrl = (this.noticias.length > 0) ? this.noticias[this.noticias.length - 1].data.name : "";
        this.redditService.fetchData(this.olderPosts + paramsUrl).then(function (data) {
            _this.noticias = _this.noticias.concat(data);
            _this.noFilter = _this.noticias;
            _this.hasFilter = false;
            infiniteScroll.complete();
        });
    };
    TopPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        var paramsUrl = this.noticias[0].data.name;
        this.redditService.fetchData(this.newerPosts + paramsUrl).then(function (data) {
            _this.noticias = data.concat(_this.noticias);
            _this.noFilter = _this.noticias;
            _this.hasFilter = false;
            refresher.complete();
        });
    };
    TopPage.prototype.showFilters = function () {
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
    TopPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-top',
                    templateUrl: 'top.html'
                },] },
    ];
    /** @nocollapse */
    TopPage.ctorParameters = [
        { type: NavController, },
        { type: Http, },
        { type: LoadingController, },
        { type: ActionSheetController, },
        { type: RedditService, },
        { type: AlertController, },
    ];
    TopPage.propDecorators = {
        'content': [{ type: ViewChild, args: [Content,] },],
    };
    return TopPage;
}());
//# sourceMappingURL=top.js.map