(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"home-page\" >\n  \n  <div class=\"content\">\n\n    <!-- Correspond au nom de l'application -->\n    <div class=\"presentation\">\n      <span class=\"title\">{{ 'PAGES.HOME.WELCOME_TITLE' | translate }}</span>\n      <span class=\"name\" *ngIf=\"user\">\n        {{ user.lastName | uppercase }} {{user.firstName }}\n      </span>\n      <span class=\"subTitle\">{{ 'PAGES.HOME.WELCOME_SUBTITLE' | translate }}</span>\n    </div>\n\n    <!-- Correspond à l'ensemble des boutons de la page d'acceuil-->\n    <ion-grid fixed>\n      <ion-row class=\"first-row\">\n        <ion-col>\n\n          <!-- Bouton \"Abonnement\" -->\n          <africlean-button\n            [title]=\"'PAGES.HOME.CLIENT_SPACE.ABO.TITLE' | translate\"\n            [subTitle]=\"'PAGES.HOME.CLIENT_SPACE.ABO.SUB_TITLE' | translate\"\n            [icon]=\"'abo'\"\n            [theme]=\"'consult-abonnement'\"\n            (clickButton)=\"goToPage('consult-abonnement')\">\n          </africlean-button>\n\n        </ion-col>\n        <ion-col>\n\n          <!-- Bouton \"Incidents\" -->\n          <africlean-button\n            [title]=\"'PAGES.HOME.CLIENT_SPACE.INCIDENT.TITLE' | translate\"\n            [subTitle]=\"'PAGES.HOME.CLIENT_SPACE.INCIDENT.SUB_TITLE' | translate\"\n            [icon]=\"'incident'\"\n            [theme]=\"'manage-incidents'\"\n            (clickButton)=\"goToPage('report-incident')\">\n          </africlean-button>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n\n          <!-- Bouton \"Jours de passage\" -->\n          <africlean-button \n            [title]=\"'PAGES.HOME.CLIENT_SPACE.PASSAGE.TITLE' | translate\"\n            [subTitle]=\"'PAGES.HOME.CLIENT_SPACE.PASSAGE.SUB_TITLE' | translate\" \n            [icon]=\"'service'\" \n            [theme]=\"'manage-passage'\" \n            (clickButton)=\"goToPage('consult-service')\">\n          </africlean-button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <!-- Bouton \"Informations\" -->\n          <africlean-button\n            [title]=\"'PAGES.HOME.CLIENT_SPACE.INFORMATIONS.TITLE' | translate\"\n            [subTitle]=\"'PAGES.HOME.CLIENT_SPACE.INFORMATIONS.SUB_TITLE' | translate\"\n            [icon]=\"'informations'\"\n            [theme]=\"'consult-informations'\"\n            (clickButton)=\"goToPage('consult-informations')\">\n          </africlean-button>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");









let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-page .content {\n  margin-top: 6vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.home-page .content .presentation {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 4rem;\n}\n.home-page .content .presentation .logo {\n  width: 4rem;\n  height: 4rem;\n  margin-bottom: 2rem;\n}\n.home-page .content .presentation .title {\n  font-size: 1.7rem;\n  font-family: \"ExcellenceInMotion-Bold\";\n  font-weight: bold;\n  letter-spacing: 0.125rem;\n  margin-bottom: 1rem;\n}\n.home-page .content .presentation .subTitle {\n  color: var(--ion-color-green);\n  margin-top: 1rem;\n  font-size: 1.3rem;\n}\n.home-page .content .presentation .name {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.home-page .content ion-grid {\n  margin-top: 3.5rem;\n  padding-right: 5rem;\n  padding-left: 5rem;\n}\n.home-page .content ion-grid ion-col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXHRtZGlhbGxvXFxEb2N1bWVudHNcXFByb2pldF9BZnJpcXVlXFxBZnJpY2xlYW5cXGFmcmljbGVhbi1pb25pYy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBRUksZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDSFI7QURLUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxnQkFBQTtBQ0haO0FETVk7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTGhCO0FEU1k7RUFFSSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FDUmhCO0FEWVk7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNWaEI7QURjWTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNaaEI7QURnQlE7RUFFSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNmWjtBRGlCWTtFQUVJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsbUJBQUE7QUNoQmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFN0eWxlIGRlIGxhIHBhZ2UgaG9tZVxuLmhvbWUtcGFnZSB7XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIFxuICAgICAgICBtYXJnaW4tdG9wOiA2dmg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5wcmVzZW50YXRpb257XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgXG4gICAgICAgICAgICAvLyBEZXNpZ24gcG91ciBsZSBsb2dvXG4gICAgICAgICAgICAubG9nb3tcbiAgICBcbiAgICAgICAgICAgICAgICB3aWR0aDogNHJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDRyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIERlc2lnbiBwb3VyIGxlIHRpdHJlXG4gICAgICAgICAgICAudGl0bGV7XG4gICAgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdFeGNlbGxlbmNlSW5Nb3Rpb24tQm9sZCc7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTI1cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIERlc2lnbiBwb3VyIGxlIHNvdXMtdGl0cmVcbiAgICAgICAgICAgIC5zdWJUaXRsZXtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZXNpZ24gcG91ciBsZSBub21cbiAgICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlvbi1ncmlkIHtcblxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMy41cmVtO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXJlbTtcbiAgICAgICAgXG4gICAgICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iLCIuaG9tZS1wYWdlIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogNnZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgLnByZXNlbnRhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDRyZW07XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IC5wcmVzZW50YXRpb24gLmxvZ28ge1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCAucHJlc2VudGF0aW9uIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBmb250LWZhbWlseTogXCJFeGNlbGxlbmNlSW5Nb3Rpb24tQm9sZFwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCAucHJlc2VudGF0aW9uIC5zdWJUaXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgLnByZXNlbnRhdGlvbiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgaW9uLWdyaWQge1xuICBtYXJnaW4tdG9wOiAzLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XG4gIHBhZGRpbmctbGVmdDogNXJlbTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgaW9uLWdyaWQgaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");
/* harmony import */ var src_providers_africlean_alert_africlean_alert_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/africlean-alert/africlean-alert.provider */ "./src/providers/africlean-alert/africlean-alert.provider.ts");





let HomePage = class HomePage {
    constructor(navCtrl, session, alert) {
        this.navCtrl = navCtrl;
        this.session = session;
        this.alert = alert;
    }
    /**
     * Initialisation de la page
     */
    ngOnInit() {
        this.getUser();
    }
    /**
     * Récupère l'utilisateur courant
     */
    getUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = yield this.session.getItem('user');
        });
    }
    /**
     * Permet d'être redirigé sur la page de la fonctionnalité sélectionnée
     * @param page : string
     */
    goToPage(page) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isSubscribe(page);
        });
    }
    /**
     * Teste si c'est un client et donc un abonné
     * @param page page
     */
    isSubscribe(page) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const role = yield this.session.getItem('role');
            if (role === 'CLIENT') {
                const isSubscribe = yield this.session.getItem('isSubscribe');
                if (page !== 'consult-abonnement' && page !== 'consult-informations') {
                    if (isSubscribe === 'NULL' || isSubscribe === 'RESILIEE' || isSubscribe === 'EN COURS') {
                        this.onDemandToSubscribe();
                        return;
                    }
                }
            }
            this.navCtrl.navigateForward(page);
        });
    }
    /**
     * Demande de s'abonner
     */
    onDemandToSubscribe() {
        const message = 'Pour accèder à cette fonctionnalité, veuillez vous abonner.';
        const css = '';
        const buttons = [
            {
                text: 'S\'abonner',
                handler: () => {
                    this.navCtrl.navigateForward('consult-abonnement');
                }
            }
        ];
        this.alert.alertMessage(message, css, buttons);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanSessionProvider"] },
    { type: src_providers_africlean_alert_africlean_alert_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanAlertProvider"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanSessionProvider"],
        src_providers_africlean_alert_africlean_alert_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanAlertProvider"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map