import React from 'react';
import { Button, Row, Col, HelpBlock} from 'react-bootstrap';
import { reduxForm } from 'redux-form';

import {InputSelectField} from './InputSelectField';
import {InputNumberField} from './InputNumberField';
import {FieldGroup} from './FieldGroup';
/*React.PropTypes = {

}*/

let validateMjesecniBrojSati = (value) => (value === 0 ? 'Unesi mjesecni fond sati' : undefined);

let InputForm = ({handleSubmit, invalid}) => (

      <form id="mainForm" onSubmit={handleSubmit}>

        <FieldGroup label="Godine Staža" >
          <InputNumberField name='godineStaza' />
        </FieldGroup>

        <FieldGroup label="Redovan mjesečni fond sati" infoNote="Ukupni mjesečni fond sati. Jednak za sve službenike." >
          <InputNumberField name='brojSatiMjesecno' validate={validateMjesecniBrojSati} />
        </FieldGroup>

        <FieldGroup label="Broj noćnih sati" infoNote="22h-06h" >
          <InputNumberField name='brojNocnih' />
        </FieldGroup>

        <FieldGroup label="Broj popodnevnih sati" infoNote="14h-22h" >
          <InputNumberField name='brojPopodne' />
        </FieldGroup>

        <FieldGroup label="Broj subotnjih sati" >
          <InputNumberField name='brojSubota' />
        </FieldGroup>

        <FieldGroup label="Broj nedjeljnih sati" >
          <InputNumberField name='brojNedjelja' />
        </FieldGroup>

        <FieldGroup label="Broj prekovremenih sati" >
          <InputNumberField name='brojPrekovremeni' />
        </FieldGroup>

        <FieldGroup label="Broj blagdanskih sati" >
          <InputNumberField name='brojBlagdan' />
        </FieldGroup>

        <FieldGroup label="Stopa prireza (npr. 18)" >
          <InputNumberField name='stopaPrireza' />
        </FieldGroup>

        <FieldGroup label="Broj djece" >
          <InputNumberField name='brojDjece' />
        </FieldGroup>

        <FieldGroup label="Uzdržavani članovi" >
          <InputNumberField name='brojUzdrzavanih' />
        </FieldGroup>


        <FieldGroup label='Invalidnost'>
            <InputSelectField name='invalidnost'>
                <option value='nema'>Nema</option>
                <option value='djelomicna'>Djelomična</option>
                <option value='stopostotna'>Stopostotna</option>
            </InputSelectField>
        </FieldGroup>

        <FieldGroup label='Radno mjesto'>
            <InputSelectField name='profesija'>
                <option value='lijecnikHMP'>Liječnik HMP</option>
                <option value='lijecnik'>Liječnik</option>
                <option value='medicinskiTehnicar'>Medicinski tehničar</option>
                <option value='vozacHMP'>Vozač HMP</option>
                {/*<option value='drugo'>Druga Profesija...</option>*/}
            </InputSelectField>
        </FieldGroup>

        {/*<FieldGroup label='Koeficijent' infoNote='Unesi ukoliko profesije nema na popisu'>
          <InputNumberField name='koeficijent' />
        </FieldGroup>*/}

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
    stopaPrireza: 18,
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