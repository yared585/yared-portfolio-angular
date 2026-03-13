import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { Skill } from '../../../models/portfolio.model';

@Component({
  selector: 'app-manage-skills',
  templateUrl: './manage-skills.component.html',
  styleUrls: ['./manage-skills.component.scss']
})
export class ManageSkillsComponent implements OnInit {
  skills: Skill[] = [];
  showForm  = false;
  editingId: string | null = null;
  message   = '';
  isError   = false;
  form: Skill = this.emptyForm();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.portfolioService.getSkills().subscribe(data => this.skills = data);
  }

  emptyForm(): Skill { return { icon: '', name: '', tags: [] }; }

  tagsText(): string    { return this.form.tags.join(', '); }
  setTags(val: string)  { this.form.tags = val.split(',').map(s => s.trim()).filter(Boolean); }

  openAdd(): void {
    this.form = this.emptyForm(); this.editingId = null; this.showForm = true; this.message = '';
  }

  openEdit(skill: Skill): void {
    this.form = { ...skill, tags: [...skill.tags] };
    this.editingId = skill._id!; this.showForm = true; this.message = '';
  }

  cancel(): void { this.showForm = false; this.message = ''; }

  save(tagsVal: string): void {
    this.setTags(tagsVal);
    const action = this.editingId
      ? this.portfolioService.updateSkill(this.editingId, this.form)
      : this.portfolioService.createSkill(this.form);

    action.subscribe({
      next: () => { this.message = this.editingId ? 'Updated.' : 'Added.'; this.isError = false; this.showForm = false; this.load(); },
      error: () => { this.message = 'Something went wrong.'; this.isError = true; }
    });
  }

  delete(id: string): void {
    if (!confirm('Delete this skill category?')) return;
    this.portfolioService.deleteSkill(id).subscribe({
      next: () => this.load(),
      error: () => { this.message = 'Delete failed.'; this.isError = true; }
    });
  }
}
