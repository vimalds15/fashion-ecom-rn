import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db,auth } from "../../../firebase";
import { uuidv4 } from "@firebase/util";

export const addToOrders = async () => {
    const userDocRef = doc(db,"users",auth.currentUser.uid)
    const userDocSnapshot = await getDoc(userDocRef);
    if(userDocSnapshot.exists()){
        const userData = userDocSnapshot.data();
        const cartItems = userData.cart;
        const orderItems = orderItems||[];
        cartItems.map(item=>{
            orderItems.push({
                orderId: uuidv4().replace(/-/g, '').substring(0, 12),
                id:item.id,
                image:item.image,
                title:item.title,
                price:item.price,
                date: new Date().toLocaleString()
            })
        })
        await updateDoc(userDocRef,{orders:orderItems,cart:[]});
        console.log("items added to order")
        return {success:true}
    }
}