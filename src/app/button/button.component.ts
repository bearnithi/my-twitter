import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnName: string;
  @Input() btnStyle: string;
  @Output() clicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  btnClick() {
    this.clicked.emit();
  }

}
