import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  dataList = [
    {
      question: 'What is the return Policy?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, beatae dolores voluptate consequuntur, amet modi molestiae quasi dicta hic id facere quam pariatur a earum fugit sint? Corrupti, doloribus esse.',
    },
    {
      question: 'When will i receive my order?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, beatae dolores voluptate consequuntur, amet modi molestiae quasi dicta hic id facere quam pariatur a earum fugit sint? Corrupti, doloribus esse.',
    },
    {
      question: 'Where are you located?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, beatae dolores voluptate consequuntur, amet modi molestiae quasi dicta hic id facere quam pariatur a earum fugit sint? Corrupti, doloribus esse.',
    },
  ];
  activeIndex: number | null = null;

  toggleActive(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
