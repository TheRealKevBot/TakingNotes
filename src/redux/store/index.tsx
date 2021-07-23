import { createStore } from "redux";
import { notesReducer } from "../reducers/Notes"; 

export const store = createStore(notesReducer)