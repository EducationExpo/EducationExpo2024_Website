import { useEffect, useState } from 'react';
import * as config from "../config";

const SpeakersSection = () => {
  const [speaker, setSpeaker] = useState([]);

 
  useEffect(() => {
    fetch(`${config.API_URL}SpeakerList`)
      .then(response => response.json())
      .then(data => setSpeaker(data.data));
  }, []);

  return (
  <>
              
              {speaker.length > 0 ? (
          speaker.map((s, index) => (
            
            <div className="swiper-slide">
                <div className="et-speaker bg-white rounded-[16px] relative z-[1] group">
                  <div style={{mask: "unset"}} className="et-speaker-img overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-etBlue before:to-transparent before:opacity-0 before:transition before:duration-[400ms] before:z-[1] group-hover:before:opacity-100">
                    <img src={s.speaker_image} alt="speaker image" className="mx-auto w-full transition duration-[400ms" />
                  </div>
                  {/* socials */}
                  {(s.social_fb || s.social_ig || s.social_tw || s.social_ln || s.social_yt) && (<div className="et-speaker-socials bg-[#E7EFFF] w-[55px] py-[15px] text-center rounded-full absolute z-[2] -left-[10px] -top-[10px] flex flex-col justify-center text-[20px] text-etGray2 gap-[10px] border-[10px] border-white box-content">
                  {s.social_fb && (
                    <a href={s.social_fb} className="hover:text-etBlue" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  )}
                  {s.social_ig && (
                    <a href={s.social_ig} className="hover:text-etBlue" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  )}
                  {s.social_tw && (
                    <a href={s.social_tw} className="hover:text-etBlue" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  )}
                  {s.social_ln && (
                    <a href={s.social_ln} className="hover:text-etBlue" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  )}
                  {s.social_yt && (
                    <a href={s.social_yt} className="hover:text-etBlue" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-youtube" />
                    </a>
                  )}
              
                  </div>)}
                  <div className="et-speaker-txt text-center absolute z-[1] bottom-0 pb-[24px] w-full text-white translate-y-full group-hover:translate-y-0 transition duration-[400ms]">
                    <h4 className="et-speaker-name font-medium text-[24px] mb-[3px]"><a href="team-member-details.html" className="hover:text-black">{s.speaker_name}</a></h4>
                    <h6 className="et-speaker-label font-normal text-[16px]">{s.category}</h6>
                  </div>
                </div>
              </div>
          ))
          
      ) : (
        <p>Loading speaker...</p>
      )}
           </>


  );
}
export default SpeakersSection;


