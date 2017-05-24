import ReactOnRails from 'react-on-rails';

import PatientsIndex from '../components/index';
import PatientsNew from '../components/new';
import PatientsShow from '../components/show';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  PatientsIndex,
  PatientsNew,
  PatientsShow
});
