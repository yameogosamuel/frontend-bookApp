import {
    ADD_BOOK_ERROR,
    ADD_BOOK_LOADING,
    ADD_BOOK_SUCCESS,
    DELETE_BOOK_ERROR,
    DELETE_BOOK_LOADING,
    DELETE_BOOK_SUCCESS,
    EDIT_BOOK_ERROR,
    EDIT_BOOK_LOADING,
    EDIT_BOOK_SUCCESS,
    FETCH_BOOKS_ERROR,
    FETCH_BOOKS_LOADING,
    FETCH_BOOKS_SUCCESS
} from './types';
import { books } from "../data";


export const  fetchBooksSuccess = (data) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        playload: data,
    }
}

export const fetchBooks = () => {
    return (dispatch) => {
        dispatch(fetchBooksSuccess(books));
    }
}
