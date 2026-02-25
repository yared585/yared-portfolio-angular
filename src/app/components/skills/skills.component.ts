import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skills: Skill[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.skills = this.portfolioService.getSkills();
  }

  ngAfterViewInit(): void {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('vis'), i * 80);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.rv').forEach(el => obs.observe(el));
  }
}
