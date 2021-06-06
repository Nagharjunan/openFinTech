import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec-page',
  templateUrl: './sec-page.component.html',
  styleUrls: ['./sec-page.component.scss']
})
export class SecPageComponent implements OnInit {


  cardDetails = [
    {
      imgSrc: '../assets/styleSvg/Get Paid Instantly.png',
      cardTitle: 'Quick cash disbursement',
      cardBody: 'Get terms loans that your business needs within 72 hrs'
    },
    {
      imgSrc: '../assets/styleSvg/Low interest rate.png',
      cardTitle: 'Low-interest rate',
      cardBody: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum'
    },
    {
      imgSrc: '../assets/styleSvg/Secure Payments.png',
      cardTitle: 'Zero Paperwork',
      cardBody: 'Get started instantly by submitting only your basic details & bank statements'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
