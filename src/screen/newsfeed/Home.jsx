import React, { Component } from 'react'
import logo from '../asset/img/logo.png';
import {Follow, Footer,Create,Header, Active, Profile} from './component';
const user = {user:{_id:"89",firstName:"Yusuff"}}
export default class Home extends Component {
    render() {
        return (
<div>
  <Header logo={logo} user={user} />
  {/*Header End*/}
  <div id="page-contents">
    <div className="container">
      <div className="row">
        {/* Newsfeed Common Side Bar Left
          ================================================= */}
        <div className="col-md-3 static">
          <Profile />
          {/*news-feed links ends*/}
          <div id="chat-block">
            <Active />
          </div>{/*chat block ends*/}
        </div>
        <div className="col-md-7">
          {/* Post Create Box ================================================= */}
          <Create />


            {/* Post Create Box End*/}
          {/* Post Content
            ================================================= */}
         
          {/* Post Content
            ================================================= */}

          {/* Post Content
            ================================================= */}
          
          {/* Post Content
            ================================================= */}
          
          {/* Post Content
            ================================================= */}

        </div>
        {/* Newsfeed Common Side Bar Right
          ================================================= */}
        <div className="col-md-2 static">
          <div className="suggestions" id="sticky-sidebar">
            {/**who to follow component */}
            <Follow />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer
    ================================================= */}
  <footer id="footer">
    {/** news feeds footer  */}
    <Footer logo={logo}  />
  </footer>
</div>

        )
    }
}
