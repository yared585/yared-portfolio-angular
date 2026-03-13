import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Skill, Experience, Education, Certification } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.api}/skills`);
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.api}/experiences`);
  }

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.api}/education`);
  }

  getCertifications(): Observable<Certification[]> {
    return this.http.get<Certification[]>(`${this.api}/certifications`);
  }
}
