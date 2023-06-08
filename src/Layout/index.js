import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import NotFound from './NotFound';
import Home from './Home';
import StudyDeck from './StudyDeck';
import CreateDeck from './CreateDeck';
import ViewDeck from './ViewDeck';
import EditDeck from './EditDeck';
import AddCard from './AddCard';
import EditCard from './EditCard';

function Layout() {
  return (
    <>
      <Header />
      <div className='container'>
        <Switch>
          {/* Home component */}
          <Route exact path='/'>
            <Link to='/decks/new'>
              {/* Create new button */}
              <button className='btn btn-secondary'>
                <i className='fas fa-plus'></i> Create Deck
              </button>
            </Link>
            <Home />
          </Route>

          {/* Create Deck Component */}
          <Route exact path='/decks/new'>
            <CreateDeck />
          </Route>

          {/* Study Deck Component */}
          <Route exact path='/decks/:deckId/study'>
            <StudyDeck />
          </Route>

          {/* EditDeck Component */}
          <Route exact path='/decks/:deckId/edit'>
            <EditDeck />
          </Route>

          {/* View Deck Component */}
          <Route exact path='/decks/:deckId'>
            <ViewDeck />
          </Route>

          {/* Add Card Component */}
          <Route exact path='/decks/:deckId/cards/new'>
            <AddCard />
          </Route>

          {/* Edit Card Component */}
          <Route exact path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard />
          </Route>

          {/* Not Found 404 Component */}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
