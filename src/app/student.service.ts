import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList = [
    {id:1,name:'Anas',mark1:40,mark2:80,mark3:70},
    {id:2,name:'Semi',mark1:60,mark2:81,mark3:50},
    {id:1,name:'Ram',mark1:65,mark2:34,mark3:54},
    {id:1,name:'Chris',mark1:34,mark2:57,mark3:57},
    {id:1,name:'Anas',mark1:78,mark2:56,mark3:78}
  ]
  calculateTotalMark(student:any){
    const totalMark = student.mark1+student.mark2+student.mark3
    alert(`total mark is ${totalMark}`)
  }
  constructor() { }
}