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
  selector: 'bh-secondSection',
  templateUrl: './secondSection.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class secondSectionComponent {
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
      this.sd_2zxIJPy6Wf5OBG45(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_2zxIJPy6Wf5OBG45(bh) {
    try {
      bh = this.sd_igqfPvzIJR0lYKaw(bh);
      //appendnew_next_sd_2zxIJPy6Wf5OBG45
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2zxIJPy6Wf5OBG45');
    }
  }

  //appendnew_flow_secondSectionComponent_start

  sd_igqfPvzIJR0lYKaw(bh) {
    try {
      this.page.secondSection = undefined;
      bh = this.sd_DR2xdK0wELZ12Pwf(bh);
      //appendnew_next_sd_igqfPvzIJR0lYKaw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_igqfPvzIJR0lYKaw');
    }
  }

  sd_DR2xdK0wELZ12Pwf(bh) {
    try {
      const page = this.page;
      page.secondSection = [
        {
          images: '/Web/images/building2.jpeg',
          title: 'Faishore Duel Haven',
          text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
          date: 'January 18•2022',
        },
        {
          images: '/Web/images/building2.jpeg',
          title: 'Faishore Duel Haven',
          text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
          date: 'January 18•2022',
        },
        {
          images: '/Web/images/building2.jpeg',
          title: 'Faishore Duel Haven',
          text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
          date: 'January 18•2022',
        },
        {
          images: '/Web/images/building2.jpeg',
          title: 'Faishore Duel Haven',
          text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
          date: 'January 18•2022',
        },
      ];
      //appendnew_next_sd_DR2xdK0wELZ12Pwf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DR2xdK0wELZ12Pwf');
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
  //appendnew_flow_secondSectionComponent_Catch
}
