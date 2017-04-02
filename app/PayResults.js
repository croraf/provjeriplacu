import React from 'react';
import {OutputFieldGroup} from './OutputFieldGroup';
import {Row, Col, Clearfix} from 'react-bootstrap';

const PayResults = ({osnovica, koeficijentPlace, osnovnaPlaca, dodatakHitna, polozajniDodatak, osnovnaSatnica,
                     nocniSat, popodnevniSat, subotaSat, nedjeljaSat, prekovremeniSat, blagdanSat, brutoPlaca,
                     dohodak, poreznaOlaksica, poreznaOsnovica, porez24, porez36, ukupniPorez, prirez, nettoPlaca}) => (
  <form>
    <Row>
      <OutputFieldGroup
        label="Osnovica"
        value={osnovica}
      />
      <OutputFieldGroup
        label="Koeficijent place"
        value={koeficijentPlace}
      />
      <OutputFieldGroup
        label="Osnovna placa"
        value={osnovnaPlaca}
      />

      <Col xs={6} md={6}/>
      <Clearfix />

      <OutputFieldGroup
        label="Dodatak Hitna"
        value={dodatakHitna}
      />
      <OutputFieldGroup
        label="Polozajni dodatak"
        value={polozajniDodatak}
      />
      <OutputFieldGroup
        label="Osnovna satnica"
        value={osnovnaSatnica}
      />

      <Col xs={6} md={6}/>
      <Clearfix />

      <OutputFieldGroup
        label="Nocni sat"
        value={nocniSat}
      />
      <OutputFieldGroup
        label="Popodnevni sat"
        value={popodnevniSat}
      />
      <OutputFieldGroup
        label="Subota sat"
        value={subotaSat}
      />
      <OutputFieldGroup
        label="Nedjelja sat"
        value={nedjeljaSat}
      />
      <OutputFieldGroup
        label="Prekovremeni sat"
        value={prekovremeniSat}
      />
      <OutputFieldGroup
        label="Blagdan sat"
        value={blagdanSat}
      />
      <OutputFieldGroup
        label="Bruto plaća"
        value={brutoPlaca}
      />
      <OutputFieldGroup
        label="Dohodak"
        value={dohodak}
      />
      <OutputFieldGroup
        label="Porezna olaksica"
        value={poreznaOlaksica}
      />
      <OutputFieldGroup
        label="Porezna osnovica"
        value={poreznaOsnovica}
      />
      <OutputFieldGroup
        label="Porez 24"
        value={porez24}
      />
      <OutputFieldGroup
        label="Porez 36"
        value={porez36}
      />
      <OutputFieldGroup
        label="Porez ukupno"
        value={ukupniPorez}
      />
      <OutputFieldGroup
        label="Prirez"
        value={prirez}
      />
      <OutputFieldGroup
        label="Neto placa"
        value={nettoPlaca}
      />
    </Row>
  </form>
);

export {PayResults};