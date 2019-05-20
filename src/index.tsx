import * as React from 'react';
import {
  // JupyterLab,
  JupyterFrontEndPlugin,
  JupyterFrontEnd,
} from '@jupyterlab/application';
import {
  ICommandPalette,
  ReactWidget,
} from '@jupyterlab/apputils';

// import {
//   Widget
// } from '@phosphor/widgets';
import { Button, Spin } from 'antd';
// import style from '~antd/dist/antd.css';
import  './index.module.less';


/**
 * Initialization data for the jupyterlab-extension-demo extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-extension-demo',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('JupyterLab extension jupyterlab_xkcd is activated!');
    // Create a single widget
    // let widget: Widget = new Widget();
    // widget.id = 'xkcd-jupyterlab';
    // widget.title.label = 'xkcd.com';
    // widget.title.closable = true;
    let div = ReactWidget.create(
      <div>
        <Button className='test'>AAAA</Button>
        <Button>CCC</Button>
        <Button>AAAA</Button>
        <Button>BBB</Button>
        <Spin />
      </div>
    );
    div.id = 'antd';
    div.title.label = 'antd';
    div.title.closable = true;
    // widget.node.append(div);
    // widget.node.appendChild();

    // let img = document.createElement('div');
    // img.innerText = 'dadsada';
    // widget.node.appendChild(img);

    // Fetch info about a random comic
    // fetch('https:////egszlpbmle.execute-api.us-east-1.amazonaws.com/prod').then(response => {
    //   return response.json();
    // }).then(data => {
    //   img.src = data.img;
    //   img.alt = data.title;
    //   img.title = data.alt;
    // });

    // Add an application command
    const command: string = 'xkcd:open';
    app.commands.addCommand(command, {
      label: 'Random xkcd comic',
      execute: () => {
        // app.shell.add(div, 'main');
        if (!div.isAttached) {
        //   // Attach the widget to the main work area if it's not there
        //   app.shell.add(widget, 'main');
          app.shell.add(div, 'main');
        }
        // Activate the widget
        app.shell.activateById(div.id);
      }
    });

    // Add the command to the palette.
    palette.addItem({command, category: 'Tutorial'});
  }
};

export default extension;
