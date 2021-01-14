export default function BridgeCaseStudy() {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-1 justify-around flex-col lg:flex-row">
        <div className="lg:mr-4 lg:m-10 m-4 flex justify-center">
          <div className="max-w-2xl">
            <img alt="create bridge gif" src="/assets/gifs/create_bridge.gif" />
          </div>
        </div>

        <div className="lg:text-left lg:m-10 lg:ml-4 m-4 flex flex-col">
          <img
            alt="bridgeapi logo"
            src="/assets/images/bridge_logo.svg"
            className="md:max-w-md self-center"
          />
          <p
            className="mt-3 mb-4 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-center"
          >
            BridgeAPI is serverless app that empowers users to collect all their
            webhooks in one place and chain them to forwarding API requests,
            thereby establishing event-driven workflows across apps with BridgeAPI
          </p>

          <div className="rounded-md shadow max-w-sm mx-auto">
            <a
              href="https://bridgeapi-dev.github.io/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              View Case Study
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
