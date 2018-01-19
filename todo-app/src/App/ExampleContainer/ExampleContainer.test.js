import React from 'react';
import ExampleContainer from './ExampleContainer';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

describe('ExampleContainer', () => {

  const middlewares = [thunkMiddleware];
  const mockStore = configureMockStore(middlewares);

  it('render()', () => {
    const store = mockStore({ exampleText: 'Tekst' });
    const wrapper = shallow(<ExampleContainer store={store} />);
    expect(wrapper.dive()).to.have.className('example-container');
  });

  it('has specified text', () => {
    const store = mockStore({ exampleText: 'Tekst' });
    const wrapper = mount(<ExampleContainer store={store} />);
    expect(wrapper.find('.description')).to.have.text('Tekst');
  });

});