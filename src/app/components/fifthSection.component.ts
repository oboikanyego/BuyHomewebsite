/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-fifthSection',
  templateUrl: './fifthSection.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class fifthSectionComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_sAPwNZT2uOs9CeBB(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_sAPwNZT2uOs9CeBB(bh) {
    try {
      bh = this.sd_cJTCmevR9ai97Mqn(bh);
      //appendnew_next_sd_sAPwNZT2uOs9CeBB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sAPwNZT2uOs9CeBB');
    }
  }

  //appendnew_flow_fifthSectionComponent_start

  sd_cJTCmevR9ai97Mqn(bh) {
    try {
      this.page.fifthSection = undefined;
      bh = this.sd_wYtLgUQRK9xnUF2Y(bh);
      //appendnew_next_sd_cJTCmevR9ai97Mqn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cJTCmevR9ai97Mqn');
    }
  }

  sd_wYtLgUQRK9xnUF2Y(bh) {
    try {
      const page = this.page;
      page.fifthSection = {
        imagesArr: [
          '/Web/images/building.jpg',
          '/Web/images/building.jpg',
          '/Web/images/building.jpg',
          '/Web/images/building.jpg',
          '/Web/images/building.jpg',
          '/Web/images/building.jpg',
          '/Web/images/building.jpg',
          '/Web/images/building.jpg',
          '/Web/images/building.jpg',
        ],
        heading: 'Trusted by over 150+ organizations in more than 50 countries',
        icon: 'format_quote',
        paragraph:
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam nibh erat, tincidunt in magna quis, ultrices consequat sem. Praesent velit elit, finibus vel nibh nec, posuere iaculis nunc. Proin a feugiat augue.',
        paragraph2: 'John Leon - Co founder of ',
        paragraph3: 'Veeraza',
      };
      //appendnew_next_sd_wYtLgUQRK9xnUF2Y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wYtLgUQRK9xnUF2Y');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_fifthSectionComponent_Catch
}
