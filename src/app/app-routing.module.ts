import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { questioncomponent } from './question/question.component';
import { welcomecomponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"", redirectTo:"welcome", pathMatch:'full'},
  {path:"welcome", component:welcomecomponent},
  {path:"question", component:questioncomponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
