import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomComponent} from "./custom/custom.component";
import {ZorroComponent} from "./zorro/zorro.component";
import {StartComponent} from "./start/start.component";
import {AppComponent} from "./app.component";


const routes: Routes = [  {
  path: '',
  component: AppComponent,
  children: [
    {
      path: '',
      component: StartComponent,
      pathMatch: 'full'
    },
    {
      path: 'ng-zorro',
      component: ZorroComponent,
      pathMatch: 'full'
    },
    {
      path: 'custom',
      component: CustomComponent,
      pathMatch: 'full'
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
