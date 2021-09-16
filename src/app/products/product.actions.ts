import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const setProductList = createAction('[Products Component] setProductList' ,  props<{products:Product[]}>());
export const unsetProductList = createAction('[Products Component] unsetProductList');