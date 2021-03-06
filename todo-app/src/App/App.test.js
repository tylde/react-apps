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

  describe('contains', () => {
    let store, wrapper;
    const mockStore = configureMockStore();
    beforeEach(() => {
      let initialStore = {
        filter: 'FILTER_BY_ALL',
        todos: {
          byHash: { 0: { id: 0, priority: 2, text: 'Create todo application', done: false } },
          byId: [0]
        }
      };

      store = mockStore(initialStore);
      wrapper = mount(<Provider store={store}><App /></Provider>);
    });

    it('Header', () => {
      expect(wrapper.find('.header-container')).to.have.length(1);
    });

    it('Todos', () => {
      expect(wrapper.find('.todos-container')).to.have.length(1);
    });

  });

});