import {auth,db} from "../../../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getDoc, doc, setDoc} from "firebase/firestore"


const registerWithEmailAndPassword = async(name,email,password) => {
    console.log(email,password,name)
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user=res.user;
        const userDocRef = doc(db,"users",user.uid)
        await setDoc(userDocRef,{
            uid:user.uid,
                name,
                email
        })
        return {success:true}
    } catch (error) {
        console.error(error)
    }
}

const loginWithEmailAndPassword = async(email,password) => {
    try{
        const res = await signInWithEmailAndPassword(auth,email,password)
        const userId = res.user.uid;
        const userRef= doc(db,"users",userId)
        const userDoc = await getDoc(userRef)
        return {
            success:true,
            user:userDoc.data()
        }
    }catch(err){
        console.error(err)
    }
}

const logout = async () => {
    await signOut(auth);
    return {success:true}
}

export {loginWithEmailAndPassword,logout,registerWithEmailAndPassword};