import React , { Component} from "react";
import { View,Text, ScrollView } from "react-native";
import ProductComponent from "./src/ProductComponent";
import CartComponent from "./src/CartComponent";
import CouponComponent from "./src/CouponComponent";

export interface ProductInterface{
  productID:number,
  productName:string, 
  productPrice: number,
  productStock:number
  
}
export interface CartInterface{
  productID:number,
  productQuantity:number,
}
export interface CouponInterface{
  couponValue:string,
  discount:number
}


export default class App extends Component{
  increase=(product:CartInterface)=>{
    this.setState((prev:{productList:ProductInterface[],cartProduct :CartInterface[],total:number,coupon:CouponInterface[]})=>{
      const productInProducts = prev.productList.find(p=>p.productID===product.productID)
      const productInCart = prev.cartProduct.find(p=>p.productID===product.productID)
      if((productInProducts?productInProducts.productStock:0)>(productInCart?productInCart.productQuantity:0)){
      if(!productInCart){
        product.productQuantity=1;
      prev.cartProduct.push(product);
      }else{
        product.productQuantity+=1;
      }
      prev.total+=productInProducts?productInProducts.productPrice:0;
    }
      return prev;
    })
  }
  decrease=(product:CartInterface)=>{
    this.setState((prev:{productList:ProductInterface[],cartProduct :CartInterface[],total:number,coupon:CouponInterface[]})=>{
      const productInProducts = prev.productList.find(p=>p.productID===product.productID)
      const productInCart = prev.cartProduct.find(p=>p.productID===product.productID)
      if(productInCart ){
        if(product.productQuantity===1){
      prev.cartProduct=prev.cartProduct.filter(prod => prod.productID!==product.productID);
        }
        else{
           product.productQuantity-=1;
        }
      prev.total-=productInProducts?productInProducts.productPrice:0;
      }
      return prev;
    })
  }

  clearCart=()=>{
    this.setState((prev:{productList:ProductInterface[],cartProduct :CartInterface[],total:number,coupon:CouponInterface[]})=>{
      prev.cartProduct=[];
      prev.total = 0;
      this.isApplied=false
      return prev;

    })
  }
   isApplied = false; 
  handleCoupon=(value:string)=>{
    this.setState((prev:{productList:ProductInterface[],cartProduct :CartInterface[],total:number,coupon:CouponInterface[]})=>{
      const coup = prev.coupon.find(c=>c.couponValue===value)
      this.isApplied=coup?true:false
      if(prev.total>(coup?coup.discount:0))
      prev.total -= (coup?coup.discount:0)
      return prev;
    })
  }

  
  state: {productList:ProductInterface[],cartProduct :CartInterface[],total:number,coupon:CouponInterface[]}={productList:[],cartProduct:[],total:0,coupon:[]};
  constructor(props:any){
    super(props)
    this.state.productList = [{productID:1,productName:"iPhone 14", productPrice: 800000,productStock:5},

    {productID:2,productName:"Samsung S22", productPrice: 700000,productStock:6},
  
    {productID:3,productName:"Macbook pro", productPrice: 1800000,productStock:10},
  
    {productID:4,productName:"Hp probook", productPrice: 800000,productStock:3}]

    this.state.coupon =[{couponValue:"GET500", discount:500},
    {couponValue:"OFF1000", discount:1000},
    {couponValue:"SHOP1500", discount:1500},
  ]
  }
  render(){

    return<ScrollView>
       <View style ={ {marginTop:100}}>
        <Text>Total Amount = {this.state.total}</Text>
        <ProductComponent products={this.state.productList} increase = {this.increase} decrease={this.decrease} total={this.state.total}/>
        <CartComponent products={this.state.cartProduct }increase = {this.increase} decrease={this.decrease} clearCart = {this.clearCart} total={this.state.total} productList={this.state.productList}/>
        <CouponComponent coupon={this.state.coupon} handleCoupon={this.handleCoupon} isApplied = {this.isApplied}/>
      </View>
    </ScrollView>
    
  }

}
