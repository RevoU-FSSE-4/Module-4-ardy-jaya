
import React from 'react';
import { Route } from 'react-router-dom';

const InsideLogin: React.FC = () => {
    function logout() { localStorage.setItem('login', 'false'); }
     return (
          <div>
                <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                     justo id nunc tincidunt, id lacinia nisl tincidunt. Nulla facilisi.
                     Mauris euismod, nunc id aliquam tincidunt, nunc nunc tincidunt elit,
                     vitae tincidunt nunc nunc id lectus. Sed id nunc auctor, aliquam nunc
                     nec, aliquam nunc. Sed id nunc auctor, aliquam nunc nec, aliquam nunc.
                </p>
                <img src="cute-picture.jpg" alt="Cute Picture" />
                <div><button onClick={logout}>Log Out</button></div>
          </div>
     );
};

export default InsideLogin;