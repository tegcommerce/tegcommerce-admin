import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../Menu';

const minimalProps = {
  children: <div />
};

describe('<Menu /> Tests', () => {
  it('should render without exploding', done => {
    const wrapper = shallow(<Menu {...minimalProps} />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly', done => {
    const wrapper = shallow(<Menu {...minimalProps} />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
