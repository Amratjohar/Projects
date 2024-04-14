import React from 'react';
import "./app.css"

function AboutSection() {
    return (
        <div className='AboutSection mt-5' id="about">
           <div class="tribute" >
        <div class="row">
          <div class="col-md-12">
            <h3>Guru Gobind Singh Ji - The Tenth Guru</h3>
            <h5>1666 - 1708</h5>
            <img src="https://dl.dropboxusercontent.com/s/ho593i6lq9875hn/decoration.png?dl=0" alt="decoration"/>
            <p>Guru Gobind Singh Ji was a great warrior, a poet, a philospher and a spiritual leader. He had to spend most of his time fighting against the oppression and suppression committed by the unjust forces. He was a unique nation builder who fought
              for righteousness. He sacrificed his all for human liberty, equality and fraternity. Two of his youngest sons aged 9 years and 7 years were bricked alive because they chose not to budge from their believes and priniciples defeating all the
              efforts of Nawab of Sirhind. Two elder sons aged 18 years and 16 years were martyred in the battle of Chamkaur Sahib. His father Guru Teg Bahadur Ji was beheaded because he challenged Emperor Aurangzeb on behalf of the Kashmiri Hindus, ending
              Aurangzeb's threat to either convert to Islam or be executed.</p>
          </div>
        </div>
        <div class="row1">
          <div class="col-sm-4 col-sm-offset-4">
            <a class="btn btn-read-more" title="Read More" href="https://infinitylearn.com/surge/biography/guru-gobind-singh-biography/">Read More</a>
          </div>
        </div>
      </div>

        </div>
    )
}

export default AboutSection;