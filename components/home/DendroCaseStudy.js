import LazyLoad from 'react-lazyload';

export default function BridgeCaseStudy() {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-1 justify-around flex-col lg:flex-row">

        <div className="sm:mt-0 lg:text-left lg:m-10 lg:ml-4 mx-4 mb-4 flex flex-col">
          <LazyLoad offset={200} once>
            <div className="flex flex-col">
              <img
                alt="dendro logo"
                src="/assets/images/dendro_logo.svg"
                className="md:max-w-md self-center lg:block"
              />
            </div>
          </LazyLoad>
          <p
            className="mt-3 mb-4 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-center"
          >
            Dendro is an open-source, serverless monitoring framework for small,
            distributed applications.
            Stream logs and metrics from your various servers to a central time-series store.
          </p>

          <div className="rounded-md shadow max-w-sm mx-auto">
            <a
              href="https://getdendro.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg md:px-10"
            >
              View Case Study
            </a>
          </div>
        </div>

        <div className="lg:mr-4 lg:m-10 m-4 sm:mb-0 flex justify-center">
          <div className="max-w-2xl">
            {/* <LazyLoad offset={100} once>
              <video autoPlay loop muted playsInline>
                <source src="/assets/gifs/dendro.webm" type="video/webm" />
                <source src="/assets/gifs/dendro.mp4" type="video/mp4" />
              </video>
            </LazyLoad> */}

            <img
              alt="dendro logo"
              src="/assets/images/dendro-services.png"
              className="bg-gray-100"
            />

            <div className="px-2 pt-4 pb-2 text-center text-gray-500">
              Built with: Go, Typescript, NextJS, AWS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
