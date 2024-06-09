import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from '../table/table.component';
import { ClickboxesComponent } from '../clickboxes/clickboxes.component';
import { QuotesComponent } from '../quotes/quotes.component';
import { ModalComponent } from '../modal/modal.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';
import { TodolistComponent } from '../todolist/todolist.component';
import { PrarozComponent } from '../praroz/praroz.component';
import { ErrorpageComponent } from '../errorpage/errorpage.component';

const routes: Routes = [
  { path: '', component: QuotesComponent },
  { path: 'sports', component: ClickboxesComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'accordion', component: AccordionComponent},
  { path: 'stopwatch', component: StopwatchComponent},
  { path: 'todo', component: TodolistComponent},
  { path: 'products', component: TableComponent },
  { path: 'praroz', component: PrarozComponent },
  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
