import PropTypes from "prop-types";

Value.propTypes = {
    displayedValue: PropTypes.string.isRequired,
    totalValue: PropTypes.string.isRequired,
  };
  
export default function Value({ displayedValue, totalValue }) {
    const formattedDisplayedValue = displayedValue ? displayedValue.toLocaleString() : "0";
    const formattedTotalValue = totalValue ? totalValue.toLocaleString() : "0";
    return (
        <div className="value-container">
            <span className="material-symbols-outlined settings-icon">
                settings
            </span>
            <p className="previous__value">{formattedTotalValue}</p>
            <p className="current__value">{formattedDisplayedValue}</p>
        </div>
    );
}

