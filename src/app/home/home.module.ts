import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { DesignModule } from '../commons/design/design.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ProductComponent, HomeComponent],
  imports: [
    CommonModule,
    DesignModule,
    TranslateModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeModule {}
