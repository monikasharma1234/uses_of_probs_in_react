
function Card(probs)
{
    return (<>
        <div className="box1">
        <h4>{probs.val}</h4>
        <div className="box2">
            <img className="box3" src={probs.imgsrc} alt="nature_pic"/> 
        </div>
        <a classNAme="box4" href= {probs.link}>
            <button className="box5" style={{padding:"2%" ,borderRadius:"2%"}}>
                Watch Now
            </button>
        </a>
        </div>
    </>);
}

export {Card};
