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
            className={`button-size ${color}`}
            onClick={() => onUpdateColor(sender, color)}
          >
            <p className='button-size'>&#9679;</p>
          </button>
        );
      })}
    </div>
  );
};

ColorChoice.propTypes = {
  sender: PropTypes.string.isRequired,
  onUpdateColor: PropTypes.func.isRequired
};

export default ColorChoice;
