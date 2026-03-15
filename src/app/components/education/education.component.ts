import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Education, Certification } from '../../models/portfolio.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, AfterViewInit {
  edu:   Education[]     = [];
  certs: Certification[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getEducation().subscribe(data => {
      this.edu = data;
      setTimeout(() => this.observeElements());
    });
    this.portfolioService.getCertifications().subscribe(data => {
      this.certs = data;
      setTimeout(() => this.observeElements());
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
