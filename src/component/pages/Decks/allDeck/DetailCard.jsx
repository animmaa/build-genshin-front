import React from 'react';
import PropTypes from 'prop-types';
import './DetailCard.scss';

function DetailCard({ nameCard, elementCard }) {
  return (
    <div>
      <div className="card">
        <div>{nameCard}</div>
        {elementCard && <div>{elementCard}</div>}
      </div>
    </div>
  );
}

DetailCard.propTypes = {
  nameCard: PropTypes.string.isRequired,
  elementCard: PropTypes.string.isRequired,
};

export default DetailCard;
