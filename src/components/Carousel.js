import Slider from "react-slick";
function Carousel(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
      let imgs=[
      "https://static.consciousplanet.org/static/assets/img/D-glorious%20temples%201.jpg",
      "https://static.consciousplanet.org/static/assets/img/D-glorious%20temples%202.jpg",
      "https://static.consciousplanet.org/static/assets/img/D-glorious%20temples%203.jpg",
      "https://static.consciousplanet.org/static/assets/img/D-glorious%20temples%204.jpg",
      "https://static.consciousplanet.org/static/assets/img/D-glorious%20temples%205.jpg",
      "https://static.consciousplanet.org/static/assets/img/D-glorious%20temples%206.jpg",
      "https://static.consciousplanet.org/static/assets/img/D-glorious%20temples%207.jpg"    
    ]
    return <div className="container bg-red mx-auto px-8 py-16 lg:px-40">
        <div className="container-2 mx-auto lg:mx-0">
            <h1 className="mb-7 text-white font-bold text-3xl text-center">Our Glorious Tamil Temples & Culture</h1>
            <p className="mb-7 text-white text-center">Temples are not just for worship. They connect us across thousands of years to ancient Tamil culture & tradition.</p>
                <Slider {...settings}>
                    {imgs.map((img,index)=> <img src={img} key={index}/>)}
          
        </Slider>
        </div>
    </div>
}
export default Carousel;