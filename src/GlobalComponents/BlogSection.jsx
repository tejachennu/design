import React from 'react';

const BlogSection = () => {
  const articles = [
    {
      title: "ABB replaces heavy lifting and improves efficiency",
      category: "Technology",
      imageUrl: "https://templatekit.jegtheme.com/astrobot/wp-content/uploads/sites/285/2022/05/52612-automated-milking-machine.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus...",
      link: "#"
    },
    {
      title: "Robots Won’t Close the Warehouse Worker Gap Anytime Soon",
      category: "News",
      imageUrl: "https://templatekit.jegtheme.com/astrobot/wp-content/uploads/sites/285/2022/05/52612-automated-milking-machine.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus...",
      link: "#"
    },
    {
      title: "Farming Drives Toward ‘Precision Agriculture’ Technologies",
      category: "Industry",
      imageUrl: "https://templatekit.jegtheme.com/astrobot/wp-content/uploads/sites/285/2022/05/52612-automated-milking-machine.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus...",
      link: "#"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-gray-900">Latest Blog & Articles</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500 md:w-[50%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="grid gap-10 mt-10 lg:grid-cols-3 lg:gap-x-8">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col overflow-hidden bg-white shadow-lg">
              <div className="relative ">
                <img className="object-cover w-full" src={article.imageUrl} alt="" />
                <p className="absolute p-2 text-sm font-medium text-white bg-orange-500 bottom-[4%] left-[2%]">
                    {article.category}
                  </p>
              </div>
              <div className="flex flex-col justify-between flex-1 p-6">
                <div className="flex-1">
                  <a href={article.link} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{article.title}</p>
                    <p className="mt-3 text-base text-gray-500">{article.description}</p>
                  </a>
                </div>
              </div>
              <div className="pb-2 pl-6">
                <a href={article.link} className="text-base font-medium text-orange-500 hover:text-orange-500">
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;