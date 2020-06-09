import React from 'react';
import { Link} from 'react-router-dom';

const Category = (props) => {
    
    let match = props.match ;
 return( <div>
<ul>
     <li><Link to={`${match.url}/shoes`}>Shoes</Link></li>
    <li><Link to={`${match.url}/boots`}>Boots</Link></li>
     <li><Link to={`${match.url}/footwear`}>Footwear</Link></li>

   </ul>

  
  {/* <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3 style={{display: "block",
    fontSize: "1.17em",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    fontWeight: "bold"}}> {match.params.name} </h3></div>)}/> */}
  </div>)
}
export default Category;