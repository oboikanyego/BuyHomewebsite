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
  selector: 'bh-footer',
  templateUrl: './footer.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class footerComponent {
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
      this.sd_FUMv6U2am57w2pGT(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_FUMv6U2am57w2pGT(bh) {
    try {
      bh = this.sd_1hDuRvS3lnCs8uuj(bh);
      //appendnew_next_sd_FUMv6U2am57w2pGT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FUMv6U2am57w2pGT');
    }
  }

  //appendnew_flow_footerComponent_start

  sd_1hDuRvS3lnCs8uuj(bh) {
    try {
      this.page.footerArr = [];
      bh = this.sd_mT55KP9frAfh0yo1(bh);
      //appendnew_next_sd_1hDuRvS3lnCs8uuj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1hDuRvS3lnCs8uuj');
    }
  }

  sd_mT55KP9frAfh0yo1(bh) {
    try {
      const page = this.page;
      page.footerArr = [
        'SINCE•2022',
        '©2022 COPYRIGHT BY AIZE',
        'TERM.PRIVACY POLICY',
      ];
      //appendnew_next_sd_mT55KP9frAfh0yo1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mT55KP9frAfh0yo1');
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
  //appendnew_flow_footerComponent_Catch
}
