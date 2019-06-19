import React from 'react';
import { shallow } from 'enzyme';
import ViewContainer from '../ViewContainer';
import { createReduxTestStore } from '../../utils/test';

const minimalProps = {
  title: 'View Title'
};

describe('<ViewContainer /> Tests', () => {
  it('should render without exploding', done => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<ViewContainer store={testStore} />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly with minimal props', done => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(
      <ViewContainer store={testStore} {...minimalProps}>
        <div>content</div>
      </ViewContainer>
    );
    expect(wrapper.dive().shallow()).toMatchSnapshot();
    done();
  });

  it('should render correctly with header prop', done => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(
      <ViewContainer store={testStore} header={<div className="header" />} {...minimalProps} />
    );
    expect(wrapper.dive().shallow()).toMatchSnapshot();
    done();
  });

  it('should render correctly with footer prop', done => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(
      <ViewContainer store={testStore} footer={<div className="footer" />} {...minimalProps} />
    );
    expect(wrapper.dive().shallow()).toMatchSnapshot();
    done();
  });
});
