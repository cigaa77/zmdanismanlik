import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TalepFormuComponent } from './talep-formu/talep-formu.component';
import { ZararlilarComponent } from './zararlilar/zararlilar.component';
import { IlaclamaYontemleriComponent } from './ilaclama-yontemleri/ilaclama-yontemleri.component';
import { GaleriComponent } from './galeri/galeri.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { HizmetlerimizComponent } from './hizmetlerimiz/hizmetlerimiz.component';
import { ReferanslarComponent } from './referanslar/referanslar.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { YanMenuComponent } from './yan-menu/yan-menu.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';

const appRoutes: Routes = [
  { path: 'anasayfa', component: AnasayfaComponent },
  { path: 'talep-formu', component: TalepFormuComponent },
  { path: 'zararlilar', component: ZararlilarComponent },
  { path: 'referanslar', component: ReferanslarComponent },
  { path: 'ilaclama-yontemleri', component: IlaclamaYontemleriComponent },
  { path: 'galeri', component: GaleriComponent },
  { path: 'iletisim', component: IletisimComponent },
  { path: 'hakkimizda', component: HakkimizdaComponent },
  {
    path: '', redirectTo: "anasayfa", pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TalepFormuComponent,
    ZararlilarComponent,
    IlaclamaYontemleriComponent,
    GaleriComponent,
    IletisimComponent,
    HizmetlerimizComponent,
    ReferanslarComponent,
    AnasayfaComponent,
    YanMenuComponent,
    HakkimizdaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
