import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RopaComponent } from './components/ropa/ropa.component';
import { CalzadoComponent } from './components/calzado/calzado.component';
import { AccesoriosComponent } from './components/accesorios/accesorios.component';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ropa', component: RopaComponent },
  { path: 'calzado', component: CalzadoComponent },
  { path: 'accesorios', component: AccesoriosComponent },
  { path: 'list', component: ArticleListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    RopaComponent,
    CalzadoComponent,
    AccesoriosComponent,
    HomeComponent,
    ArticleListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
