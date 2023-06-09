import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react"
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const SendMessage = () => {

   const [value, setValue] = useState("");
   const { currentUser} = UserAuth();

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if(value.trim() === "") {
            alert("geçerli mesaj girin!");
            return;
        }

        try {
            const { uid, displayName, photoURL } = currentUser;
            await addDoc(collection(db, "messages"), {
                text: value,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid
            })
        } catch (error) {
            console.log(error);
        }
        console.log(value);
        setValue("");

    }
   
  return (
    <div className="SendMessageColor fixed bottom-0 w-full py-10 shadow-lg">
    <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input placeholder="Bir mesaj gönder!" value={value} onChange={e => setValue(e.target.value)} className="input SendMessageBox group text-white w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" />
        <button type="submit" className="w-auto bg-red-500 text-white rounded-r-lg px-5 text-sm">Gönder</button>
        </form>
    </div>
  )
}

export default SendMessage