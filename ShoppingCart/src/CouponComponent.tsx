import React,{useState} from "react";
import { CouponInterface } from "../App";
import { Button,Text, TextInput,View } from "react-native";

interface CouponProps{
    coupon:CouponInterface[],
    handleCoupon:Function,
    isApplied:Boolean
}

export default function CouponComponent(props:CouponProps){
    const[text, onChangeText] = useState('');
    const[press,onChangePress] = useState<Boolean>(false);
    const handleOnPress = ()=>{
        if(press===false || props.isApplied === false){
        props.handleCoupon(text)
        }
        onChangePress(true);
    }
    return <View>
        <TextInput style = {{ height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,}} placeholder="Enter Valid Coupon" onChangeText={onChangeText} value= {text}></TextInput>
        <Button title='Submit' onPress={()=>handleOnPress()}/>
        
    </View>

}