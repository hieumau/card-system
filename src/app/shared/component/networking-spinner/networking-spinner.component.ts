import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-networking-spinner',
  templateUrl: './networking-spinner.component.html',
  styleUrls: ['./networking-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NetworkingSpinnerComponent implements OnInit {
  @Input() show: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
