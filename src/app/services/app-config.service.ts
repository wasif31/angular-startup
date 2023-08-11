import { Injectable } from '@angular/core';
import {IAppConfig} from "../interfaces/IAppConfig";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  static settings: IAppConfig;

  constructor(private http: HttpClient) {

  }
  load() {

    const jsonFile = `/assets/config.json`;

    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response : any) => {
        AppConfigService.settings = <IAppConfig>response;

        console.log('Config Loaded');
        console.log( AppConfigService.settings);
        resolve();

      }).catch((response: any) => {
        reject(`Could not load the config file`);
      });
    });
  }
}
