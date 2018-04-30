import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-biograpy',
  template: `
    <div class="title-container">
      <h1 mat-dialog-title class="dlg-title">Matt Brinkmann</h1>
    </div>
    <mat-dialog-content>
      <p>I'm a self taught artist from BC Canada. While I have always been creative from a young age,
      I began taking my art more seriously 3 years ago.</p>
      <p>My primary subject matter deals with the transient nature of life, consciousness, the recall, and interpretation of memories.</p>
      <p>I occasionally work with local companies creating logos or other branding work.</p>
      <div class="instagram-container">
        <a href="https://www.instagram.com/brinkofbeyond/">
          <img src="./assets/instagram.png" alt="" width="64" height="64" />
        </a>
      </div>
    </mat-dialog-content>
    `,
  styles: [
    `
    .title-container {
      display:flex;
      align-items: center;
      padding-bottom: 20px;
    }
    .dlg-title {
      background-image: url(./assets/profile.png);
      background-repeat: no-repeat;
      padding: 0 0 0 80px;
      height: 72px;
    }
    .instagram-container {
      padding-top: 20px;
      text-align: center;
    }
    a:focus {outline:0;}
  `
  ]
})
export class BiographyComponent {
  constructor(public dialogRef: MatDialogRef<BiographyComponent>) {}
}
