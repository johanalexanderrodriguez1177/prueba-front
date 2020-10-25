import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticesListComponent } from './components/notices-list/notices-list.component';
import { AddNoticesComponent } from './components/add-notices/add-notices.component';

const routes: Routes = [
  { path: '', redirectTo: 'notices', pathMatch: 'full' },
  { path: 'notices', component: NoticesListComponent },
  { path: 'notices/add', component: AddNoticesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
