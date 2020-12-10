import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';


const CommandBarBasicExample = () => {
    return (
        <div className="row m-4">
            <div className="container">
                
                    <Link to="#" className="btn-primary p-2">New Animal</Link>
                    <Link to="" className="btn-default border ml-1 p-2">New Group</Link>
                    <Link to="" className="btn-default border ml-1 p-2"><span className="icon-cloud-upload"></span></Link>
                
            </div>
        </div>
    );
};


export default withRouter(CommandBarBasicExample);