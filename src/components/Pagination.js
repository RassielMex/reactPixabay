import React from 'react'
import '../styles/Pagination.css'

const Pagination = ({onNext, onPrev})=>(
    <div className = "row justify-content-center">
        <button type="button" 
                className="btn btn-primary btn-sm mr-1 BtnFixedWidth"
                onClick = {onPrev}>
                &larr; Previous
        </button>
        <button 
            type="button" 
            className="btn btn-primary btn-sm BtnFixedWidth"
            onClick = {onNext}>
            Next &rarr;
            </button>
    </div>
)

export default Pagination
