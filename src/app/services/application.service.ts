import { Injectable } from "@angular/core";
import { Application } from "../models/Application.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";
import { CookieHelper } from "../utilities/cookie.util";

const controller = "application";

@Injectable({
  providedIn: "root"
})
export class ApplicationService {
  constructor(
    private http: HttpClient,
  ) { }

  public getApplications(): Observable<Application[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Application[]>;
  }

  public getSingleApplication(applicationId: string): Observable<Application> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: applicationId,
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Application>;
  }

  public createApplication(application: any): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.post(url, application, CookieHelper.authHeaders) as Observable<any>;
  }

  public updateApplication(application: any): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.put(url, application, CookieHelper.authHeaders) as Observable<any>;
  }

  public deleteApplication(applicationId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: applicationId,
    });
    return this.http.delete(url, CookieHelper.authHeaders) as Observable<any>;
  }

}
