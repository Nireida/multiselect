import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomComponent} from "./components/custom/custom.component";
import {ZorroComponent} from "./components/zorro/zorro.component";
import {StartComponent} from "./components/start/start.component";
import {AppComponent} from "./components/app.component";


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
