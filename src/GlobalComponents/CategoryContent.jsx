  export const CategoryButton = ({ category, isSelected, onClick }) => (
    <button
      className={`px-4 py-2 h-20 ${isSelected ? 'bg-orange-500 text-white' : ' bg-slate-700 text-white'} focus:outline-none`}
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
  
  export const CategoryContent = ({ category }) => {
    const content = [
      {
        category:"Food & Snacks",
        image:"https://vendomat.modeltheme.com/wp-content/uploads/2021/10/Main-tab05.jpg",
        info:"'Vivamus sit amet tellus consectetur, convallis purus tincidunt consequat mi. Phasellus placerat ullamcorper lectus, vitae rhoncus nisl commodo non. Fusce vehicula a neque nec condimentum. Sed ut tellus et erat interdum lacinia.'",

      },
      {
        category:"Drinks & Coffee",
        image:"https://vendomat.modeltheme.com/wp-content/uploads/2021/10/Main-tab03.jpg",
        info:"'Vivamus sit luctus sit amet ligula vel, tincidunt consequat mi. Phasellus placerat ullamcorper lectus, vitae rhoncus nisl commodo non. Fusce vehicula a neque nec condimentum. Sed ut tellus et erat interdum lacinia.'",

      },
      {
        category:"Gumball & Candy",
        image:"https://vendomat.modeltheme.com/wp-content/uploads/2021/10/Main-tab02.jpg",
        info:"'Vivamus sit amet tellus Phasellus mi tortor, luctus sit amet ligula vel, tincidunt consequat mi. Phasellus placerat ullamcorper lectus, vitae rhoncus nisl commodo non. Fusce vehicula a neque nec condimentum. Sed ut tellus et erat interdum lacinia.'",

      },
      {
        category:"Cold & Frozen",
        image:"https://vendomat.modeltheme.com/wp-content/uploads/2021/10/Main-tab01.jpg",
        info:"'Vivamus sit amet tellus consectetur, convallis  luctus sit amet ligula vel, tincidunt consequat mi. Phasellus placerat ullamcorper lectus, vitae rhoncus nisl commodo non. Fusce vehicula a neque nec condimentum. Sed ut tellus et erat interdum lacinia.'",

      },
      {
        category:"Custom Machines",
        image:"https://vendomat.modeltheme.com/wp-content/uploads/2021/10/Main-tab04.jpg",
        info:"'convallis purus id, convallis turpis. Phasellus mi tortor, luctus sit amet ligula vel, tincidunt consequat mi. Phasellus placerat ullamcorper lectus, vitae rhoncus nisl commodo non. Fusce vehicula a neque nec condimentum. Sed ut tellus et erat interdum lacinia.'",

      },


    ]
    const selectedContent = content.find(item => item.category === category);
  
    return (
      <div className="flex items-center justify-center gap-4 max-md:flex-col ">
        <div class="flex justify-center max-md:p-5 items-center md:h-96 md:w-96 md:mt-5">
          <img
            src={selectedContent.image}
            alt={selectedContent.category}
            class="max-w-full object-contain"
          />
        </div>
        <div class=" content-center md:w-[40%]">
          <h2 class="text-xl font-bold ">{selectedContent.category}</h2>
          <p className="">{selectedContent.info}</p>
          <button className="px-6 py-2 mt-4 text-white bg-orange-500 rounded hover:bg-orange-600">Explore</button>
        </div>
      </div>
      
    );
  };
  