import { useEffect, useState } from 'react';
import * as config from "../config";

const SpeakersLink = () => {
  const [speaker, setSpeaker] = useState([]);

  useEffect(() => {
    fetch(`${config.API_URL}SpeakerList`)
      .then(response => response.json())
      .then(data => setSpeaker(data.data));
  }, []);

  return (
    <div>
      {speaker.length > 0 ? (
        <div className="flex -ml-[20px]">
          {speaker.slice(0, 3).map((s, index) => (
            <img
              key={index}
              src={s.speaker_image}
              alt="Person"
              className={`w-[60px] h-[60px] rounded-full border-[3px] border-white ${index === 0 ? 'ml-0' : ''}`}
            />
          ))}
          {speaker.length > 3 && (
            <div className="w-[60px] h-[60px] rounded-full border-[3px] border-white ml-0 text-white bg-etBlue font-semibold flex items-center justify-center text-[16px]">
              {speaker.length}+
            </div>
          )}
        </div>
      ) : (
        <p>Loading speaker...</p>
      )}
    </div>
  );
}
export default SpeakersLink;


