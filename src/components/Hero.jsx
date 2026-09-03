const Hero = ({ intro, subtext }) => {
  return (
    <div>
      <h1 className="my-3 text-lg font-medium">{intro}</h1>
      <p className="text-sm leading-6">{subtext}</p>
    </div>
  );
};

export default Hero;
