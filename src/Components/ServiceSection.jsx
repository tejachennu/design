import React from 'react';

const ServiceSection = () => {
  return (
    <div className="flex flex-col items-center justify-between p-8 bg-white lg:flex-row lg:p-16">
      <div className="lg:w-1/2">
        <h2 className="mb-4 text-sm font-bold text-orange-600">ABOUT SERVICE</h2>
        <h1 className="mb-6 text-4xl font-bold lg:text-5xl">
          Listen better. Plan better. Build better.
        </h1>
        <p className="mb-4">
          Dapibus magna mus ullamcorper felis vestibulum vulputate. Ligula interdum habitant
          placerat egestas hendrerit. Rutrum sed enim malesuada a. Sed himenaeos efficitur
          elementum lorem montes rutrum sollicitudin.
        </p>
        <p>
          Habitasse ex mattis dignissim potenti nibh per. Mattis enim montes lacus. Accumsan per
          sodales viverra elit tortor. Turpis sollicitudin arcu aptent scelerisque massa. Fusce
          natoque neque eleifend ex donec porta.
        </p>
      </div>
      <div className="relative mt-8 lg:w-1/2 lg:mt-0 lg:ml-8">

   
      <div class="widget-container">
    <img 
      src="https://demo.moxcreative.com/constructoor/wp-content/uploads/sites/59/2021/08/three-workers-examining-building-plans-and-talking-on-portable-radio-at-construction-site-e1629117948585.jpg" 
      alt="Construction Workers" 
      class="relative object-cover h-auto max-w-full" />
  </div>
      </div>
    </div>
  );
};

export default ServiceSection;
