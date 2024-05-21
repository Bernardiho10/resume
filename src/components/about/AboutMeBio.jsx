import profileImage from "../../images/ben.jpg";
import certImage from "../../images/Certifications_BernardArikuOko.PNG";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";

const AboutMeBio = () => {
  const { aboutMe, certificatesData } = useContext(AboutMeContext);

  return (
    <>
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src={profileImage} className="rounded-lg w-96" alt="" />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {aboutMe.map((bio) => (
          <p
            className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
            key={bio.id}
          >
            {bio.bio}
          </p>
        ))}
      </div>
    </div>
    <div className="font-general-regular w-full sm:w-3/4 text-left">
    <h1 className="font-general h-10 mt-20 mb-10">CERTIFICATIONS</h1>
        
        {
          certificatesData.map((cert) =>{
            return(
              <>
              <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg" key={cert.id}>
                {cert.title}
              </p>
              <img className="rounded-lg" src={certImage} alt={cert.title} />
              </>
            )
          })
        }
      </div>
      </>
  );
};

export default AboutMeBio;
