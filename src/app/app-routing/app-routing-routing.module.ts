import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from '../counter/counter.component';
import { TableComponent } from '../table/table.component';
import { ClickboxesComponent } from '../clickboxes/clickboxes.component';
import { QuotesComponent } from '../quotes/quotes.component';
import { ModalComponent } from '../modal/modal.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';
import { TodolistComponent } from '../todolist/todolist.component';

const routes: Routes = [
  { path: '', component: CounterComponent },
  { path: 'sports', component: ClickboxesComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'accordion', component: AccordionComponent},
  { path: 'stopwatch', component: StopwatchComponent},
  { path: 'todo', component: TodolistComponent},
  { path: 'products', component: TableComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
