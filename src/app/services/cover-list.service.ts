import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoverListService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  public url = 'https://api.themoviedb.org/3/tv/';
  public config_url = 'https://api.themoviedb.org/3/configuration';
  public apikey = 'c3f250deea0fe0862680a809246365e6';
  public params = new HttpParams().set('api_key', this.apikey);

  constructor(private http: HttpClient) { }

  public getConfig(): Observable<any> {
    const params = new HttpParams().set('api_key', this.apikey);
    return this.http.get(`${this.config_url}`, { params });
  }
  /**
  * Get initial data collection from movie list
  */
  public getMovieCover(id: number): Observable<any> {
    const params = new HttpParams().set('api_key', this.apikey);
    return this.http.get(`${this.url}` + id + '/images', { params });
  }
  // getCertification(id: string) : Observable<any>  {
  //   const params = new HttpParams()
  //   .set('api_key', this.apikey);
  //   return this.http.get('https://api.themoviedb.org/3/movie/'+ id +'/release_dates', {params})

  // }
}
