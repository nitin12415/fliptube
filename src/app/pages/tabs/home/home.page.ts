import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChildren('instaVideo') videos: QueryList<any>;
  feeds: any[] = [
    {
      id: 1, 
      logo: 'assets/imgs/2.png', 
      username: 'Saikumar', 
      followed: false, 
      src: 'assets/videos/1.mp4',
      products:[
        {brand:'KTART', price:849, src: 'assets/imgs/posts/sp8.png', link:'https://www.flipkart.com/ktart-pack-36-plastic-dinner-set-36-pcs-set/p/itm368b4f530699f?pid=DNSG9FZ2SHGCVWDN&lid=LSTDNSG9FZ2SHGCVWDN9DFSB7&marketplace=FLIPKART&q=dinner+set&store=upp%2Fi7t%2Flha&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_na&fm=Search&iid=94499e5d-4902-4ca2-b278-737483e1c184.DNSG9FZ2SHGCVWDN.SEARCH&ppt=sp&ppn=sp&ssid=mgb7jabre80000001657844316153&qH=ee7192ad7fd1ca00'},
        {brand:'Mokito', price:599, src: 'assets/imgs/posts/sp7.png', link:'https://www.flipkart.com/rigo-women-geometric-print-straight-kurta/p/itme8adcb8a76189?pid=KTAG6VGHEWT5X3VW&lid=LSTKTAG6VGHEWT5X3VWYWHRHT&marketplace=FLIPKART&q=green+plain+ladies+kurta&store=clo%2Fcfv%2Fcib%2Frkt&srno=s_2_75&otracker=search&otracker1=search&fm=Search&iid=20dd78e0-7dbe-4ff5-9c2f-98695c593f50.KTAG6VGHEWT5X3VW.SEARCH&ppt=sp&ppn=sp&qH=6ba89e1b1b7adb4f'}
      ],
      description: 'Hello Friends, Welcome to fliptube.',
      likes: 15
    },
    {
      id: 2, 
      logo: 'assets/imgs/4.png', 
      username: 'Parth Arora', 
      followed: true, 
      src: 'assets/imgs/posts/p1.png',
      description: 'Hello Friends, Welcome to fliptube.',
      products:[
        {brand:'HIGHLANDER', price:409, src: 'assets/imgs/posts/sp1.png', link:'https://www.flipkart.com/highlander-men-printed-casual-multicolor-shirt/p/itmecf495345d803?pid=SHTFTHNAPFXVKNAT&lid=LSTSHTFTHNAPFXVKNATFIKARV&marketplace=FLIPKART&q=shirts&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=s_3_85&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=search-autosuggest&iid=a7bcc368-a0ca-44ab-88b6-28bb05565e08.SHTFTHNAPFXVKNAT.SEARCH&ppt=sp&ppn=sp&ssid=b67fwwd9og0000001657840000520&qH=514ca2b2d46ccf67'},
        {brand:'Mokito', price:216, src: 'assets/imgs/posts/sp6.png', link:'https://www.flipkart.com/mokito-solid-men-round-neck-white-t-shirt/p/itm66c12e1af992f?pid=TSHFVYRRPAK6YCZZ&lid=LSTTSHFVYRRPAK6YCZZKLB4LW&marketplace=FLIPKART&q=white+t+shirt&store=clo%2Fash%2Fank%2Fedy&srno=s_1_9&otracker=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&fm=search-autosuggest&iid=dfed6c6f-f994-4246-9115-acab3ffc166b.TSHFVYRRPAK6YCZZ.SEARCH&ppt=sp&ppn=sp&ssid=a9w9fgu5ao0000001657841920121&qH=313ac1984c7e4358'}
      ],
      likes: 80,
      image: true
    },
    // {
    //   id: 3, 
    //   logo: 'assets/imgs/1.png', 
    //   username: 'Mukul', 
    //   followed: false, 
    //   src: 'assets/videos/1.mp4',
    //   products:[
    //     {brand:'KTART', price:849, src: 'assets/imgs/posts/sp8.png', link:'https://www.flipkart.com/ktart-pack-36-plastic-dinner-set-36-pcs-set/p/itm368b4f530699f?pid=DNSG9FZ2SHGCVWDN&lid=LSTDNSG9FZ2SHGCVWDN9DFSB7&marketplace=FLIPKART&q=dinner+set&store=upp%2Fi7t%2Flha&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_na&fm=Search&iid=94499e5d-4902-4ca2-b278-737483e1c184.DNSG9FZ2SHGCVWDN.SEARCH&ppt=sp&ppn=sp&ssid=mgb7jabre80000001657844316153&qH=ee7192ad7fd1ca00'},
    //     {brand:'Mokito', price:599, src: 'assets/imgs/posts/sp7.png', link:'https://www.flipkart.com/rigo-women-geometric-print-straight-kurta/p/itme8adcb8a76189?pid=KTAG6VGHEWT5X3VW&lid=LSTKTAG6VGHEWT5X3VWYWHRHT&marketplace=FLIPKART&q=green+plain+ladies+kurta&store=clo%2Fcfv%2Fcib%2Frkt&srno=s_2_75&otracker=search&otracker1=search&fm=Search&iid=20dd78e0-7dbe-4ff5-9c2f-98695c593f50.KTAG6VGHEWT5X3VW.SEARCH&ppt=sp&ppn=sp&qH=6ba89e1b1b7adb4f'}
    //   ],
    //   description: "Hello Friends, Welcome to fliptube.",
    //   likes: 4
    // },
    {
      id: 4, 
      logo: 'assets/imgs/6.png', 
      username: 'Nitin yadav', 
      followed: false, 
      src: 'assets/videos/1.mp4',
      products:[
        {brand:'KTART', price:849, src: 'assets/imgs/posts/sp8.png', link:'https://www.flipkart.com/ktart-pack-36-plastic-dinner-set-36-pcs-set/p/itm368b4f530699f?pid=DNSG9FZ2SHGCVWDN&lid=LSTDNSG9FZ2SHGCVWDN9DFSB7&marketplace=FLIPKART&q=dinner+set&store=upp%2Fi7t%2Flha&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_na&fm=Search&iid=94499e5d-4902-4ca2-b278-737483e1c184.DNSG9FZ2SHGCVWDN.SEARCH&ppt=sp&ppn=sp&ssid=mgb7jabre80000001657844316153&qH=ee7192ad7fd1ca00'},
        {brand:'Mokito', price:599, src: 'assets/imgs/posts/sp7.png', link:'https://www.flipkart.com/rigo-women-geometric-print-straight-kurta/p/itme8adcb8a76189?pid=KTAG6VGHEWT5X3VW&lid=LSTKTAG6VGHEWT5X3VWYWHRHT&marketplace=FLIPKART&q=green+plain+ladies+kurta&store=clo%2Fcfv%2Fcib%2Frkt&srno=s_2_75&otracker=search&otracker1=search&fm=Search&iid=20dd78e0-7dbe-4ff5-9c2f-98695c593f50.KTAG6VGHEWT5X3VW.SEARCH&ppt=sp&ppn=sp&qH=6ba89e1b1b7adb4f'}
      ],
      description: 'Hello Friends, Welcome to fliptube.',
      likes: 56
    },
    {
      id: 5, 
      logo: 'assets/imgs/4.png', 
      username: 'Parth Arora', 
      followed: true, 
      src: 'assets/imgs/posts/p2.png',
      products:[
        {brand:'Roadster', price:619, src: 'assets/imgs/posts/sp2.png', link:'https://www.flipkart.com/roadster-men-checkered-casual-blue-shirt/p/itm38406b9b2afaf?pid=SHTGYYYKBCZJW7GP&lid=LSTSHTGYYYKBCZJW7GPQ9LCXO&marketplace=FLIPKART&q=shirts&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=s_3_84&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=search-autosuggest&iid=en_39s96Ro%2BCtYa3FUwNRKfjydcMUwtVgUXOcHJRNj%2FtTkiuUt3x9TsgvSdnxqsJJzBB4aycnvHdZEEvdn7IVACeQ%3D%3D&ppt=sp&ppn=sp&qH=514ca2b2d46ccf67'},
        {brand:'Roadster', price:784, src: 'assets/imgs/posts/sp3.png', link:'https://www.flipkart.com/roadster-slim-men-blue-jeans/p/itmda1e7350eb5ed?pid=JEAFKH5GQSEJDFZP&lid=LSTJEAFKH5GQSEJDFZP6NF5LT&marketplace=FLIPKART&q=ribbed+jeans+for+men&store=clo%2Fvua%2Fk58%2Fi51&srno=s_1_3&otracker=AS_QueryStore_OrganicAutoSuggest_1_14_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_14_na_na_ps&fm=search-autosuggest&iid=f2305045-cea6-44bf-9675-7a93b173175a.JEAFKH5GQSEJDFZP.SEARCH&ppt=sp&ppn=sp&ssid=h8zifx6ir40000001657842394641&qH=f6402c97a69e106a'}
      ],
      description: 'Hello Friends, Welcome to fliptube.',
      likes: 150,
      image: true
    },
    {
      id: 6, 
      logo: 'assets/imgs/2.png', 
      username: 'Saikumar', 
      followed: false, 
      src: 'assets/imgs/posts/p3.png',
      products:[
        {brand:'Mast & Harb', price:795, src: 'assets/imgs/posts/sp4.png', link:'https://www.flipkart.com/mast-harbour-men-checkered-casual-blue-shirt/p/itm8181a1ba13d9a?pid=SHTG3KVVFX2HYW4U&lid=LSTSHTG3KVVFX2HYW4UG75P1A&marketplace=FLIPKART&q=shirts&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=s_3_104&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=search-autosuggest&iid=en_39s96Ro%2BCtYa3FUwNRKfjydcMUwtVgUXOcHJRNj%2FtTk%2B5RQJ%2FvT11GTPNkR6%2BiYe2ABPGOVxTwooHbwy9LjwHA%3D%3D&ppt=sp&ppn=sp&qH=514ca2b2d46ccf67'},
        {brand:'Mokito', price:216, src: 'assets/imgs/posts/sp6.png', link:'https://www.flipkart.com/mokito-solid-men-round-neck-white-t-shirt/p/itm66c12e1af992f?pid=TSHFVYRRPAK6YCZZ&lid=LSTTSHFVYRRPAK6YCZZKLB4LW&marketplace=FLIPKART&q=white+t+shirt&store=clo%2Fash%2Fank%2Fedy&srno=s_1_9&otracker=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&fm=search-autosuggest&iid=dfed6c6f-f994-4246-9115-acab3ffc166b.TSHFVYRRPAK6YCZZ.SEARCH&ppt=sp&ppn=sp&ssid=a9w9fgu5ao0000001657841920121&qH=313ac1984c7e4358'}
      ],
      description: 'Hello Friends, Welcome to fliptube.',
      likes: 200,
      image: true
    }
  ];
  nowPlaying = null;

  constructor(private router: Router, private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  ngAfterViewInit() {    
    this.didScroll();
  }

  toggleWrap(feed) {
    feed.wrap = !feed.wrap;
  }

  isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  didScroll(event?) {
    console.log(event);
    if(this.nowPlaying && this.isElementInViewport(this.nowPlaying)) return;
    else if(this.nowPlaying && !this.isElementInViewport(this.nowPlaying)) {
      this.nowPlaying.pause();
      this.nowPlaying = null;
    }

    this.videos.forEach(player => {
      console.log('player', player);

      if(this.nowPlaying) return;

      const nativeElement = player.nativeElement;
      const inView = this.isElementInViewport(nativeElement);

      if(inView) {
        this.nowPlaying = nativeElement;
        this.nowPlaying.muted = true;
        this.nowPlaying.play();
      }
    });
  }

  goToDetails(link){
    window.location.href = link;
  }

  async option(feed){
    console.log("hi");
    
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Hide from my profile',
        role: 'destructive',
        icon: 'eye-off',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Report',
        icon: 'megaphone',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}
