import { Component } from '@angular/core';
import { MenuLink } from '../menu-link/menu-link';
import { Title } from "../title/title";

@Component({
  selector: 'app-menu',
  imports: [MenuLink, Title],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {}
