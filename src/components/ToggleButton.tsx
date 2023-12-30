import PropTypes from 'prop-types';
import * as Icon from './Icons';
import { memo } from 'react';

type ToggleButtonProps = {
  isOpen: boolean;
  iconType: string;
  buttonOnClickCb: () => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = memo(({ buttonOnClickCb, isOpen, iconType }) => {
  if (iconType === 'arrow') {
    return (
      <button type="button" onClick={buttonOnClickCb} className={'my-1 transition-transform hover:scale-125'}>
        {isOpen ? <Icon.Up color="#132043" height={'30px'} width={'30px'} /> : <Icon.Down color="#132043" height={'30px'} width={'30px'} />}
      </button>
    );
  } else {
    return (
      <button type="button" onClick={buttonOnClickCb} className={'my-1 transition-transform hover:scale-125'}>
        {isOpen ? <Icon.Hide color="#132043" height={'30px'} width={'30px'} /> : <Icon.Show color="#132043" height={'30px'} width={'30px'} />}
      </button>
    );
  }
});

ToggleButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  iconType: PropTypes.string.isRequired,
  buttonOnClickCb: PropTypes.func.isRequired,
};

ToggleButton.defaultProps = {
  iconType: 'arrow',
};

export default ToggleButton;
