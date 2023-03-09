function CareScale(props) {
    const {scaleValue,careType} = props
    const range = [1, 2, 3]
    const scaletype = careType === "water" ? '💧' : '☀️'

    return (
            <div>
                {range.map((rangeElem) =>
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaletype}</span> : null
                )}
            </div> 
    )
}

export default CareScale