import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]>{
    return Promise.resolve(HEROES);
  };

  getHerosSlowly(): Promise<Hero[]>{
    return new Promise(resolve => {
      setTimeout (()=> resolve(this.getHeroes()),9000);
    })
  }

}