import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostListComponent } from './post-list/post-list.component';
import { AboutComponent } from './about/about.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

export const routes: Routes = [
 { path: '', redirectTo: '', pathMatch: 'full'},
 { path: 'home', component: HomeComponent},
 { path: 'post-list', component: PostListComponent},
 { path: 'about', component: AboutComponent},
 { path: 'post/:id', component: PostDetailComponent},


 
 { path: '**', component:  NotFoundComponent}
];
