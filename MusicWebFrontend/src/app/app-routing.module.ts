import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'product', component:ProductsComponent},
  {path:'admin', component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
