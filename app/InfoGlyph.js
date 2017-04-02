import React from 'react';
import {Glyphicon, OverlayTrigger, Tooltip} from 'react-bootstrap';

const MyTooltip = (infoNote) => (
  <Tooltip id="tooltip">{infoNote}</Tooltip>
);

function InfoGlyph({ infoNote, ...props }) {
    return (
        <OverlayTrigger placement="right" overlay={MyTooltip(infoNote)}>
            <Glyphicon glyph="glyphicon glyphicon-info-sign" />
        </OverlayTrigger>
    );
}

export {InfoGlyph};