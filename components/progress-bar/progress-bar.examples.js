import React, {Component} from 'react';
import {storiesOf} from '@storybook/html';

import reactDecorator from '../../.storybook/react-decorator';

import Theme from '../global/theme';

import ProgressBar from './progress-bar';

storiesOf('Components|Progress Bar', module).
  addDecorator(reactDecorator()).
  add('basic', () => {
    class ProgressBarDemo extends Component {
      state = {
        value: 0
      };

      componentDidMount() {
        setInterval(() => {
          // eslint-disable-next-line react/no-access-state-in-setstate
          const value = this.state.value >= 1 ? 0 : this.state.value + 0.1;
          this.setState({value});
        }, 500);
      }

      render() {
        const {value} = this.state;

        return (
          <div>
            <div style={{height: '25px', paddingTop: '25px'}}>
              <ProgressBar value={value}/>
            </div>

            <div style={{height: '25px', paddingTop: '25px', background: '#000'}}>
              <ProgressBar value={value} theme={Theme.DARK}/>
            </div>

            <div style={{height: '25px', paddingTop: '25px', background: '#F0F0F0'}}>
              <ProgressBar value={value}/>
            </div>
          </div>
        );
      }
    }

    return <ProgressBarDemo/>;
  });
