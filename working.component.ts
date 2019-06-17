import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EndpointService } from '../services/endpoint.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.scss']
})
export class WorkingComponent implements OnInit {

  constructor(private sgservice: EndpointService) { }
  myForm: FormGroup;
  Data: any;
  validation_messages = {
    'firstname': [
      { type: 'required', message: 'Firstname is required.' },
      { type: 'minlength', message: 'Minimum 4 characters are required .' },
    ],
    'lastname': [
      { type: 'required', message: 'Lastname is required.' },
      { type: 'minlength', message: 'Minimum 4 characters are required .' },
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'Enter valid email.' },
    ],
    'phonenumber': [
      { type: 'required', message: 'Number is required.' },
      { type: 'minlength', message: 'Enter valid Number.' },
      { type: 'maxlength', message: 'Enter valid Number.' }
    ],
    'zipcode': [
      { type: 'required', message: 'zipcode is required.' },
      { type: 'minlength', message: 'Enter valid zipcode.' },
      { type: 'maxlength', message: 'Enter valid zipcode.' }
    ]

  };
  ngOnInit() {
    this.myForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phonenumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      zipcode: new FormControl('', [Validators.required])
    });

    const nav = document.querySelector('nav'); // Identify target
    const logo = document.querySelector('.navbar-brand img') as HTMLImageElement;
    const navBtn = document.getElementsByClassName('nav-btn')[0] as HTMLElement;

    window.addEventListener('scroll', function (event) { // To listen for event
      event.preventDefault();
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
          logo.height = 70;
          logo.width = 70;
        } else {
          logo.height = 150;
          logo.width = 150;
        }
      // if (window.scrollY <= 80) {
      //   nav.style.backgroundColor = 'transparent'; // or default color
      //   navBtn.style.backgroundColor = 'transparent';

      // } else {
      //   // nav.style.backgroundColor = '#0B2135';
      //   // navBtn.style.backgroundColor = '#FD6E75';
      // }
    });
  }

  onSubmit() {
    alert(JSON.stringify(this.myForm.value));
    this.Data = this.myForm.value;
    console.log(this.Data);
    this.Mail();
  }

  Mail() {
    $.ajax(this.sgservice.sendgridApi, {
      async: true,
      crossDomain: true,
      method: 'POST',
      headers: {
        'authorization': `Bearer ${this.sgservice.sgApiKey}`,
        'content-type': 'application/json'
      },
      processData: false,
      data: JSON.stringify({
        'personalizations': [
          {
            'to': [
              {
                'email': 'abhilash.vadlamudi@wissen.com',
                'name': `Aadit Life`
              }
            ],
            'subject': 'Demo Request !!'
          }
        ],
        'from': {
          'email': `${this.Data.email}`,
          'name': `${this.Data.firstname}`
        },
        'reply_to': {
          'email': 'aaditlife.test@gmail.com',
          'name': 'Aadit Life'
        },
        'content': [
          {
            'type': 'text/html',
            'value': `Date : ${new Date().toLocaleDateString()}<br/>
                      First Name: ${this.Data.firstname}<br/>
                      Last Name: ${this.Data.lastname}<br/>
                      Email:  ${this.Data.email}<br/>
                      Mobile: ${this.Data.phonenumber}<br/>
                      Zipcode: ${this.Data.zipcode}`
          }
        ]
      })
    })
      .then(
        function success(mail) {
          console.log('Mail has been sent successfully');
        }
      );
  }

  scroll(id) {
    const el = document.getElementById(id);
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
