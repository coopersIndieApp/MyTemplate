import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import exampleReducer from './exampleReducer';

const rootReducer = combineReducers({
  exampleReducer: exampleReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['exampleReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

let persistor = persistStore(store);

export {store, persistor};
