import React from 'react';
import {FormControl, FormGroup, ControlLabel, Button, Row, Col, HelpBlock} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

import {InputFieldGroup} from './InputFieldGroup';
/*React.PropTypes = {

}*/

let validateMjesecniBrojSati = (value) => (value === 0 ? 'Unesi mjesecni fond sati' : undefined);

let InputForm = ({handleSubmit, invalid}) => (

      <form id="mainForm" onSubmit={handleSubmit}>
        <InputFieldGroup
          label="Godine Staža"
          name='godineStaza'
        />
        <InputFieldGroup
          label="Redovan mjesečni fond sati"
          name='brojSatiMjesecno'
          infoNote="Ukupni mjesečni fond sati. Jednak za sve službenike."
          validate={validateMjesecniBrojSati}
        />
        <InputFieldGroup
          label="Broj noćnih sati"
          name='brojNocnih'
          infoNote="22h-06h"
        />
        <InputFieldGroup
          label="Broj popodnevnih sati"
          name='brojPopodne'
          infoNote="14h-22h"
        />
        <InputFieldGroup
          label="Broj subotnjih sati"
          name='brojSubota'
        />
        <InputFieldGroup
          label="Broj nedjeljnih sati"
          name='brojNedjelja'
        />
        <InputFieldGroup
          label="Broj prekovremenih sati"
          name='brojPrekovremeni'
        />
        <InputFieldGroup
          label="Broj blagdanskih sati"
          name='brojBlagdan'
        />
        <InputFieldGroup
          label="Stopa prireza (npr 0.18)"
          name='stopaPrireza'
        />
        <InputFieldGroup
          label="Broj djece"
          name='brojDjece'
        />
        <InputFieldGroup
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

        <Row>
          <Col xs={12}>
            <Button type="submit">
              Calculate
            </Button>
          </Col>
        </Row>
        
        {invalid ? <Row>
          <Col xs={12}>
            <HelpBlock style={{margin: '0px 0px 0px 12px', color: 'red'}}>Provjeri vrijednosti!</HelpBlock>
          </Col>
        </Row> : null}
        
      </form>
);

const initialValues = {
    godineStaza: 0,
    brojSatiMjesecno: 100,
    brojNocnih: 0, 
    brojPopodne: 0,
    brojSubota: 0,
    brojNedjelja: 0,
    brojPrekovremeni: 0,
    brojBlagdan: 0,
    stopaPrireza: 0.18,
    brojDjece: 0,
    brojUzdrzavanih: 0,
    invalidnost: 'nema',
    profesija: 'lijecnikHMP'
};

InputForm = reduxForm({
    form: 'inputForm',
    initialValues: initialValues
})(InputForm);

export {InputForm};


/*constructor(){
    super();
    this.state = {
      godineStaza: 0,
      brojSatiMjesecno: 100,
      brojNocnih: 0, 
      brojPopodne: 0,
      brojSubota: 0,
      brojNedjelja: 0,
      brojPrekovremeni: 0,
      brojBlagdan: 0,
      stopaPrireza: 0.18,
      brojDjece: 0,
      brojUzdrzavanih: 0,
      invalidnost: 'nema',
      profesija: 'lijecnikHMP'
    };
  }


  }*/