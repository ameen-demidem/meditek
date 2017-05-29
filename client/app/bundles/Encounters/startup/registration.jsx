import ReactOnRails from 'react-on-rails';

import EncountersShow from '../components/show';
import EncountersEdit from '../components/edit';
import EncountersNew from '../components/new';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  EncountersShow,
  EncountersEdit,
  EncountersNew
});

