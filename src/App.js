  import './components/design.css'
  import React, { useState } from 'react';

  function App() {
    const allRecords = [
      {
        images : 'Images/bollywood-1.jpg',
        name : 'RRR',
        categary : 'bollywood',
        des : 'action',
        price : '150'
    },
    {
      images : 'Images/bollywood-3.webp',
        name : 'dhadak',
        categary : 'bollywood',
        des : 'Drama/Thriller',
        price : '250'
    },
    {
      images : 'Images/bollywood-4.jpg',
        name : 'ghayal',
        categary : 'bollywood',
        des : 'action/drama',
        price : '200'
    },
    {
      images : 'Images/bollywood-5.webp',
        name : 'sab khush mangal',
        categary : 'bollywood',
        des : 'Comedy/Drama/Romantic',
        price : '300'
    },
    {
      images : 'Images/bollywood-6.webp',
        name : 'yeh jawaani hai deewani',
        categary : 'bollywood',
        des : 'Thriller',
        price : '220'
    },
    {
      images : 'Images/gujarati-1.jpg',
        name : 'swagatam',
        categary : 'gujarati',
        des : 'Adventure',
        price : '300'
    },
    {
      images : 'Images/gujarati-2.jpg',
        name : 'gujju bhai',
        categary : 'gujarati',
        des : 'Action',
        price : '170'
    },
    {
      images : 'Images/gujarati-3.jpg',
        name : 'gajab thai gayu',
        categary : 'gujarati',
        des : 'action/drama',
        price : '200'
    },
    {
      images : 'Images/gujarati-4.webp',
        name : 'nadi dosh',
        categary : 'gujarati',
        des : 'Sci-Fi',
        price : '150'
    },
    {
      images : 'Images/gujarati-5.jpg',
        name : 'om mangalam singlam',
        categary : 'gujarati',
        des : 'Romance',
        price : '200'
    },
    {
      images : 'Images/hollywood-1.jpg',
        name : 'the dark knight',
        categary : 'hollywood',
        des : 'Action/Emotional',
        price : '200'
    },
    {
      images : 'Images/hollywood-3.jpg',
        name : 'morbius',
        categary : 'hollywood',
        des : ' Mystery/Adventure',
        price : '150'
    },
    {
      images : 'Images/hollywood-4.jpg',
        name : '1917',
        categary : 'hollywood',
        des : 'Action/Romance',
        price : '210'
    },
    {
      images : 'Images/hollywood-5.jfif',
        name : 'jungle cruise',
        categary : 'hollywood',
        des : 'Action/Drama',
        price : '310'
    },
    {
      images : 'Images/horror-1.webp',
        name : 'sinister',
        categary : 'horror',
        des : 'Action',
        price : '250'
    },
    {
      images : 'Images/horror-2.webp',
        name : 'annabelle',
        categary : 'horror',
        des : 'Adventure',
        price : '310'
    },
    {
      images : 'Images/horror-3.webp',
        name : 'cruse of the nun',
        categary : 'horror',
        des : 'Action',
        price : '210'
    },
    {
      images : 'Images/horror-4.jfif',
        name : 'wrong trun',
        categary : 'horror',
        des : 'Horror',
        price : '200'
    },
    ];
    const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredRecords = selectedCategory
    ? allRecords.filter((record) => record.categary === selectedCategory)
    : allRecords;

  const filteredMovies = searchQuery
    ? filteredRecords.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredRecords;

  return (
    <div className="App">
      <div className='header'>
        <div className='container'>
        <div className="col-10 p-0">
        <div>
          <input
            style={{
              float: 'right',
              padding: '8px 50px',
              fontSize: '20px',
              backgroundColor: '#FFD700', // Change the search bar background color to gold
              border: 'none',
              borderRadius: '5px',
            }}
            type="text"
            placeholder="MOVIE SEARCH NAME"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: '#007bff', color: '#fff' , padding:'5px 20px', fontSize:'20px'  }} // Change the button color for "All"
          onClick={() => handleCategoryClick('')}
        >
          All
        </button>
        <button
          style={{ backgroundColor: '#FF5733', color: '#fff', padding:'5px 20px', fontSize:'20px' }} // Change the button color for "Bollywood"
          onClick={() => handleCategoryClick('bollywood')}
        >
          Bollywood
        </button>
        <button
          style={{ backgroundColor: '#33FF57', color: '#fff' , padding:'5px 20px', fontSize:'20px'  }} // Change the button color for "Hollywood"
          onClick={() => handleCategoryClick('hollywood')}
        >
          Hollywood
        </button>
        <button
          style={{ backgroundColor: '#FF33DD', color: '#fff', padding:'5px 20px', fontSize:'20px'  }} // Change the button color for "Horror"
          onClick={() => handleCategoryClick('horror')}
        >
          Horror
        </button>
        <button
          style={{ backgroundColor: '#5733FF', color: '#fff', padding:'5px 20px', fontSize:'20px'  }} // Change the button color for "Gujarati"
          onClick={() => handleCategoryClick('gujarati')}
        >
          Gujarati
        </button>
      </div>
        </div>
      </div>
      <div className="movie-list">
        {filteredMovies.map((item) => {
          const { images, name } = item;
          return (
            <div key={name} className="movie-card">
              <img style={{height:'250px'}} src={images} alt={name} />
              <div className="movie-info">
                <h3>{name}</h3>
                <p>Category: {item.categary}</p>
                <p>Description: {item.des}</p>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;