import React from 'react';
import {OutputFieldGroup} from './OutputFieldGroup';
import {Row, Col, Clearfix} from 'react-bootstrap';


const PayResults = ({osnovica, koeficijentPlace, osnovnaPlaca, osnovnaSatnica,
                     nocniSat, popodnevniSat, subotaSat, nedjeljaSat, prekovremeniSat, blagdanSat, brutoPlaca,
                     dohodak, poreznaOlaksica, poreznaOsnovica, porez24, porez36, ukupniPorez, prirez, nettoPlaca, hideOptional}) => (
  <form>
    <Row>
      <OutputFieldGroup
        label="Osnovica"
        value={osnovica}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Koeficijent place"
        value={koeficijentPlace}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Osnovna placa"
        value={osnovnaPlaca}
        hidden={hideOptional}
      />

      <Col xs={6} md={6}/>
      <Clearfix />
      
      <OutputFieldGroup
        label="Osnovna satnica"
        value={osnovnaSatnica}
        hidden={hideOptional}
      />

      <Col xs={6} md={6} 
        hidden={hideOptional}/>
      <Clearfix />

      <OutputFieldGroup
        label="Nocni sat"
        value={nocniSat}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Popodnevni sat"
        value={popodnevniSat}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Subota sat"
        value={subotaSat}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Nedjelja sat"
        value={nedjeljaSat}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Prekovremeni sat"
        value={prekovremeniSat}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Blagdan sat"
        value={blagdanSat}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Bruto plaća"
        value={brutoPlaca}
      />
      <OutputFieldGroup
        label="Dohodak"
        value={dohodak}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Porezna olaksica"
        value={poreznaOlaksica}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Porezna osnovica"
        value={poreznaOsnovica}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Porez 24"
        value={porez24}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Porez 36"
        value={porez36}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Porez ukupno"
        value={ukupniPorez}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Prirez"
        value={prirez}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Neto placa"
        value={nettoPlaca}
      />
    </Row>
  </form>
);

PayResults.propTypes = {
    osnovica: React.PropTypes.number.isRequired
};

export {PayResults};