import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clickboxes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clickboxes.component.html',
  styleUrl: './clickboxes.component.css'
})
export class ClickboxesComponent {
    sportslist = [{
      id: "football",
      name: "Football",
      bgcolor: ''
    },
    {
      id: "basketball",
      name: "Basketball",
      bgcolor: ''
    },
    {
      id: "boxing",
      name: "Boxing",
      bgcolor: ''
    },
    {
      id: "tennis",
      name: "Tennis",
      bgcolor: ''
    },
    {
      id: "golf",
      name: "Golf",
      bgcolor: ''
    },
    {
      id: "rugby",
      name: "Rugby",
      bgcolor: ''
    }]
}
