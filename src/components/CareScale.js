function CareScale(props) {
    const {scaleValue,careType} = props
    const range = [1, 2, 3]
    const scaletype = careType === "water" ? '💧' : '☀️'

    return (
            <div onClick={()=>AlerteScale(scaleValue,scaletype)}>
                {range.map((rangeElem) =>
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaletype}</span> : null
                )}
            </div> 
    )
}

function AlerteScale(scaleValue,scaletype){
    const requis = ["peu","modérement","beaucoup"];
    const range = requis[scaleValue-1];
    let textType = scaletype === "💧" ? "d'arrosage" : "de lumière"
    let text = "Cette plante requiert "+range + " " + textType;
    alert(text);
}

export {CareScale,AlerteScale}