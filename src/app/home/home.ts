import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
   
selectedImage: string = '/green.png';
selectedColor = '';

 changeImage(newSrc: string, newColor: string) {
    this.selectedImage = newSrc;
    this.selectedColor = newColor;
  }

}
