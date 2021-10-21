import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      CommonModule,
      MatTabsModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatListModule,
      MatMenuModule
   ],
   exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule
  ],
})
export class MaterialModule { }
