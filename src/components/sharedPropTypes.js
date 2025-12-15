import PropTypes from 'prop-types';

export const messageDataProtoTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export const messageColorsProtoTypes = {
      local: PropTypes.string.isRequired,
      remote: PropTypes.string.isRequired,
};