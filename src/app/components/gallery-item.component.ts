import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MatTooltip } from '@angular/material';

import { IInstagram } from '../../models';

@Component({
  selector: 'app-gallery-item',
  template: `
    <div class="item-container">
      <img
        class="gallery-item"
        src="{{instagram.thumbnail_url}}"
        alt="{{instagram.title}}"
        width="320px">
    </div>
  `,
  styles: [
    `
    .item-container {
      min-width: 320px;
      margin: 0;
      padding: 0;
      text-align: center;
    }
    .gallery-item{
      cursor: pointer;
      width:  320px;
      height: auto;
      margin: 0;
      padding: 9px;
    }
  `
  ]
})
export class GalleryItemComponent {
  @Input() instagram: IInstagram;

  constructor(private dialog: MatDialog) {}
}
