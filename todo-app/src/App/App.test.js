import React from 'react';
import App from './App';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

describe('App', () => {
  console.log('==================================================================')

  it('render()', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.className('app-container');
  });

  it('contains ExampleContainer', () => {
    const mockStore = configureMockStore();
    const store = mockStore({});

    const wrapper = mount(<Provider store={store}><App /></Provider>);
    expect(wrapper.find('.example-container')).to.have.length(1);
  });

});