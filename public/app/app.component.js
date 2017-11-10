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
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.title = 'Tour of Heroes';
        // Sets initial value to true to show loading spinner on first load
        this.loading = true;
        router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    // Shows and hides the loading spinner during RouterEvent changes
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof router_1.NavigationStart) {
            this.loading = true;
        }
        if (event instanceof router_1.NavigationEnd) {
            this.loading = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof router_1.NavigationCancel) {
            // this.loading = false
        }
        if (event instanceof router_1.NavigationError) {
            // this.loading = false
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            template: "\n  <ul class=\"nav nav-tabs\">\n   <li class=\"navbar-brand mt-1\">{{title}}</li>\n   <li class=\"nav-item\"><a class=\"nav-link\" [class.active]=\"this.router.url === '/dashboard'\" routerLink=\"/dashboard\">Dashboard</a></li>\n   <li class=\"nav-item\"><a class=\"nav-link\" [class.active]=\"this.router.url === '/heroes'\" routerLink=\"/heroes\">Heroes</a></li>\n  </ul>\n\n  <div class=\"container mt-6\"></div>\n  \n  \n  <div class=\"mt-5\">\n  \n  <router-outlet></router-outlet>\n  <span *ngIf=\"loading\">Loading page...</span>\n  </div>\n\n  ",
            selector: 'my-app'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map