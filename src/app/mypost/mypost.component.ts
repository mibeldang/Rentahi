import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Posts } from '../post-form';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Request-Headers': 'content-type',
    'Access-Control-Request-Method': 'POST'
  })
};
@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.scss']
})
export class MypostComponent implements OnInit {
  public userPost: String;
  yes = false
  yesOrNo = true
  showNotification: boolean;
  dataArr: any[] = []
  u: string
  postsList: any[] = []
  tempOwnPost: any[] = []
  end1: string
  start1: string
  setdate = true
  duedate = false
  postModel:Posts[] = []


  @Output() editPost = new EventEmitter()
  @Output() toEditForm = new EventEmitter()
  @Output() mypost = new EventEmitter()
  
  constructor(private router: Router,private dataService: ApiService) {

  }

  ngOnInit() {
    const username = sessionStorage.getItem("username");
    this.dataService.shouldGetAllUser().subscribe(res => {
      const a = Object.values(res);
      res.forEach(element => {
        if (element.username == username) {
          this.userPost = element.username
        }
      })
    })

    this.dataService.shouldGetAllPost().subscribe(response => {
      response.forEach(myItem => {
        if (myItem.username == username) {
          console.log(myItem);
          this.postsList.push(myItem)
          console.log(this.postsList);
        }
      })
    })
  }

  loadData(){
    return this.dataService.shouldGetAllPost().subscribe(data =>{this.postsList = data})
  }

  delete(data) {
    this.dataService.deletePost(data).subscribe(response => this.loadData)
    this.router.navigate(['/dashboard'])
  }

  

  notAvailableClicked(post){
    this.toEditForm.emit(true)
    this.mypost.emit(false)
    console.log("toEditForm ",this.toEditForm );
    
    this.editPost.emit(post)
    console.log("editPost ", this.editPost);
    console.log("editPost ", post);  
  }
}