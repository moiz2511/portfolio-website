const ProjectBox = ({
  id,
  desc,
  img,
}: {
  id: string;
  desc: string;
  img: string;
}) => {
  if (!img) {
    img = "webp/heatrow-2.webp";
  }
  return (
    <>
      <div className="wrapper">
        <div className="box">
          <img src={img} alt="" className="box__img" />
        </div>
        <div className="overlay">
          <a
            className="overlay__btn"
            rel="noopener"
            target="_blank"
            href={`${id}`}
          >
            Details
          </a>
          <div className="overlay__desc">{desc}</div>
        </div>
      </div>
    </>
  );
};
export default ProjectBox;
