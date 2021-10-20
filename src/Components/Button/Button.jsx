import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ fetchImages}) => {
    return (
      <button  type="button" onClick={fetchImages}>
       Load more
      </button>
    );
  };
  
  export default Button;
  
  Button.propTypes = {
      fetchImages: PropTypes.func.isRequired
  }

// function Button () {
//     return(
//         <button>
// Load more
//         </button>
//     )
// }

// window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: 'smooth',
//   });

//   export default Button;