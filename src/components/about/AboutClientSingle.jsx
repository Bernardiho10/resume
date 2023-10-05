const AboutClientSingle = ({ title, image, link }) => {
  return (
    <>
      <a href={link}>
        <img
          src={image}
          className="w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
          alt={title}
        />
      </a>
    </>
  );
};

export default AboutClientSingle;
