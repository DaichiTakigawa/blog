import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

addDecorator(withKnobs)
addDecorator(withInfo)

const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

global.___loader = {  
  enqueue: () => {},  
  hovering: () => {},
}
global.__PATH_PREFIX__ = ""
window.___navigate = pathname => {  
  action("NavigateTo:")(pathname)
}
configure(loadStories, module);
