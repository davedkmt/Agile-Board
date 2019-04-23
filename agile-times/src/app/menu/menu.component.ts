import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'fas fa-home' },
      { label: 'Calendar', icon: 'fas fa-calendar' },
      { label: 'Timesheet', icon: 'fas fa-clock-o' },
      { label: 'Project', icon: 'fas fa-tasks' },
      { label: 'Profile', icon: 'fas fa-users' },
      { label: 'Settings', icon: 'fas fa-sliders' }
      
    ];
  }

}
