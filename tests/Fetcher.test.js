import React from 'react';
import { shallow } from 'enzyme';
import Fetcher from '../src/components/Fetcher';

global.fetch = jest.fn().mockImplementation(() => {
  const promise = new Promise(resolve => {
    resolve({
      json() {}
    });
  });

  return promise;
});

test('should render', () => {
  const wrapper = shallow(
    <Fetcher url="http://example.com" render={(data) => data} />
  );
  expect(wrapper);
});

test('should accept a url prop', () => {
  const wrapper = shallow(
    <Fetcher url="http://example.com" render={(data) => data}/>
  );
  expect(wrapper.instance().props.url).toBe('http://example.com');
});

test('snapshot', () => {
  const wrapper = shallow(
    <Fetcher url="http://example.com" render={(data) => data} />
  );
  expect(wrapper).toMatchSnapshot();
});
