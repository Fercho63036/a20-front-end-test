import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html'
})
export class ShowResultComponent {
  @Input() id!: string;
  @Input() data!: string;
}
