import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligi-calc',
  templateUrl: './eligi-calc.component.html',
  styleUrls: ['./eligi-calc.component.scss']
})
export class EligiCalcComponent implements OnInit {

  monthlyIncome = 0;
  monthlyExpense = 0;
  existingLoan = false;

  constructor() { }

  ngOnInit(): void {
  }
  monthExp(e: any){
    this.monthlyExpense = e.target.value;
  }

  monthInc(e: any){
    this.monthlyIncome = e.target.value;
  }

}
