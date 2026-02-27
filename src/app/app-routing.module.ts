import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }       from './components/home/home.component';
import { AboutComponent }      from './components/about/about.component';
import { SkillsComponent }     from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent }  from './components/education/education.component';
import { ContactComponent }    from './components/contact/contact.component';
import { NotFoundComponent }   from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '',           component: HomeComponent,       title: 'Yared Fesshaye' },
  { path: 'about',      component: AboutComponent,      title: 'About — Yared Fesshaye' },
  { path: 'skills',     component: SkillsComponent,     title: 'Skills — Yared Fesshaye' },
  { path: 'experience', component: ExperienceComponent, title: 'Experience — Yared Fesshaye' },
  { path: 'education',  component: EducationComponent,  title: 'Education — Yared Fesshaye' },
  { path: 'contact',    component: ContactComponent,    title: 'Contact — Yared Fesshaye' },
 
  { path: '**',         component: NotFoundComponent, title: '404 Not Found — Yared Fesshaye' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
