import React, { FC } from 'react'
import spongebob from './images/spongebob.png'

const AboutSection:FC<{}> = () => {
  return (
    <div id="about-section" className="section-container">
            <h2>About me</h2>
            <div>
                <div className="about-text-container">
                    <p>
                        Hi, there! I am a first-year student of <em className="green">Innopolis University</em>.
                        Currently I am studying Front-end Web development and UX/UI design.
                    </p>
                    <p>
                        Other than coding, I play drums in the "Grunge Girls" band,
                        work as a private English tutor, and study Japanese!
                    </p>
                    <p>
                        よろしくお願いします！
                    </p>
                </div>
                <div>
                    <img src={spongebob} alt="my-photo" width="200"/>
                    <div className="meme-text">me irl</div>
                </div>
            </div>
        </div>
  )
}

export default AboutSection