import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examination';

isloggedIn:number=0;//0 no 1-student 2-trainer
userid:number=0;
baseUrl='http://localhost:8080/';


}
