import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

import { LayoutComponent }                from './components/layout/layout.component';
import { LoginComponent }                 from './components/login/login.component';
import { DashboardComponent }             from './components/dashboard/dashboard.component';
import { ManageExperienceComponent }      from './components/manage-experience/manage-experience.component';
import { ManageSkillsComponent }          from './components/manage-skills/manage-skills.component';
import { ManageEducationComponent }       from './components/manage-education/manage-education.component';
import { ManageCertificationsComponent }  from './components/manage-certifications/manage-certifications.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard',      component: DashboardComponent },
      { path: 'experience',     component: ManageExperienceComponent },
      { path: 'skills',         component: ManageSkillsComponent },
      { path: 'education',      component: ManageEducationComponent },
      { path: 'certifications', component: ManageCertificationsComponent },
      { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
