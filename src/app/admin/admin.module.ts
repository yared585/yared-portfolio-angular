import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { LayoutComponent }                from './components/layout/layout.component';
import { LoginComponent }                 from './components/login/login.component';
import { DashboardComponent }             from './components/dashboard/dashboard.component';
import { ManageExperienceComponent }      from './components/manage-experience/manage-experience.component';
import { ManageSkillsComponent }          from './components/manage-skills/manage-skills.component';
import { ManageEducationComponent }       from './components/manage-education/manage-education.component';
import { ManageCertificationsComponent }  from './components/manage-certifications/manage-certifications.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    DashboardComponent,
    ManageExperienceComponent,
    ManageSkillsComponent,
    ManageEducationComponent,
    ManageCertificationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
