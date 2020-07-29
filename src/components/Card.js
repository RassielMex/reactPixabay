import React from 'react'
import dummyImg from '../images/batman.jpeg'

const Card = ({imgURL, tags}) => (
    <div className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card" >
            <img src={ imgURL || dummyImg} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">{tags}</p>
            </div>
        </div>
    </div>

)

export default Card