import React from 'react';
import { useHistory } from 'react-router-dom';

const CancelButton = ({ deck }) => {
    const history = useHistory();
    
    const cancelHandler = (event) => {
        event.preventDefault();
        deck ? history.push(`/decks/${deck.id}`) : history.push(`/`);
    }
    
    return (
        <button onClick={cancelHandler} className="btn btn-secondary">
        Cancel
        </button>
      )
}

export default CancelButton;