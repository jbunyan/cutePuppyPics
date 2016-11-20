import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Circle } from '../../app/app.cirle';
import { Service } from '../../app/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public services: Service[] = [
    {
      name: "ATM",
      percentage: 93,
      health: 100,
      status: "running",
      alerts: {
        critical: 0,
        major: 2,
        minor: 7,
        warning: 12,
        info: 32
      }
    },
    {
      name: "Online Banking",
      percentage: 34,
      health: 60,
      status: "running",
      alerts: {
        critical: 1,
        major: 3,
        minor: 4,
        warning: 3,
        info: 12
      }    
    }
  ]
}
