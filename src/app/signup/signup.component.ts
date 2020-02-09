import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDetails } from '../model'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  firstname: String;
  lastname: String;
  email: String;
  username: String;
  contact: String;
  password: String;
  public users: userDetails
  showLogin: boolean = true;
  userDetails = { username: '', password: '',firstname:'',lastname:'',contact:'', email:'' }

  constructor(private router: Router, private dataService: ApiService) {
    this.users = new userDetails()
  }

  ngOnInit() {


  }
  onSignUp() {

    alert('Next step is to login to make sure you can login...')
    this.users = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      contact: this.contact,
      username: this.username,
      password: this.password
    }
    this.dataService.shouldAddUser(this.users).subscribe(data => {
      console.log(data);
      this.router.navigate([''])
    })
  }
}
