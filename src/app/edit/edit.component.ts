import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Posts } from '../post-form';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number
  public user: Array<any> = []
  public posts: Array<Posts> = []
public getData: any = {}
  public tobePassed: Posts;
  // userInfo :any
  postId:number

  toedit = false
  formedit = true

  image1: string
  category1: string
  title1: string
  brand1: string
  price1: number
  description1: string
  dateStarted: string
  dateReturned: string

  toEditForm = false
  mypost = true

  showImage = true
  ImageSource: string
  CurrentFile: File

  public userName:string

  constructor(
    private route : ActivatedRoute,
    private dataService: ApiService
  ) { }

  public FileChangeEvent(fileInput: any) {
    this.showImage = false
    this.CurrentFile = fileInput.target.files[0];

    let reader = new FileReader();
    reader.onload = () => {
      this.ImageSource = reader.result as string;
    };
    reader.readAsDataURL(this.CurrentFile);
  }

  ngOnInit() {
    this.dataService.getPostById(this.posts).subscribe(data =>{
      this.getData = data
    })
  }

  post(form) {
    const Username = sessionStorage.getItem("username");
    console.log("user post ", this.user)
    this.tobePassed = {
      username: Username,
      image: this.ImageSource,
      category: this.category1,
      title: this.title1,
      brand: this.brand1,
      price: this.price1,
      description: this.description1,
      dateStarted: this.dateStarted,
      dateReturned: this.dateReturned
    }
  this.dataService.updatePost(this.postId,this.tobePassed).subscribe(data =>{
    this.toEditForm = false
  })
    this.posts.push(this.tobePassed)
    console.log("post ", this.posts)
    alert("Already Posted")
    form.form.reset()
    
    this.mypost = true
  }

  acceptPostDetails(post){
    this.toEditForm = true
    this.mypost = false
    this.postId = post.id
    this.userName = post.username
    // this.image1 = post.image
    this.ImageSource = post.image
    console.log(this.ImageSource);
    
    this.category1 = post.category
    this.title1 = post.title
    this.brand1 = post.brand
    this.price1 = post.price
    this.description1 = post.description
    this.dateStarted = post.dateStarted
    this.dateReturned = post.dateReturned

  }

}
