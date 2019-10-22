import React from 'react';
import {Glyphicon, OverlayTrigger, Tooltip} from 'react-bootstrap';

import {MyOverlayTrigger} from './MyOverlayTrigger';


const MyTooltip = (infoNote) => (
  <Tooltip id="tooltip">{infoNote}</Tooltip>
);

class InfoGlyph extends React.Component {
    render () {

        const {infoNote, ...props} = this.props;
        return (
            <MyOverlayTrigger placement="right" overlay={MyTooltip(infoNote)} container={undefined}>
                <Glyphicon glyph="glyphicon glyphicon-info-sign" />
            </MyOverlayTrigger>
        );
    }
}

export {InfoGlyph};