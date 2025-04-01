import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public http:HttpClient,public app:AppComponent)
  {

  }
  username:string='';
  password:string='';

  login()
  {
    let  url=this.app.baseUrl+'login'+this.username
    this.http.post(url,this.password).subscribe((data:any)=>
    {
if(data==null)
{
  window.alert('something is worng');
}
else if(data[0]==1)
{
  window.alert('worng username');
}
else if(data[0]==2)
{
  window.alert('multiple  accounts');
}
else if(data[0]==3)
{
  window.alert('worng password');
}
else if(data[0]==0)
{
this.app.userid=data[1];

this.app.isloggedIn=data[2];

}
else
{
  window.alert('Something is worng')
}
 } );
  }
}
