import React from 'react'
import './About.css'
import Pic from '../../images/profile.png'

const About = () => {
  return (
   <>
   <div className="about">
    <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={Pic} alt="my-pic" />
        </div>
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic earum quibusdam dolorum quo repudiandae non obcaecati, deserunt tenetur beatae doloremque commodi suscipit pariatur mollitia eveniet neque cupiditate, ducimus aspernatur consectetur? Aspernatur fugit sapiente sequi provident cum accusamus maiores amet velit, voluptatibus nobis! Quod laboriosam deleniti impedit facilis exercitationem. Dolorem, eius ipsa. Ab, quia ipsam. Minima, nihil molestias qui dolor esse inventore dolorum consectetur illo voluptatem quam quos sed similique repellendus id voluptatum veniam maiores quod saepe quia explicabo voluptas. Neque ipsum doloremque magnam, consequuntur temporibus quia dolor recusandae tempore aliquam. At corporis tenetur eius deleniti consectetur repellat quae vero.</p>
        </div>
    </div>
   </div>
   </>
  )
}

export default About
