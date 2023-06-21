import React from "react";
import { Text, View,Button } from "react-native";
import { ProductInterface } from "../App";

interface ProductProps{
    products:ProductInterface[],
    increase:Function,
    decrease:Function,
    total:number
}
export default function ProductComponent(props:ProductProps){
    return <View>
        <Text>
            Products
        </Text>
        {props.products.map(product =>
            <View style={{margin:20, alignItems:'center'}} >
                <View>
                <Text>{product.productName} </Text>
                <Text>{product.productPrice}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Button title = 'Add' onPress ={()=>props.increase(product) } />
                
                <Button title = 'Remove' onPress ={()=>props.decrease(product)} />
                </View>
            </View>)}
    </View>
}

