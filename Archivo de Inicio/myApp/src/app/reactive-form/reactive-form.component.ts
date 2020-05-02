import { Component, OnInit } from '@angular/core';
import { PhoneType } from '../reactive-form/phoneType';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public readonly phoneType: PhoneType[] = [
    { type: "Mobil", number: "" },
    { type: "Fijo", number: "" },
  ];

  constructor() { }

  ngOnInit(): void {

  }
  SaveData() {

  }
}