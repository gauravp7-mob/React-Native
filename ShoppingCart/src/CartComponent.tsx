import React from "react";
import { Text, View,Button } from "react-native";
import { CartInterface, ProductInterface } from "../App";
interface CartProps{
    products:CartInterface[],
    productList:ProductInterface[],
    increase:Function,
    decrease:Function,
    clearCart:Function,
    total:number
}
export default function CartComponent(props:CartProps){
    return <View>
        <Text>
            Cart
        </Text>
        
        {props.products.map(product => {
            const productInProductList =props.productList.find(p=>p.productID===product.productID)
            return <View style={{flexDirection:'row',margin:20}}>
                <View>
                <Text>Product Name = {productInProductList?productInProductList.productName:''} </Text>
                <Text>Quantity ={product.productQuantity}</Text>
                <Text>Product Price = {productInProductList?productInProductList.productPrice:0}</Text>
                </View>
                <View style={{flexDirection:'row'}} >
                <Button title = 'Add' onPress ={()=>props.increase(product)} />
                <Button title = 'Remove' onPress ={()=>props.decrease(product)}/>
                </View>
            </View>
            
        
        })}

        <View>
            <Button title = 'Clear cart' onPress={() =>props.clearCart()}/>
        </View>
            <Text>Total price = {props.total}</Text>

    </View>
}

