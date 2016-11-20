import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Service } from './service';

@Component({
  selector: 'my-circle',
  templateUrl: 'app.circle.html'
})
export class Circle implements OnInit {  

  @Input()
  service: Service;
  
  public rhsDisplay: string;
  rotation: number;
  public rotationTransform: string;
  public isClipped: boolean;

  ngOnInit(): void {
    console.log(this.service.percentage);

    this.rotation = Math.round(360 * this.service.percentage/100);

    if ( this.rotation < 180 ) {
      this.rhsDisplay = "none";
      this.rotationTransform = "rotate(" + this.rotation + "deg)";
      this.isClipped = true;
    } else {
      this.isClipped = false;
      this.rotationTransform = "rotate(" + this.rotation + "deg)";
    }
    console.log(this.rotationTransform);
  }
}
