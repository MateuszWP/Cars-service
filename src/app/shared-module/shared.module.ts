import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SurnameShortcutPipe } from './pipes/surname-shortcut.pipe';

@NgModule({
  exports: [
    HeaderComponent,
    SurnameShortcutPipe
  ],
  declarations: [
    HeaderComponent,
    SurnameShortcutPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
