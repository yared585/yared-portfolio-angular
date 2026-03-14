import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Education, Certification } from '../../models/portfolio.model';
import { retry } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, AfterViewInit {
  edu:   Education[]      = [];
  certs: Certification[]  = [];
  loading = true;
  error   = false;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.error   = false;
    this.portfolioService.getEducation()
      .pipe(retry({ count: 5, delay: 5000 }))
      .subscribe({
        next: data => {
          this.edu     = data;
          this.loading = false;
          setTimeout(() => this.observeElements());
        },
        error: () => { this.loading = false; this.error = true; }
      });
    this.portfolioService.getCertifications()
      .pipe(retry({ count: 5, delay: 5000 }))
      .subscribe({
        next: data => {
          this.certs = data;
          setTimeout(() => this.observeElements());
        },
        error: () => {}
      });
  }

  ngAfterViewInit(): void {}

  private observeElements(): void {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('vis'), i * 80);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.rv').forEach(el => obs.observe(el));
  }
}
