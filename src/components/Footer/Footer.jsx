import React from 'react';
import { pure } from 'recompose';
import Style from './style/Footer.scss';

const Footer = () => (
  <div className={Style.root}>
    <div className={Style.container}>
      <div className={Style.footerLeftContainer}>Cicero Viana</div>
      <div className={Style.footerRightContainer}>github.com/cicerohen</div>
    </div>
  </div>
);

export default pure(Footer);
