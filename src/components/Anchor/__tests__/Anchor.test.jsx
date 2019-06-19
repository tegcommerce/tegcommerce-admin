import React from 'react';
import { shallow } from 'enzyme';
import Anchor from '../Anchor';

const minimalProps = {
  children: <div>Link</div>
};

const commonProps = {
  ...minimalProps,
  href: 'http://www.google.com',
  title: 'Anchor title',
  onClick: jest.fn()
};

describe('<Anchor /> Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render without exploding', done => {
    const wrapper = shallow(<Anchor {...minimalProps} />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Anchor {...minimalProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with all props', done => {
    const wrapper = shallow(<Anchor {...commonProps}></Anchor>);
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('should call onClick handler when click on anchor', done => {
    const wrapper = shallow(<Anchor {...commonProps} />);
    const anchor = wrapper
      .dive()
      .find('a')
      .first();
    anchor.simulate('click');
    expect(commonProps.onClick.mock.calls.length).toBe(1);
    done();
  });
});
