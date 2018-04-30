import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { BiographyComponent } from "./biography.component";

@Component({
  selector: "app-header",
  template: `
    <div class="header">
      <img class="logo-image" src="/assets/m.png" alt="" (click)="showBiography()">
    </div>
  `,
  styles: [
    `
    .header {
      padding-top: 10px;
      padding-left: 10px;
      z-index: 999;
      top: 0;
      position: fixed;
    }
    .logo-image {
      cursor: pointer;
      height: 128px;
      width: auto;
    }
  `
  ]
})
export class HeaderComponent implements OnInit {
  biographyDialog: MatDialogRef<BiographyComponent>;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  showBiography() {
    console.log("Show biography");

    this.biographyDialog = this.dialog.open(BiographyComponent, {
      height: "480px",
      width: "500px"
    });
  }
}
