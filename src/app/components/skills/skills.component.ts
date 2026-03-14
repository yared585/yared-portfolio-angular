import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../models/portfolio.model';
import { retry } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skills: Skill[] = [];
  loading = true;
  error   = false;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.error   = false;
    this.portfolioService.getSkills()
      .pipe(retry({ count: 5, delay: 5000 }))
      .subscribe({
        next: data => {
          this.skills  = data;
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
}
