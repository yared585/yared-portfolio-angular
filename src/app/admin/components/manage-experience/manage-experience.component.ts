import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { Experience } from '../../../models/portfolio.model';

@Component({
  selector: 'app-manage-experience',
  templateUrl: './manage-experience.component.html',
  styleUrls: ['./manage-experience.component.scss']
})
export class ManageExperienceComponent implements OnInit {
  jobs: Experience[] = [];
  showForm  = false;
  editingId: string | null = null;
  message   = '';
  isError   = false;
  form: Experience = this.emptyForm();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.portfolioService.getExperience().subscribe(data => this.jobs = data);
  }

  emptyForm(): Experience {
    return { company: '', role: '', location: '', period: '', open: false, bullets: [], tech: [] };
  }

  bulletsText(): string   { return this.form.bullets.join('\n'); }
  techText(): string      { return this.form.tech.join(', '); }
  setBullets(val: string) { this.form.bullets = val.split('\n').map(s => s.trim()).filter(Boolean); }
  setTech(val: string)    { this.form.tech    = val.split(',').map(s => s.trim()).filter(Boolean); }

  openAdd(): void {
    this.form = this.emptyForm(); this.editingId = null; this.showForm = true; this.message = '';
  }

  openEdit(job: Experience): void {
    this.form = { ...job, bullets: [...job.bullets], tech: [...job.tech] };
    this.editingId = job._id!; this.showForm = true; this.message = '';
  }

  cancel(): void { this.showForm = false; this.message = ''; }

  save(bulletsVal: string, techVal: string): void {
    this.setBullets(bulletsVal);
    this.setTech(techVal);
    const action = this.editingId
      ? this.portfolioService.updateExperience(this.editingId, this.form)
      : this.portfolioService.createExperience(this.form);

    action.subscribe({
      next: () => { this.message = this.editingId ? 'Updated.' : 'Added.'; this.isError = false; this.showForm = false; this.load(); },
      error: () => { this.message = 'Something went wrong.'; this.isError = true; }
    });
  }

  delete(id: string): void {
    if (!confirm('Delete this experience?')) return;
    this.portfolioService.deleteExperience(id).subscribe({
      next: () => this.load(),
      error: () => { this.message = 'Delete failed.'; this.isError = true; }
    });
  }
}
