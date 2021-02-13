import React from 'react';

export default function OtherProjects() {
  const projects = [
    {
      title: 'Article Title',
      image: '',
      description: '',
    },
    {
      title: 'Article Title',
      image: '',
      description: '',
    },
    {
      title: 'hArticle Title',
      image: '',
      description: '',
    },
  ];

  return (
    <section>
      <div className="container my-12 mx-auto px-4">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">

          {projects.map(({ title }) => (
            <div className="my-1 px-1 w-1/2 lg:my-4 lg:px-4 lg:w-1/3 md:w-1/3">

              <article className="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                  <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </a>

                <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      {title}
                    </a>
                  </h1>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a className="flex items-center no-underline hover:underline text-black" href="#">
                    <p className="hidden md:block text-center">
                      Author Name Author Name Author Name Author Name Author Name Author Name
                      Author Name Author Name Author Name Author Name Author Name Author Name
                    </p>
                  </a>
                  <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <div className="max-w-full leading-none text-xs font-normal">名称</div>
                  </a>
                </footer>

              </article>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
