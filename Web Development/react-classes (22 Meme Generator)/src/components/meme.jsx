import './../App.css';
const Meme = ({meme}) => {
    console.log(meme)
    return (
        <div className="meme">
            <div>
                <img src={meme.url} alt="" />
            </div>
            <div className="inputs">
                {[...Array(meme.box_count)].map((el, index) =>(
                    <input 
                        type="text" 
                        className="input" 
                        placeholder={`Add Caption ${index+1}`}
                        />
            ))}
            </div>
            <div className="btn">
                <button>Generate Meme</button>
                <button>Choose template</button>
            </div>
        </div>
    );

}

export default Meme;