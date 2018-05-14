import { Component, AfterViewInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';


  ngAfterViewInit(){
    $(document).ready(function(){
      $(".dropdown-trigger").dropdown();
    });
  }
}
