import 'normalize.css';
import './styles/index.scss';
import React from 'react';
import ButtonDemo from './ButtonDemo';
import CardDemo from './CardDemo';
import ModalDemo from './ModalDemo';
import HoversDemo from './HoversDemo';
import DropdownDemo from './DropdownDemo';
import GridDemo from './GridDemo';

export default () => (
  <div>
    <ButtonDemo />
    <CardDemo />
    <ModalDemo />
    <HoversDemo />
    <DropdownDemo />
    <GridDemo />
  </div>
);