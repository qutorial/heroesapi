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
var hero_service_1 = require("./hero.service");
var hero_1 = require("./hero");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.heroService.getHero(+params.get('id')); }).subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.update(this.hero)
            .then(function () { return _this.goBack(); });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", hero_1.Hero)
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: "hero-detail",
            template: "\n  <div *ngIf=\"hero\" class=\"container mt-5\">\n    <h2>{{hero.name}} details!</h2>\n    <form>\n    <div class=\"form-group\">\n        <label>id: </label>{{hero.id}}\n    </div>\n        <div class=\"form-group\">\n            <div *ngIf=\"hero.name=='Windstorm'\" class=\"alert-success alert\">Nice</div>\n            <label for=\"heroName\">name: </label>\n            <input id=\"heroName\" name=\"heroName\" [(ngModel)]=\"hero.name\" placeholder=\"name\" class=\"form-control\">\n        </div>\n        \n    </form>    \n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n    <button type=\"button\" class=\"btn\" (click)=\"goBack()\">Back</button>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [hero_service_1.HeroService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map