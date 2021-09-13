import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


// Aunque solo tengamos 1 reducers, siempre es mejor hacerlo de esta manera,
// ya que en un futuro, nos puede evitar refactorizar esta parte
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
});

// INFO DE LA CONFIGURACION 
// https://github.com/zalmoxisus/redux-devtools-extension#usage

// El store se llama en el punto mas alto de la app, en este caso
// en JournalApp, podria ser en el index.js, pero es mejor mantenerlo lo mas limpio posible
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
    // Con la linea de arriba, podemos ver el redux en el navegador con la extension redux-devtools-extension
);