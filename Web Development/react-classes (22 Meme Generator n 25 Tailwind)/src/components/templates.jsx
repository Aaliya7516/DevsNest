const Templates = ({templates,setMeme}) => {
    return (
        <div className="templates">
            {templates.map((template) =>(
                <div 
                    key={template.id} 
                    className="template 
                    w-1/3
                    inline-block" 
                    onClick={() => {
                        setMeme(template)
                    }}>
                    <img 
                        src={template.url}
                        alt="" 
                        className="image 
                        object-contain 
                        w-full 
                        border-2
                        border-transparent 
                        hover:border-purple-600 
                        rounded 
                        bg-white" />
                </div>
            ))}
        </div>
    );
};

export default Templates;