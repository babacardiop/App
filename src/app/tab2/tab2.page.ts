import { Component } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  constructor(private streamingMedia: StreamingMedia) { }

  public options: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played') },
    errorCallback: (e) => { console.log('Error streaming') },
    shouldAutoClose: true,
    controls: true
  };

  play(){
    const url = "https://scontent.xx.fbcdn.net/v/t66.18014-6/10000000_1228975280586623_2903346718257632702_n.mp4?_nc_cat=104&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=scontent.xx&oh=e2537e593d103bf17d9bcca2ce26f1e5&oe=5CECC7A6";
    this.streamingMedia.playVideo(url, this.options);
  }
  
}
