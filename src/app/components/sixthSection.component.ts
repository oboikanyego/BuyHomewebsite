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
  selector: 'bh-sixthSection',
  templateUrl: './sixthSection.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class sixthSectionComponent {
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
      this.sd_arqTLJ875WSfJayR(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_arqTLJ875WSfJayR(bh) {
    try {
      bh = this.sd_JqL24INS3rZNrbtN(bh);
      //appendnew_next_sd_arqTLJ875WSfJayR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_arqTLJ875WSfJayR');
    }
  }

  //appendnew_flow_sixthSectionComponent_start

  sd_JqL24INS3rZNrbtN(bh) {
    try {
      this.page.sixSection = undefined;
      bh = this.sd_OP4h8qce0UpNFDnu(bh);
      //appendnew_next_sd_JqL24INS3rZNrbtN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JqL24INS3rZNrbtN');
    }
  }

  sd_OP4h8qce0UpNFDnu(bh) {
    try {
      const page = this.page;
      page.sixSection = {
        heading: 'Ready to take action?',
        paragraph: 'Get in touch',
        icon: 'search',
        logo: '/Web/images/white.jpg',
        logoHeading: 'VEEZA',
        list1: [
          'Technology Park',
          '8 - 14 Marie Curie Street',
          '08042 Barcelona',
        ],
        list2: ['+27799575686', 'veeza@gmail.com'],
        list3: ['About Us', 'Command Center', 'Documentation'],
      };
      //appendnew_next_sd_OP4h8qce0UpNFDnu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OP4h8qce0UpNFDnu');
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
  //appendnew_flow_sixthSectionComponent_Catch
}
