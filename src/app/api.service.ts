import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { userDetails } from './model';
import { Posts } from './post-form';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token',
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl = "http://localhost:3000/";
  
  constructor(private http: HttpClient) {

  }

  shouldGetAllUser(): Observable<userDetails[]> {
    return this.http.get<userDetails[]>(this.apiUrl+ 'users' , httpOptions);
  }

  shouldAddUser(newUser: any): Observable<userDetails[]> {
    return this.http.post<userDetails[]>(this.apiUrl+ 'users', JSON.stringify(newUser),httpOptions);
  }

  shouldCheckUser(id: any): Observable<userDetails[]> {
    return this.http.get<userDetails[]>(this.apiUrl+ 'users/'+id , httpOptions);
  }

  shouldAddPost(post: any): Observable<Posts[]> {
    return this.http.post<Posts[]>(this.apiUrl + 'post', JSON.stringify(post),httpOptions)
  }

  // addUser(user: UserInformation): Observable<UserInformation> {
  //   return this.http.post<UserInformation>(this.apiItem, user, httpOptions)
  // }

  shouldGetAllPost(): Observable<userDetails[]> {
    return this.http.get<userDetails[]>(this.apiUrl+ 'post' , httpOptions)
  }

  shouldCheckUsersPost(id: any): Observable<userDetails[]> {
    return this.http.get<userDetails[]>(this.apiUrl+ 'post/'+id , httpOptions);
  }

  updatePost(id, post): Observable<userDetails[]>{
    return this.http.put<userDetails[]>(this.apiUrl+ 'post/'+id , JSON.stringify(post), httpOptions);
  }

  getPostById(id): Observable<userDetails[]> {
    return this.http.get<userDetails[]>(this.apiUrl+ 'post/'+id )
  }

  getEdit(id){
    return this.http.get(this.apiUrl+ "/"+ id)
  }

  deletePost(id): Observable<userDetails[]>{
    return this.http.delete<userDetails[]>(this.apiUrl+ 'post/'+id , httpOptions);
  }

}
