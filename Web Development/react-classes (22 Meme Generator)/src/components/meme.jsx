import { useState } from "react";

const Meme = (({meme, setMeme}) => {
    const [form,setForm] = useState({
        template_id: meme.id,
        username: "the_stranger",
        password: "meme123!",
        boxes: [],

    })
    const generateMeme = () =>{
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
        form.boxes.map((box, index) => {
            url += `&boxes[${index}][text]=${box.text}`;
        });
        fetch(url)
        .then((res) => res.json())
        .then((data) => { setMeme({...meme, url: data.data.url}) }  )
    }
    return (
        <div className="meme">
            <div>
                <img src={meme.url} alt="" />
            </div>
            <div className="inputs">
                {[...Array(meme.box_count)].map((el, index) =>(
                    <input 
                        key={index} 
                        type="text" 
                        className="input" 
                        placeholder={`Add Caption ${index+1}`} 
                        onChange={(e) =>{
                            const newBoxes = form.boxes;
                            newBoxes[index] = { text: e.target.value};
                            setForm({ ...form, boxes: newBoxes })
                        }}
                    />
                ))}
            </div>
            <div className="btn">
                <button onClick={generateMeme}>Generate Meme</button>
                <button onClick={(()=> setMeme(null))}>Choose template</button>
            </div>
        </div>
    );

})

export default Meme;