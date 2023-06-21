import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { EditClientComponent } from './components/clients/edit-client/edit-client.component';
//import { ClientFormComponent } from './components/user-form/company-list-form.component';
//import { CompanyFormComponent } from './components/user-form/company-list-form.component';
//import { CompanyListComponent } from './components/user-form/company-list-form.component';

const routes: Routes = [
	{
	path : '',
	redirectTo: '/index',
	pathMatch: 'full' 
	},
	{
		path : 'clients',
		component: ClientsComponent
	 },{
		path: 'addClient' ,
	 	component: EditClientComponent
	 },{
		path: 'addClient/:id' ,
	 	component: EditClientComponent
	 }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }