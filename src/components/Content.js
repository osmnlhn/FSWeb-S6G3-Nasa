import React from "react";

function Content(props) {
    let nasaverisi = props.nasaverisi;
    return (
        <>
            {nasaverisi && <p>Date: {nasaverisi.date}</p>}
            {nasaverisi && <img src={nasaverisi.url} alt={nasaverisi.title}/>}
            {nasaverisi && <h3>{nasaverisi.title}</h3>}
            {nasaverisi && <h3>Image Credit & Copyright:{nasaverisi.copyright}</h3>}
            {nasaverisi && <p><strong>Explanation:</strong> {nasaverisi.explanation}</p>}
        </>
    )
}

export default Content