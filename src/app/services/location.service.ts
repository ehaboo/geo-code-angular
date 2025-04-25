import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { CoordinatesModel } from '../models/coordinates.model';
import { appConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public constructor(private http:HttpClient) { }

  public async getCoordinats(address:string):Promise<CoordinatesModel>{
    const observable = this.http.get<CoordinatesModel>(appConfig.coordinatesUrl + "?address=" + address);
    const coordinates = await firstValueFrom(observable);
    return coordinates;
  }

  public async getPopularSearch():Promise<CoordinatesModel>{
    const observable = this.http.get<CoordinatesModel>(appConfig.popularSearchUrl); 
    const popularSearch = await firstValueFrom(observable); 
    return popularSearch; 
  }

  public async getPopularSearchList():Promise<CoordinatesModel[]>{
    const observable = this.http.get<CoordinatesModel[]>(appConfig.popularSearchListUrl); 
    const topFiveList = await firstValueFrom(observable);
    return topFiveList; 
  }

}
