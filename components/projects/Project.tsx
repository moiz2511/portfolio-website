import ProjectBox from "./ProjectBox";

const Project = () => {
  return (
    <div className="project">
      {/* <h2
        className='header__hero--heading-gradient project__title'
        // style={{ margin: '5.5rem 0' }}
      > */}
      <div className="project__content-style">
        <h1 className="heading-1">
          <span>Projects </span> ⚒️
        </h1>
        <p className="about-text m-heading project__desc ">
          {/* <p className='paragraph paragraph-sub '> */}
          More of my projects, I am blessed to have worked with great clients
          and help them with my skills I have uploaded these with their
          consents!
        </p>
      </div>
      <div className="project__grid">
        <div className="project__row " style={{ marginBottom: "1rem" }}>
          <div className="project__item">
            <ProjectBox
              img="img/ilm_name.png"
              id={"https://medium.com/@moizahmad2511/ilm-academy-786c5436a889"}
              desc="  Ilm Mobile Academy for preparation of CSS/PMS and other competitive exams."
            />
          </div>
          <div className="project__item">
            <ProjectBox
              img="img/lottery.jpeg"
              id={
                "https://medium.com/@moizahmad2511/ethereum-lottery-767419be88ea"
              }
              desc="  A fully autonomous decentralized lottery build on ethereum blockchain."
            />
          </div>
          <div className="project__item">
            <ProjectBox
              img="img/ware.jpg"
              id={
                "https://medium.com/@moizahmad2511/wholesale-management-system-208adef63332"
              }
              desc="Wholesale managment system and warehouse solution build especially for data efficiency and security.
              Cloud AWS backup integrated"
            />
          </div>
          <div className="project__item">
            <ProjectBox
              img="img/trackit.jpeg"
              id={
                "https://medium.com/@moizahmad2511/vehicle-tracker-c1574f988a12"
              }
              desc="Works with GPS trackers, ignition ON/OFF, geofences, push notifications, SMS/Email alert, grouping, and more"
            />
          </div>
        </div>
        <div className="project__row ">
          <div className="project__item">
            <ProjectBox
              img="img/socoe.jpeg"
              id={
                "https://medium.com/@moizahmad2511/society-management-system-1d63a139ddf8"
              }
              desc="Society Management and Payment solution System helps housing societies to manage, further has a mobile 
              application (IOS & AnDROID) for residents to complain and pay monthly installemnt and more."
            />
          </div>
          <div className="project__item">
            <ProjectBox
              img="img/propal.jpeg"
              id={"https://medium.com/@moizahmad2511/propal-cb38337129ab"}
              desc="Property protal for sale/purchase of properties, construction hire and sell, advance cost calculator and
              management system for agancies integrated"
            />
          </div>
          <div className="project__item">
            <ProjectBox
              img="webp/pixelchef-1.webp"
              id={
                "https://medium.com/@moizahmad2511/artist-portfolio-de13d46055f1"
              }
              desc="Artist portfolio website for a musical artist to illustrate hos ART in a funcky way, multiple play lists
              like spotify integrated."
            />
          </div>
          <div className="project__item">
            <ProjectBox
              img="webp/heatrow-2.webp"
              id={
                "https://medium.com/@moizahmad2511/vehicle-tracker-c1574f988a12"
              }
              desc="Build in REACTJS, NODEJS, MONGODB using express fremwork"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
