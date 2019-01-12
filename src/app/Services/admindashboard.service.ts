import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Student } from '../../../Classes/Student';
import { User } from 'Classes/User';
@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  studentgetaddurl:string='http://localhost:3000/students/';
  updateprofileurl:string='http://localhost:3000/profile/';
  adduserurl:string='http://localhost:3000/user/';
  teachergetaddurl:string='http://localhost:3000/teacher/';

  constructor(public _http:HttpClient) { }

  viewClass()
  {
    return this._http.get(this.studentgetaddurl);
  }

  AddStudent(item:FormData){
  return this._http.post(this.studentgetaddurl,item);
  }

  AddTeacher(item:FormData){
    return this._http.post(this.teachergetaddurl,item);
    }


  AddUser(item:User){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.adduserurl,body,{headers:h});
  }

  deleteStudent(s_roll_no:number)
  {
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.studentgetaddurl+s_roll_no,{headers:h});

  }
  deleteAll()
  {
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.studentgetaddurl,{headers:h});

  }
  updateStudent(item:Student)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.studentgetaddurl+item.s_gr_no,body,{headers:h});
  }
  getStudentBygrno(s_gr_no)
  {
    return this._http.get(this.studentgetaddurl+s_gr_no);
  }
  updateProfilepic(item:FormData)
  {
    return this._http.post(this.updateprofileurl,item);
  }
  getStudentBygrnoforprofilepic(s_gr_no)
  {
    return this._http.get(this.updateprofileurl+s_gr_no);
  }
}
