import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';
import { setProductList, unsetProductList } from '../product.actions';
import { ApiResponse } from 'src/app/models/api-response.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements OnInit, OnDestroy {


  productList:Product[];
  productSubs:Subscription;

  constructor(
    private store:Store<AppState>,
    private productService:ProductService) { }

  ngOnInit(): void {

    this.productSubs = this.productService.getProductList()
      .subscribe( (products:ApiResponse) => {
        this.productList = products.data
        this.store.dispatch( setProductList( {products:this.productList} ))
        console.log(this.productList);
      })
  }

  ngOnDestroy(): void{
    this.store.dispatch(  unsetProductList()  );
    this.productSubs.unsubscribe();
  }

}
