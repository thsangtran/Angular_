import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component:AdminComponent,
    canActivate: [authGuard],
    children: [
      //rout con
    ]
  },
  {
    path: 'admin/:id',
    component:AdminComponent,
  },
  {
    path: '**',
    component:NotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
