import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { EventsComponent } from './events/events.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MemberComponent,
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: MemberFormComponent,
  },
  {
    path: ':id/edit',
    pathMatch: 'full',
    component: MemberFormComponent,
  },

  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: 'tools',
    pathMatch: 'full',
    component: ToolsComponent,
  },
  {
    path: 'events',
    pathMatch: 'full',
    component: EventsComponent,
  },
  { path: 'articles',
    pathMatch: 'full',
    component: ArticlesComponent
  },
  {
    path: '**',
    component: MemberComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
