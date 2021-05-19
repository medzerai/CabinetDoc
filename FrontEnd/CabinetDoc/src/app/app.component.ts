import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { NavigationEnd, Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
Title = 'D';
constructor(private titleService:Title, private router:Router, private activePage: ActivatedRoute){}
  ngOnInit() {
    this.ChangeTitle();
  }
  ChangeTitle(){
    this.router.events.subscribe(event => {
      switch (true){
        case event instanceof NavigationEnd:
          let child =this.activePage.firstChild;
          while(child?.firstChild){
            child = child.firstChild;
          }
          this.titleService.setTitle(child?.snapshot.data.Title);
          break;
          
        default:
          break;
      }
      });

}
}