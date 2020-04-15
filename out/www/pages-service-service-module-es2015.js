(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-service-service-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/service/service.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/service/service.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"container\" >\n  \n  <div class=\"content-page\">\n\n      <div class=\"header\">\n        {{ 'PAGES.SERVICE.TITLE' | translate }}\n      </div>\n\n      <div class=\"toggle\">\n\n        <!-- Planning pour les jours de passage -->\n        <ion-item class=\"planning-toggle\">\n          <ion-label>{{ 'PAGES.SERVICE.TOGGLE.PLANNING' | translate }}</ion-label>\n          <ion-toggle color=\"medium\" (ionChange)=\"togglePlanning($event)\">\n          </ion-toggle>\n        </ion-item>\n\n        <div class=\"planning\" *ngIf=\"planningCheck\">\n          <ion-list>    \n            <ion-item *ngFor=\"let planning of passageDays\">\n              <ion-label>\n                <h2>{{ planning.day }}</h2>\n                <h3>{{ planning.time }}</h3>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n\n        <!-- Les avis des personnes -->\n        <ion-item class=\"comments-toggle\">\n          <ion-label>{{ 'PAGES.SERVICE.TOGGLE.COMMENTS' | translate }}</ion-label>\n          <ion-toggle color=\"medium\" (ionChange)=\"toggleComments($event)\">\n          </ion-toggle>\n        </ion-item>\n\n        <div class=\"comments\" *ngIf=\"commentsCheck\"> \n          <africlean-comments></africlean-comments>\n        </div>\n\n      </div>\n\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/service/service.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/service/service.module.ts ***!
  \*************************************************/
/*! exports provided: ServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePageModule", function() { return ServicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service.page */ "./src/app/pages/service/service.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _service_page__WEBPACK_IMPORTED_MODULE_5__["ServicePage"]
    }
];
let ServicePageModule = class ServicePageModule {
};
ServicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild(),
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_service_page__WEBPACK_IMPORTED_MODULE_5__["ServicePage"]]
    })
], ServicePageModule);



/***/ }),

/***/ "./src/app/pages/service/service.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/service/service.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 15vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  margin-bottom: 2rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: var(--ion-color-manage-passage);\n}\n.container .content-page .toggle .planning-toggle ion-label, .container .content-page .toggle .comments-toggle ion-label {\n  color: var(--ion-color-manage-passage);\n  font-weight: bold;\n}\n.container .content-page .toggle .planning ion-item ion-label h2 {\n  color: var(--ion-color-manage-passage);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZS9DOlxcVXNlcnNcXHRtZGlhbGxvXFxEb2N1bWVudHNcXFByb2pldF9BZnJpcXVlXFxBZnJpY2xlYW5cXGFmcmljbGVhbi1pb25pYy9zcmNcXGFwcFxccGFnZXNcXHNlcnZpY2VcXHNlcnZpY2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXJ2aWNlL3NlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksZ0JBQUE7QUNEUjtBREdRO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0FDRFo7QURRZ0I7RUFDSSxzQ0FBQTtFQUNBLGlCQUFBO0FDTnBCO0FEZXdCO0VBQ0ksc0NBQUE7QUNiNUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXJ2aWNlL3NlcnZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuXHJcbiAgICAuY29udGVudC1wYWdle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1dmg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1hbmFnZS1wYXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50b2dnbGV7XHJcblxyXG4gICAgICAgICAgICAucGxhbm5pbmctdG9nZ2xlLCAuY29tbWVudHMtdG9nZ2xle1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5hZ2UtcGFzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wbGFubmluZ3tcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW9uLWl0ZW17XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1hbmFnZS1wYXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSB7XG4gIG1hcmdpbi10b3A6IDE1dmg7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5hZ2UtcGFzc2FnZSk7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLnRvZ2dsZSAucGxhbm5pbmctdG9nZ2xlIGlvbi1sYWJlbCwgLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC50b2dnbGUgLmNvbW1lbnRzLXRvZ2dsZSBpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1hbmFnZS1wYXNzYWdlKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLnRvZ2dsZSAucGxhbm5pbmcgaW9uLWl0ZW0gaW9uLWxhYmVsIGgyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5hZ2UtcGFzc2FnZSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/service/service.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/service/service.page.ts ***!
  \***********************************************/
/*! exports provided: ServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePage", function() { return ServicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicePage = class ServicePage {
    constructor() {
        this.planningCheck = false;
        this.commentsCheck = false;
    }
    ngOnInit() {
        // TMP : a supprimer
        this.passageDays = [
            {
                day: 'Lundi',
                time: '15h30'
            },
            {
                day: 'Jeudi',
                time: '09h00'
            }
        ];
    }
    /**
     * Switch vers le planning
     * @param event evenement
     */
    togglePlanning(event) {
        this.planningCheck = event.detail.checked;
    }
    /**
     * Switch vers les commentaires
     * @param event événement
     */
    toggleComments(event) {
        this.commentsCheck = event.detail.checked;
    }
};
ServicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service',
        template: __webpack_require__(/*! raw-loader!./service.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/service/service.page.html"),
        styles: [__webpack_require__(/*! ./service.page.scss */ "./src/app/pages/service/service.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ServicePage);



/***/ })

}]);
//# sourceMappingURL=pages-service-service-module-es2015.js.map