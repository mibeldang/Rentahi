import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { UserInformation } from '../signup/users';
import { ApiService } from '../api.service';
import { userDetails } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username: String;
  private password: String;
  private user: any;
  public passId: Number;
  public usernamE = this.username;
  public users: userDetails
  showError = false;
  constructor(private router: Router, private dataService: ApiService) {

  }

  ngOnInit() {

  }

  login() {
    this.dataService.shouldGetAllUser().subscribe(res => {
      const a = Object.values(res);
      for (const data of a) {
        this.user = data
      }
      res.forEach(element => {
        if (element.username == this.username) {
          sessionStorage.setItem("username", this.username.toString())
          if (element.password == this.password) {
            this.router.navigate(['/dashboard'])
          }
        }
        this.showError = true;
        console.log('Not Found!!!');

      })
    }
    )
  }
}
