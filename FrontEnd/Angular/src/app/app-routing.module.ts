import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  // {path: 'add-event',component:'new-event'}
{path:'',component:UserLayoutComponent,children:[
  {path:'',loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule)},
  {path:'loginuser',loadChildren:()=>import('./views/user/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
  {path:'list-event',loadChildren:()=>import('./views/user/list-event/list-event.module').then(m=>m.ListEventModule)},
  {path:'show-event',loadChildren:()=>import('./views/user/show-event/show-event.module').then(m=>m.ShowEventModule)},
  {path:"user-profile",loadChildren:()=>import("./views/user/user-profile/user-profile.module").then(m=>m.UserProfileModule)}
]},
{path:'admin',component:AdminLayoutComponent,children:[
  {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'events',loadChildren:()=>import('./views/admin/allevents/allevents.module').then(m=>m.AlleventsModule)},
  {path:'add-event',loadChildren:()=>import('./views/admin/add-event/add-event.module').then(m=>m.AddEventModule)},
  {path:'update-event/:id',loadChildren:()=>import('./views/admin/update-event/update-event.module').then(m=>m.UpdateEventModule)},
  {path:'update-student/:id',loadChildren:()=>import('./views/admin/update-student/update-student.module').then(m=>m.UpdateStudentModule)},
  // {path:'loginadmin',loadChildren:()=>import('./views/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule)},
  {path:'admin-profile',loadChildren:()=>import('./views/admin/admin-profile/admin-profile.module').then(m=>m.AdminProfileModule)},
  {path:'add-student',loadChildren:()=>import('./views/admin/add-student/add-student.module').then(m=>m.AddStudentModule)}
]},
  {path:'loginadmin',loadChildren:()=>import('./views/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule)},
  // {path:'loginuser',loadChildren:()=>import('./views/user/loginuser/loginuser.module').then(m=>m.LoginuserModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
