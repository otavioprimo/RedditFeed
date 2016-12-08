import { Component, ViewChild  } from '@angular/core';
import { NavController, LoadingController, ActionSheetController, Content, AlertController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import { Http } from '@angular/http';
import { RedditService } from '../../providers/reddit-service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-top',
  templateUrl: 'top.html'
})
export class TopPage {
	
	@ViewChild(Content) content: Content;

   public noFilter: Array<any>;
	public hasFilter: boolean = false;
	
	public searchTerm: string = '';

	private olderPosts: string = "https://www.reddit.com/top.json?after=";
	private newerPosts: string = "https://www.reddit.com/top.json?before=";
	
	public noticias: Array<any>;
	
	private url: string = "https://www.reddit.com/top.json";

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController,public actionSheetCtrl: ActionSheetController,public redditService: RedditService, public alertCtrl: AlertController) {
   
	  this.fetchContent();	  
	  
  }

	filterItems() {
    this.hasFilter = false;
    this.noticias = this.noFilter.filter((item) => {
        return item.data.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
	} 

	resetaLista() : void{
		 this.content.scrollToTop();
		 let loading = this.loadingCtrl.create({
      content: 'Atualizando Conteudo...'
    });

    loading.present();

    this.redditService.fetchData(this.url).then(data => {
        this.noticias = data;
        this.noFilter = this.noticias;
        loading.dismiss();
    });
	 }

	 fetchContent ():void {
    let loading = this.loadingCtrl.create({
      content: 'Atualizando Conteudo...'
    });

    loading.present();

    this.redditService.fetchData(this.url).then(data => {
        this.noticias = data;
        this.noFilter = this.noticias;
        loading.dismiss();
    });
	 }

	itemSelecionado(url) : void {		
		//alert(noticia.data.url);
		let confirm = this.alertCtrl.create({
			title: 'Continuar',
			message: 'O post será aberto em outra página, tem certeza?',
			buttons: [
				{
          		text: 'Cancelar',
          		handler: () => {}
            },
        		{
          	text: 'Ok',
          		handler: () => {
						let loading = this.loadingCtrl.create({
      				content: 'Carregando Página...'
    					});
						
						loading.present();
            		new InAppBrowser(url, '_blank');
						loading.dismiss();
          		}	
        		}
			]
		});
		
		confirm.present();
	}

	doInfinite(infiniteScroll) {

    let paramsUrl = (this.noticias.length > 0) ? this.noticias[this.noticias.length - 1].data.name : "";

    this.redditService.fetchData(this.olderPosts + paramsUrl).then(data => {
        this.noticias = this.noticias.concat(data);
        this.noFilter = this.noticias;
        this.hasFilter = false;
        infiniteScroll.complete();
    })

	} 

	  doRefresh(refresher) {

    let paramsUrl = this.noticias[0].data.name;

    this.redditService.fetchData(this.newerPosts + paramsUrl).then(data => {
        this.noticias = data.concat(this.noticias);
        this.noFilter = this.noticias;
        this.hasFilter = false;
        refresher.complete();
    }) 

	  }
	
	showFilters() :void {

	  let actionSheet = this.actionSheetCtrl.create({
	  title: 'Filter options:',
	  buttons: [
		 {
		  text: 'Music',
		  handler: () => {
			 this.noticias = this.noFilter.filter((item) => item.data.subreddit.toLowerCase() === "music");
			 this.hasFilter = true;
		  }
		},
		{
		  text: 'Movies',
		  handler: () => {
			 this.noticias = this.noFilter.filter((item) => item.data.subreddit.toLowerCase() === "movies");
			 this.hasFilter = true;
		  }
		}, 
	   {
		  text: 'Movies',
		  handler: () => {
		   this.noticias = this.noFilter.filter((item) => item.data.subreddit.toLowerCase() === "movies");
			this.hasFilter = true;
		  }
	   },
	   {
		  text: 'Games',
        handler: () => {
          this.noticias = this.noFilter.filter((item) => item.data.subreddit.toLowerCase() === "gaming");
          this.hasFilter = true;
        }
      },
        {
          text: 'Pictures',
          handler: () => {
            this.noticias = this.noFilter.filter((item) => item.data.subreddit.toLowerCase() === "pics");
            this.hasFilter = true;
          }
        },                
        {
          text: 'Ask Reddit',
          handler: () => {
            this.noticias = this.noFilter.filter((item) => item.data.subreddit.toLowerCase() === "askreddit");
            this.hasFilter = true;
          }
        },        
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.noticias = this.noFilter;
            this.hasFilter = false;
          }
        }		
	 ]
  });

  actionSheet.present();
 
}



}
