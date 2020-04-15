(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-authentication-authentication-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/authentication/authentication.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/authentication/authentication.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"container\">\r\n\r\n    <div class=\"content-page\">\r\n\r\n        <div *ngIf=\"!counts\">\r\n\r\n                <!-- Header de la page -->\r\n            <div class=\"header\">\r\n                <ion-grid>\r\n                    <ion-row class=\"title\">\r\n                        <span>{{ 'PAGES.AUTHENTICATION.TITLE' | translate }}</span>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </div>\r\n\r\n            <!-- Message de confirmation après inscription -->\r\n            <africlean-info-bulle *ngIf=\"displayRegistrationConfirmation\" [type]=\"'validate'\" \r\n                                [message]=\"'Votre enrégistrement a bien été pris en compte'\">\r\n\r\n            </africlean-info-bulle>\r\n            \r\n            <ion-grid class=\"formulaire\">\r\n\r\n            <!-- Champ d'identification -->\r\n                <ion-row>\r\n\r\n                    <ion-col size=\"12\">\r\n\r\n                        <ion-grid>\r\n                            <ion-col size=\"12\">\r\n                                <ion-grid>\r\n\r\n                                </ion-grid>\r\n                                <ion-label color='primary' position=\"stacked\">\r\n                                    {{ 'PAGES.AUTHENTICATION.LABELS.ID' | translate }}\r\n                                </ion-label>\r\n                            </ion-col>\r\n\r\n                            <ion-col size=\"12\">\r\n                                <div>\r\n                                    <ion-input clearInput [(ngModel)]=\"login\" type='text'>\r\n                                    </ion-input>\r\n                                </div>\r\n                            </ion-col>\r\n                        </ion-grid>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n\r\n                <!-- Champ de mot de passe -->\r\n                <ion-row>\r\n\r\n                    <ion-col size=\"12\">\r\n                        <ion-grid>\r\n                            <ion-col size=\"12\">\r\n                                <ion-label color='primary' position=\"stacked\">\r\n                                    {{ 'PAGES.AUTHENTICATION.LABELS.PASSWORD' | translate }}\r\n                                </ion-label>\r\n                            </ion-col>\r\n\r\n                            <ion-col size=\"12\">\r\n                                <div>\r\n                                    <ion-input clearInput [(ngModel)]=\"password\" type='password'>\r\n                                    </ion-input>\r\n                                </div>\r\n                            </ion-col>\r\n                        </ion-grid>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n\r\n                <ion-row>\r\n\r\n                    <ion-col size=\"12\">\r\n\r\n                        <div class=\"forgot-password\" (click)=\"forgotPassword()\">\r\n                            \r\n                            {{'PAGES.AUTHENTICATION.FORGOT_PASSWORD' | translate }} ?\r\n\r\n                        </div>\r\n\r\n                        <!-- Bouton de confirmation -->\r\n                        <africlean-small-button [theme]=\"'blue'\" [title]=\"'CONNEXION'\"\r\n                                        (clickButton)=\"sendAuthent()\">\r\n                        </africlean-small-button>\r\n\r\n                        <div class=\"separate\"></div>\r\n                        \r\n                        <!-- Bouton d'inscription -->\r\n                        <africlean-small-button [theme]=\"'orange'\" [title]=\"'INSCRIPTION'\"\r\n                                        (clickButton)=\"goRegistration()\">\r\n                        </africlean-small-button>\r\n\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n\r\n            </ion-grid>\r\n\r\n            <!-- Gestion des erreurs -->\r\n            <div text-center>\r\n                <ion-spinner [hidden]='hideSpinner'></ion-spinner>\r\n            </div>\r\n            <africlean-info-bulle *ngIf='errorMsg' [type]=\"'error'\" \r\n                                [message]=\"errorMsg\">\r\n\r\n            </africlean-info-bulle>\r\n\r\n        </div>\r\n\r\n        <!-- Boutons Accès espace -->\r\n        <div *ngIf=\"counts\" class=\"choice-space\">\r\n\r\n            <div class=\"button\" *ngFor=\"let count of counts\">\r\n                \r\n                <africlean-small-button [theme]=\"'orange'\" [title]=\"'accèder à mon espace ' + count.role\"\r\n                                        (clickButton)=\"goTo(count.role)\">\r\n                </africlean-small-button>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        \r\n    </div>\r\n      \r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/authentication/authentication.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.module.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPageModule", function() { return AuthenticationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication.page */ "./src/app/pages/authentication/authentication.page.ts");









var routes = [
    {
        path: '',
        component: _authentication_page__WEBPACK_IMPORTED_MODULE_8__["AuthenticationPage"]
    }
];
var AuthenticationPageModule = /** @class */ (function () {
    function AuthenticationPageModule() {
    }
    AuthenticationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild()
            ],
            declarations: [_authentication_page__WEBPACK_IMPORTED_MODULE_8__["AuthenticationPage"]]
        })
    ], AuthenticationPageModule);
    return AuthenticationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/authentication/authentication.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  background-color: var(--ion-color-gris);\n  height: 100vh;\n  padding-bottom: 35rem;\n}\n.container .content-page .header {\n  margin-top: 10vh;\n  margin-bottom: -2rem;\n}\n.container .content-page .header span {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 2rem;\n}\n.container .content-page .header .title span {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2rem;\n}\n.container .content-page .formulaire {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 0rem;\n  margin-bottom: 10vh;\n}\n.container .content-page .formulaire ion-label {\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  color: var(--ion-color-text-purple-darke);\n}\n.container .content-page .formulaire ion-input {\n  max-width: 20rem;\n  width: 70vw;\n  height: 2.6rem;\n  border-radius: 0.5rem;\n  box-shadow: 9px 8px 20px rgba(0, 0, 0, 0.2);\n  color: var(--ion-color-grey);\n  --padding-start: 1rem;\n  margin-top: 0.5rem;\n}\n.container .content-page .formulaire ion-input span {\n  margin-left: 1rem;\n}\n.container .content-page .formulaire .forgot-password {\n  color: var(--ion-color-primary);\n  margin-bottom: 1rem;\n  font-size: 1rem;\n  text-align: center;\n  cursor: pointer;\n}\n.container .content-page .formulaire .separate {\n  margin-top: 1rem;\n}\n.container .content-page .choice-space {\n  padding-top: 50vh;\n  display: -webkit-box;\n  display: flex;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n}\n.container .content-page .choice-space .button {\n  margin-bottom: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24vQzpcXFVzZXJzXFx0bWRpYWxsb1xcRG9jdW1lbnRzXFxQcm9qZXRfQWZyaXF1ZVxcQWZyaWNsZWFuXFxhZnJpY2xlYW4taW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFxhdXRoZW50aWNhdGlvblxcYXV0aGVudGljYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0RSO0FER1E7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FDRFo7QURHWTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0RoQjtBREtnQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0hwQjtBRFFRO0VBRUksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNQWjtBRFNZO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUNQaEI7QURVWTtFQUVJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDVGhCO0FEV2dCO0VBQ0ksaUJBQUE7QUNUcEI7QURhWTtFQUVJLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDWmhCO0FEZVk7RUFDSSxnQkFBQTtBQ2JoQjtBRGtCUTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtBQ2hCWjtBRGtCWTtFQUNJLG1CQUFBO0FDaEJoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgLmNvbnRlbnQtcGFnZXtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyaXMpO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDM1cmVtO1xyXG5cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJyZW07XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtdWxhaXJlIHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDByZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcblxyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGV4dC1wdXJwbGUtZGFya2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuNnJlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDlweCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0IDogMXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZm9yZ290LXBhc3N3b3JkIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlcGFyYXRle1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNob2ljZS1zcGFjZXtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwdmg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgLmJ1dHRvbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuY29udGFpbmVyIC5jb250ZW50LXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3Jpcyk7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAzNXJlbTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgbWFyZ2luLWJvdHRvbTogLTJyZW07XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmhlYWRlciBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5oZWFkZXIgLnRpdGxlIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5mb3JtdWxhaXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuZm9ybXVsYWlyZSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGV4dC1wdXJwbGUtZGFya2UpO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5mb3JtdWxhaXJlIGlvbi1pbnB1dCB7XG4gIG1heC13aWR0aDogMjByZW07XG4gIHdpZHRoOiA3MHZ3O1xuICBoZWlnaHQ6IDIuNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiA5cHggOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDFyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuZm9ybXVsYWlyZSBpb24taW5wdXQgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5mb3JtdWxhaXJlIC5mb3Jnb3QtcGFzc3dvcmQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5mb3JtdWxhaXJlIC5zZXBhcmF0ZSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmNob2ljZS1zcGFjZSB7XG4gIHBhZGRpbmctdG9wOiA1MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuY2hvaWNlLXNwYWNlIC5idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAxMHZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/authentication/authentication.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.page.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPage", function() { return AuthenticationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_africlean_control_fields_africlean_control_authentication_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/africlean-control-fields/africlean-control-authentication.provider */ "./src/providers/africlean-control-fields/africlean-control-authentication.provider.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/africlean-http/africlean-http-user.provider */ "./src/providers/africlean-http/africlean-http-user.provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");
/* harmony import */ var src_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/providers/africlean-observables/africlean-observables.provider */ "./src/providers/africlean-observables/africlean-observables.provider.ts");
/* harmony import */ var src_providers_africlean_websocket_africlean_websocket_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/providers/africlean-websocket/africlean-websocket.provider */ "./src/providers/africlean-websocket/africlean-websocket.provider.ts");










var AuthenticationPage = /** @class */ (function () {
    /**
     * Constructeur de la page
     * @param navCtrl
     * @param secMobilService
     */
    function AuthenticationPage(navCtrl, controlField, translateService, httpUser, route, session, observableProvider, websocket) {
        this.navCtrl = navCtrl;
        this.controlField = controlField;
        this.translateService = translateService;
        this.httpUser = httpUser;
        this.route = route;
        this.session = session;
        this.observableProvider = observableProvider;
        this.websocket = websocket;
        /**
         * Etat du spinner de chargement
         */
        this.hideSpinner = true;
        /**
         * Afficher un message de confirmation une fois enregistrer
         */
        this.displayRegistrationConfirmation = false;
    }
    /**
     * Initialisation de la page
     */
    AuthenticationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.displayRegistrationConfirmation = params.displayRegistrationConfirmation;
        });
    };
    /**
     * Lance l'authentification
     */
    AuthenticationPage.prototype.sendAuthent = function () {
        var _this = this;
        var fields = {
            login: this.login,
            password: this.password
        };
        var result = this.controlField.authentication(fields);
        this.hideSpinner = result.hideSpinner;
        if (result.message != null) {
            this.getMessage(result.message);
        }
        else {
            this.errorMsg = result.message;
            this.httpUser.login('login/login-user', fields.login, fields.password).subscribe(function (user) {
                _this.goToHome(user);
            });
        }
    };
    /**
     * Renvoie le bon message
     * @param message message à afficher
     */
    AuthenticationPage.prototype.getMessage = function (message) {
        var _this = this;
        this.translateService.get(message).subscribe(function (res) {
            _this.errorMsg = res;
        });
    };
    /**
     * Permet de créer une session pour l'utilisateur
     */
    AuthenticationPage.prototype.setSession = function () {
    };
    /**
     * Rédirige vers l'inscription
     */
    AuthenticationPage.prototype.goRegistration = function () {
        this.navCtrl.navigateForward('registration');
    };
    /**
     * Rédirige vers la récuperation du mot de passe
     */
    AuthenticationPage.prototype.forgotPassword = function () {
    };
    /**
     * Récupère le compte correspondant à l'espace
     * @param space Rôle
     */
    AuthenticationPage.prototype.goTo = function (space) {
        var _this = this;
        var userId = '';
        var role = '';
        this.counts.forEach(function (userLog) {
            if (userLog.role === space) {
                userId = userLog.objectId;
                role = userLog.role;
            }
        });
        this.httpUser.loged('login/user-loged/', userId).subscribe(function (user) {
            _this.setSessionVariables(user, role).then(function (_) {
                // Signale une nouvelle session
                _this.observableProvider.isAuth.emit(true);
                _this.setPseudoToServer();
                _this.navCtrl.navigateForward('home');
            });
        });
    };
    /**
     * Renseigne les variables de session
     * @param user Utilisateur connecté
     */
    AuthenticationPage.prototype.setSessionVariables = function (user, role) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.session.setItem('user', user)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.session.setItem('userId', user.objectId)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.session.setItem('login', user.phoneNumber)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.session.setItem('password', user.password)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.session.setItem('role', role)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.session.setItem('isSubscribe', user.isSubscribe)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Rédirige l'utilisateur vers le bon espace
     * @param userLog User log
     */
    AuthenticationPage.prototype.goToHome = function (userLog) {
        var _this = this;
        if (userLog.length === 0) {
            // le compte n'existe pas
            this.getMessage('PAGES.AUTHENTICATION.ERROR.NOT_EXIST_COUNT');
            this.hideSpinner = true;
        }
        if (userLog.length > 0) {
            var role_1 = userLog[0].role;
            // Dans le cas ou l'utilisateur à un seul compte
            if (userLog.length === 1) {
                this.httpUser.loged('login/user-loged/', userLog[0].objectId).subscribe(function (user) {
                    _this.setSessionVariables(user, role_1).then(function (_) {
                        // Signale une nouvelle session
                        _this.observableProvider.isAuth.emit(true);
                        _this.setPseudoToServer();
                        _this.navCtrl.navigateForward('home');
                    });
                });
            }
            // Dans le cas ou l'utilisateur à deux comptes. Donc il faut donner le choix
            // a l'utilisateur de choisir entre les deux comptes
            if (userLog.length === 2) {
                // donner le choix
                this.counts = userLog;
            }
        }
    };
    /**
     * Envoi le userId au serveur
     */
    AuthenticationPage.prototype.setPseudoToServer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.session.getItem('userId')];
                    case 1:
                        userId = _a.sent();
                        this.websocket.emit('newClient', userId);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_providers_africlean_control_fields_africlean_control_authentication_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanControlAuthenticationProvider"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: src_providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanHttpUserProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_7__["AfricleanSessionProvider"] },
        { type: src_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_8__["AfricleanObservablesProvider"] },
        { type: src_providers_africlean_websocket_africlean_websocket_provider__WEBPACK_IMPORTED_MODULE_9__["AfricleanWebsocketProvider"] }
    ]; };
    AuthenticationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-authentication',
            template: __webpack_require__(/*! raw-loader!./authentication.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/authentication/authentication.page.html"),
            styles: [__webpack_require__(/*! ./authentication.page.scss */ "./src/app/pages/authentication/authentication.page.scss")]
        })
        /**
         * Page d'authentification iOS via SECmobile
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_providers_africlean_control_fields_africlean_control_authentication_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanControlAuthenticationProvider"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            src_providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanHttpUserProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_7__["AfricleanSessionProvider"],
            src_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_8__["AfricleanObservablesProvider"],
            src_providers_africlean_websocket_africlean_websocket_provider__WEBPACK_IMPORTED_MODULE_9__["AfricleanWebsocketProvider"]])
    ], AuthenticationPage);
    return AuthenticationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-authentication-authentication-module-es5.js.map