import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TwoWayComponent } from './two-way/two-way.component';

const routes: Routes = [
  // Routing
  {path: 'app',component: AppComponent},
  {path: 'task',component: TaskComponent},
  {path: 'two-way',component: TwoWayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
