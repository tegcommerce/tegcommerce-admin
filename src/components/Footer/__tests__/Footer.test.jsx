import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('<Footer /> Tests', () => {
  it('should render without exploding', done => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly', done => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
