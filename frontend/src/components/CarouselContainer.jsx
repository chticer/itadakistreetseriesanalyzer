const CarouselContainer = ({ children, carouselid, carouselitemlabels }) =>
{
    return (
    <>
        <div>
            <div id={carouselid} className="flex flex-column-content flex-center-content carousel slide">
                <div className="carousel-indicators">
                    {carouselitemlabels.map((carouselItemLabel, index) => <button type="button" key={index} data-bs-target={`#${carouselid}`} data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0} aria-label={carouselItemLabel}></button>)}
                </div>

                <div className="carousel-inner">
                    {children}
                </div>

                <button type="button" className="carousel-control-prev" data-bs-target={`#${carouselid}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                    <span className="visually-hidden">Previous</span>
                </button>

                <button type="button" className="carousel-control-next" data-bs-target="#games-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>

                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </>
    );
};

export default CarouselContainer;
