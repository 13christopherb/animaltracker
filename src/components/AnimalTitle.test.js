import React from 'react';
import { shallow } from 'enzyme';

import AnimalTitle from './AnimalTitle';

it('should render correctly', () => {
    const component = shallow(<AnimalTitle />);
    expect(component).toMatchSnapshot();
});