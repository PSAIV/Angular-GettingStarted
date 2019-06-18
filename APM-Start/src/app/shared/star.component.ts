import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { NumberValueAccessor } from "@angular/forms/src/directives";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }
}
