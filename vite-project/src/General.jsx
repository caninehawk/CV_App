import React, {useState} from 'react'

function General(){
    const [name, updateName] = useState("Sandy");
    const [email, updateEmail] = useState("example@gmail.com");
    const [phone, updatePhone] = useState("Phone");
    function changeName(event){
        updateName(event.target.value);
    }
    function changeEmail(event){
        updateEmail(event.target.value);
    }
    function changePhone(event){
        updatePhone(event.target.value);
    }
    function handleSave(){
        const form = document.querySelector(".form");
        form.style.display="none";
    }
    function handleCancel(){
        updateName("");
        updateEmail("");
        updatePhone("");
    }
    function handleEdit(){
        const form = document.querySelector(".form");
        form.style.display="block";
    }
    return (
        <div>
            <div className="form">
                <h1>General</h1>
                <p>Name: <input value={name} onChange={changeName}/></p>
                <p>Email: <input value={email} onChange={changeEmail}/></p>
                <p>Phone: <input value={phone} onChange={changePhone}/></p>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Reset</button>
            </div>
            

            <p><b>Name:</b> {name}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Phone:</b> {phone}</p>
            <button onClick={handleEdit}>Edit</button>
        </div>
    )
}
export default General