import PropTypes from 'prop-types';
import './ColorChoice.css';

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const ColorChoice = ({ sender, onUpdateColor }) => {
  return (
    <div className="color-container">
      {COLORS.map((color, index) => {
        return (
          <button
            key={index}
            className={color}
            onClick={() => onUpdateColor(sender, color)}
          >
            &#9679;
          </button>
        );
      })}
    </div>
  );
};

ColorChoice.propTypes = {
  sender: PropTypes.number.isRequired,
  onUpdateColor: PropTypes.func.isRequired
};

export default ColorChoice;
