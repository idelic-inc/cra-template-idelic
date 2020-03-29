// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'jest-enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {setIconOptions} from 'office-ui-fabric-react/lib/Styling';

setIconOptions({
  disableWarnings: true
});

configure({adapter: new Adapter()});
