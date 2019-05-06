import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab-extension-demo extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab-extension-demo',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab-extension-demo is activated!');
  }
};

export default extension;
