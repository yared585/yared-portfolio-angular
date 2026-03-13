import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { Certification } from '../../../models/portfolio.model';

@Component({
  selector: 'app-manage-certifications',
  templateUrl: './manage-certifications.component.html',
  styleUrls: ['./manage-certifications.component.scss']
})
export class ManageCertificationsComponent implements OnInit {
  items: Certification[] = [];
  showForm  = false;
  editingId: string | null = null;
  message   = '';
  isError   = false;
  form: Certification = this.emptyForm();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.portfolioService.getCertifications().subscribe(data => this.items = data);
  }

  emptyForm(): Certification { return { icon: '', name: '', issuer: '', year: '' }; }

  openAdd(): void {
    this.form = this.emptyForm(); this.editingId = null; this.showForm = true; this.message = '';
  }

  openEdit(item: Certification): void {
    this.form = { ...item }; this.editingId = item._id!; this.showForm = true; this.message = '';
  }

  cancel(): void { this.showForm = false; this.message = ''; }

  save(): void {
    const action = this.editingId
      ? this.portfolioService.updateCertification(this.editingId, this.form)
      : this.portfolioService.createCertification(this.form);

    action.subscribe({
      next: () => { this.message = this.editingId ? 'Updated.' : 'Added.'; this.isError = false; this.showForm = false; this.load(); },
      error: () => { this.message = 'Something went wrong.'; this.isError = true; }
    });
  }

  delete(id: string): void {
    if (!confirm('Delete this certification?')) return;
    this.portfolioService.deleteCertification(id).subscribe({
      next: () => this.load(),
      error: () => { this.message = 'Delete failed.'; this.isError = true; }
    });
  }
}
