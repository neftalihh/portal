import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ProductFormComponent } from './products/product-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

const routes : Routes = [
    {
        path: '',
        redirectTo: 'productos',
        pathMatch: 'full'
    },
    {
        path: 'productos',
        component: ProductsComponent,
    },
    {
        path: 'agregar',
        component: ProductFormComponent
    } 
] 

const config: ExtraOptions = {
	useHash: true
}

@NgModule({
    imports: [RouterModule.forRoot(routes,config)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

export const routed = [
    ProductFormComponent,
    NavbarComponent,
    ProductsComponent
]
