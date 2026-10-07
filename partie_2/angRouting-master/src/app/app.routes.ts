import { Routes } from '@angular/router';
import {Home} from "./home/home";
import {About} from "./about/about";
import {Contact} from "./contact/contact";
import {Login} from "./login/login";
import {Admin} from "./admin/admin";
import {loggedInGuard} from "./logged-in.guard";
import {Books} from "./books/books";
import {Book} from "./books/book/book";
import { Users } from './users/users';
import { UserDetails } from './user-details/user-details';

const booksRoutes: Routes = [
  {path: ':id', component: Book}
];

export const routes: Routes = [
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'contact', component: Contact},
  { path: 'login', component: Login },
  {
    path: 'admin',
    component: Admin,
    canActivate: [ loggedInGuard ]
  },
  {
    path: 'books',
    component: Books,
    children: booksRoutes
  },
  { path: 'users', component: Users },
  { path: 'user-details', component: UserDetails },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Home }
];