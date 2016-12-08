import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RedditService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RedditService {
	
	private feeds: Array<any>;

  constructor(public http: Http) {}
	
	  fetchData(url: string): Promise<any> {
    
    return new Promise(resolve => {
 
      this.http.get(url).map(res => res.json())
        .subscribe(data => {
          this.feeds = data.data.children;
          
          this.feeds.forEach((e, i, a) => {
						if(e.data.over_18 == false){						
							if (!e.data.thumbnail || e.data.thumbnail.indexOf('b.thumbs.redditmedia.com') === -1 ) {                
								e.data.thumbnail = 'http://www.redditstatic.com/icon.png';
							}							
						}else{
							e.data.thumbnail = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Russia_18%2B.svg/500px-Russia_18%2B.svg.png';
						}
						
          })
          resolve(this.feeds);
        }, err => console.log(err));          
    });
  }

}
