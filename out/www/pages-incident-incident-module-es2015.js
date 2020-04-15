(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-incident-incident-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/incident/incident.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/incident/incident.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"container\">\n\n  <div  class=\"content-page\">\n\n    <div class=\"header\">\n      {{ 'PAGES.INCIDENT.TITLE' | translate }}\n    </div>\n    \n    <!-- Afficher le numéro de téléphone du pôle qui s'occupe de l'incident -->\n    <div class=\"phone-number\">\n      {{ 'PAGES.INCIDENT.TEXT' | translate }} <span>{{ phoneNumber }}</span>\n    </div>\n    \n    <div class=\"incident-form\">      \n      <africlean-incident></africlean-incident>\n    </div>\n\n    <div class=\"title\">Liste des incidents</div>\n\n    <div class=\"incident-list\">\n        <africlean-incidents-list></africlean-incidents-list>\n    </div>\n  \n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/incident/incident.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/incident/incident.module.ts ***!
  \***************************************************/
/*! exports provided: IncidentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentPageModule", function() { return IncidentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _incident_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./incident.page */ "./src/app/pages/incident/incident.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









const routes = [
    {
        path: '',
        component: _incident_page__WEBPACK_IMPORTED_MODULE_6__["IncidentPage"]
    }
];
let IncidentPageModule = class IncidentPageModule {
};
IncidentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
        ],
        declarations: [_incident_page__WEBPACK_IMPORTED_MODULE_6__["IncidentPage"]]
    })
], IncidentPageModule);



/***/ }),

/***/ "./src/app/pages/incident/incident.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/incident/incident.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 14vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  margin-bottom: 2rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: var(--ion-color-manage-incidents);\n}\n.container .content-page .phone-number {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n.container .content-page .phone-number span {\n  color: var(--ion-color-manage-incidents);\n}\n.container .content-page .title {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-decoration: underline;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin-right: auto;\n  margin-left: auto;\n  font-weight: bold;\n  color: var(--color-grey);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5jaWRlbnQvQzpcXFVzZXJzXFx0bWRpYWxsb1xcRG9jdW1lbnRzXFxQcm9qZXRfQWZyaXF1ZVxcQWZyaWNsZWFuXFxhZnJpY2xlYW4taW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFxpbmNpZGVudFxcaW5jaWRlbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbmNpZGVudC9pbmNpZGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFFSSxnQkFBQTtBQ0ZSO0FESVE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0Esd0NBQUE7QUNGWjtBREtRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0haO0FESVk7RUFDSSx3Q0FBQTtBQ0ZoQjtBRE1RO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNKWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luY2lkZW50L2luY2lkZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcblxyXG4gICAgLmNvbnRlbnQtcGFnZXtcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTR2aDtcclxuICAgICAgICBcclxuICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JleSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFuYWdlLWluY2lkZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGhvbmUtbnVtYmVye1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1hbmFnZS1pbmNpZGVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSB7XG4gIG1hcmdpbi10b3A6IDE0dmg7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5hZ2UtaW5jaWRlbnRzKTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAucGhvbmUtbnVtYmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5waG9uZS1udW1iZXIgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFuYWdlLWluY2lkZW50cyk7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/incident/incident.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/incident/incident.page.ts ***!
  \*************************************************/
/*! exports provided: IncidentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentPage", function() { return IncidentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IncidentPage = class IncidentPage {
    constructor() { }
    ngOnInit() {
        this.phoneNumber = '343 345 564';
    }
    report() {
    }
};
IncidentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-incident',
        template: __webpack_require__(/*! raw-loader!./incident.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/incident/incident.page.html"),
        styles: [__webpack_require__(/*! ./incident.page.scss */ "./src/app/pages/incident/incident.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IncidentPage);



/***/ })

}]);
//# sourceMappingURL=pages-incident-incident-module-es2015.js.map