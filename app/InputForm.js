import React from 'react';
import {FormControl, FormGroup, ControlLabel, Checkbox, Radio, Button, Row, Col} from 'react-bootstrap';
import {FieldGroup} from './FieldGroup';

import {InputFieldGroup} from './InputFieldGroup';
/*React.PropTypes = {

}*/

class InputForm extends React.Component{
  constructor(){
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

  inputFieldChangeHandler = (event) => {
    let target = event.target;
    console.log(target.name);
    console.log(target.value);

    this.setState(
      {
        [target.name]: target.value
      }
    );
  }

  render() {
    console.log(this.state);
    return (
      <form id="mainForm">
        <InputFieldGroup
          type="number"
          label="Godine Staža"
          name='godineStaza'
          value={this.state.godineStaza}
          onChange={this.inputFieldChangeHandler}
        />
        <InputFieldGroup
          type="number"
          label="Redovan mjesečni fond sati"
          name='brojSatiMjesecno'
          value={this.state.brojSatiMjesecno}
          infoNote="Ukupni mjesečni fond sati. Jednak za sve službenike."
          onChange={this.inputFieldChangeHandler}
        />
        <InputFieldGroup
          type="number"
          label="Broj noćnih sati"
          name='brojNocnih'
          value={this.state.brojNocnih}
          infoNote="22h-06h"
          onChange={this.inputFieldChangeHandler}
        />
        <InputFieldGroup
          type="number"
          label="Broj popodnevnih sati"
          name='brojPopodne'
          value={this.state.brojPopodne}
          infoNote="14h-22h"
          onChange={this.inputFieldChangeHandler}
        />
        <InputFieldGroup
          type="number"
          label="Broj subotnjih sati"
          name='brojSubota'
          value={this.state.brojSubota}
          onChange={this.inputFieldChangeHandler}
        />
        <InputFieldGroup
          type="number"
          label="Broj nedjeljnih sati"
          name='brojNedjelja'
          value={this.state.brojNedjelja}
          onChange={this.inputFieldChangeHandler}
        />
        <InputFieldGroup
          type="number"
          label="Broj prekovremenih sati"
          name='brojPrekovremeni'
          value={this.state.brojPrekovremeni}
          onChange={this.inputFieldChangeHandler}
        />
        <InputFieldGroup
          type="number"
          label="Broj blagdanskih sati"
          name='brojBlagdan'
          value={this.state.brojBlagdan}
          onChange={this.inputFieldChangeHandler}
        />
        <InputFieldGroup
          type="number"
          label="Stopa prireza (npr 0.18)"
          name='stopaPrireza'
          value={this.state.stopaPrireza}
          onChange={this.inputFieldChangeHandler}
        />
        <InputFieldGroup
          type="number"
          label="Broj djece"
          name='brojDjece'
          value={this.state.brojDjece}
          onChange={this.inputFieldChangeHandler}
        />
        <InputFieldGroup
          type="number"
          label="Uzdržavani članovi"
          name='brojUzdrzavanih'
          value={this.state.brojUzdrzavanih}
          onChange={this.inputFieldChangeHandler}
        />

        <FormGroup controlId="invalidnost">
          <ControlLabel>Invalidnost</ControlLabel>
          <FormControl componentClass="select" name='invalidnost' placeholder="select" value={this.state.invalidnost} onChange={this.inputFieldChangeHandler}>
            <option value='nema'>Nema</option>
            <option value='djelomicna'>Djelomična</option>
            <option value='stopostotna'>Stopostotna</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="profesija">
          <ControlLabel>Radno mjesto</ControlLabel>
          <FormControl componentClass="select" name='profesija' placeholder="select" value={this.state.profesija} onChange={this.inputFieldChangeHandler}>
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
            <Button type="button" onClick={this.props.formCallback}>
              Calculate
            </Button>
          </Col>
        </Row>
        
      </form>
    );
  }

} 

export {InputForm};