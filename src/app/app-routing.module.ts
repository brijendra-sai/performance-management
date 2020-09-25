import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserTableComponent} from './user-table/user-table.component'
import {PerformanceComponent} from './performance/performance.component'
import { AllAppsComponent } from './all-apps/all-apps.component';

//Routes for different Applications
const routes: Routes = [
  { path: '', component: AllAppsComponent },
  { path: 'user-table', component: UserTableComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: '**', redirectTo: '/' } //redirect to dashboard component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
