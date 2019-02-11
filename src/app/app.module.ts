import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KaliteHizmetleriComponent } from './kalite-hizmetleri/kalite-hizmetleri.component';
import { BelgelerimizComponent } from './belgelerimiz/belgelerimiz.component';
import { TalepFormuComponent } from './talep-formu/talep-formu.component';
import { ZararlilarComponent } from './zararlilar/zararlilar.component';
import { IlaclamaYontemleriComponent } from './ilaclama-yontemleri/ilaclama-yontemleri.component';
import { GaleriComponent } from './galeri/galeri.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { HizmetlerimizComponent } from './hizmetlerimiz/hizmetlerimiz.component';
import { ReferanslarComponent } from './referanslar/referanslar.component';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { YonetmeliklerComponent } from './yonetmelikler/yonetmelikler.component';

const appRoutes: Routes = [
  { path: 'anasayfa', component: AnasayfaComponent },
  { path: 'kalite-politikası', component: KaliteHizmetleriComponent },
  { path: 'yonetmelikler', component: YonetmeliklerComponent },
  { path: 'belgelerimiz', component: BelgelerimizComponent },
  { path: 'talep-formu', component: TalepFormuComponent },
  { path: 'zararlilar', component: ZararlilarComponent },
  { path: 'referanslar', component: ReferanslarComponent },
  { path: 'ilaclama-yontemleri', component: IlaclamaYontemleriComponent },
  { path: 'galeri', component: GaleriComponent },
  { path: 'iletisim', component: IletisimComponent },
  {
    path: '', redirectTo: "anasayfa", pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    KaliteHizmetleriComponent,
    BelgelerimizComponent,
    TalepFormuComponent,
    ZararlilarComponent,
    IlaclamaYontemleriComponent,
    GaleriComponent,
    IletisimComponent,
    HizmetlerimizComponent,
    ReferanslarComponent,
    AnasayfaComponent,
    YonetmeliklerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
