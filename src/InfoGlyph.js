import React from 'react';
import {Glyphicon, Tooltip} from 'react-bootstrap';

import {MyOverlayTrigger} from './MyOverlayTrigger';

const MyTooltip = (infoNote) => (
  <Tooltip id="tooltip">{infoNote}</Tooltip>
);

const InfoGlyph = ({infoNote}) => {

  return (
    <MyOverlayTrigger placement="right" overlay={MyTooltip(infoNote)} container={undefined}>
      <Glyphicon glyph="glyphicon glyphicon-info-sign" />
    </MyOverlayTrigger>
  );
};

export {InfoGlyph};