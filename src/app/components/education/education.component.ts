import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Education, Certification } from '../../models/portfolio.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, AfterViewInit {
  edu: Education[] = [];
  certs: Certification[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.edu   = this.portfolioService.getEducation();
    this.certs = this.portfolioService.getCertifications();
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
