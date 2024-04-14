import React from "react";
import "./app.css";

function PictureSection() {
  return (
    <div className="PictureSection" id="pictures">
      {/* <h2 className='h2OfPictureSection'>Pictures:</h2> */}
      <div class="image-gallery" id="gallery">
        <div class="images">
          <div class="grid-item">
            <img
              src="https://dl.dropboxusercontent.com/s/1nebqgi0eoatf2s/guru-ji-with-horse.jpg?dl=0"
              alt="Guru Gobind Singh ji"
            />
          </div>
          <div class="grid-item">
            <img
              src="https://dl.dropboxusercontent.com/s/6g6gppnt6jp4y3a/chote-sahibzade-bricked.jpg?dl=0"
              alt="Sahibzaade bricked alive"
            />
          </div>
          <div class="grid-item tall">
            <img
              src="https://dl.dropboxusercontent.com/s/vta1a46gu0074nx/chote-sahibzade.jpg?dl=0"
              alt="Sahibzaade"
            />
          </div>
          <div class="grid-item">
            <img
              src="https://dl.dropboxusercontent.com/s/vgdi8fkkhtn31sp/bhai-subegh-singh-jee-crushed-in-rotating-wheels.jpg?dl=0"
              alt="Subegh Singh Ji crushed in rotating wheels"
            />
          </div>
          <div class="grid-item">
            <img
              src="https://dl.dropboxusercontent.com/s/48ln3f34pk1x3ot/sahibzada_ajit_singh_ji.jpg?dl=0"
              alt="Sahibzada Ajit Singh Ji"
            />
          </div>
          <div class="grid-item tall">
            <img
              src="https://dl.dropboxusercontent.com/s/0okxgs2rtvq3j2z/Guru-Gobind-Singh-Ji-2.jpg?dl=0"
              alt="Guru Gobind Singh ji"
            />
          </div>
          <div class="grid-item ">
            <img
              src="https://dl.dropboxusercontent.com/s/ad047lcwvjmdc91/guru-ji-with-kirpan-baisakhi.jpg?dl=0"
              alt="Guru Gobind Singh ji"
            />
          </div>
          <div class="grid-item">
            <img
              src="https://dl.dropboxusercontent.com/s/1bgvcn9c4rdszlx/amrit-sanchaar.jpg?dl=0"
              alt="Amrit Sanchaar"
            />
          </div>
          <div class="grid-item tall">
            <img
              src="https://dl.dropboxusercontent.com/s/dagxzxjiod00tiv/chaar_sahibzaade-2.jpg?dl=0"
              alt="Sahibzaade"
            />
          </div>
          <div class="grid-item ">
            <img
              src="https://dl.dropboxusercontent.com/s/833oh7r7h8jbw46/chamkaur.jpg?dl=0"
              alt="Battle of Chamkaur"
            />
          </div>
          <div class="grid-item tall">
            <img
              src="https://dl.dropboxusercontent.com/s/mh6xyubaoodqe8s/guru-gobind-singh-ji.jpg?dl=0"
              alt="Guru Gobind Singh ji"
            />
          </div>
          <div class="grid-item">
            <img
              src="https://dl.dropboxusercontent.com/s/selyx0le7ix6wtm/guru_harrai-ji.jpg?dl=0"
              alt="Guru Har Rai Ji"
            />
          </div>
          <div class="grid-item">
            <img
              src="https://dl.dropboxusercontent.com/s/yhx539qc56eod2v/bhai-dyala-ji.jpg?dl=0"
              alt="Bhai Dyala ji"
            />
          </div>
          <div class="grid-item">
            <img
              src="https://dl.dropboxusercontent.com/s/1zachxf3fc9mc7u/bhai-ghanayya-ji.jpg?dl=0"
              alt="Bhai Ghanayya Ji"
            />
          </div>
          <div class="grid-item">
            <img
              src="https://dl.dropboxusercontent.com/s/wmoj2ncloxl5llg/bhai-mani-singh-ji.jpg?dl=0"
              alt="Bahi Mati Das Ji"
            />
          </div>
          <div class="grid-item">
            <img
              src="https://dl.dropboxusercontent.com/s/a69g3fgw6ot94l7/bhai-mani-singh-ji-2.jpg?dl=0"
              alt="Bhai Mani Singh ji"
            />
          </div>
          <div class="grid-item">
            <img
              src="https://dl.dropboxusercontent.com/s/914qh1mav8tyxp7/guru-arjan-dev-ji.jpg?dl=0"
              alt="Guru Arjan Dev ji"
            />
          </div>
          <div class="grid-item">
            <img
              src="https://dl.dropboxusercontent.com/s/nik0f4q7rlbxs5r/Guru-Gobind-Singh-Ji-3.jpg?dl=0"
              alt="Guru Gobind Singh ji"
            />
          </div>
          <div class="grid-item ">
            <img
              src="https://dl.dropboxusercontent.com/s/hkf4nu3iowwlh3h/chaar_sahibzaade.jpg?dl=0"
              alt="Sahibzaade"
            />
          </div>
          <div class="grid-item">
            <img
              src="https://dl.dropboxusercontent.com/s/99in90z8hd8qe5a/mai-bhag-kaur-ji-battle.jpg?dl=0"
              alt="Mai Bhaag Kaur Ji"
            />
          </div>
          <div class="grid-item">
            <img
              src="https://dl.dropboxusercontent.com/s/3veyy2pm9wxnnbp/battle.jpg?dl=0"
              alt="Battle"
            />
          </div>
        </div>
      </div>
      <a
        className="showMoreBtn px-5 py-2 "
        target="blank"
        href="https://en.wikipedia.org/wiki/Guru_Gobind_Singh"
      >
        Show More
      </a>
    </div>
  );
}

export default PictureSection;
