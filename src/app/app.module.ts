import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './commons/menu/menu.component';
import { ProductComponent } from './home/product/product.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesignModule } from './commons/design/design.module';
import { ReactiveFormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
    DesignModule,
  ],
  providers: [
    { provide: 'welcomeMsg', useValue: 'Bienvenue sur Zenika Ecommerce' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Initial Chunk Files | Names         |      Size
// vendor.js           | vendor        |   3.46 MB
// polyfills.js        | polyfills     | 128.52 kB
// styles.css          | styles        |  78.23 kB
// main.js             | main          |  54.53 kB
// runtime.js          | runtime       |   6.63 kB

//                     | Initial Total |   3.72 MB
