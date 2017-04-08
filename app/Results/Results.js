import React from 'react';
import {OutputFieldGroup} from './OutputFieldGroup';
import {Row, Col, Clearfix} from 'react-bootstrap';


const Results = ({osnovica, koeficijentPlace, osnovnaPlaca, osnovnaSatnica,
                     dodatnoNocni, dodatnoPopodnevni, dodatnoSubotnji, dodatnoNedjeljni, dodatnoPrekovremeni, dodatnoBlagdanski, brutoPlaca,
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
        value={dodatnoNocni}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Popodnevni sat"
        value={dodatnoPopodnevni}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Subota sat"
        value={dodatnoSubotnji}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Nedjelja sat"
        value={dodatnoNedjeljni}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Prekovremeni sat"
        value={dodatnoPrekovremeni}
        hidden={hideOptional}
      />
      <OutputFieldGroup
        label="Blagdan sat"
        value={dodatnoBlagdanski}
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

Results.propTypes = {
    osnovica: React.PropTypes.number.isRequired
};

export {Results};