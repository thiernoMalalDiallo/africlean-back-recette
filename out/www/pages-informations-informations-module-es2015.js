(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-informations-informations-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/informations/informations.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/informations/informations.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"container\">\n\n  <div  class=\"content-page\">\n\n    <div class=\"header\">\n      {{ 'PAGES.INFORMATIONS.TITLE' | translate }}\n    </div>\n\n    <div class=\"toggle\">\n\n      <!-- Informations personnelles -->\n      <ion-item class=\"informations-toggle\">\n        <ion-label>{{ 'PAGES.INFORMATIONS.TOGGLE.INFOS' | translate }}</ion-label>\n        <ion-toggle color=\"medium\" (ionChange)=\"toggleInformations($event)\">\n        </ion-toggle>\n      </ion-item>\n\n      <div class=\"informations\" *ngIf=\"informationsCheck\">\n        <africlean-informations></africlean-informations>\n      </div>\n\n      <!-- Adresses -->\n      <ion-item class=\"adress-toggle\">\n        <ion-label>{{ 'PAGES.INFORMATIONS.TOGGLE.ADRESS.TITLE' | translate }}</ion-label>\n        <ion-toggle color=\"medium\" (ionChange)=\"toggleAdress($event)\">\n        </ion-toggle>\n      </ion-item>\n\n      <div class=\"adress\" *ngIf=\"adressCheck\">\n          <!-- Ajouter une nouvel adresse -->\n          <div class=\"adress-add\" (click)=\"addAdress()\">\n            {{ 'PAGES.INFORMATIONS.TOGGLE.ADRESS.NEW_ADRESS' | translate }}\n          </div>\n          <div class=\"adresses-list\" *ngIf=\"adresses\">\n              <africlean-adress-display *ngFor=\"let adresse of adresses; let rank = index\"\n                                        [adress]=\"adresse\" [theme]=\"'informations'\" \n                                        [displayCheckbox]=\"false\" [rank]=\"rank\"\n                                        [displayButton]=\"true\" (emitHomeCode)=\"actualizeAdress($event)\">\n              </africlean-adress-display>\n          </div>\n      </div>\n\n      <!-- Mot de passe -->\n      <ion-item class=\"password-toggle\">\n        <ion-label>{{ 'PAGES.INFORMATIONS.TOGGLE.PASSWORD' | translate }}</ion-label>\n        <ion-toggle color=\"medium\" (ionChange)=\"togglePassword($event)\">\n        </ion-toggle>\n      </ion-item>\n      \n      <div class=\"password\" *ngIf=\"pwdCheck\">\n        <africlean-password></africlean-password>\n      </div>\n\n    </div>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/informations/informations.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/informations/informations.module.ts ***!
  \***********************************************************/
/*! exports provided: InformationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationsPageModule", function() { return InformationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _informations_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./informations.page */ "./src/app/pages/informations/informations.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









const routes = [
    {
        path: '',
        component: _informations_page__WEBPACK_IMPORTED_MODULE_5__["InformationsPage"]
    }
];
let InformationsPageModule = class InformationsPageModule {
};
InformationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_informations_page__WEBPACK_IMPORTED_MODULE_5__["InformationsPage"]]
    })
], InformationsPageModule);



/***/ }),

/***/ "./src/app/pages/informations/informations.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/informations/informations.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 15vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  margin-bottom: 2rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: var(--ion-color-consult-informations);\n}\n.container .content-page .toggle ion-label {\n  color: var(--ion-color-consult-informations);\n  font-weight: bold;\n}\n.container .content-page .toggle .adress-add {\n  color: var(--ion-color-consult-informations);\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.9rem;\n  margin-left: 5vw;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5mb3JtYXRpb25zL0M6XFxVc2Vyc1xcdG1kaWFsbG9cXERvY3VtZW50c1xcUHJvamV0X0FmcmlxdWVcXEFmcmljbGVhblxcYWZyaWNsZWFuLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xcaW5mb3JtYXRpb25zXFxpbmZvcm1hdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbmZvcm1hdGlvbnMvaW5mb3JtYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGdCQUFBO0FDRFI7QURHUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSw0Q0FBQTtBQ0RaO0FETVk7RUFDSSw0Q0FBQTtFQUNBLGlCQUFBO0FDSmhCO0FET1k7RUFDSSw0Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTGhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5mb3JtYXRpb25zL2luZm9ybWF0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG5cclxuICAgIC5jb250ZW50LXBhZ2V7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTV2aDtcclxuICAgICAgICBcclxuICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JleSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29uc3VsdC1pbmZvcm1hdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvZ2dsZXtcclxuXHJcbiAgICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29uc3VsdC1pbmZvcm1hdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hZHJlc3MtYWRke1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb25zdWx0LWluZm9ybWF0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmNvbnRhaW5lciAuY29udGVudC1wYWdlIHtcbiAgbWFyZ2luLXRvcDogMTV2aDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbnN1bHQtaW5mb3JtYXRpb25zKTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAudG9nZ2xlIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29uc3VsdC1pbmZvcm1hdGlvbnMpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAudG9nZ2xlIC5hZHJlc3MtYWRkIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb25zdWx0LWluZm9ybWF0aW9ucyk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/informations/informations.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/informations/informations.page.ts ***!
  \*********************************************************/
/*! exports provided: InformationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationsPage", function() { return InformationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/africlean-modal/africlean-modal.provider */ "./src/providers/africlean-modal/africlean-modal.provider.ts");
/* harmony import */ var src_app_components_africlean_adress_africlean_adress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/africlean-adress/africlean-adress.component */ "./src/app/components/africlean-adress/africlean-adress.component.ts");
/* harmony import */ var src_providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/africlean-http/africlean-http-user.provider */ "./src/providers/africlean-http/africlean-http-user.provider.ts");
/* harmony import */ var src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");
/* harmony import */ var src_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/africlean-observables/africlean-observables.provider */ "./src/providers/africlean-observables/africlean-observables.provider.ts");







let InformationsPage = class InformationsPage {
    constructor(modal, userProvider, session, observableProvider) {
        this.modal = modal;
        this.userProvider = userProvider;
        this.session = session;
        this.observableProvider = observableProvider;
        /**
         * Contrôle l'accès aux informations
         */
        this.informationsCheck = false;
        /**
         * Contrôle l'accès au mot de passe
         */
        this.pwdCheck = false;
        /**
         * Contrôle l'accès aux adresses
         */
        this.adressCheck = false;
    }
    ngOnInit() {
        this.getAdresses();
        // Dés qu'il y'a un chamgement au nivea des adresses notament une mise a jour,
        // on récharge les données.
        this.observableProvider.loadAdresses.subscribe((load) => {
            if (load) {
                this.getAdresses();
            }
        });
    }
    /**
     * Switch vers les informations
     * @param event evenement
     */
    toggleInformations(event) {
        this.informationsCheck = event.detail.checked;
    }
    /**
     * Switch vers le mot de passe
     * @param event événement
     */
    togglePassword(event) {
        this.pwdCheck = event.detail.checked;
    }
    /**
     * Switch vers l'adresse
     * @param event événement
     */
    toggleAdress(event) {
        this.adressCheck = event.detail.checked;
    }
    /**
     * Ajoute une nouvelle adresse
     */
    addAdress() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const props = {
                displayButton: true
            };
            yield this.modal.create(src_app_components_africlean_adress_africlean_adress_component__WEBPACK_IMPORTED_MODULE_3__["AfricleanAdressComponent"], 'my-custom-modal-css', props);
            const data = yield this.modal.getData();
            // tslint:disable-next-line: no-unused-expression
            !this.adresses ? this.adresses = [] : '';
            // tslint:disable-next-line: no-unused-expression
            data ? this.adresses.push(data) : '';
        });
    }
    /**
     * Actualise la liste des adresses
     * @param event evenement émis
     */
    actualizeAdress(homeCode) {
        const adressesTMP = [];
        this.adresses.forEach(adress => {
            if (adress.idHome !== homeCode) {
                adressesTMP.push(adress);
            }
        });
        this.adresses = adressesTMP;
    }
    /**
     * Renvoie toutes les adresses
     */
    getAdresses() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const userId = yield this.session.getItem('userId');
            const url = 'user/adress/' + userId;
            const body = {
                role: 'CLIENT'
            };
            this.userProvider.getAdress(url, body).subscribe((adresses) => {
                this.adresses = adresses;
            });
        });
    }
};
InformationsPage.ctorParameters = () => [
    { type: src_providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanModalProvider"] },
    { type: src_providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanHttpUserProvider"] },
    { type: src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanSessionProvider"] },
    { type: src_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_6__["AfricleanObservablesProvider"] }
];
InformationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-informations',
        template: __webpack_require__(/*! raw-loader!./informations.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/informations/informations.page.html"),
        styles: [__webpack_require__(/*! ./informations.page.scss */ "./src/app/pages/informations/informations.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanModalProvider"],
        src_providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanHttpUserProvider"],
        src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanSessionProvider"],
        src_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_6__["AfricleanObservablesProvider"]])
], InformationsPage);



/***/ })

}]);
//# sourceMappingURL=pages-informations-informations-module-es2015.js.map