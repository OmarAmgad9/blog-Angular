import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { PostsComponent } from "../posts/posts.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, PostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
