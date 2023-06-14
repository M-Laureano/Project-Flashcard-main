import React from 'react';
import { updateCard, updateDeck } from '../utils/api';
import { useHistory } from 'react-router-dom';

const SaveButton = ({ deck, card }) => {
    const history = useHistory();
    
    const saveHandler = (event) => {
        event.preventDefault();
        updateDeck(deck).then(card ? updateCard(card).then(response => history.push(`/decks/${deck.id}`)) : response => history.push(`/decks/${deck.id}`));
    }

    return (
        <button onClick={saveHandler} className="btn btn-primary mx-2">
        Save
        </button>
      )
}

export default SaveButton;