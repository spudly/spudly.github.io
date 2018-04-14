// @flow
import * as React from 'react';
import OsContext, {OsContextValues} from '../OsContext';
import Clock from '../widgets/Clock';

const TaskBar = () => (
  <OsContext.Consumer>
    {({apps, windows, onWindowFocus}: OsContextValues) => (
      <div className="taskbar">
        <button style={{display: 'block'}}>s:OS</button>
        <div style={{background: '#ccc', textAlign: 'right', padding: '0.5em'}}>
          <Clock format="h:mm A" />
        </div>
        {windows.map(window => (
          <button
            className="taskbar__task"
            key={window.id}
            onClick={() => onWindowFocus(window.id)}
          >
            {window.icon && (
              <React.Fragment>
                <window.icon size={16} />{' '}
              </React.Fragment>
            )}
            {window.title}
          </button>
        ))}
      </div>
    )}
  </OsContext.Consumer>
);

export default TaskBar;
