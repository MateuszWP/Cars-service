import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SurnameShortcutPipe } from './pipes/surname-shortcut.pipe';
import { ImportantDirective } from './directive/important.directive';

@NgModule({
  exports: [
    HeaderComponent,
    SurnameShortcutPipe,
    ImportantDirective
  ],
  declarations: [
    HeaderComponent,
    SurnameShortcutPipe,
    ImportantDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
