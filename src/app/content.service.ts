import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Content } from './content'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { 

  }
  public getContent(): Observable<Content[]>{
    return this.http.get<Content[]>(`${this.apiServerUrl}/content`)
  }
  public addContent(content: Content): Observable<Content>{
    return this.http.post<Content>(`${this.apiServerUrl}/content`,content)
  }
  public deleteContent(contentId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/content/${contentId}`);
  }
}
