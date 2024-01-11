function SectionOne(){
    return <div className="bg p-8 text-left  container mx-auto lg:px-40 flex">
        <div className="container-2 mx-auto lg:mx-0">
            <p className="leading-6 mb-4">Tamil Nadu's temples, the soul of Tamil culture and the core of Tamil spiritual ethos, are being suffocated to death. A vicious policy of seizing control over temples to take over their land and revenue was begun by the East India Company, 200 years ago.</p>
        <p className="leading-6 mb-4">Unfortunately, the same policy of government control over temples continues today, 74 years after Independence.</p>
        <p className="leading-6 mb-4">Powerfully consecrated temples are losing their vibrance and crumbling, causing enormous pain to crores of devotees and communities.</p>
        <iframe height={320} className="w-full " src="https://www.youtube.com/embed/KHkxs7Cnwp4?si=NfgK_JN8MqYy0cX2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>   
        </iframe>
        </div>
        <div className="modal">
            <h1 className="text-4xl font-bold text-center">#FreeTNTemples</h1>
            <a className="support-btn" href="#">Click Here To Support</a>
            <p className="text-center">OR</p>
            <p className="text-center text-3xl">Show your support with a missed call</p>
            <p className="my-4 flex justify-center text-4xl"><img className="mr-3" src="https://static.consciousplanet.org/static/assets/img/phone.svg"/>
            83000 83000
            </p>
            <p className="text-center text-xl font-bold">Tell your family & friends to show their support with a missed call</p>
            <div className="flex justify-center items-center gap-2">
                <img width={58} src="https://static.consciousplanet.org/static/assets/img/whatsapp.png"/>
                <img src="https://static.consciousplanet.org/static/assets/img/twiter.png"/>
                <img src="https://static.consciousplanet.org/static/assets/img/fb.png"/>
            </div>
        </div>

    </div>
}
export default SectionOne;