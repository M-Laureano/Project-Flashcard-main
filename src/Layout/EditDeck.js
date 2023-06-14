import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateDeck, readDeck } from "../utils/api/index";

function EditDeck() {
  const initialState = { name: "", description: "" };
  const [formData, setFormData] = useState(initialState);
  const [deck, setDeck] = useState({});
  const history = useHistory();
  const { deckId } = useParams();

  // loads deck and copies it into state object
  useEffect(() => {
    const abortController = new AbortController();
    const loadDeck = async () => {
      const loadedDeck = await readDeck(deckId, abortController.signal);
      setDeck(() => loadedDeck);
      setFormData({
        id: deckId,
        name: loadedDeck.name,
        description: loadedDeck.description,
      });
    };
    loadDeck();
    return () => abortController.abort();
  }, [deckId]);

  // adds new data to state object
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // updates the deck in api with state object and returns to deck screen
  const handleSubmit = async (event) => {
    event.preventDefault();
    const deckNum = await updateDeck(formData);
    history.push(`/decks/${deckNum.id}`);
  };

  // displays edit deck form
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-primary">
            <Link to="/">
              <i className='bi bi-house-door-fill'></i>Home
            </Link>
          </li>
          <li className="breadcrumb-item text-primary">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h1>Edit Deck</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            value={formData.name}
            placeholder={deck.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Description</label>
          <textarea
            name="description"
            style={{ resize: "none" }}
            rows="5"
            className="form-control"
            value={formData.description}
            placeholder={deck.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <Link to={`/decks/${deckId}`}>
            <button className="btn btn-secondary mr-2">Cancel</button>
          </Link>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditDeck