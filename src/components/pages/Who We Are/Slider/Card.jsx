import React, { useState } from 'react'

const Card = ({ data }) => {

    const [showOverlay, setShowOverlay] = useState(null);

    const handleMouseEnter = () => {
        setShowOverlay(true);
    };

    const handleMouseLeave = () => {
        setShowOverlay(false);
    };

    return (
        <div class='item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="card">
                <img src={data.image_path} alt={data.title} />
                {showOverlay && <div className={"hover_bar"} data-aos="fade-up" data-aos-duration={100}>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>}

            </div>
        </div>
    )
}

export default Card