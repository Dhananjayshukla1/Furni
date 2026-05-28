import {all, fork} from 'redux-saga/effects';
import Product from './Product.saga';
import Category from './Category.saga';

export default function* root(){
    yield all([
        // include your sagas here
        fork(Product),
        fork(Category)
    ])
}