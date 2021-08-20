import { useState } from "react";

const Meme = (({ meme, setMeme }) => {
    const [form, setForm] = useState({
        template_id: meme.id,
        username: "the_stranger",
        password: "meme123!",
        boxes: [],

    })
    const [imgGenerated, setImgGenerated] = useState(false)
    const generateMeme = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
        form.boxes.map((box, index) => {
            url += `&boxes[${index}][text]=${box.text}`;
        });
        fetch(url)
            .then((res) => res.json())
            .then((data) => { setMeme({ ...meme, url: data.data.url })
        })
        setImgGenerated(true)
    }
    const downloadFile = () => {
        fetch(meme.url, {
            method: "GET",
            headers: {}
        })
            .then(response => {
                response.arrayBuffer().then(function (buffer) {
                    const url = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "meme.png");
                    document.body.appendChild(link);
                    link.click();
                });
            })
            .catch(err => {
                window.alert(err);
                console.log(err);
            });
    }
    return (
        <div className=" text-center mt-7">
            <div className="w-full content-center">
                <img
                    className="h-96 m-auto my-3 w-auto"
                    src={meme.url} alt="" />
            </div>
            <div className="inputs">
                {[...Array(meme.box_count)].map((el, index) => (
                    <input
                        key={index}
                        type="text"
                        className="input
                        p-3 
                        m-3
                        border-b-2
                        border-transparent 
                        focus:outline-none
                        focus:border-purple-600 
                        rounded"
                        placeholder={`Add Caption ${index + 1}`}
                        onChange={(e) => {
                            const newBoxes = form.boxes;
                            newBoxes[index] = { text: e.target.value };
                            setForm({ ...form, boxes: newBoxes });
                        }}
                    />
                ))}
            </div>
            <div>
                {form.boxes.length === meme.box_count ?
                    <button className="bg-white
                 hover:bg-purple-600 
                 hover:bg-opacity-75 
                 text-purple-600 
                 font-semibold 
                 hover:text-white 
                 py-2 
                 px-4 
                 border 
                 border-purple-600 
                 hover:border-transparent 
                 rounded 
                 p-3 
                 m-3" onClick={generateMeme}>Generate Meme</button>
                    : null
                }
                <button className="bg-white
                 hover:bg-purple-600 
                 hover:bg-opacity-75 
                 text-purple-600 
                 font-semibold 
                 hover:text-white 
                 py-2 
                 px-4 
                 border 
                 border-purple-600 
                 hover:border-transparent 
                 rounded 
                 p-3 
                 m-3" onClick={(() => setMeme(null) && setImgGenerated(false))}>Choose template</button>
                {(form.boxes.length === meme.box_count) && (imgGenerated === true) ?
                    <button className="bg-white
                hover:bg-purple-600 
                hover:bg-opacity-75 
                text-purple-600 
                font-semibold 
                hover:text-white 
                py-2 
                px-4 
                border 
                border-purple-600 
                hover:border-transparent 
                rounded 
                p-3 
                m-3" onClick={downloadFile} >Download Meme Image</button>
                    : null
                }
            </div>
        </div>
    );

})

export default Meme;