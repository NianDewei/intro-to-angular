import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    // The components contained in the module
    HeroeComponent,
    ListComponent,
  ],
  exports: [
    // The visible components of this module
    ListComponent,
    // HeroeComponent
  ],
  imports: [
    // only models go
    CommonModule,// It is to support Angular directives.
  ],
})
export class HeroesModule {}
