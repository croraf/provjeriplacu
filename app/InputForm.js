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
      label="Godine Staža"
      name='godineStaza'
      min='0'
    />
    <InputFieldGroup
      type="number"
      label="Redovan mjesečni fond sati"
      name='brojSatiMjesecno'
      infoNote="Ukupni mjesečni fond sati. Jednak za sve službenike."
    />
    <InputFieldGroup
      type="number"
      label="Broj noćnih sati"
      name='brojNocnih'
      infoNote="22h-06h"
    />
    <InputFieldGroup
      type="number"
      label="Broj popodnevnih sati"
      name='brojPopodne'
      infoNote="14h-22h"
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
    <InputFieldGroup
      type="number"
      label="Broj djece"
      name='brojDjece'
    />
    <InputFieldGroup
      type="number"
      label="Uzdržavani članovi"
      name='brojUzdrzavanih'
    />

    <FormGroup controlId="invalidnost">
      <ControlLabel>Invalidnost</ControlLabel>
      <FormControl componentClass="select" name='invalidnost' placeholder="select">
        <option value='nema'>Nema</option>
        <option value='djelomicna'>Djelomična</option>
        <option value='stopostotna'>Stopostotna</option>
      </FormControl>
    </FormGroup>

    <FormGroup controlId="profesija">
      <ControlLabel>Radno mjesto</ControlLabel>
      <FormControl componentClass="select" name='profesija' placeholder="select">
        <option value='lijecnikHMP'>Liječnik HMP</option>
        <option value='lijecnik'>Liječnik</option>
        <option value='medicinskiTehnicar'>Medicinski tehničar</option>
        <option value='vozacHMP'>Vozač HMP</option>
      </FormControl>
    </FormGroup>

    {/*<Row>
      <Col xs={12}>
        <Checkbox defaultChecked name="hitna" value="1">
          Hitna služba
        </Checkbox>
      </Col>
    </Row>

    <Row>
      <Col xs={12}>
        <Checkbox defaultChecked name="polozajni" value="1">
          Položajni dodatak
        </Checkbox>
      </Col>
    </Row>*/}


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