import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomemadeComponent } from './homemade/homemade.component';
import { JdgComponent } from './jdg/jdg.component';


const routes: Routes = [
  
  
  { path: '', component: HomemadeComponent },
  { path: 'portfolio', component: JdgComponent },


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
