import React from 'react';
import { shallow } from 'enzyme';
import View from '../View';

const minimalProps = {
  title: 'View Title',
  header: <div className="header" />,
  footer: <div className="footer" />
};

describe('<View /> Tests', () => {
  it('should render without exploding', done => {
    const wrapper = shallow(<View {...minimalProps} />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly with minimal props', done => {
    const wrapper = shallow(
      <View {...minimalProps}>
        <div>content</div>
      </View>
    );
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('should render correctly with subtitle', done => {
    const wrapper = shallow(
      <View {...minimalProps} subtitle="View Subtitle" />
    );
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
