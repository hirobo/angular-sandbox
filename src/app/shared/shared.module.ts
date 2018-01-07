import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConvertToSpacesPipe,
    StarComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe,
    StarComponent,
  ]
})
export class SharedModule { }
