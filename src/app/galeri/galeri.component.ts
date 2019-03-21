import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-galeri',
  templateUrl: './galeri.component.html',
  styleUrls: ['./galeri.component.css']
})
export class GaleriComponent implements OnInit {
  private _albums: Array<{ src: string, caption: string, thumb: string }> = [];

  ngOnInit() {
  }

  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 21; i++) {
      const src = '../../assets/image' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../assets/image' + i + '_tn.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };

      this._albums.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}