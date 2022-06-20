import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-footerComponent
import { footerComponent } from '../components/footer.component';
//CORE_REFERENCE_IMPORT-sixthSectionComponent
import { sixthSectionComponent } from '../components/sixthSection.component';
//CORE_REFERENCE_IMPORT-fifthSectionComponent
import { fifthSectionComponent } from '../components/fifthSection.component';
//CORE_REFERENCE_IMPORT-fourthSectionComponent
import { fourthSectionComponent } from '../components/fourthSection.component';
//CORE_REFERENCE_IMPORT-thirdSectionComponent
import { thirdSectionComponent } from '../components/thirdSection.component';
//CORE_REFERENCE_IMPORT-secondSectionComponent
import { secondSectionComponent } from '../components/secondSection.component';
//CORE_REFERENCE_IMPORT-firstSectionComponent
import { firstSectionComponent } from '../components/firstSection.component';
//CORE_REFERENCE_IMPORT-navCompComponent
import { navCompComponent } from '../components/navComp.component';
//CORE_REFERENCE_IMPORT-homeCompComponent
import { homeCompComponent } from '../components/homeComp.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-footerComponent
  footerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sixthSectionComponent
  sixthSectionComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-fifthSectionComponent
  fifthSectionComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-fourthSectionComponent
  fourthSectionComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-thirdSectionComponent
  thirdSectionComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-secondSectionComponent
  secondSectionComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-firstSectionComponent
  firstSectionComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-navCompComponent
  navCompComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeCompComponent
  homeCompComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'home', component: homeCompComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
