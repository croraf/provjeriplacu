import React from 'react';
import {FormControl, FormGroup, ControlLabel, Checkbox, Radio, Button, Row, Col} from 'react-bootstrap';
import {FieldGroup} from './FieldGroup';

import {InputFieldGroup} from './InputFieldGroup';
/*React.PropTypes = {

}*/

const InputForm = ({formCallback}) => (
  <form id="mainForm">
    <InputFieldGroup
      type="number"
      label="Broj sati mjesecno"
      name='brojSatiMjesecno'
    />
    <InputFieldGroup
      type="number"
      label="Broj noćnih sati"
      name='brojNocnih'
    />
    <InputFieldGroup
      type="number"
      label="Broj dnevnih sati"
      name='brojPopodne'
    />
    <InputFieldGroup
      type="number"
      label="Broj subotnjih sati"
      name='brojSubota'
    />
    <InputFieldGroup
      type="number"
      label="Broj nedjeljnih sati"
      name='brojNedjelja'
    />
    <InputFieldGroup
      type="number"
      label="Broj prekovremenih sati"
      name='brojPrekovremeni'
    />
    <InputFieldGroup
      type="number"
      label="Broj blagdanskih sati"
      name='brojBlagdan'
    />
    <InputFieldGroup
      type="number"
      label="Stopa prireza (npr 0.18)"
      name='stopaPrireza'
    />

    <Row>
      <Col xs={12}>
        <Checkbox defaultChecked>
          Hitna služba
        </Checkbox>
      </Col>
    </Row>

    <Row>
      <Col xs={12}>
        <Checkbox defaultChecked>
          Položajni dodatak
        </Checkbox>
      </Col>
    </Row>

    {/*
    <InputFieldGroup
      id="formControlsFile"
      type="file"
      label="File"
      help="Example block-level help text here."
    />

    <Checkbox checked readOnly>
      Checkbox
    </Checkbox>
    <Radio checked readOnly>
      Radio
    </Radio>

    <FormGroup>
      <Checkbox inline>
        1
      </Checkbox>
      {' '}
      <Checkbox inline>
        2
      </Checkbox>
      {' '}
      <Checkbox inline>
        3
      </Checkbox>
    </FormGroup>
    <FormGroup>
      <Radio inline>
        1
      </Radio>
      {' '}
      <Radio inline>
        2
      </Radio>
      {' '}
      <Radio inline>
        3
      </Radio>
    </FormGroup>

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
    <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>Multiple select</ControlLabel>
      <FormControl componentClass="select" multiple>
        <option value="select">select (multiple)</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Static text</ControlLabel>
      <FormControl.Static>
        email@example.com
      </FormControl.Static>
    </FormGroup>*/}

    <Row>
      <Col xs={12}>
        <Button type="button" onClick={formCallback}>
          Calculate
        </Button>
      </Col>
    </Row>
    
  </form>
);

export {InputForm};