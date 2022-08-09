import React from 'react';

const SearchBar = (props) => {
    
  
    const handleSubmit = (e) =>{
        e.target.preventDefault();
    }
    
    return (
        <form  onSubmit={handleSubmit}>
            <div className='form-row mb-5'>
                <div className='col-12 mt-4'>
                    <input type='text' className='form-control' placeholder='Search movie'
                     onChange={(e)=> props.setSearch(e.target.value)}
                    //  onChange={(e)=> console.log("nese")}
                     />
                </div>
            </div>
        </form>
    );
};

export default SearchBar;