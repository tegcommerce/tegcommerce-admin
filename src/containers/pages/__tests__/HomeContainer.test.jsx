import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from '../HomeContainer';
import { createReduxTestStore } from '../../../utils/test';

describe('<HomeContainer /> Tests', () => {
  it('should render without exploding', done => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<HomeContainer store={testStore} />);

    expect(wrapper).toHaveLength(1);
    done();
  });
});
