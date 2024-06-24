import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TitleRoute } from '../interfaces/register-layout.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterLayoutService {

  private _titleRoute = new BehaviorSubject<TitleRoute>({ route: '', title: '' });
  private _backupTitleRoute = new BehaviorSubject<TitleRoute>({ route: '', title: '' });

  public backupLayoutInfo: TitleRoute = {route: '', title: ''}

  setTitleRoute( titleRoute: TitleRoute):void {
    this._titleRoute.next(titleRoute);
  }

  setBackupTitleRoute( titleRoute: TitleRoute):void {
    this._backupTitleRoute.next(titleRoute);
  }

  get getTitleImage():Observable<TitleRoute>{
    return this._titleRoute.asObservable();
  }

  getBackLayoutInformation():Observable<TitleRoute>{
    return this._backupTitleRoute.asObservable();
  }
}
