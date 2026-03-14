import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience } from '../../models/portfolio.model';
import { retry } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  jobs: Experience[] = [];
  loading = true;
  error   = false;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.error   = false;
    this.portfolioService.getExperience()
      .pipe(retry({ count: 5, delay: 5000 }))
      .subscribe({
        next: data => {
          this.jobs    = data;
          this.loading = false;
          setTimeout(() => this.observeElements());
        },
        error: () => {
          this.loading = false;
          this.error   = true;
        }
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

  toggle(index: number): void {
    this.jobs[index].open = !this.jobs[index].open;
  }
}
