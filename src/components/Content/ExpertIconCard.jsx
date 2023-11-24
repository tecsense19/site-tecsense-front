import React from 'react'

const ExpertIconCard = ({ title, imgUrl }) => {

    const words = title.split(' '); // Split the string into words
    const lastWord = words.pop(); // Remove and store the last word
    const firstPart = words.join(' ');



    return (
        <div className="col-6 col-md-4 col-lg-3">
            <div
                className="technical_analysis"
                data-aos="fade-up"
                data-aos-duration={1500}
            >
                <div className="technical_analysis-img">
                    <img src={imgUrl} alt="img" />
                </div>
                <div className="technical_analysis-text">
                    <p>
                        {firstPart} <br /> {lastWord}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ExpertIconCard