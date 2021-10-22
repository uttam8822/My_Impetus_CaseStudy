import { AotSummaryResolver } from '@angular/compiler';
import { Component } from '@angular/core';
declare let AOS: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'case-study';

  ngOnInit(){
    AOS.init();
  }

  onActivate(event){
    window.scroll(0,0);
  }
   
}
