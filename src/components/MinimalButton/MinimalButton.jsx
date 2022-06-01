import PropTypes from 'prop-types';
import { Root } from './styles';

function MinimalButton({ children, onClick, style, ...props }) {
  return (
    <Root {...props} onClick={onClick} style={style}>
      {children}
    </Root>
  );
}

MinimalButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default MinimalButton;
