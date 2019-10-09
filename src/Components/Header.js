import React from 'react';
import Logo from '../img/dish-logo--320.png';
 export default class Header extends React.Component {
   state = {
     search:''
   };

   handleChange = (event) => {
     if (event.which === 13) {

        console.log(event.which);
     };
     this.setState({search:event.target.value});
   };

   searchDish = () => {
     this.props.onStartSearch(this.state.search);
   };

   render() {
     return (
       <header className="AppHeader">
         <div className="topMenu-container">
           <div className="topMenu container">
             <div className="logo">
               <img src={Logo} alt="Lish logo"/>
             </div>
             <nav className="navMenu">
               <ul>
                 <li><a href="#">Our Restaurant</a></li>
                 <li><button className="btn"><span>Menu</span></button></li>
                 <li><a href="#">Contact us</a></li>
               </ul>
             </nav>
            <div className="topMenu-search-user">
              <div className="search">
                <form action="" onKeyDown={(event) => {if (event.keyCode === 13) {
                  event.preventDefault();
                  this.props.onStartSearch(this.state.search);
                } }}>
                  <input type="text"
                         value={this.state.search}
                         onChange={this.handleChange} />
                  <svg onClick={this.searchDish} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5C19 12.4869 18.3183 14.3145 17.176 15.7618L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L15.7618 17.176C14.3145 18.3183 12.4869 19 10.5 19ZM15.1598 15.0317C15.1368 15.0509 15.1145 15.0713 15.0929 15.0929C15.0713 15.1145 15.0509 15.1368 15.0317 15.1598C13.8609 16.2986 12.2624 17 10.5 17C6.91015 17 4 14.0899 4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5C17 12.2624 16.2986 13.8609 15.1598 15.0317Z" fill="black"/>
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5C19 12.4869 18.3183 14.3145 17.176 15.7618L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L15.7618 17.176C14.3145 18.3183 12.4869 19 10.5 19ZM15.1598 15.0317C15.1368 15.0509 15.1145 15.0713 15.0929 15.0929C15.0713 15.1145 15.0509 15.1368 15.0317 15.1598C13.8609 16.2986 12.2624 17 10.5 17C6.91015 17 4 14.0899 4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5C17 12.2624 16.2986 13.8609 15.1598 15.0317Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0)">
                      <rect width="24" height="24" fill="#262626"/>
                    </g>
                  </svg>
                </form>
              </div>
              <div className="user">
                <p>John C.</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd1" clipRule="evenodd1" d="M12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12ZM21 21V19C21 16.2386 18.7614 14 16 14H8C5.23858 14 3 16.2386 3 19V21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21V19C5 17.3431 6.34315 16 8 16H16C17.6569 16 19 17.3431 19 19V21C19 21.5523 19.4477 22 20 22C20.5523 22 21 21.5523 21 21ZM15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z" fill="black"/>
                  <mask id="mask01" mask-type="alpha1" maskUnits="userSpaceOnUse" x="3" y="2" width="18" height="20">
                    <path fillRule="evenodd1" clipRule="evenodd1" d="M12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12ZM21 21V19C21 16.2386 18.7614 14 16 14H8C5.23858 14 3 16.2386 3 19V21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21V19C5 17.3431 6.34315 16 8 16H16C17.6569 16 19 17.3431 19 19V21C19 21.5523 19.4477 22 20 22C20.5523 22 21 21.5523 21 21ZM15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask01)">
                    <rect width="24" height="24" fill="white"/>
                  </g>
                </svg>
              </div>
            </div>
           </div>
         </div>
         <div className="pageTitle container">Menu</div>
       </header>
     )
   };
 };
