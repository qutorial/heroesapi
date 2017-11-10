"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var hero_service_1 = require("./hero.service");
var core_1 = require("@angular/core");
var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.loading = true;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) {
            return _this.heroes = heroes;
        }).then(function () { return _this.loading = false; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.getHeroes();
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/heroes', this.selectedHero.id]);
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent = __decorate([
        core_1.Component({
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .card.selected:hover{\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .card:hover{\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  "],
            selector: 'my-heroes',
            template: "\n<div class=\"mt-5\" role=\"alert\" *ngIf=\"loading\">\n  Loading heroes...\n</div>\n<div class=\"container\" *ngIf=\"!loading\">\n    <div class=\"container\">\n      <div class=\"ui cards\">\n        <div class=\"card\" *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" [class.selected]=\"hero === selectedHero\">\n          <div class=\"content\">\n            <div class=\"header\">{{hero.name}}</div>\n            <div><button class=\"btn btn-outline-danger\"\n            (click)=\"delete(hero); $event.stopPropagation()\">x</button></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"mt-4\" *ngIf=\"selectedHero\">\n        <h2>\n          {{selectedHero.name | uppercase}} is my hero\n        </h2>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"gotoDetail()\">View Details</button>\n      </div>\n    </div>\n</div>\n<div class=\"container mt-5\">\n  <form class=\"form-inline\">\n    <label class=\"mr-sm-2\" for=\"addHero\">Add hero:</label>\n    <input type=\"text\" id=\"addHero\" class=\"form-control mb-2 mr-sm-2 mb-sm-0\" placeholder=\"Superman\" #heroName />\n    <button type=\"submit\" class=\"btn\" (click)=\"add(heroName.value); heroName.value=''\">\n    Add</button>\n  </form>\n</div>\n    ",
        }),
        __metadata("design:paramtypes", [hero_service_1.HeroService,
            router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map