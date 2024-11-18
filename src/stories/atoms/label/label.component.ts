import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'label-com',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label.component.html',
  styleUrls: ['./label.scss'],
})
export class LabelComponent {

  /** What background color to use */
  @Input()
  className?: string;

  @Input()
  backgroundColor?: string;
  
  @Input()
  fontColor?: string;

  @Input()
  labelSize?: "label-medium" | "label-small";

  /** How large should the button be? */
  @Input()
  fontSize?: string;


  @Input()
  label = 'Label';

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  // public get classes(): string[] {
  //   const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  //   return ['storybook-button', `storybook-button--${this.size}`, mode];
  // }
}
