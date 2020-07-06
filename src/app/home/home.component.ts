import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ErrorMessage} from "ng-bootstrap-form-validation";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formGroup: FormGroup;
  
  constructor() { }

  ngOnInit() {
   

    this.formGroup = new FormGroup({
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Name: new FormControl('',[
        Validators.required,
        Validators.maxLength(10)
      ]),
      Subject: new FormControl('', [
        Validators.required
        
      ]),
      Message:new FormControl('',[
        Validators.required
      ])
      
  });
}
onSubmit() {
  console.log(this.formGroup);
}
onReset() {
  this.formGroup.reset();
}

}
