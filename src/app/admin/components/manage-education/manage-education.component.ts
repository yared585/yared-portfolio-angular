import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { Education } from '../../../models/portfolio.model';

@Component({
  selector: 'app-manage-education',
  templateUrl: './manage-education.component.html',
  styleUrls: ['./manage-education.component.scss']
})
export class ManageEducationComponent implements OnInit {
  items: Education[] = [];
  showForm  = false;
  editingId: string | null = null;
  message   = '';
  isError   = false;
  form: Education = this.emptyForm();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.portfolioService.getEducation().subscribe(data => this.items = data);
  }

  emptyForm(): Education { return { badge: '', degree: '', school: '', location: '', year: '' }; }

  openAdd(): void {
    this.form = this.emptyForm(); this.editingId = null; this.showForm = true; this.message = '';
  }

  openEdit(item: Education): void {
    this.form = { ...item }; this.editingId = item._id!; this.showForm = true; this.message = '';
  }

  cancel(): void { this.showForm = false; this.message = ''; }

  save(): void {
    const action = this.editingId
      ? this.portfolioService.updateEducation(this.editingId, this.form)
      : this.portfolioService.createEducation(this.form);

    action.subscribe({
      next: () => { this.message = this.editingId ? 'Updated.' : 'Added.'; this.isError = false; this.showForm = false; this.load(); },
      error: () => { this.message = 'Something went wrong.'; this.isError = true; }
    });
  }

  delete(id: string): void {
    if (!confirm('Delete this education entry?')) return;
    this.portfolioService.deleteEducation(id).subscribe({
      next: () => this.load(),
      error: () => { this.message = 'Delete failed.'; this.isError = true; }
    });
  }
}
