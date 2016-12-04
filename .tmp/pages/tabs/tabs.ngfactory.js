/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './tabs';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/tabs/tabs.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/tabs/tab.ngfactory';
import * as import13 from 'ionic-angular/navigation/view-controller';
import * as import14 from 'ionic-angular/components/app/app';
import * as import15 from 'ionic-angular/config/config';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from 'ionic-angular/platform/platform';
import * as import18 from 'ionic-angular/navigation/deep-linker';
import * as import19 from 'ionic-angular/util/keyboard';
import * as import20 from '@angular/core/src/zone/ng_zone';
import * as import21 from '@angular/core/src/linker/component_factory_resolver';
import * as import22 from 'ionic-angular/gestures/gesture-controller';
import * as import23 from 'ionic-angular/transitions/transition-controller';
import * as import24 from 'ionic-angular/components/tabs/tab';
import * as import25 from 'ionic-angular/components/tabs/tabs';
export var Wrapper_TabsPage = (function () {
    function Wrapper_TabsPage(p0) {
        this.changed = false;
        this.context = new import0.TabsPage(p0);
    }
    Wrapper_TabsPage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_TabsPage;
}());
var renderType_TabsPage_Host = null;
var _View_TabsPage_Host0 = (function (_super) {
    __extends(_View_TabsPage_Host0, _super);
    function _View_TabsPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TabsPage_Host0, renderType_TabsPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TabsPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TabsPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TabsPage_0_4 = new Wrapper_TabsPage(this.parentInjector.get(import8.NavController));
        this._appEl_0.initComponent(this._TabsPage_0_4.context, [], compView_0);
        compView_0.create(this._TabsPage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_TabsPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.TabsPage) && (0 === requestNodeIndex))) {
            return this._TabsPage_0_4.context;
        }
        return notFoundResult;
    };
    _View_TabsPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._TabsPage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TabsPage_Host0;
}(import1.AppView));
function viewFactory_TabsPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TabsPage_Host === null)) {
        (renderType_TabsPage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_TabsPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var TabsPageNgFactory = new import10.ComponentFactory('ng-component', viewFactory_TabsPage_Host0, import0.TabsPage);
var styles_TabsPage = [];
var renderType_TabsPage = null;
var _View_TabsPage0 = (function (_super) {
    __extends(_View_TabsPage0, _super);
    function _View_TabsPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TabsPage0, renderType_TabsPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TabsPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-tabs', null);
        this.renderer.setElementAttribute(this._el_1, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_1, 'tabsHighlight', 'true');
        this.renderer.setElementAttribute(this._el_1, 'tabsPlacement', 'top');
        this._appEl_1 = new import3.AppElement(1, null, this, this._el_1);
        var compView_1 = import11.viewFactory_Tabs0(this.viewUtils, this.injector(1), this._appEl_1);
        this._Tabs_1_4 = new import11.Wrapper_Tabs(this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import13.ViewController, null), this.parentInjector.get(import14.App), this.parentInjector.get(import15.Config), new import16.ElementRef(this._el_1), this.parentInjector.get(import17.Platform), this.renderer, this.parentInjector.get(import18.DeepLinker));
        this._appEl_1.initComponent(this._Tabs_1_4.context, [], compView_1);
        this._text_2 = this.renderer.createText(null, '\n  ', null);
        this._el_3 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_3, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_3, 'tabIcon', 'flame');
        this.renderer.setElementAttribute(this._el_3, 'tabTitle', 'Hot');
        this._appEl_3 = new import3.AppElement(3, 1, this, this._el_3);
        var compView_3 = import12.viewFactory_Tab0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Tab_3_4 = new import12.Wrapper_Tab(this._Tabs_1_4.context, this.parentInjector.get(import14.App), this.parentInjector.get(import15.Config), this.parentInjector.get(import19.Keyboard), new import16.ElementRef(this._el_3), this.parentInjector.get(import20.NgZone), this.renderer, this.parentInjector.get(import21.ComponentFactoryResolver), compView_3.ref, this.parentInjector.get(import22.GestureController), this.parentInjector.get(import23.TransitionController), this.parentInjector.get(import18.DeepLinker, null));
        this._appEl_3.initComponent(this._Tab_3_4.context, [], compView_3);
        compView_3.create(this._Tab_3_4.context, [], null);
        this._text_4 = this.renderer.createText(null, '\n  ', null);
        this._el_5 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_5, 'dark', '');
        this.renderer.setElementAttribute(this._el_5, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_5, 'tabIcon', 'star');
        this.renderer.setElementAttribute(this._el_5, 'tabTitle', 'New');
        this._appEl_5 = new import3.AppElement(5, 1, this, this._el_5);
        var compView_5 = import12.viewFactory_Tab0(this.viewUtils, this.injector(5), this._appEl_5);
        this._Tab_5_4 = new import12.Wrapper_Tab(this._Tabs_1_4.context, this.parentInjector.get(import14.App), this.parentInjector.get(import15.Config), this.parentInjector.get(import19.Keyboard), new import16.ElementRef(this._el_5), this.parentInjector.get(import20.NgZone), this.renderer, this.parentInjector.get(import21.ComponentFactoryResolver), compView_5.ref, this.parentInjector.get(import22.GestureController), this.parentInjector.get(import23.TransitionController), this.parentInjector.get(import18.DeepLinker, null));
        this._appEl_5.initComponent(this._Tab_5_4.context, [], compView_5);
        compView_5.create(this._Tab_5_4.context, [], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        this._el_7 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_7, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_7, 'tabIcon', 'ribbon');
        this.renderer.setElementAttribute(this._el_7, 'tabTitle', 'Top');
        this._appEl_7 = new import3.AppElement(7, 1, this, this._el_7);
        var compView_7 = import12.viewFactory_Tab0(this.viewUtils, this.injector(7), this._appEl_7);
        this._Tab_7_4 = new import12.Wrapper_Tab(this._Tabs_1_4.context, this.parentInjector.get(import14.App), this.parentInjector.get(import15.Config), this.parentInjector.get(import19.Keyboard), new import16.ElementRef(this._el_7), this.parentInjector.get(import20.NgZone), this.renderer, this.parentInjector.get(import21.ComponentFactoryResolver), compView_7.ref, this.parentInjector.get(import22.GestureController), this.parentInjector.get(import23.TransitionController), this.parentInjector.get(import18.DeepLinker, null));
        this._appEl_7.initComponent(this._Tab_7_4.context, [], compView_7);
        compView_7.create(this._Tab_7_4.context, [], null);
        this._text_8 = this.renderer.createText(null, '  \n', null);
        compView_1.create(this._Tabs_1_4.context, [[].concat([
                this._text_2,
                this._el_3,
                this._text_4,
                this._el_5,
                this._text_6,
                this._el_7,
                this._text_8
            ])], null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9
        ], [], []);
        return null;
    };
    _View_TabsPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import24.Tab) && (3 === requestNodeIndex))) {
            return this._Tab_3_4.context;
        }
        if (((token === import24.Tab) && (5 === requestNodeIndex))) {
            return this._Tab_5_4.context;
        }
        if (((token === import24.Tab) && (7 === requestNodeIndex))) {
            return this._Tab_7_4.context;
        }
        if (((token === import25.Tabs) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Tabs_1_4.context;
        }
        return notFoundResult;
    };
    _View_TabsPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = 'secondary';
        this._Tabs_1_4.check_color(currVal_0, throwOnChange, false);
        var currVal_1 = 'top';
        this._Tabs_1_4.check_tabsPlacement(currVal_1, throwOnChange, false);
        var currVal_2 = 'true';
        this._Tabs_1_4.check_tabsHighlight(currVal_2, throwOnChange, false);
        this._Tabs_1_4.detectChangesInternal(this, this._el_1, throwOnChange);
        var currVal_3 = this.context.randomPage;
        this._Tab_3_4.check_root(currVal_3, throwOnChange, false);
        var currVal_4 = 'Hot';
        this._Tab_3_4.check_tabTitle(currVal_4, throwOnChange, false);
        var currVal_5 = 'flame';
        this._Tab_3_4.check_tabIcon(currVal_5, throwOnChange, false);
        this._Tab_3_4.detectChangesInternal(this, this._el_3, throwOnChange);
        var currVal_8 = this.context.homePage;
        this._Tab_5_4.check_root(currVal_8, throwOnChange, false);
        var currVal_9 = 'New';
        this._Tab_5_4.check_tabTitle(currVal_9, throwOnChange, false);
        var currVal_10 = 'star';
        this._Tab_5_4.check_tabIcon(currVal_10, throwOnChange, false);
        this._Tab_5_4.detectChangesInternal(this, this._el_5, throwOnChange);
        var currVal_13 = this.context.topPage;
        this._Tab_7_4.check_root(currVal_13, throwOnChange, false);
        var currVal_14 = 'Top';
        this._Tab_7_4.check_tabTitle(currVal_14, throwOnChange, false);
        var currVal_15 = 'ribbon';
        this._Tab_7_4.check_tabIcon(currVal_15, throwOnChange, false);
        this._Tab_7_4.detectChangesInternal(this, this._el_7, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_6 = this._Tab_3_4.context._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementAttribute(this._el_3, 'id', ((currVal_6 == null) ? null : currVal_6.toString()));
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._Tab_3_4.context._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementAttribute(this._el_3, 'aria-labelledby', ((currVal_7 == null) ? null : currVal_7.toString()));
            this._expr_7 = currVal_7;
        }
        var currVal_11 = this._Tab_5_4.context._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementAttribute(this._el_5, 'id', ((currVal_11 == null) ? null : currVal_11.toString()));
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._Tab_5_4.context._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementAttribute(this._el_5, 'aria-labelledby', ((currVal_12 == null) ? null : currVal_12.toString()));
            this._expr_12 = currVal_12;
        }
        var currVal_16 = this._Tab_7_4.context._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementAttribute(this._el_7, 'id', ((currVal_16 == null) ? null : currVal_16.toString()));
            this._expr_16 = currVal_16;
        }
        var currVal_17 = this._Tab_7_4.context._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementAttribute(this._el_7, 'aria-labelledby', ((currVal_17 == null) ? null : currVal_17.toString()));
            this._expr_17 = currVal_17;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Tabs_1_4.context.ngAfterViewInit();
            }
        }
    };
    _View_TabsPage0.prototype.destroyInternal = function () {
        this._Tabs_1_4.context.ngOnDestroy();
    };
    return _View_TabsPage0;
}(import1.AppView));
export function viewFactory_TabsPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TabsPage === null)) {
        (renderType_TabsPage = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_TabsPage, {}));
    }
    return new _View_TabsPage0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=tabs.ngfactory.js.map