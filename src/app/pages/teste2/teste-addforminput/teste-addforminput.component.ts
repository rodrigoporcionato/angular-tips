import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-teste-addforminput',
  templateUrl: './teste-addforminput.component.html',
  styleUrls: ['./teste-addforminput.component.css']
})
export class TesteAddforminputComponent implements OnInit {
  public invoiceForm: FormGroup;
  public total: number;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()])
    });
  }
  initItemRows() {
      return this._fb.group({
          product: [''],
          price: [0.00],
          date: [new Date()]
      });
  }
  addNewRow() {
      const control = <FormArray>this.invoiceForm.controls['itemRows'];
      control.push(this.initItemRows());
      this.calcTotal();
  }
  deleteRow(index: number) {
      const control = <FormArray>this.invoiceForm.controls['itemRows'];
      control.removeAt(index);
      this.calcTotal();
  }
  calcTotal() {
    this.total = 0;
    this.invoiceForm.value.itemRows.forEach(x => {
      this.total += parseFloat(x.price);
    });
    console.clear();
    console.log(this.total);
  }
}
