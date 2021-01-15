import * as React from 'react'


const newModal = (modalname)=>{
 if(modalname==="cropModal"){
     return(
         <div className="modal" tabindex="-1">
             <div className="modal-dialog">
                 <div className="modal-content">
                     <div className="modal-header">
                         <h5 className="modal-title">Modal title</h5>
                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                         </button>
                     </div>
                     <div className="modal-body">
                         <p>Modal body text goes here.</p>
                     </div>
                     <div className="modal-footer">
                         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                         <button type="button" className="btn btn-primary">Save changes</button>
                     </div>
                 </div>
             </div>
         </div>
     )
 }


}


const MyCrops = ({ modalname }) =>{
    return(
        <div className="row m-3">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" onClick={newModal(modalname, 'cropModal')} className="bg-primary p-1 px-2 border-0 text-white">New Crop</button>
                        <button type="button" className="bg-secondary p-1 px-2 ml-1 border-0 text-white"><span className="icon-cloud-upload"></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCrops