webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* GLOBAL STYLES\r\n-------------------------------------------------- */\r\n/* Padding below the footer and lighter body text */\r\n\r\nbody {\r\n    padding-bottom: 10px;\r\n    color: #5a5a5a;\r\n  }\r\n  \r\n  \r\n  /* CUSTOMIZE THE NAVBAR\r\n  -------------------------------------------------- */\r\n\r\n  .container1{\r\n    width: 90%;\r\n    margin-bottom: 0px;\r\n      \r\n  }\r\n  /* Special class on .container surrounding .navbar, used for positioning it into place. */\r\n  .navbar-wrapper {\r\n    position: absolute;\r\n    border-radius: 30px;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 20;\r\n  }\r\n  \r\n  /* Flip around the padding for proper display in narrow viewports */\r\n  .navbar-wrapper > .container {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n  .navbar-wrapper .navbar {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n  .navbar-wrapper .navbar .container {\r\n    width: auto;\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    .featurette-heading {\r\n      margin-top: 120px;\r\n    }\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"container container1\">\n\n  <nav class=\"navbar navbar-inverse navbar-static-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n       \n        <a class=\"navbar-brand\" href=\"#\">Project name</a>\n      </div>\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]={exact:true}>\n            <a href=\"#\">Home</a>\n          </li>\n          <li routerLink=\"/add\" routerLinkActive=\"active\" [routerLinkActiveOptions]={exact:true}>\n            <a href=\"#add\">Add</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>\n\n<div class=\" container container1\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_patient_list_patient_list_component__ = __webpack_require__("../../../../../src/app/components/patient-list/patient-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_patients_service__ = __webpack_require__("../../../../../src/app/services/patients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_discrete_service__ = __webpack_require__("../../../../../src/app/services/discrete.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_patient_add_patient_add_component__ = __webpack_require__("../../../../../src/app/components/patient-add/patient-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_patient_update_patient_update_component__ = __webpack_require__("../../../../../src/app/components/patient-update/patient-update.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var allRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_patient_list_patient_list_component__["a" /* PatientListComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_15__components_patient_add_patient_add_component__["a" /* PatientAddComponent */] },
    { path: 'update/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_patient_update_patient_update_component__["a" /* PatientUpdateComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_12__components_patient_list_patient_list_component__["a" /* PatientListComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_patient_list_patient_list_component__["a" /* PatientListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_patient_add_patient_add_component__["a" /* PatientAddComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_patient_update_patient_update_component__["a" /* PatientUpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__["FileSelectDirective"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(allRoutes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__["Ng2SearchPipeModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__["Ng2OrderModule"],
                __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_patients_service__["a" /* PatientsService */], __WEBPACK_IMPORTED_MODULE_14__services_discrete_service__["a" /* DiscreteService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/patient-add/patient-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.form-container {\r\n    position: relative;\r\n    /* width:80%; */\r\n    padding:3em;\r\n    text-align: center;\r\n    margin: 2em auto;\r\n    background: white;\r\n    border-radius: 10px;\r\n    height: auto;\r\n}\r\n\r\n.x3{\r\n    margin-left: 30px;\r\n    width: 29.5%;\r\n}\r\n\r\n.x4{\r\n    margin-left: 30px;\r\n    width: 21.5%;\r\n}\r\n.heading{\r\n    margin-top: 25px;\r\n}\r\n\r\n.text-box{\r\n    margin-left: 30px;\r\n    width: 93.5%;\r\n}\r\n\r\n.address{\r\n    overflow: hidden;\r\n}\r\n\r\n.alert {\r\n    background: #f2edda;\r\n    padding: 7px;\r\n    font-size: .7em;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n.button {\r\n    margin-top: 3rem;\r\n}\r\nh1 {\r\n    margin-bottom: 2rem;\r\n    font-weight:bold;\r\n    font-family:'Muli';\r\n    font-size: 2em;\r\n}\r\n\r\nimg {\r\n    border-radius: 10%;\r\n    height: 150px;\r\n    width: 150px;\r\n    position: relative;\r\n    right: 335px;\r\n}\r\n.form-group.required .control-label:after { \r\n    content:\"*\";\r\n    color:red;\r\n }\r\n\r\n@-webkit-keyframes alertAnim {\r\n    from {\r\n        opacity:0;\r\n        -webkit-transform: translateY(-10px);\r\n                transform: translateY(-10px);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes alertAnim {\r\n    from {\r\n        opacity:0;\r\n        -webkit-transform: translateY(-10px);\r\n                transform: translateY(-10px);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}   \r\n\r\n@media only screen and (max-width:1040px){\r\n    /* styles for browsers larger than 1040px; */\r\n    .x3, .x4, .text-box{\r\n        width: 80%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/patient-add/patient-add.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Reactive form Demo -->\r\n<div>\r\n    <form [formGroup]=\"rForm\" (ngSubmit)=\"addPatient(rForm.value)\" method=\"POST\" enctype=\"multipart/form-data\" novalidate>\r\n        <div class=\"form-container\">\r\n            <legend class=\"heading\">Add a new Patient</legend>  \r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-3 x3 required\">\r\n                    <label class=\"pull-left control-label\" required>First Name</label>\r\n                    <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"fname\" ngModel>\r\n                <!-- Validation for Name label -->\r\n                    <div class=\"alert pull-left\" *ngIf=\"!rForm.controls['fname'].valid &&  rForm.controls['fname'].touched\">{{ titleAlert }}</div>\r\n                    <div class=\"alert pull-left\" *ngIf=\"!rForm.controls['fname'].valid && (rForm.controls['fname'].dirty)\">Can't contain Numbers</div>\r\n                </div>\r\n    \r\n                <div class=\"form-group col-md-3 x3\">\r\n                    <label class=\"pull-left\">Middle Name</label>\r\n                    <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"mname\">\r\n                    <div class=\"alert pull-left\" *ngIf=\"!rForm.controls['mname'].valid && (rForm.controls['mname'].dirty)\">Can't contain Numbers</div>\r\n                </div>\r\n            <!-- </div> -->\r\n\r\n                <div class=\"form-group col-md-3 x3 required\">\r\n                    <label class=\"pull-left control-label\">Last Name</label>\r\n                    <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"lname\">\r\n                    <!-- Validation for Name label -->\r\n                    <div class=\"alert pull-left\" *ngIf=\"!rForm.controls['lname'].valid &&  rForm.controls['lname'].touched\">{{ titleAlert }}</div>\r\n                    <div class=\"alert pull-left\" *ngIf=\"!rForm.controls['lname'].valid && (rForm.controls['lname'].dirty)\">Can't contain Numbers</div>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-2 x4\">\r\n                    <label class=\"pull-left\">SSN</label>\r\n                    <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"ssn\">\r\n                    <div class=\"alert pull-left\" *ngIf=\"!rForm.controls['ssn'].valid && (rForm.controls['ssn'].dirty || rForm.controls['ssn'].touched)\">SSN should 10 digits, Only numbers allowed</div>\r\n                </div>\r\n    \r\n                <div class=\"form-group col-md-2 x4 required\">\r\n                    <label class=\"pull-left control-label\">DoB</label>\r\n                    <input class=\"form-control date col-md-2\" type=\"date\" formControlName=\"dob\" [max]=\"dateToday\">\r\n                    <!-- Validation for label -->\r\n                    <div class=\"alert pull-left\" *ngIf=\"!rForm.controls['dob'].valid && rForm.controls['dob'].touched\">{{ titleAlert }}</div>\r\n                </div> \r\n\r\n                <div class=\"form-group col-md-2 x4 required\">\r\n                    <label class=\"pull-left control-label\">Gender</label> \r\n                    <select class=\"form-control col-md-2\" formControlName=\"gender\">\r\n                        <option [value]=\"gender.attribute_value\"  *ngFor=\"let gender of genderArray\">\r\n                            {{ gender.attribute_value }}\r\n                        </option>\r\n                    </select>\r\n                    <div class=\"alert pull-left\" *ngIf=\"!rForm.controls['gender'].valid && rForm.controls['gender'].touched\">{{ titleAlert }}</div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-2 x4 required\">\r\n                    <label class=\"pull-left control-label\">Marital Status</label>\r\n                    <select class=\"form-control col-md-2\" formControlName=\"mstatus\">\r\n                        <option [value]=\"status.attribute_value\"  *ngFor=\"let status of maritalStatusArray\">\r\n                            {{ status.attribute_value }}\r\n                        </option>\r\n                    </select>\r\n                    <!-- <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"mstatus\"> -->\r\n                    <!-- Validation for label -->\r\n                    <div class=\"alert pull-left\" *ngIf=\"!rForm.controls['mstatus'].valid && rForm.controls['mstatus'].touched\">{{ titleAlert }}</div>\r\n                </div>\r\n            </div>\r\n            \r\n            <legend class=\"heading\">Contact Details</legend>\r\n            <!-- Address Bars -->\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-11 text-box\">\r\n                    <label class=\"pull-left\">Address1</label>\r\n                    <input class=\"form-control address\" formControlName=\"address1\">\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-11 text-box\">\r\n                    <label class=\"pull-left\">Address2</label>\r\n                    <input class=\"form-control address\" formControlName=\"address2\">\r\n                </div>\r\n            </div>\r\n\r\n            \r\n            <div class=\"row\">\r\n                    <div class=\"form-group col-md-2 x4\">\r\n                        <label class=\"pull-left\">City</label>\r\n                        <input list=\"hosting-plan\" formControlName=\"city\" class=\"form-control col-md-2\" type=\"text\">\r\n \r\n                        <datalist id=\"hosting-plan\">\r\n                            <option [value]='city' *ngFor=\"let city of cityArray\" >{{city}}</option>\r\n                        </datalist>\r\n                    </div>\r\n                    <div class=\"form-group col-md-2 x4\">\r\n                        <label class=\"pull-left\">State</label>\r\n                        <input list=\"hosting-plan1\" formControlName=\"state\" class=\"form-control col-md-2\" type=\"text\">\r\n \r\n                        <datalist id=\"hosting-plan1\">\r\n                            <option [value]='state' *ngFor=\"let state of stateArray\" >{{state}}</option>\r\n                        </datalist>\r\n                        <!-- <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"city\"> -->\r\n                    </div>\r\n                    <div class=\"form-group col-md-2 x4\">\r\n                        <label class=\"pull-left\">Country</label>\r\n                        <input list=\"hosting-plan2\" formControlName=\"country\" class=\"form-control col-md-2\" type=\"text\">\r\n \r\n                        <datalist id=\"hosting-plan2\">\r\n                            <option [value]='country' *ngFor=\"let country of countryArray\" >{{country}}</option>\r\n                        </datalist>\r\n                    </div>\r\n        \r\n    \r\n                    <div class=\"form-group col-md-2 x4\">\r\n                        <label class=\"pull-left\">Zip Code</label>\r\n                        <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"zip\">\r\n                        <div class=\"alert pull-left\" *ngIf=\"!rForm.controls['zip'].valid && (rForm.controls['zip'].touched || rForm.controls['zip'].dirty)\">{{ titleAlert }}</div>\r\n                    </div>\r\n                </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-3 x3 required\">\r\n                    <label class=\"pull-left control-label\">Email</label>\r\n                    <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"email\">\r\n                    <div class=\"alert pull-left\" *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">Invalid or empty email</div>\r\n                </div>\r\n    \r\n                <div class=\"form-group col-md-3 x3\">\r\n                    <label class=\"pull-left\">Phone</label>\r\n                    <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"phone\">\r\n                    <div class=\"alert pull-left\" *ngIf=\"!rForm.controls['phone'].valid && (rForm.controls['phone'].touched || rForm.controls['phone'].dirty)\">{{ numberAlert }}</div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-3 x3\">\r\n                    <label class=\"pull-left\">Fax</label>\r\n                    <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"fax\">\r\n                    <div class=\"alert pull-left\" *ngIf=\"!rForm.controls['fax'].valid && (rForm.controls['fax'].touched || rForm.controls['fax'].dirty)\">{{ numberAlert }}</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-3 x3 required\">\r\n                    <label class=\"pull-left control-label\">Username</label>\r\n                    <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"username\">\r\n                <!-- Validation for Name label -->\r\n                    <div class=\"alert pull-left\" \r\n                        *ngIf=\"!rForm.controls['username'].valid && (rForm.controls['username'].dirty || rForm.controls['username'].touched)\">\r\n                        <span *ngIf=\"rForm.controls['username'].errors['unique']\">Username already exists. Enter a new one</span>\r\n                        <span *ngIf=\"rForm.controls['username'].errors['required']\">{{ titleAlert }}</span>\r\n                        \r\n                    </div>\r\n                    <!-- <div class=\"alert pull-left\" *ngIf=\"\">{{ messageExistence }}</div> -->\r\n                </div>\r\n    \r\n                <div class=\"form-group col-md-3 x3 required\">\r\n                    <label class=\"pull-left control-label\">Password</label>\r\n                    <input class=\"form-control col-md-2\" type=\"password\" formControlName=\"password\">\r\n                    <div class=\"alert pull-left\" *ngIf=\"!rForm.controls['password'].valid && rForm.controls['password'].touched\">specify a password that's at least 8 characters.</div>\r\n                </div>\r\n                \r\n            </div>\r\n            <div class=\"row\">\r\n                \r\n                <div class=\"form-group col-md-3 x3\">\r\n                        <label class=\"pull-left\">Picture</label>\r\n                        <input class=\"form-control\" type=\"file\" name=\"picture\" value=\"picture\" ngModel  (change)=\"getFiles($event)\" formControlName=\"photo\" accept=\"image/x-png,image/gif,image/jpeg\">\r\n                </div>\r\n                <img *ngIf=\"imagePath!=null\" [src]=\"'data:image/png;base64,'+imagePath\" alt=\"No preview available\">\r\n                <img *ngIf=\"imagePath==null\" src=\"http://www.cdn.innesvienna.net//Content/user-default.png\" alt=\"No preview available\">\r\n                  </div>\r\n\r\n              <input type=\"submit\" class=\"btn btn-primary col-lg-6 col-md-push-3\" style=\"margin-top: 20px;margin-bottom: 50px\" value=\"Submit Form\" [disabled]=\"!rForm.valid\" onclick=\"window.location.reload()\">\r\n              <br>\r\n        </div>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/patient-add/patient-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_discrete_service__ = __webpack_require__("../../../../../src/app/services/discrete.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_patients_service__ = __webpack_require__("../../../../../src/app/services/patients.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PatientAddComponent = (function () {
    // File upload
    // public uploader: FileUploader = new FileUploader({url: 'http://localhost:3000/upload/picture'});
    function PatientAddComponent(http, patientService, fb, router, discreteData) {
        this.http = http;
        this.patientService = patientService;
        this.fb = fb;
        this.router = router;
        this.discreteData = discreteData;
        this.titleAlert = 'This field is required'; // Error message: required
        this.numberAlert = 'Only numbers allowed.'; // // Error message: Numbers allowed
        this.usernameArray = [];
        this.cityArray = [];
        this.stateArray = [];
        this.countryArray = [];
        this.dateToday = new Date().toJSON().split('T')[0]; // Get only date.
        this.fileExt = '';
        // Initialize form with validations and default values
        this.rForm = fb.group({
            'fname': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-zA-Z]*$/)])],
            'mname': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-zA-Z]*$/)],
            'lname': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-zA-Z]*$/)])],
            'address1': [null],
            'address2': [null],
            'ssn': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^\d+$/)])],
            'dob': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'gender': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'mstatus': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'city': [null],
            'state': [null],
            'country': [null],
            'zip': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^\d+$/)],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
            'phone': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^\d+$/)],
            'fax': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^\d+$/)],
            'username': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, this.usernameUnique.bind(this)])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8)])],
            'photo': [null]
            // 'validate' : ''
        });
    }
    PatientAddComponent.prototype.getFiles = function (event) {
        this.files = event.target.files;
        if (this.files[0]) {
            this.fileExt = this.files[0].name.split('.')[this.files[0].name.split('.').length - 1];
            console.log(this.fileExt);
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(this.files[0]);
        }
    };
    PatientAddComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.filestring = btoa(binaryString); // Converting binary string data.
        this.imagePath = this.filestring;
    };
    PatientAddComponent.prototype.addPatient = function (post) {
        console.log('post: ', post.photo);
        this.patient = post;
        // console.log('patient: ', JSON.stringify(this.patient));
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Type', 'application/json');
        // Add new city to DB
        if (!this.cityArray.includes(post.city)) {
            // if (this.cityArray.map(function(item){ return item.toLowerCase()}).indexOf(post.city.toLowerCase()) != -1) {
            var city = { city: post.city };
            // console.log('postCity: ', city);
            this.http.post('http://localhost:3000/discrete-data/add/city', JSON.stringify(city), { headers: headers })
                .subscribe(function (res) { return console.log('addcity: ', res); });
        }
        // Add state to DB
        if (!this.stateArray.includes(post.state)) {
            var state = { state: post.state };
            // console.log('postState: ', state);
            this.http.post('http://localhost:3000/discrete-data/add/state', JSON.stringify(state), { headers: headers })
                .subscribe(function (res) { return console.log('addstate: ', res); });
        }
        // Add city to DB
        if (!this.countryArray.includes(post.country)) {
            var country = { country: post.country };
            // console.log('postcountry: ', country);
            this.http.post('http://localhost:3000/discrete-data/add/country', JSON.stringify(country), { headers: headers })
                .subscribe(function (res) { return console.log('addcountry: ', res); });
        }
        this.patient.photo = this.filestring;
        // Add Patient
        var url = 'http://localhost:3000/add/patient';
        this.http.post(url, JSON.stringify(this.patient), { headers: headers })
            .subscribe(function (res) { return console.log('Here!: ', res); });
        alert('Patient added Successfully!');
        this.router.navigate(['#/']);
    };
    PatientAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetch data from discrete table
        this.discreteData.getDiscreteData().subscribe(function (dataFromDB) {
            _this.discrete = dataFromDB;
            // fetching genders
            _this.genderArray = _this.discrete.filter(function (val) {
                return val.attribute_name === 'GENDER' ? val.attribute_value : '';
            });
            // Fetch Marital status
            _this.maritalStatusArray = _this.discrete.filter(function (val) {
                return val.attribute_name === 'MARITAL STATUS' ? val.attribute_value : '';
            });
            // Fetch City, State, Country
            for (var i = 0; i < _this.discrete.length; i++) {
                if (_this.discrete[i].attribute_name === 'CITY_LIST') {
                    _this.cityArray.push(_this.discrete[i].attribute_value);
                }
                if (_this.discrete[i].attribute_name === 'STATE_LIST') {
                    _this.stateArray.push(_this.discrete[i].attribute_value);
                }
                if (_this.discrete[i].attribute_name === 'COUNTRY_LIST') {
                    _this.countryArray.push(_this.discrete[i].attribute_value);
                }
            }
        });
        // Fetch patients to compare usernames 
        this.patientService.getPatients()
            .subscribe(function (dataFromDB) {
            dataFromDB.forEach(function (element) {
                _this.usernameArray.push(element.user_name);
                // console.log('username: ', element.user_name);
            });
        });
    };
    // Custom validator to check if username exists
    PatientAddComponent.prototype.usernameUnique = function (control) {
        if (this.usernameArray.includes(control.value)) {
            return { 'unique': true };
        }
        return null;
    };
    PatientAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-patient-add',
            template: __webpack_require__("../../../../../src/app/components/patient-add/patient-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/patient-add/patient-add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__services_patients_service__["a" /* PatientsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_discrete_service__["a" /* DiscreteService */]])
    ], PatientAddComponent);
    return PatientAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/patient-list/patient-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\r\n    overflow: auto;\r\n}\r\nspan:hover, th {\r\n    cursor: pointer;\r\n}\r\n\r\nspan{\r\n    padding: 5px;   \r\n    margin: 2px;\r\n}\r\n\r\n.search{\r\n    width: 40%;\r\n    margin-right: 5px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n.buttonInv{\r\n    background-color: Transparent;\r\n    background-repeat:no-repeat;\r\n    border: none;\r\n    cursor:pointer;\r\n    overflow: hidden;\r\n    outline:none;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n.edit{\r\n    color: blue;\r\n}\r\n table {\r\n    border: 1px solid #ccc;\r\n    border-collapse: collapse;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  table th {\r\n    font-size: .85em;\r\n    letter-spacing: .1em;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n.hover-text{\r\n    visibility: hidden;\r\n    width: 100px;\r\n    text-align: center;\r\n    background: #e0e0e0;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n \r\n    /* Position the tooltip text - see examples below! */\r\n    position: absolute;\r\n    z-index: 1;\r\n  }\r\n\r\n.buttonInv:hover .hover-text{\r\n    visibility: visible;\r\n}\r\n\r\n@media screen and (max-width: 760px),\r\n(min-device-width: 768px) and (max-device-width: 1024px)  {\r\n\r\n    table {\r\n        border: 0;\r\n    }\r\n    .buttonInv{\r\n        background-color: Transparent;\r\n        background-repeat:no-repeat;\r\n        border: none;\r\n        cursor:pointer;\r\n        overflow: hidden;\r\n        outline:none;\r\n        border-bottom: 1px solid #ddd;\r\n    }\r\n    table thead {\r\n        border: none;\r\n        clip: rect(0 0 0 0);\r\n        height: 1px;\r\n        margin: -1px;\r\n        overflow: hidden;\r\n        padding: 0;\r\n        position: absolute;\r\n        width: 1px;\r\n    }\r\n    table tr, .last {\r\n        border-bottom: 5px solid rgb(180, 177, 177);\r\n        display: block;\r\n        margin-bottom: .625em;\r\n    }\r\n    table td {\r\n        border-bottom: 1px solid rgb(180, 177, 177);\r\n        display: block;\r\n        font-size: .8em;\r\n        text-align: right;\r\n    }\r\n    table td:before {\r\n        content: attr(data-label);\r\n        float: left;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n    }\r\n    table td:last-child {\r\n        border-bottom: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/patient-list/patient-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n        <div class=\"panel panel-default\">\n                <div class=\"panel-body\" style=\"height:0.7em;\">\n                    <a href=\"#add\"><button type=\"button\" class=\"btn btn-primary btn-sm pull-right\">Add Patient<span class=\"glyphicon glyphicon-plus\"></span></button></a>\n                        <div class=\"form-group pull-left search\">\n                            <input type=\"text\" placeholder=\"Search\" name=\"search\" [(ngModel)]=\"filter\" class=\"form-control\">\n                        </div>\n                        <span class=\"glyphicon glyphicon-search\"></span>\n                </div>\n              \n                <!-- Table -->\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th  scope=\"col\" (click)=\"sort('patient_id')\">PUID\n                                <span class=\"glyphicon\" *ngIf=\"key =='patient_id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th (click)=\"sort('name')\">Name\n                                <span class=\"glyphicon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th (click)=\"sort('ssn')\">SSN#\n                                <span class=\"glyphicon nope\" *ngIf=\"key =='ssn'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th (click)=\"sort('dob')\">DOB\n                                <span class=\"glyphicon nope\" *ngIf=\"key =='dob'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th (click)=\"sort('gender')\">Gender\n                                <span class=\"glyphicon nope\" *ngIf=\"key =='gender'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th (click)=\"sort('email')\">Email\n                                <span class=\"glyphicon\" *ngIf=\"key =='email'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th (click)=\"sort('marital_status')\">Marital Status\n                                <span class=\"glyphicon nope\" *ngIf=\"key =='marital_status'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th (click)=\"sort('city')\">City\n                                <span class=\"glyphicon\" *ngIf=\"key =='city'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th (click)=\"sort('phone')\">Phone\n                                <span class=\"glyphicon\" *ngIf=\"key =='phone'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th style=\"text-align:center\">Edit</th>\n                            <th>Delete</th>\n                        </tr>\n                    </thead>    \n                        <tr *ngFor=\"let patient of patients | orderBy: key : reverse | filter: filter | paginate: { itemsPerPage: 10, currentPage: p }\">\n                            <td data-label=\"PUID\">{{ patient.patient_id }}</td>\n                            <td data-label=\"Name\"> {{patient.name}} {{patient.lname}} </td>\n                            <td data-label=\"SSN\"> {{patient.ssn}} </td>\n                            <td data-label=\"DOB\"> {{patient.dob | date: 'dd/MM/yyyy'}} </td>\n                            <td data-label=\"Gender\"> {{patient.gender}} </td>\n                            <td data-label=\"Email\"> {{patient.email}} </td>\n                            <td data-label=\"Marital Status\"> {{patient.marital_status}} </td>\n                            <td data-label=\"City\"> {{patient.city}} </td>\n                            <td data-label=\"Phone\"> {{patient.phone}} </td>\n                            <td data-label=\"Edit\"><button class=\"btn btn-default buttonInv\" [routerLink]=\"['/update', patient.patient_id]\">\n                                                    <span class=\"glyphicon glyphicon-edit\" ></span>\n                                                    <span class=\"hover-text\">Edit Patient</span>\n                                                </button>\n                                                <!-- <button class=\"btn btn-default buttonInv\" type=\"button\" \n                                                  data-toggle=\"modal\" data-target=\"#formModal\" >\n                                                  <span class=\"glyphicon glyphicon-picture\" ></span>\n                                                  <span class=\"hover-text\">Add Picture</span>  \n                                                </button> -->\n                            </td>\n                            <td class=\"last\" data-label=\"Delete\"><button class=\"btn btn-default buttonInv\" (click)=\"removePatient(patient)\" onclick=\"window.location.reload()\"><span class=\"glyphicon glyphicon-trash\" ></span></button></td>\n                        </tr>\n                </table>\n                <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n            </div>\n</div>\n\n<!--Form Modal to Add -->\n<div class=\"modal fade\" id=\"formModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"formModalLabel\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <form action=\"/upload/picture\" method=\"post\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                        <h4 class=\"modal-title\" id=\"myModalLabel\">Upload Picture</h4>\n                    </div>\n                    <div class=\" form-group modal-body\">\n                            <form #form=\"ngForm\" method=\"post\" (ngSubmit)=\"logForm(form.value)\" enctype=\"multipart/form-data\">\n                                <input type=\"hidden\" value=\"attr.data-id\">\n                                <input class=\"form-control\" type=\"file\" name=\"picture\" value=\"picture\" ngModel  (change)=\"getFiles($event)\">\n                                <div class=\"modal-footer\">\n                                    <button class=\"btn btn-primary\" type=\"submit\" name=\"button\">Upload</button>\n                                </div>\n                            </form>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/patient-list/patient-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_patients_service__ = __webpack_require__("../../../../../src/app/services/patients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientListComponent = (function () {
    function PatientListComponent(http, patient) {
        this.http = http;
        this.patient = patient;
        this.key = 'patient_id'; // Key to sort, default sort by PU_ID
        this.reverse = false;
        this.p = 1; // initializing pagination to one
    }
    PatientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patient.getPatients().subscribe(function (patientsFromDB) {
            // console.log('patients: ', patientsFromDB);
            _this.patients = patientsFromDB;
        });
    };
    // sorting
    PatientListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    PatientListComponent.prototype.removePatient = function (pat) {
        // // console.log('id', pat.patient_id);
        if (confirm('Are you sure you want to delete this?')) {
            var url = 'http://localhost:3000/delete/' + pat.patient_id;
            this.http.delete(url).subscribe(function (result) { return console.log(result); });
            alert('Deleted Successfully!');
        }
    };
    PatientListComponent.prototype.getFiles = function (event) {
        console.log(this.pid);
        this.files = event.target.files;
        console.log('event: ', event);
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.files[0]);
    };
    PatientListComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.filestring = btoa(binaryString); // Converting binary string data.
    };
    PatientListComponent.prototype.logForm = function (form) {
        console.log(this.files);
        console.log(form);
        this.sendValues();
    };
    PatientListComponent.prototype.sendValues = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post('/upload/picture', JSON.stringify({ FileData: this.filestring }), options) // http post method to sending data 
            .subscribe(function (data) {
            console.log('Response received');
        }, function (err) { console.log(err); }, function () { return console.log('Authentication Complete'); });
    };
    PatientListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-patient-list',
            template: __webpack_require__("../../../../../src/app/components/patient-list/patient-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/patient-list/patient-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__services_patients_service__["a" /* PatientsService */]])
    ], PatientListComponent);
    return PatientListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/patient-update/patient-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.form-container {\r\n    position: relative;\r\n    /* width:80%; */\r\n    padding:3em;\r\n    text-align: center;\r\n    margin: 2em auto;\r\n    background: white;\r\n    border-radius: 10px;\r\n    height: auto;\r\n}\r\n\r\n.x3{\r\n    margin-left: 30px;\r\n    width: 29.5%;\r\n}\r\n\r\n.x4{\r\n    margin-left: 30px;\r\n    width: 21.5%;\r\n}\r\n.heading{\r\n    margin-top: 25px;\r\n}\r\n\r\n.text-box{\r\n    margin-left: 30px;\r\n    width: 93.5%;\r\n}\r\n\r\n.address{\r\n    overflow: hidden;\r\n}\r\n\r\n.alert {\r\n    background: #f2edda;\r\n    padding: 7px;\r\n    font-size: .7em;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n.button {\r\n    margin-top: 3rem;\r\n}\r\nh1 {\r\n    margin-bottom: 2rem;\r\n    font-weight:bold;\r\n    font-family:'Muli';\r\n    font-size: 2em;\r\n}\r\n\r\nimg {\r\n    border-radius: 10%;\r\n    height: 150px;\r\n    width: 150px;\r\n    position: relative;\r\n    right: 335px;\r\n}\r\n.form-group.required .control-label:after { \r\n    content:\"*\";\r\n    color:red;\r\n }\r\n\r\n@-webkit-keyframes alertAnim {\r\n    from {\r\n        opacity:0;\r\n        -webkit-transform: translateY(-10px);\r\n                transform: translateY(-10px);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes alertAnim {\r\n    from {\r\n        opacity:0;\r\n        -webkit-transform: translateY(-10px);\r\n                transform: translateY(-10px);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}   \r\n\r\n@media only screen and (max-width:1040px){\r\n    /* styles for browsers larger than 1040px; */\r\n    .x3, .x4, .text-box{\r\n        width: 80%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/patient-update/patient-update.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Form -->\n<div>\n  <form [formGroup]=\"updateForm\" (ngSubmit)=\"updatePatient(updateForm.value)\" method=\"POST\">\n      <div class=\"form-container\">\n          <legend class=\"heading\">Update Patient</legend>  \n          <input type=\"hidden\" formControlName=\"id\">\n          <div class=\"row\">\n              <div class=\"form-group col-md-3 x3 required\">\n                  <label class=\"pull-left control-label\">First Name</label>\n                  <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"fname\">\n              <!-- Validation for Name label -->\n              <div class=\"alert pull-left\" *ngIf=\"!updateForm.controls['fname'].valid &&  updateForm.controls['fname'].touched\">{{ titleAlert }}</div>\n              <div class=\"alert pull-left\" *ngIf=\"!updateForm.controls['fname'].valid && (updateForm.controls['fname'].dirty)\">Can't contain Numbers</div>\n              </div>\n  \n              <div class=\"form-group col-md-3 x3\">\n                  <label class=\"pull-left\">Middle Name</label>\n                  <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"mname\">\n                  <div class=\"alert pull-left\" *ngIf=\"!updateForm.controls['mname'].valid && (updateForm.controls['mname'].dirty)\">Can't contain Numbers</div>\n              </div>\n\n              <div class=\"form-group col-md-3 x3 required\">\n                  <label class=\"pull-left control-label\">Last Name</label>\n                  <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"lname\">\n                  <!-- Validation for Name label -->\n                  <div class=\"alert pull-left\" *ngIf=\"!updateForm.controls['lname'].valid &&  updateForm.controls['lname'].touched\">{{ titleAlert }}</div>\n                  <div class=\"alert pull-left\" *ngIf=\"!updateForm.controls['lname'].valid && (updateForm.controls['lname'].dirty)\">Can't contain Numbers</div>\n              </div>\n          </div>\n          \n          <div class=\"row\">\n              <div class=\"form-group col-md-2 x4\">\n                  <label class=\"pull-left\">SSN</label>\n                  <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"ssn\">\n                  <div class=\"alert pull-left\" *ngIf=\"!updateForm.controls['ssn'].valid && (updateForm.controls['ssn'].dirty || updateForm.controls['ssn'].touched)\">SSN should 10 digits, Only numbers allowed</div>\n              </div>\n  \n              <div class=\"form-group col-md-2 x4 required\">\n                  <label class=\"pull-left control-label\">DoB</label>\n                  <input class=\"form-control date col-md-2\" type=\"date\" formControlName=\"dob\" [max]=\"dateToday\">\n                  <!-- Validation for label -->\n                  <div class=\"alert pull-left\" *ngIf=\"!updateForm.controls['dob'].valid && updateForm.controls['dob'].touched\">{{ titleAlert }}</div>\n              </div> \n\n              <div class=\"form-group col-md-2 x4\">\n                  <label class=\"pull-left required\">Gender</label> \n                  <select class=\"form-control col-md-2 control-label\" formControlName=\"gender\">\n                      <option [value]=\"gender.attribute_value\"  *ngFor=\"let gender of genderArray\">\n                          {{ gender.attribute_value }}\n                      </option>\n                  </select>\n                  <!-- <input class=\"form-control col-md-2\" type=\"select\" formControlName=\"gender\"> -->\n                  <!-- Validation for label -->\n                  <div class=\"alert pull-left\" *ngIf=\"!updateForm.controls['gender'].valid && updateForm.controls['gender'].touched\">{{ titleAlert }}</div>\n              </div>\n\n              <div class=\"form-group col-md-2 x4 required\">\n                  <label class=\"pull-left control-label\">Marital Status</label>\n                  <select class=\"form-control col-md-2\" formControlName=\"mstatus\">\n                      <option [value]=\"status.attribute_value\"  *ngFor=\"let status of maritalStatusArray\">\n                          {{ status.attribute_value }}\n                      </option>\n                  </select>\n                  <!-- Validation for label -->\n                  <div class=\"alert pull-left\" *ngIf=\"!updateForm.controls['mstatus'].valid && updateForm.controls['mstatus'].touched\">{{ titleAlert }}</div>\n                </div>\n              </div>\n              \n              <legend class=\"heading\">Contact Details</legend>\n              <!-- Address Bars -->\n              <div class=\"row\">\n                <div class=\"form-group col-md-11 text-box\">\n                  <label class=\"pull-left\">Address1</label>\n                  <input class=\"form-control address\" formControlName=\"address1\">\n                </div>\n                \n                <div class=\"form-group col-md-11 text-box\">\n                  <label class=\"pull-left\">Address2</label>\n                  <input class=\"form-control address\" formControlName=\"address2\">\n                </div>\n              </div>\n              \n              \n              <div class=\"row\">\n                <div class=\"form-group col-md-2 x4\">\n                  <label class=\"pull-left\">City</label>\n                  <input list=\"hosting-plan\" formControlName=\"city\" class=\"form-control col-md-2\" type=\"text\">\n                  \n                  <datalist id=\"hosting-plan\">\n                    <option [value]='city' *ngFor=\"let city of cityArray\" >{{city}}</option>\n                  </datalist>\n                </div>\n                \n                <div class=\"form-group col-md-2 x4\">\n                      <label class=\"pull-left\">State</label>\n                      <input list=\"hosting-plan1\" formControlName=\"state\" class=\"form-control col-md-2\" type=\"text\">\n\n                      <datalist id=\"hosting-plan1\">\n                          <option [value]='state' *ngFor=\"let state of stateArray\" >{{state}}</option>\n                      </datalist>\n                  </div>\n\n                  <div class=\"form-group col-md-2 x4\">\n                      <label class=\"pull-left\">Country</label>\n                      <input list=\"hosting-plan2\" formControlName=\"country\" class=\"form-control col-md-2\" type=\"text\">\n\n                      <datalist id=\"hosting-plan2\">\n                          <option [value]='country' *ngFor=\"let country of countryArray\" >{{country}}</option>\n                      </datalist>\n                  </div>\n      \n                  <div class=\"form-group col-md-2 x4\">\n                      <label class=\"pull-left\">Zip Code</label>\n                      <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"zip\">\n                      <div class=\"alert pull-left\" *ngIf=\"!updateForm.controls['zip'].valid && (updateForm.controls['zip'].touched || updateForm.controls['zip'].dirty)\">{{ titleAlert }}</div>\n\n                  </div>\n              </div>\n\n          <div class=\"row\">\n              <div class=\"form-group col-md-3 x3 required\">\n                  <label class=\"pull-left control-label\">Email</label>\n                  <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"email\">\n                  <div class=\"alert pull-left\" *ngIf=\"!updateForm.controls['email'].valid && updateForm.controls['email'].touched\">Invalid or empty email</div>\n              </div>\n  \n              <div class=\"form-group col-md-3 x3\">\n                  <label class=\"pull-left\">Phone</label>\n                  <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"phone\">\n                  <div class=\"alert pull-left\" *ngIf=\"!updateForm.controls['phone'].valid && (updateForm.controls['phone'].touched || updateForm.controls['phone'].dirty)\">{{ numberAlert }}</div>\n              </div>\n\n              <div class=\"form-group col-md-3 x3\">\n                  <label class=\"pull-left\">Fax</label>\n                  <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"fax\">\n                  <div class=\"alert pull-left\" *ngIf=\"!updateForm.controls['fax'].valid && (updateForm.controls['fax'].touched || updateForm.controls['fax'].dirty)\">{{ numberAlert }}</div>\n              </div>\n          </div>\n\n          <div class=\"row\">\n              <div class=\"form-group col-md-3 x3 required\">\n                  <label class=\"pull-left control-label\">Username</label>\n                  <input class=\"form-control col-md-2\" type=\"text\" formControlName=\"username\" disabled=true>\n                  <div class=\"alert pull-left\" *ngIf=\"!updateForm.controls['username'].valid && updateForm.controls['username'].touched\">{{ titleAlert }}</div>\n              </div>\n  \n              <div class=\"form-group col-md-3 x3 required\">\n                  <label class=\"pull-left control-label\">Password</label>\n                  <input class=\"form-control col-md-2\" type=\"password\" formControlName=\"password\">\n                  <div class=\"alert pull-left\" *ngIf=\"!updateForm.controls['password'].valid && updateForm.controls['password'].touched\">You must specify a password that's at least 8 characters.</div>\n              </div>\n              </div>\n              <div class=\"row\">\n                    <div class=\"form-group col-md-3 x3\">\n                            <label class=\"pull-left\">Picture</label>\n                            <input class=\"form-control\" type=\"file\" name=\"picture\" value=\"picture\" ngModel  (change)=\"getFiles($event)\" formControlName=\"photo\" accept=\"image/x-png,image/gif,image/jpeg\">\n                    </div>\n                    <img *ngIf=\"imagePath!=null\" [src]=\"'data:image/png;base64,'+imagePath\" alt=\"No preview available\">\n                    <img *ngIf=\"imagePath==null\" src=\"http://www.cdn.innesvienna.net//Content/user-default.png\" alt=\"No preview available\">\n\n              </div>\n\n\n            <input type=\"submit\" class=\"btn btn-primary col-lg-offset-1 col-lg-4\" style=\"margin-top: 20px;margin-bottom: 50px\" value=\"Submit Form\" [disabled]=\"!updateForm.dirty && !updateForm.valid\" onclick=\"window.location.reload()\">\n            <input type=\"button\" class=\"btn btn-debug col-lg-offset-1 col-lg-4\" style=\"margin-top: 20px;margin-bottom: 50px\" value=\"Cancel\" routerLink=\"/\">\n            <br>\n      </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/patient-update/patient-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_patients_service__ = __webpack_require__("../../../../../src/app/services/patients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_discrete_service__ = __webpack_require__("../../../../../src/app/services/discrete.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PatientUpdateComponent = (function () {
    function PatientUpdateComponent(http, fb, discreteData, router, route, patientData) {
        this.http = http;
        this.fb = fb;
        this.discreteData = discreteData;
        this.router = router;
        this.route = route;
        this.patientData = patientData;
        this.titleAlert = 'This field is required'; // default error message
        this.numberAlert = 'Only numbers allowed.'; // // Error message: Numbers allowed
        this.cityArray = [];
        this.stateArray = [];
        this.countryArray = [];
        this.dateToday = new Date().toJSON().split('T')[0]; // get only date from timestamp
        // Initialize form with validations and default values
        this.updateForm = fb.group({
            'id': [null],
            'fname': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^[a-zA-Z]*$/)])],
            'mname': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^[a-zA-Z]*$/)],
            'lname': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^[a-zA-Z]*$/)])],
            'address1': [null],
            'address2': [null],
            'ssn': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^\d+$/)])],
            'dob': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'gender': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'mstatus': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'city': [null],
            'state': [null],
            'country': [null],
            'zip': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^\d+$/)],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
            'phone': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^\d+$/)],
            'fax': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^\d+$/)],
            'username': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8)])],
            'photo': [null]
            // 'validate' : ''
        });
    }
    PatientUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        // getting id from routes
        var id = parseInt(this.route.snapshot.params.id);
        // get patient
        this.patientData.updatePatient(id)
            .subscribe(function (patientFromDB) {
            var formattedDate = patientFromDB[0].dob.split('T')[0];
            _this.imagePath = patientFromDB[0].photo;
            patientFromDB[0].photo = '';
            // Setting values from DB to update
            _this.updateForm.setValue({
                id: patientFromDB[0].patient_id,
                fname: patientFromDB[0].name,
                mname: patientFromDB[0].mname,
                lname: patientFromDB[0].lname,
                address1: patientFromDB[0].address1,
                address2: patientFromDB[0].address2,
                ssn: patientFromDB[0].ssn,
                dob: formattedDate,
                gender: patientFromDB[0].gender,
                mstatus: patientFromDB[0].marital_status,
                city: patientFromDB[0].city,
                state: patientFromDB[0].state,
                country: patientFromDB[0].country,
                zip: patientFromDB[0].zip_code,
                email: patientFromDB[0].email,
                phone: patientFromDB[0].phone,
                fax: patientFromDB[0].fax,
                username: patientFromDB[0].user_name,
                password: patientFromDB[0].password,
                photo: patientFromDB[0].photo
            });
        });
        // //////////////////////////////////
        this.discreteData.getDiscreteData().subscribe(function (dataFromDB) {
            // console.log('Discrete: ', dataFromDB);
            _this.discrete = dataFromDB;
            // fetching genders
            _this.genderArray = _this.discrete.filter(function (val) {
                return val.attribute_name === 'GENDER' ? val.attribute_value : '';
            });
            // Fetch Marital status
            _this.maritalStatusArray = _this.discrete.filter(function (val) {
                return val.attribute_name === 'MARITAL STATUS' ? val.attribute_value : '';
            });
            // Fetch City, State, Country
            for (var i = 0; i < _this.discrete.length; i++) {
                if (_this.discrete[i].attribute_name === 'CITY_LIST') {
                    _this.cityArray.push(_this.discrete[i].attribute_value);
                }
                if (_this.discrete[i].attribute_name === 'STATE_LIST') {
                    _this.stateArray.push(_this.discrete[i].attribute_value);
                }
                if (_this.discrete[i].attribute_name === 'COUNTRY_LIST') {
                    _this.countryArray.push(_this.discrete[i].attribute_value);
                }
            }
        });
    };
    PatientUpdateComponent.prototype.getFiles = function (event) {
        this.files = event.target.files;
        if (this.files[0]) {
            this.fileExt = this.files[0].name.split('.')[this.files[0].name.split('.').length - 1];
            console.log('ext: ', this.fileExt);
            console.log(this.fileExt);
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(this.files[0]);
        }
    };
    PatientUpdateComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.filestring = btoa(binaryString); // Converting binary string data.
        this.imagePath = this.filestring;
    };
    PatientUpdateComponent.prototype.updatePatient = function (post) {
        console.log('post: ', post);
        this.patientToUpdate = post;
        // console.log('patient: ', JSON.stringify(this.patient));
        // set headers
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // Add city to DB
        if (!this.cityArray.includes(post.city)) {
            var city = { city: post.city };
            // console.log('postCity: ', city);
            this.http.post('http://localhost:3000/discrete-data/add/city', JSON.stringify(city), { headers: headers })
                .subscribe(function (res) { return console.log('addciy: ', res); });
        }
        // Add state to DB
        if (!this.stateArray.includes(post.state)) {
            var state = { state: post.state };
            // console.log('postState: ', state);
            this.http.post('http://localhost:3000/discrete-data/add/state', JSON.stringify(state), { headers: headers })
                .subscribe(function (res) { return console.log('addstate: ', res); });
        }
        // Add city to DB
        if (!this.countryArray.includes(post.country)) {
            var country = { country: post.country };
            // console.log('postcountry: ', country);
            this.http.post('http://localhost:3000/discrete-data/add/country', JSON.stringify(country), { headers: headers })
                .subscribe(function (res) { return console.log('addcountry: ', res); });
        }
        if (this.filestring) {
            console.log('here');
            post.photo = this.filestring;
        }
        // Update Patient
        var url = 'http://localhost:3000/update-patient/' + post.id;
        this.http.put(url, JSON.stringify(this.patientToUpdate), { headers: headers })
            .subscribe(function (res) { return res; });
        alert('Patient Updated Successfully!');
        this.router.navigate(['#/']);
    };
    PatientUpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-patient-update',
            template: __webpack_require__("../../../../../src/app/components/patient-update/patient-update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/patient-update/patient-update.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_discrete_service__["a" /* DiscreteService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services_patients_service__["a" /* PatientsService */]])
    ], PatientUpdateComponent);
    return PatientUpdateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/discrete.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscreteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscreteService = (function () {
    function DiscreteService(http) {
        this.http = http;
        // console.log('Discrete Constructor');
    }
    // get discrete data
    DiscreteService.prototype.getDiscreteData = function () {
        return this.http.get('http://localhost:3000/discrete-data')
            .map(function (response) { return response.json(); });
    };
    DiscreteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DiscreteService);
    return DiscreteService;
}());



/***/ }),

/***/ "../../../../../src/app/services/patients.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientsService = (function () {
    function PatientsService(http) {
        this.http = http;
        console.log('Constructor - patients called');
    }
    // get data
    PatientsService.prototype.getPatients = function () {
        return this.http.get('http://localhost:3000/patients')
            .map(function (response) { return response.json(); });
    };
    // update a particular patient::id
    PatientsService.prototype.updatePatient = function (id) {
        var url = 'http://localhost:3000/update/' + id;
        return this.http.get(url)
            .map(function (response) { return response.json(); });
    };
    // check if user exists
    PatientsService.prototype.checkIfUserExists = function (username) {
        var urlToCheck = 'http://localhost:3000/check/' + username;
        return this.http.get(urlToCheck)
            .map(function (res) { return res.json(); });
    };
    PatientsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PatientsService);
    return PatientsService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map