import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { InputForm } from './Inputs/InputForm';
import { ResultsContainer } from './Results/ResultsContainer';
import MyHeader from './MyHeader/MyHeader';
import { ScrollingPanel } from './ScrollingPanel/ScrollingPanel';
import { CreditsBar } from './CreditsBar';

import { calculateResultsAction } from './actions/calculateResultsAction';

const App = ({ store, }) => {

  const formCallback = (formData) => {
    store.dispatch(calculateResultsAction(formData));
  };

  return (
    <div style={{
      position: 'absolute',
      top: '0px', bottom: '0px', left: '0px', right: '0px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}
    >
      <div style={{ flexShrink: '0' }}>
        <MyHeader />
      </div>

      <Grid style={{
        flexGrow: '1',
        flexShrink: '1',
        margin: '0px auto 10px auto',
        overflowY: 'hidden',
        height: '100%',
        width: '100%',
        maxWidth: '1300px',
        minHeight: '400px'
      }}>
        <Row style={{ height: '100%' }}>
          <Col xs={0} md={1} lg={2} />
          <Col xs={5} md={4} lg={3} style={{ height: '100%', paddingBottom: '5px' }}>
            <ScrollingPanel headerText='Parametri' bsStyle={'primary'}>
              <InputForm onSubmit={formCallback} />
            </ScrollingPanel>
          </Col>
          <Col xs={0} md={0} />
          <Col xs={7} md={6} lg={5} style={{ height: '100%', paddingBottom: '5px' }}>
            <ScrollingPanel headerText='Rezultati' headerButtonActionType='HIDE_OPTIONAL' >
              <ResultsContainer />
            </ScrollingPanel>
          </Col>
        </Row>
      </Grid>

      <div style={{ flexShrink: '0' }}>
        <CreditsBar />
      </div>
    </div>
  );
};

export { App };