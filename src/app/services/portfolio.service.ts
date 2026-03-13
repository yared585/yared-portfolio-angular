import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Skill, Experience, Education, Certification } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private api    = environment.apiUrl;
  private admin  = `${environment.apiUrl}/admin`;

  constructor(private http: HttpClient) {}

  // ── Public GET ──────────────────────────────────────────────
  getSkills():          Observable<Skill[]>         { return this.http.get<Skill[]>(`${this.api}/skills`); }
  getExperience():      Observable<Experience[]>    { return this.http.get<Experience[]>(`${this.api}/experiences`); }
  getEducation():       Observable<Education[]>     { return this.http.get<Education[]>(`${this.api}/education`); }
  getCertifications():  Observable<Certification[]> { return this.http.get<Certification[]>(`${this.api}/certifications`); }

  // ── Admin: Skills ────────────────────────────────────────────
  createSkill(data: Skill):             Observable<Skill> { return this.http.post<Skill>(`${this.admin}/skills`, data); }
  updateSkill(id: string, data: Skill): Observable<Skill> { return this.http.put<Skill>(`${this.admin}/skills/${id}`, data); }
  deleteSkill(id: string):              Observable<any>   { return this.http.delete(`${this.admin}/skills/${id}`); }

  // ── Admin: Experience ────────────────────────────────────────
  createExperience(data: Experience):             Observable<Experience> { return this.http.post<Experience>(`${this.admin}/experiences`, data); }
  updateExperience(id: string, data: Experience): Observable<Experience> { return this.http.put<Experience>(`${this.admin}/experiences/${id}`, data); }
  deleteExperience(id: string):                   Observable<any>        { return this.http.delete(`${this.admin}/experiences/${id}`); }

  // ── Admin: Education ─────────────────────────────────────────
  createEducation(data: Education):             Observable<Education> { return this.http.post<Education>(`${this.admin}/education`, data); }
  updateEducation(id: string, data: Education): Observable<Education> { return this.http.put<Education>(`${this.admin}/education/${id}`, data); }
  deleteEducation(id: string):                  Observable<any>       { return this.http.delete(`${this.admin}/education/${id}`); }

  // ── Admin: Certifications ────────────────────────────────────
  createCertification(data: Certification):             Observable<Certification> { return this.http.post<Certification>(`${this.admin}/certifications`, data); }
  updateCertification(id: string, data: Certification): Observable<Certification> { return this.http.put<Certification>(`${this.admin}/certifications/${id}`, data); }
  deleteCertification(id: string):                      Observable<any>           { return this.http.delete(`${this.admin}/certifications/${id}`); }
}
