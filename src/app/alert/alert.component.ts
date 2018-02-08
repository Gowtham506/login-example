import { Component, OnInit } from '@angular/core';
import { PopupService } from "app/popup.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  message: any;
  constructor(private popupservice: PopupService) { }

  ngOnInit() {
    this.popupservice.getMessage().subscribe(message => this.message = message);
  }

}
