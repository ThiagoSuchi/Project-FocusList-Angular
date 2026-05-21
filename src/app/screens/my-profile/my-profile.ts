import { Component } from '@angular/core';
import { Title } from "../../components/shared/title/title";
import { Footer } from '../../components/shared/footer/footer';

@Component({
  selector: 'app-my-profile',
  imports: [Title, Footer],
  templateUrl: './my-profile.html',
  styleUrl: './my-profile.css',
  standalone: true
})
export class MyProfile {}
