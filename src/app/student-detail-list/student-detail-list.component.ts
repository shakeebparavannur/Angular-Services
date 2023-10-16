import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail-list',
  templateUrl: './student-detail-list.component.html',
  styleUrls: ['./student-detail-list.component.css']
})
export class StudentDetailListComponent {
  constructor(public studentService:StudentService){
  }
 
}
