import React from 'react';
import ReactTyped from 'react-typed';
import image from './mymage/my.jpg'
import './Portfolio.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const Portfolio = () => {
    return (
        <div className='mt-3'>
            <div className='shadow p-4 rounded '>
                <h1 className='text-3xl font-mono font-bold'>Portfolio</h1>
                <Zoom>
                    <div className=' flex justify-center items-center'>
                        <img className='my-image mt-3' src={image} alt="" />
                    </div>
                </Zoom>
                <h2 className='mt-3 text-3xl font-bold'>I am <span className='text-red-500'> <ReactTyped
                    strings={[
                        "Milon Mridha",
                        "MERN Stack Developer"
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                /> </span></h2>
                <Fade left>
                    <h2 className='mt-3 text-xl font-bold'> <span className='text-green-500'> </span></h2>

                    <p className=' mt-2'>Email : milon90phero@gmail.com</p>
                    <h2 className='text-xl font-bold'>My Projects:</h2>
                    <p >1.https://perfect-tour-guide-auth.web.app/</p>
                    <p >2.https://perfume-wear-house.web.app/</p>
                    <p >3.https://reviews-watch-assign-9-milon-mridha.netlify.app/</p>
                    <h2 className='font-bold'>Skills:</h2>
                    <h2>● Comfortable : HTML5, CSS3, Bootstrap5, Tailwind CSS, JavaScript ES6, React.js, Next.js, Node.js,Express.js, Styled Components, Material UI, Mongodb, JWT-Auth,
                        ● Familiar : Payment Getaways, ANT Design, Typescript, Socket.io, Php, Python
                        ● Tools: GitHub, VS Code, Chrome Dev Tools, Heroku, Netlify, Firebase, Postman, Figma, Adobe XD, Photoshop, Illustrator.


                    </h2>
                    <h2 className='font-bold'>EDUCATION  </h2>
                    <p>Rjendrapur Cantonment Public School and College
                        National University Tongi Gazipur</p>

                    <h3 className='font-bold font-mono text-2xl mt-2'>My Goal</h3>
                    <p>“If you want to be happy, set a goal that commands your thoughts, liberates your energy and inspires your hopes.” -Andrew Carnegie.
                        <h5>goals + commitment = dreams come true</h5>By having clear goals, I become aware of precisely what I want to achieve and how to go about doing it. I am  able to more accurately assess and measure my ability to accomplish the goals and most importantly, I have a plan that can guide I along the way and keep you on track.My final goal is to become a web developer in next one month. And I beleive that I try my best of my ability for hard working. In this way I will sacrifies all my pleasure things for become a web developer.  For this reason I doing my daily task timely and spend  12 hours in my study.I dam beleive that oneday I achieve my goal. May Allah help me.....
                    </p>
                </Fade>
            </div>


        </div>
    );
};

export default Portfolio;