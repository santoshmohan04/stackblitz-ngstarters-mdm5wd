import { Component } from '@angular/core';
import { MainBodyComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-praroz',
  standalone: true,
  imports: [MainBodyComponent, HeaderComponent],
  templateUrl: './praroz.component.html',
  styleUrl: './praroz.component.css'
})
export class PrarozComponent {

}
