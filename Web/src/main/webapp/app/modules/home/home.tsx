import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <Row>
      <Col md="9">
        <h2>Welcome,{account.login}</h2>
        <p className="lead">This is your homepage</p>
        {account && account.login ? (
          <div>
            <Alert color="success">You are logged in as user {account.login}.</Alert>
          </div>
        ) : (
          <div>
            <Alert color="warning">
              You do not have an account yet?&nbsp;
              <Link to="/account/register" className="alert-link">
                Register a new account
              </Link>
            </Alert>
          </div>
        )}
        <p>If you have any question on Developer:</p>

        <ul>
          <li>
            <a href="https://www.facebook.com/qn.daglamph" target="_blank" rel="noopener noreferrer">
              Folow on Facebook
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/tiemtrachanh1975QNSL" target="_blank" rel="noopener noreferrer">
              Folow my Fanpage
            </a>
          </li>

        </ul>

        <p>
          If you are female, our story will end at a {' '}
          <a href="" target="_blank" rel="noopener noreferrer">
            HOTEL
          </a>
          !
        </p>
      </Col>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
