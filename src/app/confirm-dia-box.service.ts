import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDiaBoxService {

  constructor(private dialog:MatDialog) { }
}
