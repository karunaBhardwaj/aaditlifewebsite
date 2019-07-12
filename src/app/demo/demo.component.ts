import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {EndpointService} from '../services/endpoint.service';
import * as $ from 'jquery';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(private router: Router, private sgservice: EndpointService, public dialog: MatDialog) { }
  myForm: FormGroup;
  Data: any;
  validation_messages = {
    'firstname': [
    { type: 'required', message: 'Firstname is required.'},
    { type: 'minlength', message: 'Minimum 4 characters are required .'},
    ],
    'lastname': [
    { type: 'required', message: 'Lastname is required.'},
    { type: 'minlength', message: 'Minimum 4 characters are required .'},
    ],
    'email': [
      { type: 'required', message: 'Email is required.'},
      { type: 'email', message: 'Enter valid email.'},
    ],
    'phonenumber': [
      { type: 'required', message: 'Number is required.'},
      { type: 'minlength', message: 'Enter valid Number.'},
      { type: 'maxlength', message: 'Enter valid Number.'}
    ],
    'message': [
      { type: 'required', message: 'message is required.'},
      { type: 'minlength', message: 'Minimum 4 characters are required .'}
    ]

    };
  ngOnInit() {
    this.myForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phonenumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      message: new FormControl('', [Validators.required])
      });
  }
  onSubmit() {
    this.Data = this.myForm.value;
    this.Mail();
    }
  Mail() {
    const htmlContent = `Date : ${new Date().toLocaleDateString()}<br/>First Name: ${this.Data.firstname}<br/>Last Name: ${this.Data.lastname}<br/>Email:  ${this.Data.email}<br/>Mobile: ${this.Data.phonenumber}<br/>Message: ${this.Data.message}`;
    const subject = this.Data.firstname[0].toUpperCase() + this.Data.firstname.slice(1) + ' Is Requesting More Information';
    const url = `http://aaditlife.com/testscript/testmail.php?from=aaditlifesupport@aaditlife.com&to=aadit.life@gmail.com&subject=${subject}&html=${htmlContent}&firstname=${this.Data.firstname}&lastname=${this.Data.lastname}`;
    this.openDialog();
  fetch(url)
  .then(
      function success(mail) {
          console.log('Mail has been sent successfully');
      }
  );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewDemoComponent, {
      width: '300px',
      data: {name: 'animal', animal: 'cow'}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/']);
    });
  }

}
@Component({
  selector: 'app-dialog-overview-dialog',
  templateUrl: 'dialog-box.html',
  styleUrls: ['./demo.component.scss']
})
export class DialogOverviewDemoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDemoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
