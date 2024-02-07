import { getAuth, addDoc, getDoc, collection, getDocs, signOut, db, doc, updateDoc, auth, setDoc , deleteDoc } from "../config/Confiq";
import React, { useEffect, useState } from 'react'
export default function Creat(prop) {
    const [title, settitle] = useState('')
    const [area, setArea] = useState('')
    const [data, setdata] = useState([''])
    const [edits, setedits] = useState(true)
    

    let publish = async (e) => {
        const docRef = await addDoc(collection(db, "blog"), {
            Title: title,
            area: area,

        });

        console.log('Added Blog with ID:', docRef.id);
        await setDoc(docRef, { id: docRef.id }, { merge: true })
        getdata()

    };

    let getdata = async () => {
        const querySnapshot = await getDocs(collection(db, "blog"));
        const docs = querySnapshot.docs.map((doc) => doc.data())
        setdata(docs)
        console.log(docs);
    }

    useEffect(() => {
        getdata()
    }, [])



    let edit = (id) => {
        console.log("Document ID to edit:", id);
         setedits(false)
        // Fetch the document
        getDoc(doc(db, "blog", id))
            .then((doc) => {
                if (doc.exists) {
                    
                    // Update document with new data
                    const newData = {
                        Title: prompt("Enter new Title:", doc.data().Title),
                        area: prompt("Enter new Area:", doc.data().area),
                        
                    };

                    updateDoc(doc.ref,newData)
                        .then(() => console.log("Document updated"))
                        .catch((error) => console.error("Error updating document:", error));
                } else {
                    console.log("Document does not exist");
                }
            })
            .catch((error) => console.error("Error fetching document:", error));
    };


    let Delete =async (id)=>{
        await deleteDoc(doc(db, "blog", id))
        console.log('Delete');
        getdata()
    }


    return (
        <div>
      
            <>

                {/* {edit ? <center>
                    <h1>Creat now</h1>
                    <input type="text" placeholder="Title" onChange={(e) => settitle(e.target.value)} /> <br /><br />
                    <textarea onChange={(e) => setArea(e.target.value)} cols="10" rows="10"></textarea><br /><br />
                    <button onClick={publish} >Publish</button><br />
                </center> :

                    <center>
                        <h1>Creat now</h1>
                        <input type="text" value={data.Title} placeholder="Title" onChange={(e) => settitle(e.target.value)} /> <br /><br />
                        <textarea value={data.area} onChange={(e) => setArea(e.target.value)} cols="10" rows="10"></textarea><br /><br />
                        <button onClick={publish} >Publish</button><br />
                    </center>



                } */}


                <center>
                    <h1>Creat now</h1>
                    <input type="text" placeholder="Title" onChange={(e) => settitle(e.target.value)} /> <br /><br />
                    <textarea onChange={(e) => setArea(e.target.value)} cols="10" rows="10"></textarea><br /><br />
                    <button onClick={publish} >Publish</button><br />
                </center>

                {
                    data.length > 0 &&
                    <table>
                        <thead>
                            <tr><th></th></tr>
                        </thead>
                        <tbody>
                            {data.map((data, index) => <tr key={index}><td>{data.Title}<button onClick={() => edit(data.id)}>Edit</button><button onClick={()=>Delete(data.id)}>Delete</button> </td></tr>)}
                        </tbody>
                    </table>
                }


            </>

        </div>
    )
}
