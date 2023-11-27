import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos';
import { Link, useNavigate, useParams  } from 'react-router-dom';


const ServicesCard = ({ id,service_title, service_description, service_images, serviceId }) => {

    const navigate=useNavigate

    return service_title && (
        <div
            className={`tab-pane fade show active aos-init aos-animate `}

        >
            <div
                className="web_development "
                data-aos="fade-up"
                data-aos-duration={1500}
            >
                <h2>{service_title}</h2>
                <p>
                    {service_description}
                </p>
                <ul className="web_applecation">

                    {service_images?.map((el) => {
                        return (
                            <li key={el.id}>
                                <img src={el.image_path
                                } alt={el.title} />
                                <p>{el.title}</p>
                            </li>
                        )
                    })}
                </ul>
                <Link className="btn_talk read_more" to={`/services/${serviceId+1}`} onClick={(e) => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }} title="Read More">
                    Read More
                    <span>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                    </span>
                </Link >
            </div>
        </div>

    )
}

export default ServicesCard