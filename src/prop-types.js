import PropTypes from 'prop-types';

/**
 * Default values
 */
export default {
  fixtures: PropTypes.array,
  initialValue: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  suggestsHiddenClassName: PropTypes.string,
  suggestItemActiveClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  buttonText: PropTypes.string,
  location: PropTypes.object,
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bounds: PropTypes.object,
  country: PropTypes.string,
  types: PropTypes.array,
  queryDelay: PropTypes.number,
  googleMaps: PropTypes.object,
  geocodeProvider: PropTypes.object,
  onGeocodeSuggest: PropTypes.func,
  onSuggestsLookup: PropTypes.func,
  onSuggestSelect: PropTypes.func,
  onSuggestResults: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  skipSuggest: PropTypes.func,
  showSuggests: PropTypes.func,
  disableAutoLookup: PropTypes.bool,
  getSuggestLabel: PropTypes.func,
  autoActivateFirstSuggest: PropTypes.bool,
  style: PropTypes.shape({
    input: PropTypes.object,
    suggests: PropTypes.object,
    suggestItem: PropTypes.object
  }),
  ignoreTab: PropTypes.bool,
  label: PropTypes.string,
  suggestItemLabelRenderer: PropTypes.func
};
