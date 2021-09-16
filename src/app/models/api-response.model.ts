import { Product } from "./product.model";

export interface ApiResponse {
    data:Product[];
    error:boolean;
    message:string,
}