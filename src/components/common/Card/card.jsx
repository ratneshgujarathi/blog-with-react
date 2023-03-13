import React from 'react'
import './card.css'

export function Card() {
    return (
        <div className="card w-30 border-0">
            <img src="https://thumbnails.production.thenounproject.com/n0kqaYkuvGk31E6P5-kXZIj3Yfk=/fit-in/1000x1000/photos.production.thenounproject.com/photos/B12E2B5D-A8B9-4FC3-9748-85A64904ADAF.jpg" 
            className="card-img-top object-fit-cover img-fluid rounded" alt="/" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-outline-secondary">Read More</a>
            </div>
        </div>
    )
}
