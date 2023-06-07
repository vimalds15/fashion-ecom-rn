import {  doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";


export const getCartItems = async() => {
    const userDocRef = doc(db,"users",auth.currentUser.uid)
    const userDocSnapshot = await getDoc(userDocRef)
    const data = await userDocSnapshot.data().cart;
    return {data,success:true};
}

export const addToCart=async(itemId,qty)=>{
    console.log(itemId,qty)
    const productRef = doc(db,"products",itemId)
    const userDocRef = doc(db,"users",auth.currentUser.uid)
    const productSnapshot = await getDoc(productRef)
    const userDocSnapshot = await getDoc(userDocRef)
    if(userDocSnapshot.exists() && productSnapshot.exists()){
        const userData = userDocSnapshot.data();
        const productData = productSnapshot.data();
        const cartItems = userData.cart || [];
        cartItems.push({
            id:itemId,
            title:productData.title,
            brand:productData.brand,
            price:productData.price,
            image:productData.image,
            qty:qty,
        })
        await updateDoc(userDocRef,{cart:cartItems})
        console.log("items added to cart")
        return {success:true,data:cartItems}
    }else{
        console.error("user or product doesnt exist")
    }
}

export const removeItemById = async(id) => {
        const userDocRef = doc(db,"users",auth.currentUser.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if(userDocSnapshot.exists()){
            const userData = userDocSnapshot.data();
            const newCart = userData.cart.filter((item)=>item.id!==id);
            await updateDoc(userDocRef,{cart:newCart})
            const subTotal = newCart.reduce((acc,curr)=> acc+Number(curr.price))
            return {data:newCart,success:true,subTotal}
        }else{
            console.log("user doesn't exists")
        }
    }
