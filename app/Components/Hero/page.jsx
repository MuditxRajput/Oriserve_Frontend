import Image from "next/image";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="hero"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 z-10">
          <h1 className="text-white text-6xl md:text-7xl font-bold">
            Build amazing <br /> things
          </h1>
          <p className="text-white text-sm max-w-lg">
            We’re GitHub, the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.
          </p>
          <h2 className="text-white text-3xl font-bold">
            Take your JavaScript<br></br> development up a notch
          </h2>
          <p className="text-white text-sm max-w-lg">
            Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.
          </p>
        
          <div className="flex space-x-4">
            <button className="bg-yellow-400  shadow-sm shadow-black font-bold py-3 px-8 rounded-full">
              Sign up for free
            </button>
            <button className="border border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-red-500">
              Learn about Pro
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero