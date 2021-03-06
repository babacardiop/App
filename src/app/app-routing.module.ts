import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'programme', loadChildren: './programme/programme.module#ProgrammePageModule' },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
