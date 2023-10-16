import { Component,OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList:any[] = []
  constructor(private studentService:StudentService){
  }
  ngOnInit(): void {
      this.studentList=this.studentService.studentList
  }
  calculateTotalMark(student:any){
    this.studentService.calculateTotalMark(student)
  }
}
