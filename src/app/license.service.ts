import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { License } from './license'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { 

  }
  public getLicense(): Observable<License[]>{
    return this.http.get<License[]>(`${this.apiServerUrl}/license`);
  }
  public addLicense(license: License): Observable<License>{
    return this.http.post<License>(`${this.apiServerUrl}/license`,license);
  }
  public deleteLicense(licenseId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/license/${licenseId}`);
  }
}
