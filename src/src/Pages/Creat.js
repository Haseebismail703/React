import { getAuth, addDoc, getDoc, collection, getDocs, signOut, db, doc, updateDoc, auth, setDoc, deleteDoc } from "../config/Confiq";
import React, { useEffect, useState } from 'react';

export default function Creat() {
    const [title, setTitle] = useState('');
    const [area, setArea] = useState('');
    const [data, setData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [Id, setId] = useState(null);
   const [go ,setgo] = useState(true)
   const [V,setV] = useState('')
    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "blog"));
        const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(docs);
    }

    useEffect(() => {
        fetchData();
    }, []);


   

    const handlePublish = async () => {
      if(title=='' || area ==''){
        alert('no')
      }else{

      
        await addDoc(collection(db, "blog"), {
            Title: title,
            Area: area,
        });
        fetchData();
        setTitle('');
        setArea('');

        }
        

    };

    const handleUpdate = async (id) => {
        
        const washingtonRef = doc(db, "blog", id);
        await updateDoc(washingtonRef, {
            Title: title,
            Area: area
        });
        fetchData();
        setIsEditing(false);
        setId(null);
        setTitle('');
        setArea('');
    }

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "blog", id));
        fetchData();
        setIsEditing(false);
    };

    let view = (v)=>{
    // console.log(v.id)
    setgo(false)
    setV(v)
    }
    let Back = ()=>{
        setgo(true)
    }
    return (
        <div>

          { go  ?

          

            <center>
                {isEditing ? (
                    <>
                    <h1>Update a value </h1><br />
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /> <br /><br />
                        <textarea value={area} onChange={(e) => setArea(e.target.value)}></textarea><br /><br />
                        <button onClick={() => handleUpdate(Id)}>Update</button><br /><br />
                    </>
                ) : (
                    <>
                    <h1>Add a value </h1><br />
                        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /> <br /><br />
                        <textarea placeholder="Area" value={area} onChange={(e) => setArea(e.target.value)}></textarea><br /><br />
                        <button onClick={handlePublish}>Publish</button><br /><br />
                    </>
                )}

                {data.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Area</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.Title}</td>
                                    <td>{item.Area}</td>
                                    <td>
                                        <button onClick={() => { setTitle(item.Title); setArea(item.Area); setIsEditing(true); setId(item.id) }}>Edit</button>
                                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                                        
                                        
                                        
                                        <button onClick={()=>view(item)} >View</button>
                                         


                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No data available</p>
                )}
            </center>

               :
            <>
             <button onClick={Back} >Back</button>
               <h1>{V.id}</h1>
               <h1>{V.Title}</h1>
               <h1>{V.Area}</h1>
                </>
                }


        </div>
    );
}
