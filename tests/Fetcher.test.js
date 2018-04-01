import React from 'react';
import { shallow } from 'enzyme';
import Fetcher from '../src/components/Fetcher/Fetcher';

global.fetch = jest.fn().mockImplementation(() => {
  const promise = new Promise(resolve => {
    resolve({
      json() {}
    });
  });

  return promise;
});

describe('<Fetcher />', () => {
  it('should render', () => {
    const wrapper = shallow(<Fetcher render={(data) => <div>{data.name}</div>} />);
    expect(wrapper);
  });
});
