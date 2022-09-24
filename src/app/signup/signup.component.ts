import { Component, OnInit } from '@angular/core';
import { Order } from '../user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: Order = new Order("firstname", "lastname", "email", "password")
  

  constructor() {
    
  }
  onSubmit(): void {
    // form submitted
    console.log(this.model);
  }

  ngOnInit(): void {
  }

}
