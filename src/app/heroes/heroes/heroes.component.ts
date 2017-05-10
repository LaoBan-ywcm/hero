import { Component, OnInit } from '@angular/core';
import {HeroService} from "../../hero.service";
import {Hero} from "../../hero";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router:Router
  ){}

  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => {this.heroes = heroes});
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }


  ngOnInit(): void{
    this.getHeroes();
  }
  //选中英雄
  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }
  //添加英雄
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

    //删除英雄
  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }


}
