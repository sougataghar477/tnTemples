import TempleCard from "./TempleCard";
function Stories(){
    let templeStories=[{
        img:'https://static.consciousplanet.org/d-100x100/isha-outreach-images/2021-03/Ekambareswarar%204.jpg',
        name:"Kapaleeshwarar Temple",
        description:'A sacred idol representing goddess Parvati was stolen and replaced with a fake. HR&CE department told the court that verification documents were destroyed. Fourteen years after the theft, a senior HR&CE official was arrested for the theft.'
    },
    {
    img:'https://static.consciousplanet.org/d-100x100/isha-outreach-images/2021-03/Kanchi%20Ekambareswarar%201.jpg',
    name:'Kanchi Ekambareswarar',
    description:'8.7 kg of gold was stolen from the consecrated idol of Somaskanda. A senior HR&CE official was arrested for the theft'
    },
    {
        img:'https://static.consciousplanet.org/d-100x100/isha-outreach-images/2021-03/Madurai%20Meenakshi%201.jpg',
        name:'Madurai Meenakshi',
        description:`A 400-year-old mandapam was burnt down in a fire caused by negligence. Prior to the fire, the mandapam was already in bad shape. 15 of the 46 pillars had cracks and the stone ceiling had caved in in some places.This is not the only mandapam that has suffered in the temple. A UNESCO team found that the south and east corridors had been demolished and reconstructed. This “is against the principles of Agama sastras where it is clearly recommended that the old stone material needs to be used and reused until it has lived its life,” said the report`
    }
,   {
        img:'https://static.consciousplanet.org/d-100x100/isha-outreach-images/2021-03/Rameswaram%20Ramanathaswamy%20Temple%201.jpg',
        name:'Rameswaram Ramanathaswamy Temple',
        description:`The temple’s jewellery was not checked and audited for four decades. It was only after the Madras High Court ordered an annual inspection of the jewels of major temples and maintenance of jewellery registers, that the temple’s jewellery was appraised.        It was found that the temple’s jewellery had lost weight in gold and silver worth 1.4 million rupees. The temple’s Executive Officer stated that this reduction in weight was due to the normal process of “wear and tear”. When the Madras High Court expressed their surprise that no appraisal of jewellery had been conducted in four decades, they were told that the post of Appraiser had been lying vacant since then` 
    },
    {
        img:'https://static.consciousplanet.org/d-100x100/isha-outreach-images/2021-03/Adikesava%20Perumal%20Temple%204.jpg',
        name:'Adikesava Perumal Temple',
        description:'One of the 108 Divya Desams mentioned in the works of the Azhwars, this Vishnu temple is famous for its sculpture and a mandapam made entirely out of a single stone. A diamond crown, gold ornaments and other jewellery were stolen from the temple a few years ago. Moreover, in the 1990s, two stone pillars were stolen and carried off to Chennai. It was only 25 years later, in 2020, that a case was even registered for the theft!'
    },
    {
        img:'https://static.consciousplanet.org/d-100x100/isha-outreach-images/2021-03/Tholur%20Shiva%20Temple%201.jpg',
        name:'Tholur Shiva Temple',
        description:'This 800-year-old temple, built by the Kongu Cholas where villagers were still conducting rituals and worship, was completely demolished. The temple was already in a bad condition, and according to HR&CE officials, they recommended that it be systematically dismantled, renovated and put back together. However, it was found after a few days that the entire temple had been bull dozed!'
    },
    {
        img:'https://static.consciousplanet.org/d-100x100/isha-outreach-images/2021-03/Sripuranthan%20Brihadeeswara%20Temple%201.jpg',
        name:'Sripuranthan Brihadeeswara Temple',
        description:'A 1000-year-old Nataraja was stolen in 1982 and sold to the National Gallery of Art in Australia for 5 million US dollars. In 2014, the Australian government returned the idol to India. No such luck yet for the idols of Devi, Ganesha and Uma Parameshwari, which were also stolen from the temple and sold off.'

    },
    {
        img:'https://static.consciousplanet.org/d-100x100/isha-outreach-images/2021-03/Prananna%20Venkatachalapathy%20Temple%204.jpg',
        name:'Prananna Venkatachalapathy Temple',
        description:"A 1300-year-old temple built by the ancient Pallava kings, the temple stands along the Chennai-Bangalore Highway. The HR&CE decided to renovate this priceless monument of Tamil history.\nUnfortunately, improper renovation techniques led to an ancient brick wall being demolished, and brick vimanas (temple towers) were plastered with cement.\nSandblasting was used for cleaning, which resulted in historical inscriptions being effaced. Sandblasting is a technique which uses sand propelled at high velocities to clean surfaces. Conservation experts say this technique should never be used on important monuments because the sand erodes the ancient stone."
    },
    {
        img:'https://static.consciousplanet.org/d-100x100/isha-outreach-images/2021-03/Abatsahayesvar_temple%201.jpg',
        name:'Abatsahayesvar Temple',
        description:'Built by Rajendra Chola I about a thousand years ago, the temple today is in ruin. This temple was built in a unique brick-stone style, where brick structures are interlaced with stone pillars. Unfortunately, devotees and art connoisseurs are hardly in a position to visit the temple. The temple and gopuram are overgrown with vegetation. Ancient murals inside the temple have almost completely faded. Many of the shrines have collapsed and the ceilings have caved in.'
    },
    {
      img:'https://cms.ishaoutreach.org/sites/default/files/2021-03/Thiruporur%20Kandaswamy%20&%20Alavandan%20Temples%201.jpg',
      name:'Thiruporur Kandaswamy & Alavandan Temples',
      description:'According to the PIL, the temple’s 2000 acres along the Chennai-Puducherry East Coast Road were worth 6000 crore rupees, and was being eyed by land sharks. After the PIL was filed about attempts to illegally transfer land belonging to the temple, the Madras High Court stepped in and order the authorities to prohibit any transfer of ownership of the land.'  
    },
    {
        img:'https://static.consciousplanet.org/d-100x100/isha-outreach-images/2021-03/Kanchi%20Ekambareswarar%201_0.jpg',
        name:'Idol smuggling cases',
        description:'As of 2017, there were an astonishing 550 cases of idol smuggling pending at court, involving theft from various temples across the state.\nThe list can go on! These temples are just representative of the plight of Tamil Nadu’s temples'
    }

]
return <div className="container state mx-auto p-8 lg:px-40">
    <div className="container-2 text-white mx-auto lg:mx-0">
        <h1 className="text-3xl text-center">Heartbreaking Stories of Temple Decay</h1>
        <p  className="hidden md:block">Incredibly, it is not just small, unknown temples that are in decay. Large, popular temples visited by lakhs of devotees every month are targets of theft and victims of neglect</p>
{templeStories.map((temple,index)=> <TempleCard index={index} temple={temple} /> )}
    </div>
</div>
}
export default Stories;