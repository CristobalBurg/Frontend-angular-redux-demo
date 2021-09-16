import { createReducer, on } from '@ngrx/store';
import { Product } from '../models/product.model';
import { setProductList, unsetProductList } from './product.actions';

export interface State {
    products: Product[]; 
}

export const initialState: State = {
    products: [],
}

const _productReducer = createReducer(initialState,

    on( setProductList, (state,{products}) => ({ ...state, products: [...products]})),
    on( unsetProductList, (state) => ({ ...state, products: [] })),


);

export function productReducer(state, action) {
    return _productReducer(state, action);
}