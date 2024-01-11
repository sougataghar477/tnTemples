import Slider from "react-slick";
function Media(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
      let articles=[{
        heading:'Free Temples From State Control, Include Plan in Election Manifesto',
        text:'Isha Foundation founder and spiritual guru Sadhguru Jaggi Vasudev on Saturday said he has written a letter to Tamil Naidu Chief Minister and the Leader of the Opposition urging them to free temples.',
        link:'https://www.news18.com/news/politics/free-temples-from-state-control-include-plan-in-election-manifesto-sadhguru-urges-tn-cm-stalin-3505877.html'  
    },
    {
        heading:'Mention in poll manifesto freeing of temples from govt grip',
        text:'Though the Constitution allows all communities to manage their spaces of worship, the HR&CE law gives the state control over Hindu temples which has long been a cause of disgruntlement in the majority community, he said.',
        link:'https://www.dtnext.in/News/TamilNadu/2021/03/06182456/1279124/Mention-in-poll-manifesto-freeing-of-temples-from-.vpf'  
    },
    {
        heading:'Sadhguru asks for temples to be released from state control in Tamil Nadu',
        text:'In a bid to release temples from state control in Tamil Nadu, Sadhguru requested Chief Minister Edappadi K Palaniswami and DMK supremo MK Stalin on Twitter.',
        link:'https://www.deccanherald.com/national/south/sadhguru-asks-for-temples-to-be-released-from-state-control-in-tamil-nadu-958971.html'  
    }]
    return <div className="container media mx-auto px-8 py-16 lg:px-40">
        <div className="container-2 mx-auto lg:mx-0">
            <h1 className="text-4xl font-bold text-center mb-8">What Media Says</h1>
        <Slider {...settings}>

               {articles.map((article,index)=> <div key={index} className="bg-white p-4">
                        <a href={article.link}>
                            <h1 className="text-3xl text-sky-600 font-bold">{article.heading}</h1>
                        </a>
                        <p>{article.text}</p>
                        <a className="text-red-900 float-right" href={article.link}>Continue</a>
                    </div>)}      
          
        </Slider>
        <h1 className="mt-28 mb-4 font-bold text-4xl text-center">Press Kits & Downloads</h1>
        <p className="text-center text-xl">
        <a className="press-link" href="https://drive.google.com/drive/folders/1wsI1Xw_fp3G_g14j8BDezn-9sCS6BXiP?usp=sharing">Download press assets here</a>
        </p>
        <p className="text-center">
        <a className="press-link text-xl" href="https://drive.google.com/drive/u/0/folders/1y4SDfhCxIVy1OEROus6vP5vyu_rB4qqo">Awareness Kit</a>
        </p>
        <p className="text-center text-xl">

        <a className="press-link" href="https://drive.google.com/drive/u/0/folders/1OiaQM1LdCRkP7ah794Pv0FW3fZMaPw2t">Download Placards</a>
        </p>
        </div>
    </div>
}
export default Media;