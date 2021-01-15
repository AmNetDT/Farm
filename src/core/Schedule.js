import React from 'react';
import {Row} from 'react-bootstrap'

export const Schedule = () => {
    return (
        <div className="container m-3">

            <Row className="mt-4 mx-0 p-0">
                <p className="TitleFont">Schedule</p>
            </Row>
            <div className="row">
                <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="bg-primary p-1 px-2 border-0 text-white">New Activities</button>
                        <button type="button" className="bg-secondary p-1 px-2 ml-1 border-0 text-white">New Task</button>
                        </div>
                    </div>
                </div>
             </div>
        </div>
       )
}



export default Schedule;