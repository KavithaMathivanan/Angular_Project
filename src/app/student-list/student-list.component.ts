import { Component,OnInit } from '@angular/core';
import {User} from "../Shared/Models/user"
import {NgFor} from "@angular/common";
import {StudentDetailComponent} from "../student-detail/student-detail.component";
import {StudentService} from "../Services/student.service";


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgFor, StudentDetailComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{
  userList: User[] = [];
  displayedColumns:string[]= ['id', 'firstName', 'lastName', 'department', 'isAdmin'];


  constructor (private studentService: StudentService){

  }
ngOnInit(){
  this.studentService.getStudents().subscribe({
    next: (data: User[]) => this.userList = data, error:err => console.error("Error Fetching Stuednts", err),
    complete:() => console.log("Student data fetched successfully")
  })
}
  selectedStudent?: User;
  selectStudent(student: User): void {
    this.selectedStudent = student;
  }

}
