import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  id:number
  public user: Array<any> = []
  yes = false
  yesOrNo = true
  showNotification: boolean;
  // dataArr: any[] = []
  public postsList:any [] = []
  

  constructor(private dataService: ApiService) {

  }

  ngOnInit() {
    return this.dataService.shouldGetAllPost().subscribe(data =>{ this.postsList = data
      console.log("data ",this.postsList)
    })
   
  }

  yesClicked() {
    console.log("user " ,this.user)
    this.yesOrNo = false
    this.yes = true
   
  }

  back() {
    this.yesOrNo = true
    this.yes = false;
    this.showNotification = true;
  }
  

}
