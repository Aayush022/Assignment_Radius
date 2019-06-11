import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import redditJSON from '../reddit.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'Assignment';

  finalData: Array<any> = [];
  comment: Array<any> = [];
  commt;
  upvotes: Array<any> = [];
  upv;
  data: Array<any> = [];
  head: Array<any> = [];
  hed;
  modalData: any;


  constructor() {
    console.log('Reading local json files');
    this.finalData = [];
    let reditData = redditJSON.data.children;
    for(let i = 0; i < reditData.length; i++) {
      let tmpData = {};
      tmpData['url'] = reditData[i].data.thumbnail;
      tmpData['comment'] = reditData[i].data.num_comments;
      tmpData['upv'] = reditData[i].data.ups;
      tmpData['author'] = reditData[i].data.author;
      tmpData['fullImage'] = reditData[i].data.url;
      tmpData['title']= reditData[i].data.title;

      this.finalData.push(tmpData);

    }
    console.log(this.finalData);
    // this.details = [
    // for ( var i = 0; i < redditJSON.data.children.length; i++){
    //   this.thumb= this.thumbnail.push(redditJSON.data.children[i].data.thumbnail);
    //   this.commt= this.comments.push(this.data[i].data.num_comments);
    //   this.upv= this.upvotes.push(redditJSON.data.children[i].data.ups);
    //   this.hed= this.head.push(redditJSON.data.children[i].data.author);
    // }]
    // console.log(this.data);
    // console.log(this.thumbnail);
    // console.log(this.comments);
    // console.log(this.upvotes);
    // console.log(this.head);
   }

   ngOnInit() {
     console.log("fghj");

   }
   showData(i){
    //  console.log(document.getElementById(i))
    // document.getElementsByClassName('btn-info')[i].setAttribute('data-target', i);
    this.modalData = this.finalData[i];
   }


}
