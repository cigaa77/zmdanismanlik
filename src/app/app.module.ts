import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ZararlilarComponent } from './zararlilar/zararlilar.component';
import { IlaclamaYontemleriComponent } from './ilaclama-yontemleri/ilaclama-yontemleri.component';
import { GaleriComponent } from './galeri/galeri.component';
import { HizmetlerimizComponent } from './hizmetlerimiz/hizmetlerimiz.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { YanMenuComponent } from './yan-menu/yan-menu.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { LightboxModule } from 'ngx-lightbox';

const appRoutes: Routes = [
  { path: 'anasayfa', component: AnasayfaComponent },
  { path: 'zararlilar', component: ZararlilarComponent },
  { path: 'ilaclama-yontemleri', component: IlaclamaYontemleriComponent },
  { path: 'galeri', component: GaleriComponent },
  { path: 'hakkimizda', component: HakkimizdaComponent },
  {
    path: '', redirectTo: "anasayfa", pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ZararlilarComponent,
    IlaclamaYontemleriComponent,
    GaleriComponent,
    HizmetlerimizComponent,
    AnasayfaComponent,
    YanMenuComponent,
    HakkimizdaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
