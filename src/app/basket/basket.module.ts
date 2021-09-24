import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BasketComponent } from './basket.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BasketComponent,
      },
    ]),
  ],
})
export class BasketModule {}
