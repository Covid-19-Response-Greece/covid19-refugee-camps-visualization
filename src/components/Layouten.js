import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'assets/stylesheets/application.scss';
import Header from 'components/Headeren';
import Footer from 'components/Footer';

const Layout = ({ children, pageName }) => {
  let className = '';

  if ( pageName ) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>Refugee Camps Greece - Covid19</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <main style={{marginTop: '70px'}}>{ children }</main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string
};

export default Layout;

