import React from 'react';

/* HACK FOR hiding tooltips on inputs container scroll, because of bug. */

import {OverlayTrigger} from 'react-bootstrap';

import {onScrollCallbacks} from './ScrollingPanel/scrollingPanelUtils';

class MyOverlayTrigger extends OverlayTrigger {

  componentDidMount() {
    super.componentDidMount();

    onScrollCallbacks.push(
      () => {this.handleHide();}
    );
  }
}

export {MyOverlayTrigger};