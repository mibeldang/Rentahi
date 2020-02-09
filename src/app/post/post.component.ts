import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Posts } from '../post-form';
import { HttpClient } from '@angular/common/http';

//Try image upload
// class ImageSnippet {
//   constructor(public src: string, public file: File) {}
// }


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {




  // try image upload
  // selectedFile: ImageSnippet;
  id: number
  public user: Array<any> = []
  public posts: Array<Posts> = []
  public tobePassed: Posts;

  showImage = true
  ImageSource: string
  CurrentFile: File

  image1: string
  category1: string
  title1: string
  brand1: string
  price1: number
  description1: string
  dateStarted: string
  dateReturned: string



  public FileChangeEvent(fileInput: any) {
    this.showImage = false
    this.CurrentFile = fileInput.target.files[0];

    let reader = new FileReader();
    reader.onload = () => {
      this.ImageSource = reader.result as string;
    };
    reader.readAsDataURL(this.CurrentFile);
  }

  constructor(private http: HttpClient, private dataService: ApiService) { }

  ngOnInit() {
  }

 

  post(form) {
    const Username = sessionStorage.getItem("username");
    console.log("user post ", this.user)
    this.tobePassed = {
      username: Username,
      image: this.ImageSource,
      category:this.category1,
      title: this.title1,
      brand: this.brand1,
      price: this.price1,
      description: this.description1,
      dateStarted: this.dateStarted,
      dateReturned: this.dateReturned
    }
    this.dataService.shouldAddPost(this.tobePassed).subscribe(data => {
      console.log("postData ", data)
    })
    this.posts.push(this.tobePassed)
    console.log("post ", this.posts)
    alert("Already Posted")
    form.form.reset()
  }

 
}
