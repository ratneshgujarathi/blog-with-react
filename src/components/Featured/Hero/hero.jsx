import './hero.css'

export function Hero() {
    return (
        <div className='container m-0 p-0 d-flex'>
            <div className='container p-0'>
                <img className="rounded img-fluid object-fit-cover" src="https://thumbnails.production.thenounproject.com/a-iqrhVi0_5_-vVFJGqQcPu8cgA=/fit-in/1000x1000/photos.production.thenounproject.com/photos/7A74B333-54C0-41BA-B60A-A9BF9C10DF95.jpg" alt="" />
            </div>
            <div className='container d-flex flex-column '>
                <div className="date d-flex"> March 17, 2020 </div>
                <div className="title d-flex">The dynamic Language of Node and Python</div>
                <div className="description d-flex text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus corporis distinctio sunt ad, sit, impedit saepe tenetur similique, consequuntur voluptatibus exercitationem ducimus in magni.</div>
            </div>
        </div>
    )
}
