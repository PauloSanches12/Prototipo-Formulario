(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-informacoes-academicas></app-informacoes-academicas>\n<app-informacoes-profissionais></app-informacoes-profissionais>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'projeto-LPWEB';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _informacoes_academicas_informacoes_academicas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./informacoes-academicas/informacoes-academicas.component */ "./src/app/informacoes-academicas/informacoes-academicas.component.ts");
/* harmony import */ var _informacoes_profissionais_informacoes_profissionais_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./informacoes-profissionais/informacoes-profissionais.component */ "./src/app/informacoes-profissionais/informacoes-profissionais.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _informacoes_academicas_informacoes_academicas_component__WEBPACK_IMPORTED_MODULE_5__["InformacoesAcademicasComponent"],
                _informacoes_profissionais_informacoes_profissionais_component__WEBPACK_IMPORTED_MODULE_6__["InformacoesProfissionaisComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/informacoes-academicas/informacoes-academicas.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/informacoes-academicas/informacoes-academicas.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 16px;\r\n    text-align: justify;\r\n}\r\n\r\nh2#academico{\r\n    position: absolute;\r\n    left: 65%;\r\n    top: 63%;\r\n    color: rgb(61, 104, 145);\r\n    \r\n}\r\n\r\np#uni {\r\n    top: 70%;\r\n    left: 57%;\r\n    position: absolute;\r\n    \r\n}\r\n\r\np#curso{\r\n    top: 70%;\r\n    left: 75%;\r\n    position: absolute;\r\n    \r\n}\r\n\r\nh3{\r\n    font-size: 22px;\r\n    color: rgb(61, 104, 145);\r\n    \r\n}\r\n\r\nh3#desc1{\r\n    position: absolute;\r\n    top: 75%;\r\n    left: 50%;\r\n    color: rgb(29, 157, 216);\r\n}\r\n\r\nul#parte1 {\r\n    position: absolute;\r\n    left: 49%;\r\n    top: 80%;\r\n    \r\n}\r\n\r\nh3#desc2{\r\n    position: absolute;\r\n    top: 75%;\r\n    left: 75%;\r\n    color: rgb(29, 157, 216);\r\n}\r\n\r\nul#parte2{\r\n    position: absolute;\r\n    left: 75%;\r\n    top: 80%;\r\n}\r\n\r\nh3#desc3 {\r\n    position: absolute;\r\n    top: 95%;\r\n    left: 50%;\r\n    color: rgb(29, 157, 216);\r\n    height: 100%;\r\n}\r\n\r\nul#parte3 {\r\n    position: absolute;\r\n    left: 49%;\r\n    top: 100%;\r\n}\r\n\r\nh3#desc4 {\r\n    position: absolute;\r\n    top: 95%;\r\n    left: 76%;\r\n    color: rgb(29, 157, 216);\r\n}\r\n\r\nul#parte4 {\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 75%;\r\n}\r\n\r\nh3#desc5 {\r\n    position: absolute;\r\n    top: 115%;\r\n    left: 50%;\r\n    color: rgb(29, 157, 216);\r\n}\r\n\r\nul#parte6 {\r\n    position: absolute;\r\n    top: 120%;\r\n    left: 49%;\r\n    \r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mb3JtYWNvZXMtYWNhZGVtaWNhcy9pbmZvcm1hY29lcy1hY2FkZW1pY2FzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLHdCQUF3Qjs7QUFFNUI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCOztBQUU1Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTs7QUFFWjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtBQUNaOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTOztBQUViIiwiZmlsZSI6InNyYy9hcHAvaW5mb3JtYWNvZXMtYWNhZGVtaWNhcy9pbmZvcm1hY29lcy1hY2FkZW1pY2FzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5oMiNhY2FkZW1pY297XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA2NSU7XHJcbiAgICB0b3A6IDYzJTtcclxuICAgIGNvbG9yOiByZ2IoNjEsIDEwNCwgMTQ1KTtcclxuICAgIFxyXG59XHJcblxyXG5wI3VuaSB7XHJcbiAgICB0b3A6IDcwJTtcclxuICAgIGxlZnQ6IDU3JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIFxyXG59XHJcbnAjY3Vyc297XHJcbiAgICB0b3A6IDcwJTtcclxuICAgIGxlZnQ6IDc1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIFxyXG59XHJcblxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiByZ2IoNjEsIDEwNCwgMTQ1KTtcclxuICAgIFxyXG59XHJcbmgzI2Rlc2Mxe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3NSU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBjb2xvcjogcmdiKDI5LCAxNTcsIDIxNik7XHJcbn1cclxuXHJcbnVsI3BhcnRlMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0OSU7XHJcbiAgICB0b3A6IDgwJTtcclxuICAgIFxyXG59XHJcblxyXG5oMyNkZXNjMntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzUlO1xyXG4gICAgbGVmdDogNzUlO1xyXG4gICAgY29sb3I6IHJnYigyOSwgMTU3LCAyMTYpO1xyXG59XHJcblxyXG51bCNwYXJ0ZTJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA3NSU7XHJcbiAgICB0b3A6IDgwJTtcclxufVxyXG5cclxuXHJcbmgzI2Rlc2MzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOTUlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgY29sb3I6IHJnYigyOSwgMTU3LCAyMTYpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG51bCNwYXJ0ZTMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNDklO1xyXG4gICAgdG9wOiAxMDAlO1xyXG59XHJcblxyXG5oMyNkZXNjNCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDk1JTtcclxuICAgIGxlZnQ6IDc2JTtcclxuICAgIGNvbG9yOiByZ2IoMjksIDE1NywgMjE2KTtcclxufVxyXG5cclxudWwjcGFydGU0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDc1JTtcclxufVxyXG5cclxuaDMjZGVzYzUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMTUlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgY29sb3I6IHJnYigyOSwgMTU3LCAyMTYpO1xyXG59XHJcblxyXG51bCNwYXJ0ZTYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMjAlO1xyXG4gICAgbGVmdDogNDklO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/informacoes-academicas/informacoes-academicas.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/informacoes-academicas/informacoes-academicas.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"cor\">\n  <h3 id=\"desc1\">Disciplinas 1º Periodo</h3>\n  <ul id=\"parte1\">\n    <li *ngFor='let disciplina of disciplinas1'>\n      {{disciplina}}\n    </li>\n  </ul>\n\n  <h3 id=\"desc2\">Disciplinas 2º Periodo</h3>\n    <ul id=\"parte2\">\n      <li *ngFor='let disciplina of disciplinas2'>\n        {{disciplina}}\n      </li>\n    </ul>\n\n    <h3 id=\"desc3\">Disciplinas 3º Perido</h3>\n    <ul id=\"parte3\" >\n      <li *ngFor='let disciplina of disciplinas3'>\n        {{disciplina}}\n      </li>\n    </ul>\n\n    <h3 id=\"desc4\">Disciplinas 4º Periodo</h3>\n    <ul id=\"parte4\">\n      <li *ngFor='let disciplina of disciplinas4'>\n        {{disciplina}}\n      </li>\n    </ul>\n\n    <h3 id=\"desc5\">Disciplinas 5º Periodo</h3>\n    <ul id=\"parte6\">\n      <li *ngFor='let disciplina of disciplinas5'>\n        {{disciplina}}\n      </li>\n    </ul>\n\n  <p id=\"uni\"><b>Universidade:</b> {{uni}}</p>\n  <p id=\"curso\"><b>Curso: </b>{{curso}}</p>\n  <h2 id=\"academico\">Informações Acadêmicas</h2>\n</body>"

/***/ }),

/***/ "./src/app/informacoes-academicas/informacoes-academicas.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/informacoes-academicas/informacoes-academicas.component.ts ***!
  \****************************************************************************/
/*! exports provided: InformacoesAcademicasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacoesAcademicasComponent", function() { return InformacoesAcademicasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InformacoesAcademicasComponent = /** @class */ (function () {
    function InformacoesAcademicasComponent() {
        this.disciplinas1 = [
            'Algoritmos e Programação I',
            "Comunicação e Expressão",
            "Cultura Religiosa",
            "Fundamentos de Matemática",
            "Introdução a Computação",
        ];
        this.disciplinas2 = [
            "Algoritmos e Programação II",
            "Arquitetura e Organização de Computadores I",
            "Instrumentalização Cientifica",
            "Logica de Predicados",
            "Sociedade e Contemporaneidade",
        ];
        this.disciplinas3 = [
            "Banco de Dados I",
            "Engenharia de Software I",
            "Estruturas de Dados I",
            "Geometria Analitica e Álgebra Linear",
            "Linguagem de Programação Orientada a Objetos I",
        ];
        this.disciplinas4 = [
            "Banco de Dados II",
            "Empreendedorismo",
            "Engenharia de Software II",
            "Linguagem de Programação Comercial I",
            "Sistemas de Informação I",
        ];
        this.disciplinas5 = [
            'LP-WEB',
            'Teste de Software',
            'Sistema de Informação II',
            'Fundamentos de Sistema de Informação',
            'Modelagem de Sistemas de Informação'
        ];
        this.uni = [
            "CEULP-ULBRA"
        ];
        this.curso = [
            'Engenharia de Software'
        ];
    }
    InformacoesAcademicasComponent.prototype.ngOnInit = function () {
    };
    InformacoesAcademicasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-informacoes-academicas',
            template: __webpack_require__(/*! ./informacoes-academicas.component.html */ "./src/app/informacoes-academicas/informacoes-academicas.component.html"),
            styles: [__webpack_require__(/*! ./informacoes-academicas.component.css */ "./src/app/informacoes-academicas/informacoes-academicas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InformacoesAcademicasComponent);
    return InformacoesAcademicasComponent;
}());



/***/ }),

/***/ "./src/app/informacoes-profissionais/informacoes-profissionais.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/informacoes-profissionais/informacoes-profissionais.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    text-align: justify;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 16px;\r\n    \r\n}\r\n\r\np#empresa {\r\n    position: absolute;\r\n    top: 148%;\r\n    left: 51%;\r\n    \r\n}\r\n\r\nh2 {\r\n    position: absolute;\r\n    top: 63%;\r\n    left: 40px;\r\n    color: rgb(61, 104, 145);\r\n    \r\n}\r\n\r\np#cargo{\r\n    position: absolute;\r\n    top: 152%;\r\n    left: 51%;\r\n    \r\n}\r\n\r\nh2#info {\r\n    position: absolute;\r\n    left: 60%;\r\n    top: 140%;\r\n    color: rgb(61, 104, 145);\r\n    \r\n}\r\n\r\nul#lista{\r\n    position: absolute;\r\n    top: 70%;\r\n    list-style: none;\r\n}\r\n\r\nh2#bio {\r\n    position: absolute;\r\n    top: 33%;\r\n    left: 44%;\r\n    color: rgb(61, 104, 145);\r\n    \r\n}\r\n\r\np{\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 450px;\r\n    right: 500px;\r\n}\r\n\r\nimg{\r\n    border-radius: 100%;\r\n    height: 200px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    width: 200px;\r\n    position: relative;\r\n    top: 25px;\r\n    left: 40%;  \r\n  }\r\n\r\nfigure.figura img{\r\n    max-width: 2.1%;\r\n    height: auto;\r\n    width: auto;\r\n    position: absolute;\r\n    top: 90%;\r\n    left: 5%;\r\n\r\n  }\r\n\r\nfigure.figura2 img{\r\n    max-width: 3.8%;\r\n    height: auto;\r\n    width: auto;\r\n    position: absolute;\r\n    top: 88.2%;\r\n    left: 7.5%;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mb3JtYWNvZXMtcHJvZmlzc2lvbmFpcy9pbmZvcm1hY29lcy1wcm9maXNzaW9uYWlzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTOztBQUViOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1Ysd0JBQXdCOztBQUU1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULHdCQUF3Qjs7QUFFNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdCQUF3Qjs7QUFFNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7RUFDWDs7QUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTs7RUFFVjs7QUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvaW5mb3JtYWNvZXMtcHJvZmlzc2lvbmFpcy9pbmZvcm1hY29lcy1wcm9maXNzaW9uYWlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgXHJcbn1cclxuXHJcbnAjZW1wcmVzYSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0OCU7XHJcbiAgICBsZWZ0OiA1MSU7XHJcbiAgICBcclxufVxyXG5cclxuaDIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MyU7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG4gICAgY29sb3I6IHJnYig2MSwgMTA0LCAxNDUpO1xyXG4gICAgXHJcbn1cclxuXHJcbnAjY2FyZ297XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1MiU7XHJcbiAgICBsZWZ0OiA1MSU7XHJcbiAgICBcclxufVxyXG5cclxuaDIjaW5mbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA2MCU7XHJcbiAgICB0b3A6IDE0MCU7XHJcbiAgICBjb2xvcjogcmdiKDYxLCAxMDQsIDE0NSk7XHJcbiAgICBcclxufVxyXG5cclxudWwjbGlzdGF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDcwJTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmgyI2JpbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMzJTtcclxuICAgIGxlZnQ6IDQ0JTtcclxuICAgIGNvbG9yOiByZ2IoNjEsIDEwNCwgMTQ1KTtcclxuICAgIFxyXG59XHJcblxyXG5we1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiA0NTBweDtcclxuICAgIHJpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjVweDtcclxuICAgIGxlZnQ6IDQwJTsgIFxyXG4gIH1cclxuXHJcbiAgZmlndXJlLmZpZ3VyYSBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDIuMSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOTAlO1xyXG4gICAgbGVmdDogNSU7XHJcblxyXG4gIH1cclxuXHJcbiAgZmlndXJlLmZpZ3VyYTIgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAzLjglO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDg4LjIlO1xyXG4gICAgbGVmdDogNy41JTtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/informacoes-profissionais/informacoes-profissionais.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/informacoes-profissionais/informacoes-profissionais.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body>\n    <img src=\"assets/eu.jpg\">\n    \n  <p id=\"empresa\"><b>Empresa:</b> {{trabalho}}</p>\n\n  <p id=\"cargo\"><b>Cargo:</b> {{funcao}}</p>\n  \n\n  <h2 id=\"info\">Informações Profissionais</h2>\n  <h2>Dados Pessoais</h2>\n\n    <ul id=\"lista\">\n      <li *ngFor=\"let dado of dados\">\n        {{dado.nasc}}  \n        {{dado.data}}\n\n        {{dado.gen}}\n        {{dado.sexo}}\n\n        {{dado.mail}}\n        {{dado.email}}\n\n        {{dado.prof}}\n        {{dado.profissao}}\n\n        {{dado.estado}}\n        {{dado.estado_civil}}\n\n        {{dado.city}}\n        {{dado.cidade}}\n      </li>\n    </ul>\n  <figure class=\"figura\">\n    <a href=\"https://www.facebook.com/profile.php?id=100003898489518\" target=\"_blank\"><img src=\"assets/icon-facebook.png\" title=\"Facebook\"/></a>\n  </figure>\n\n  <figure class=\"figura2\">\n    <a href=\"https://github.com/PauloSanches12?tab=repositories\" target=\"_blank\"><img src=\"assets/GitHub-Mark.png\" title=\"GitHub\"/></a>\n  </figure>\n    \n  <h2 id=\"bio\">Biografia</h2>\n  <p>{{biografia}}</p>\n</body>\n  \n\n"

/***/ }),

/***/ "./src/app/informacoes-profissionais/informacoes-profissionais.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/informacoes-profissionais/informacoes-profissionais.component.ts ***!
  \**********************************************************************************/
/*! exports provided: InformacoesProfissionaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacoesProfissionaisComponent", function() { return InformacoesProfissionaisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InformacoesProfissionaisComponent = /** @class */ (function () {
    function InformacoesProfissionaisComponent() {
        this.trabalho = [
            "CRP Itaipava"
        ];
        this.funcao = [
            "Auxiliar Administrativo"
        ];
        this.dados = [
            { nasc: "Nascimento:", data: "03/11/98" },
            { gen: "Gênero:", sexo: "Masculino" },
            { mail: "E-mail:", email: "paulo_sanches2012@hotmail.com" },
            { prof: "Profissão:", profissao: "Estudante" },
            { estado: "Estado Civil:", estado_civil: "Solteiro" },
            { city: "Cidade:", cidade: "Palmas-TO" }
        ];
        this.biografia = 'Meu nome é Paulo Sérgio Sanches dos Santos, nascido em Araguaína Tocantins, \
   no ano de 1998, filho de Lucimar Maria Alves dos Santos Cruz e Edmundo Sanches da Cruz, \
    com quem morei até meus 18 anos na cidade de Angico Tocantins, que foi quando eu terminei \
     meus estudos e decidir vir morar em Palmas, no ano de 2017 para cursar engenharia de software. \
      Onde estou atualmente no 5º Período com previsão de conclusão para 2020.';
    }
    InformacoesProfissionaisComponent.prototype.ngOnInit = function () {
    };
    InformacoesProfissionaisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-informacoes-profissionais',
            template: __webpack_require__(/*! ./informacoes-profissionais.component.html */ "./src/app/informacoes-profissionais/informacoes-profissionais.component.html"),
            styles: [__webpack_require__(/*! ./informacoes-profissionais.component.css */ "./src/app/informacoes-profissionais/informacoes-profissionais.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InformacoesProfissionaisComponent);
    return InformacoesProfissionaisComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\paulo\Desktop\projeto-LPWEB\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map