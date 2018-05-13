import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IInstagram } from '../../models';
import { InstagramService } from '../../services';
import { Lightbox, IAlbum } from 'angular2-lightbox';

import { GALLERY_IMAGES } from '../app-data';

@Component({
  selector: 'app-gallery',
  template: `
    <div class="gallery-container container">
      <div class="gallery-row row">
        <div class="gallery-cell col-sm"
          *ngFor="let instagram of gallery; let i = index">
          <app-gallery-item
            class="gallery-item"
            [instagram]="instagram"
            (click)="selectImage(i)"></app-gallery-item>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .gallery-container {
    }
    .gallery-row {
      margin: 0;
      padding: 0;
    }
    .gallery-cell {
      margin: 0;
      padding: 0;
    }
    .gallery-item {
    }
  `
  ]
})
export class GalleryComponent implements OnInit {
  gallery: Array<IInstagram> = [];
  album: Array<IAlbum> = [];

  constructor(
    private instagramService: InstagramService,
    private _lightbox: Lightbox
  ) {}

  ngOnInit() {
    for (const img of GALLERY_IMAGES) {
      this.instagramService.getImage(img.code).subscribe(response => {
        this.gallery.push(response);
        this.album.push({
          src: response.thumbnail_url,
          caption: response.title,
          thumb: response.thumbnail_url
        });
      });
    }
  }

  // @HostListener('scroll', ['$event'])
  // onScroll(event) {
  //   console.log(event);
  // }

  selectImage(index: number) {
    this._lightbox.open(this.album, index);
  }

  scroll(event) {
    console.log(event);
  }
}
