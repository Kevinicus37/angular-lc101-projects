import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Yay for Images';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'http://cdn3.darkhorizons.com/wp-content/uploads/2017/05/dh-logo-purple-300.jpg';
  image3 = 'https://cowboyszone.com/theme/cowboyszone-logo.png';

  constructor() { }

  ngOnInit() {
  }

}