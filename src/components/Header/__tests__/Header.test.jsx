import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import MenuItem from '../../MenuItem';

const eventMockObject = {
  preventDefault: jest.fn()
};

const minimalProps = {
  pushFn: jest.fn(),
  openSidebarFn: jest.fn()
};

describe('<Header /> Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render without exploding', done => {
    const wrapper = shallow(<Header {...minimalProps} />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly with minimal props', done => {
    const wrapper = shallow(<Header {...minimalProps} />);
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('should call pushFn when click on Home menu item', done => {
    const wrapper = shallow(<Header {...minimalProps} />);
    const menuItem = wrapper.find(MenuItem).filterWhere(item => item.children().contains('Home'));
    const menuItemAnchor = menuItem
      .dive()
      .shallow()
      .find('a')
      .first();
    menuItemAnchor.simulate('click', eventMockObject);
    expect(minimalProps.pushFn.mock.calls.length).toBe(1);
    done();
  });

  it('should call pushFn when click on Sign In menu item', done => {
    const wrapper = shallow(<Header {...minimalProps} />);
    const menuItem = wrapper
      .find(MenuItem)
      .filterWhere(item => item.children().contains('Sign In'));
    const menuItemAnchor = menuItem
      .dive()
      .shallow()
      .find('a')
      .first();
    menuItemAnchor.simulate('click', eventMockObject);
    expect(minimalProps.pushFn.mock.calls.length).toBe(1);
    done();
  });

  it('should call pushFn when click on Sign Up menu item', done => {
    const wrapper = shallow(<Header {...minimalProps} />);
    const menuItem = wrapper
      .find(MenuItem)
      .filterWhere(item => item.children().contains('Sign Up'));
    const menuItemAnchor = menuItem
      .dive()
      .shallow()
      .find('a')
      .first();
    menuItemAnchor.simulate('click', eventMockObject);
    expect(minimalProps.pushFn.mock.calls.length).toBe(1);
    done();
  });
});
