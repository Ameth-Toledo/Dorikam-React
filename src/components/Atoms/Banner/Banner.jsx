import React from "react";
import './Banner.css';

function Banner({ srcImagen, titulo, subtitulo }) {
    return (
        <>
        <div className="banner-container">
            <img src={srcImagen} alt="banner" className="banner-image" />
            <div className="banner-text">
                <h1 className="banner-text-h2">{ titulo }</h1>
                <h2 className="banner-text-h1">{ subtitulo }</h2>
            </div>
        </div>
        </>
    );
}

export default Banner;
