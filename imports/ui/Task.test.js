import { Meteor } from 'meteor/meteor';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';

//move these to init test
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Task from './Task.js';

if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      it('can delete owned task', () => {
      });
    });
  });
}

describe('Tasks', () => {
  describe('Render', () => {
    it('There should be one li\'s', () => {
      const wrapper = shallow(<Task task={{text: "Hello"}}/>);
      expect(wrapper.children()).to.have.lengthOf(1)
    });
  })
})
