import { ActionReducerMap } from '@ngrx/store';
import * as product from './products/product.reducer';




export interface AppState {

    products: product.State

}



export const appReducers: ActionReducerMap<AppState> = {
    products: product.productReducer,
 }