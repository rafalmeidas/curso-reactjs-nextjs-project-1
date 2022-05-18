import P from 'prop-types';
import './styles.css';

export const Button = ({ text, onClick, disable = false }) => {
  return (
    <button disabled={disable} className="button" onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disable: P.bool,
};
