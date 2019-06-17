import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

    constructor() { }

    ngOnInit() {

        // nav video
        /* let modal1 = document.getElementById('vid-modal1');
        const src1 = modal1.querySelector('iframe').getAttribute('src');
        const img1 = document.getElementById('vid-btn1');
        const modalImg1: any = document.getElementById('img01');
        img1.onclick = function () {
            modal1.querySelector('iframe').setAttribute('src', src1 + '?autoplay=1');
            modal1.style.display = 'block';
            modalImg1.src = src1;
        };
        modal1 = document.getElementsByClassName('modal')[0] as HTMLElement;
        modal1.onclick = function () {
            modal1.style.display = 'none';
            modal1.querySelector('iframe').setAttribute('src', src1);
        }; 

        // testimonial video 1
        let modal2 = document.getElementById('vid-modal2');
        const src2 = modal2.querySelector('iframe').getAttribute('src');
        const img2 = document.getElementById('vid-btn2');
        const modalImg2: any = document.getElementById('img01');
        img2.onclick = function () {
            modal2.querySelector('iframe').setAttribute('src', src2 + '?autoplay=1');
            modal2.style.display = 'block';
            modalImg2.src = src2;
        };
        modal2 = document.getElementsByClassName('modal')[0] as HTMLElement;
        modal2.onclick = function () {
            modal2.style.display = 'none';
            modal2.querySelector('iframe').setAttribute('src', src2);
        };

        // testimonial video 2
        let modal3 = document.getElementById('vid-modal3');
        const src3 = modal3.querySelector('iframe').getAttribute('src');
        const img3 = document.getElementById('vid-btn3');
        const modalImg3: any = document.getElementById('img01');
        img3.onclick = function () {
            modal3.querySelector('iframe').setAttribute('src', src3 + '?autoplay=1');
            modal3.style.display = 'block';
            modalImg3.src = src3;
        };
        modal3 = document.getElementsByClassName('modal')[0] as HTMLElement;
        modal3.onclick = function () {
            modal3.style.display = 'none';
            modal3.querySelector('iframe').setAttribute('src', src3);
        };

        // testimonial video 3
        let modal4 = document.getElementById('vid-modal4');
        const src4 = modal4.querySelector('iframe').getAttribute('src');
        const img4 = document.getElementById('vid-btn4');
        const modalImg4: any = document.getElementById('img01');
        img4.onclick = function () {
            modal4.querySelector('iframe').setAttribute('src', src4 + '?autoplay=1');
            modal4.style.display = 'block';
            modalImg4.src = src4;
        };
        modal4 = document.getElementsByClassName('modal')[0] as HTMLElement;
        modal4.onclick = function () {
            modal4.style.display = 'none';
            modal4.querySelector('iframe').setAttribute('src', src4);
        };
        */

        // navigation bar color
        const nav = document.querySelector('nav'); // Identify target
        const navBtn = document.getElementsByClassName('nav-btn')[0] as HTMLElement;
        const logo = document.querySelector('.navbar-brand img') as HTMLImageElement;

        window.addEventListener('scroll', function (event) { // To listen for event
            event.preventDefault();

            // if (window.scrollY <= 80) {
            //     // nav.style.backgroundColor = 'transparent'; // or default color
            //     // navBtn.style.backgroundColor = 'transparent';

            // } else {
            //     nav.style.backgroundColor = '#0B2135';
            //     navBtn.style.backgroundColor = '#FD6E75';
            // }

            if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
                logo.height = 70;
                logo.width = 70;
              } else {
                logo.height = 150;
                logo.width = 150;
              }
        });
    }

}
