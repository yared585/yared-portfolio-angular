import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  jobs: Experience[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.jobs = this.portfolioService.getExperience();
  }

  ngAfterViewInit(): void {
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
