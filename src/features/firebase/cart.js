import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";


export const getCartItems = () => {
    return async (dispatch) => {
    const userDocRef = doc(db,"users",auth.currentUser.uid)
    const userDocSnapshot = await getDoc(userDocRef)
    const data = userDocSnapshot.data().cart
    console.log(userDocSnapshot.data())
    return data;
}}

export const addToCart=async(itemId,qty)=>{
    const productRef = doc(db,"products",itemId)
    const userDocRef = doc(db,"users",auth.currentUser.uid)
    const productSnapshot = await getDoc(productRef)
    const userDocSnapshot = await getDoc(userDocRef)
    if(userDocSnapshot.exists() && productSnapshot.exists()){
        const userData = userDocSnapshot.data();
        const productData = productSnapshot.data();
        const cartItems = userData.cart || [];
        cartItems.push({productData,qty})
        await updateDoc(userDocRef,{cart:cartItems})
        console.log("items added to cart")
        return {success:true}
    }else{
        console.error("user or product doesnt exist")
    }
}

export const removeItemById = async(id) => {
        const usersRef = collection(db,"users");
        const userDocRef = doc(usersRef,auth.currentUser.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if(userDocSnapshot.exists()){
            const userData = userDocSnapshot.data();
            const newCart = userData.cart.filter((item)=>item.id!==id);
            await updateDoc(userDocRef,{cart:newCart})
        }else{
            console.log("user doesn't exists")
        }
    }
