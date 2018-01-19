import React from 'react';
import Todos from './Todos';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

describe('Todos', () => {

  it('render()', () => {
    const wrapper = shallow(<Todos />);
    expect(wrapper).to.have.className('todos-container');
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
      wrapper = mount(<Provider store={store}><Todos /></Provider>);
    });

    it('TodoAdd', () => {
      expect(wrapper.find('.todo-add-container')).to.have.length(1);
    });

    it('TodoFilter', () => {
      expect(wrapper.find('.todo-filter-container')).to.have.length(1);
    });

    it('TodoList', () => {
      expect(wrapper.find('.todo-list-container')).to.have.length(1);
    });

  });

});