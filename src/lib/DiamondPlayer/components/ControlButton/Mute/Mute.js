import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withContext from '../../withContext';
import { MuteIcon, UnmuteIcon } from './styles';
import TooltipButton from '../../TooltipButton';

export class Mute extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { context: { mute: currentMute } } = this.props;
    const { context: { mute: nextMute } } = nextProps;

    return (currentMute !== nextMute);
  }

  /**
   * handleClick: Handles an onClick event.
   */
  handleClick() {
    const { context } = this.props;
    const { actions: { toggleMute } } = context;

    toggleMute();
  }

  render() {
    const { context: { mute: showUnmuteIcon } } = this.props;
    const tooltipTitle = (showUnmuteIcon) ? 'Unmute' : 'Mute';

    return (
      <TooltipButton title={tooltipTitle} onClick={this.handleClick}>
        {(showUnmuteIcon) ? <UnmuteIcon size="22" /> : <MuteIcon size="22" />}
      </TooltipButton>
    );
  }
}

Mute.propTypes = {
  context: PropTypes.object.isRequired
};

export default withContext(Mute);