import React, { FC } from 'react'

const ProjectSection:FC<{}> = () => {
  return (
    <div id="projects-section" className="section-container">
            <h2>My projects</h2>
            <ul className="projects-list">
                <li>
                    <p>
                        Room booking telegram bot
                        <u><a href="https://github.com/sasaSilver/BookingBot">&RightArrow;</a></u>
                    </p>
                    <p>
                        While working on this project, I am learning <em className="blue">aiogram</em> and
                        <em className="blue"> SQLite</em> for creating simple and cool <em className="blue"> telegram bots</em>!
                    </p>
                </li>

                <li>
                    <p>
                        Turn-based text adventure battle game
                        <u><a href="https://github.com/sasaSilver/BookingBot">&RightArrow;</a></u>
                    </p>
                    <p>
                        Made this little silly game while learning design patterns with
                        <em className="blue"> C++</em>!
                    </p>
                </li>
            </ul>
        </div>
  )
}

export default ProjectSection
