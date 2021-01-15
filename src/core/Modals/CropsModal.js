import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Container, Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap'
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react'
import { Link } from 'react-router-dom'
import {

CloseModalButton,
ModalDelete,
ModalWrapper,
ModalWrapperNewAnimal,
ModalWrapperNewGroup,
ModalAddNoteWrapper,
ModalWrapperBulkUpdate

} from '../links/Styled'

const visible_true = () => {

    var x = document.getElementById("demacation");

    if (document.getElementById('Purchased').checked) {

        x.style.display = "block";

    } else {
        x.style.display = "none";
    }
}


export const Modal = ({ 
    showModal,
    showGroupModal,
    showAnimalModal,
    setShowAnimalModal,
    setShowModal,
    setShowGroupModal,
    showLivestockGroupModal,
    setShowLivestockGroupModal
}) => {
    const [showAddNoteModal, setShowAddNoteModal] = useState(false);
    const [showAddTreatmentModal, setShowAddTreatmentModal] = useState(false);
    const [showMoveToFieldModal, setShowMoveToFieldModal] = useState(false);
    const [showBulkUpdateGroupModal, setShowBulkUpdateGroupModal] = useState(false);
    const [showEditGroupModal, setShowEditGroupModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    
    
    const openDeleteModal = () => {
        setShowDeleteModal(prev => !prev);
    };

    const openEditGroupModal = () => {
        setShowEditGroupModal(prev => !prev);
    };

    const openAddTreatmentModal = () => {
        setShowAddTreatmentModal(prev => !prev);
    };

    
    const openAddNoteModal = () => {
        setShowAddNoteModal(prev => !prev);
    };

    const openBulkUpdateGroupModal = () => {
        setShowBulkUpdateGroupModal(prev => !prev);
    };

    const openMoveToFieldModal = () => {
        setShowMoveToFieldModal(prev => !prev);
    };
    
    const animationDelete = useSpring({
        config: {
            duration: 500
        },
        opacity: showDeleteModal ? 1 : 0,
        transform: showDeleteModal ? `translateX(0%)` : `translateX(-100%)`

    });

    const animation = useSpring({
        config: {
            duration: 500
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`

    });
    
    const animationEditGroup = useSpring({
        config: {
            duration: 500
        },
        opacity: showEditGroupModal ? 1 : 0,
        transform: showEditGroupModal ? `translateY(0%)` : `translateY(-100%)`

    });
    
    const animationBulkUpdateGroup = useSpring({
        config: {
            duration: 500
        },
        opacity: showBulkUpdateGroupModal ? 1 : 0,
        transform: showBulkUpdateGroupModal ? `translateY(0%)` : `translateY(-100%)`

    });

    const animationMoveToField = useSpring({
        config: {
            duration: 500
        },
        opacity: showMoveToFieldModal ? 1 : 0,
        transform: showMoveToFieldModal ? `translateY(0%)` : `translateY(-100%)`

    });

    const animationGroup = useSpring({
        config: {
            duration: 500
        },
        opacity: showGroupModal ? 1 : 0,
        transform: showGroupModal ? `translateY(0%)` : `translateY(-100%)`

    });

    const animationAnimal = useSpring({
        config: {
            duration: 500
        },
        opacity: showAnimalModal ? 1 : 0,
        transform: showAnimalModal ? `translateY(0%)` : `translateY(-100%)`

    });
    
    const animationAddTreatment = useSpring({
        config: {
            duration: 500
        },
        opacity: showAddTreatmentModal ? 1 : 0,
        transform: showAddTreatmentModal ? `translateY(0%)` : `translateY(-100%)`

    });

    const animationAddNote = useSpring({
        config: {
            duration: 500
        },
        opacity: showAddNoteModal ? 1 : 0,
        transform: showAddNoteModal ? `translateY(0%)` : `translateY(-100%)`

    });

    const animationLivestockGroup = useSpring({
        config: {
            duration: 500
        },
        opacity: showLivestockGroupModal ? 1 : 0,
        transform: showLivestockGroupModal ? `translateY(0%)` : `translateY(-100%)`

    });

    const [state, setState] = useState({
        email: "",
        password: ""
    });
    const handleInputChange = (event) => {
        setState((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    };

   

    return (
        <Container>
         
            {showModal ? (
                    <animated.div style={animation}>
                    <ModalWrapper className="bg-light pt-5 px-5" showModal={showModal}>


                        <Form>
                            <Row>
                                <Container className="m-0 p-2">
                                
                                    <Form.Group as={Row} className="m-0 p-0">
                                    <Form.Label>1.  <Link to="#">
                                        <span className="icon-cloud-download"></span>&nbsp; 
                                        Download the CSV Template File</Link>
                                    </Form.Label>
                                    </Form.Group>
                                    <Form.Group as={Row} className="m-0 p-0">
                                        <Form.Label>2. Update the CSV template with your records</Form.Label>
                                    </Form.Group>
                                    <Form.Group as={Row} className="m-0 p-0">
                                    <Col md={12} className="p-3" style={{ backgroundColor: '#facbe1'}}>
                                        <p>Important Importing Instructions</p>
                                        <ul className="mx-3 px-3">
                                            <li>Use Excel or a similiar program to add your records</li>
                                            <li>Leave the header row as part of the file</li>
                                            <li>Save or convert file as a Comma Seperated Value (CSV) file</li>
                                            <li>Dates must be in the following format: MM/DD/YYYY</li>
                                            <li>You can map your import fields in the next step</li>
                                        </ul>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="m-0 mt-1 p-0">
                                        <Form.Label>3. Upload &nbsp; Import File</Form.Label>
                                    </Form.Group>
                                    <Form.Group as={Row} className="m-0 p-0">
                                        <InputGroup>
                                            <Form.File id="CSVupload" className="bg-primary p-1"/>
                                        <InputGroup.Append>
                                                <DefaultButton style={{padding: '10px', height: '35px'}}>Import CSV File</DefaultButton>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    </Form.Group>
                                <Row>
                                <Col className="text-right mr-2 mt-2 p-3" style={{ borderTop: 'solid 1px #999999' }}>
                                    <Form.Group as={Row}>
                                        <Col md={12}>
                                            <DefaultButton type="submit" className="p-4"
                                                        onClick={() => setShowGroupModal(prev => !prev)}>Cancel</DefaultButton>
                                        </Col>
                                    </Form.Group>
                                </Col>
                            </Row>
                                    </Container>
                            </Row>
                        </Form>

                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setShowModal(prev => !prev)}
                            />
                        </ModalWrapper>
                    </animated.div>
            ) : null}
            {showGroupModal ? (
                <animated.div style={animationGroup}>
                    <ModalWrapperNewGroup className="bg-light pt-5 px-5" showModal={showGroupModal}>

                      
                            <Form>
                            <Row>
                                <Container className="m-0 p-2">
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                            Group Name
    </Form.Label>
                                    <Col sm={10}>
                                            <Form.Control type="text" placeholder="Group Name" />
                                    </Col>
                                </Form.Group>

                                <fieldset>
                                    <Form.Group as={Row}>
                                            <Form.Label column sm={2}>
                                                Group Type
                                            </Form.Label>
                                        <Col sm={10}>
                                            <Form.Check
                                                type="radio"
                                                    label="Smart Group - Automaticlly assign animals"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                            />
                                            <Form.Check
                                                type="radio"
                                                    label="Basic Group - Manually assign animals"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check
                                                type="radio"
                                                    label="Set - Track records for multiple animals, like a flock together"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios3"
                                            />
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                                </Container>
                            </Row>
                            <Row>

                                <Col className="text-right mr-2 p-3" style={{ borderTop: 'solid 1px #999999' }}>
                                    <Form.Group as={Row}>
                                        <Col md={12}>
                                            <DefaultButton type="submit" className="p-4"
                                                onClick={() => setShowGroupModal(prev => !prev)}>Cancel</DefaultButton>
                                            <PrimaryButton type="submit" className="mx-1 p-4">Save</PrimaryButton>
                                        </Col>
                                    </Form.Group>
                                </Col>
                            
                            </Row>
                            </Form>
                        
                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowGroupModal(prev => !prev)}
                        />
                    </ModalWrapperNewGroup>
                </animated.div>
            ) : null}
            {showAnimalModal ? (
                <animated.div style={animationAnimal}>
                    <ModalWrapperNewAnimal className="bg-light py-2 px-4" showAnimalModal={showAnimalModal}>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Container className="m-0 p-2">
                                    <p className="text-lg">New Animal</p>
                                    <Col className="m-0 p-0" md={6} style={{float:"left"}}>
                            

                                        <p className="text-sm" style={{
                                            borderBottom: 'solid',
                                            paddingBottom: '10px',
                                            borderBottomWidth: '1px',
                                            borderBottomColor: '#666666'
                                        }}>Basic Informaion</p>
                                        <Col md={12}>         
                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label column md="4">
                                                    Name Or Label
                                    </Form.Label>
                                    <Col md="8">
                                                    <Form.Control Value={state.name} onChange={handleInputChange}
                                             />
                                    </Col>
                                </Form.Group>
                                            <Form.Group as={Row} controlId="animaltype">
                                    <Form.Label column md="3">
                                                    Animal Type
                                    </Form.Label>
                                    <Col md="9">
                                        <Form.Control as="select" Value={state.animaltype} onChange={handleInputChange}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                        
                                    </Col>
                                </Form.Group>
                                            <Form.Group as={Row} controlId="Iiternalid">
                                    <Form.Label column sm="3">
                                                    Internal Id
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control type="text" Value={state.Iiternalid} onChange={handleInputChange}
                                        />
                                    </Col>
                                </Form.Group>
                                            <Form.Group as={Row} controlId="keywords">
                                    <Form.Label column sm="3">
                                                    Keywords
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control type="text" placeholder="Dairy, Stud, Fiber, etc"
                                                        Value={state.keywords} onChange={handleInputChange}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label column sm="3">
                                                    Status
                                    </Form.Label>
                                    <Col sm="9">
                                         <Form.Control Value={state.status} onChange={handleInputChange}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                   <Col sm="9">
                                                    <label style={{paddingRight: '15px'}}>Breeding Stock</label>
                                        <input type="checkbox" placeholder="Breeding Stock" className="px-1"
                                                        Value={state.breedingstock} onChange={handleInputChange}
                                                        />
                                    </Col>
                                </Form.Group>
                               
                                        </Col>

                                        <p className="text-sm" style={{
                                            borderBottom: 'solid',
                                            paddingBottom: '10px',
                                            borderBottomWidth: '1px',
                                            borderBottomColor: '#666666'
                                        }}>Physical Characteristics</p>
                                        <Col md={12}>
                                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                                <Form.Label column md="3">
                                                    Sex
                                                 </Form.Label>
                                                <Col md="9">
                                                    <Form.Control Value={state.name} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="breedingstock">
                                                <Form.Label column md="3">
                                                    &nbsp;
                                                </Form.Label>
                                                <Col md="9">
                                                    
                                                    <input type="checkbox" id="breedingstock" placeholder="Breeding Stock" className="px-1"
                                                        Value={state.breedingstock} onChange={handleInputChange}
                                                    />
                                                    <label style={{ paddingLeft: '15px' }}>Breeding Stock</label>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="breed">
                                                <Form.Label column md="3">
                                                    Breed
                                    </Form.Label>
                                                <Col md="9">
                                                    <Form.Control type="text" Value={state.breed} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="coloring">
                                                <Form.Label column md="3">
                                                    Coloring
                                                </Form.Label>
                                                <Col onMouseDownCapture="9">
                                                    <Form.Control type="text" Value={state.coloring} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="retentionscore">
                                                <Form.Label column md="5">
                                                    Retention Score
                                    </Form.Label>
                                                <Col md="7">
                                                    <Form.Control type="text"
                                                        Value={state.retentionscore} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="description">
                                                <Form.Label column md="3">
                                                    Description
                                    </Form.Label>
                                                <Col md="9">
                                                    
                                                    <Form.Control as="textarea" Value={state.description} rows={3} />
                                                    
                                                </Col>
                                            </Form.Group>
                                            

                                        </Col>
                                        <p className="text-sm" style={{
                                            borderBottom: 'solid',
                                            paddingBottom: '10px',
                                            borderBottomWidth: '1px',
                                            borderBottomColor: '#666666'
                                        }}>Identification</p>
                                        <Col md={12}>
                                            <Form.Group as={Row} controlId="tagnumber">
                                                <Form.Label column md="3">
                                                    Tag Number
                                                 </Form.Label>
                                                <Col md="9">
                                                    <Row>
                                                    <Col md="6">
                                                    <Form.Control Value={state.tagnumber} onChange={handleInputChange}
                                                    />
                                                    </Col>
                                                    <Col md="6">
                                                        <Form.Control Value={state.tagnumber} onChange={handleInputChange}
                                                        />
                                                    </Col>
                                                    </Row>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="othertagnumber">
                                                <Form.Label column md="3">
                                                    Other Tag No.
                                                </Form.Label>
                                                <Col md="9">
                                                    <Form.Control Value={state.othertagnumber} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="registrynumber">
                                                <Form.Label column md="3">
                                                    Registry No.
                                    </Form.Label>
                                                <Col md="9">
                                                    <Form.Control type="text" Value={state.registrynumber} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            
                                        </Col>

                                    </Col>
                                    <Col md={6} style={{ float: "left" }}>
                                        <p className="text-sm" style={{
                                            borderBottom: 'solid',
                                            paddingBottom: '10px',
                                            borderBottomWidth: '1px',
                                            borderBottomColor: '#666666'
                                        }}>Birth Information</p>
                                        <Form.Group as={Row} controlId="birthdate">
                                            <Form.Label column sm="3">
                                                Birth Date
                                            </Form.Label>
                                            <Col sm="9">
                                                <Form.Control type="text" placeholder=""
                                                    Value={state.birthdate} onChange={handleInputChange}
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="birthweight">
                                            <Form.Label column sm="3">
                                                Birth Weight
                                            </Form.Label>
                                            <Col sm="9">
                                                <Form.Control Value={state.birthweight} onChange={handleInputChange}
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="raisedorpurchased">
                                            <Form.Label column md="5">
                                                Raised Or Purchased
                                            </Form.Label>
                                            
                                        <Col md={7}>
                                            <Form.Check
                                                    inline
                                                type="radio"
                                                    label="Raised"
                                                    name="raisedorpurchased"
                                                    id="Raised"
                                                    onChange={visible_true}
                                            />
                                            <Form.Check
                                                    inline
                                                type="radio"
                                                    label="Purchased"
                                                    name="raisedorpurchased"
                                                    id="Purchased"
                                                    onChange={visible_true}
                                            />
                                        </Col>
                                        </Form.Group>    
                                        <Col className="m-0 p-0" id="demacation" style={{display: 'none'}}>
                                            <Form.Group as={Row} controlId="purchasedate">
                                                <Form.Label column sm="4">
                                                    Purchase Date
                                            </Form.Label>
                                                <Col sm="8">
                                                    <Form.Control type="text" placeholder=""
                                                        Value={state.purchasedate} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="purchaseprice">
                                                <Form.Label column sm="4">
                                                    Purchase Price
                                            </Form.Label>
                                                <Col sm="8">
                                                    <Form.Control Value={state.purchaseprice} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="raisedorpurchased">
                                                <Form.Label column md="1">
                                                    &nbsp;
                                            </Form.Label>

                                                <Col md={11}>
                                                    <Form.Check
                                                        inline
                                                        type="Checkbox"
                                                        label="Record a new expense transaction in Accounting section"
                                                        name=""
                                                        id="Raised"
                                                        onChange={visible_true}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="purchasedfrom">
                                            <Form.Label column md="5">
                                                    Purchased From
                                    </Form.Label>
                                            <Col md="7">
                                                <Form.Control as="select" disabled Value={state.purchasedfrom} onChange={handleInputChange}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Form.Control>

                                            </Col>
                                        </Form.Group>
                                            <Form.Group as={Row} controlId="breeder">
                                                <Form.Label column md="5">
                                                    Breeder
                                    </Form.Label>
                                                <Col md="7">
                                                    <Form.Control as="select" Value={state.breeder} onChange={handleInputChange}>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control>

                                                </Col>
                                            </Form.Group>

                                        </Col>
                                            <p className="text-sm" style={{
                                                borderBottom: 'solid',
                                                paddingBottom: '10px',
                                                borderBottomWidth: '1px',
                                                borderBottomColor: '#666666'
                                            }}>Additional Information</p>
                                            <Col md={12}>
                                                <Form.Group as={Row} controlId="veterinarian">
                                                    <Form.Label column md="5">
                                                        Veterinarian
                                    </Form.Label>
                                                    <Col md="7">
                                                        <Form.Control as="select" Value={state.veterinarian} onChange={handleInputChange}>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </Form.Control>

                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} controlId="onfeed">
                                                    <Form.Label column md="3">
                                                        On Feed
                                            </Form.Label>

                                                    <Col md={9}>
                                                        <Form.Check
                                                            inline
                                                            type="Checkbox"
                                                            label="On Feed"
                                                            name="onfeed"
                                                            id="onfeed"
                                                            onChange={visible_true}
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} controlId="feedtype">
                                                    <Form.Label column md="3">
                                                        Feed Type
                                                 </Form.Label>
                                                <Col md="9" className="m-0 p-0">
                                                        <Row>
                                                            <Col md="5" className="m-0 p-0">
                                                                <Form.Control Value={state.feedtype} onChange={handleInputChange}
                                                                />
                                                            </Col>
                                                        <Col md="7" className="m-0 pl-1">
                                                                <InputGroup className="mb-2">
                                                                    <InputGroup.Prepend>
                                                                        <InputGroup.Text>Cost N</InputGroup.Text>
                                                                    </InputGroup.Prepend>
                                                                    <FormControl id="inlineFormInputGroupUsername2" placeholder="0.00" />
                                                                </InputGroup>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} controlId="othertagnumber">
                                                    <Form.Label column md="5">
                                                    Measure Harvests In
                                                </Form.Label>
                                                    <Col md="7">
                                                    <Form.Control as="select" Value={state.veterinarian} onChange={handleInputChange}>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control>
                                                    </Col>
                                                </Form.Group>
                                            <Form.Group as={Row} controlId="estimatedrevenue">
                                                    <Form.Label column md="5">
                                                    Estimated Revenue
                                    </Form.Label>
                                                    <Col md="7">
                                                    <InputGroup className="mb-2">
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text>N</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <FormControl id="estimatedrevenue" name="estimatedrevenue" placeholder="0.00" />
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text>per harvest unit</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                    </InputGroup>
                                                    </Col>
                                                </Form.Group>
                                            <Form.Group as={Row} controlId="estimatedvalue">
                                                <Form.Label column md="5">
                                                    Estimated Value
                                            </Form.Label>
                                                <Col md="7">
                                                    <InputGroup className="mb-2">
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text>N</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <FormControl id="estimatedvalue" name="estimatedvalue" placeholder="0.00" />
                                                        
                                                    </InputGroup>
                                                </Col>
                                            </Form.Group>
                                            </Col>

                                        
                                        
                            </Col>
                                </Container>

                            </Row>
                            <Row>
                                <Container className="text-right mr-5 mb-5 p-3" style={{borderTop: 'solid 1px #999999'}}>
                                <DefaultButton aria-label='Close modal' className="mx-1 p-4"
                                    onClick={() => setShowAnimalModal(prev => !prev)}>Cancel</DefaultButton>
                                    <PrimaryButton type="submit" className="p-4">Save</PrimaryButton>
                                </Container>
                            </Row>
                            </Form>
                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowAnimalModal(prev => !prev)}
                        />
                    </ModalWrapperNewAnimal>
                </animated.div>
            ) : null}
            {showLivestockGroupModal ? (
                <animated.div style={animationLivestockGroup}>
                    <ModalWrapper className="bg-light pt-5 px-5" showLivestockGroupModal={showLivestockGroupModal}>


                        <Form>
                            <Row>
                                <Container className="m-0 p-2">
                                    <Row>
                                        <p className="text-lg">FourLegs</p>
                                    </Row>
                                    <Row>
                                        <Col md={9} className="my-1">
                                            
                                            <DefaultButton onClick={ openAddNoteModal } style={{borderColor: '#cccccc', color: '#666666'}}>
                                                Add Note</DefaultButton>
                                            <DefaultButton onClick={ openMoveToFieldModal } className="ml-1" style={{ borderColor: '#cccccc', color: '#666666' }}>
                                                Move Grazing</DefaultButton>
                                            <DefaultButton onClick={ openBulkUpdateGroupModal } className="mx-1" style={{ borderColor: '#cccccc', color: '#666666' }}>
                                                Bulk Update</DefaultButton>
                                            <DefaultButton onClick={ openAddTreatmentModal } style={{ borderColor: '#cccccc', color: '#666666' }}>
                                                Add Treatment</DefaultButton>
                                        </Col>
                                        <Col md={3} className="my-1">

                                            <DefaultButton onClick={ openEditGroupModal } 
                                            style={{ borderColor: '#cccccc', color: '#666666' }}>
                                                Edit Group</DefaultButton>  
                                            <DefaultButton onClick={ openDeleteModal } className="ml-1" 
                                            style={{ borderColor: '#cccccc', color: '#666666' }}>
                                                <span className="icon-trash"></span></DefaultButton>                                          

                                        </Col>
                                    </Row>   
                                    <Row>
                                        <Col md={12} className="p-2 text-center" style={{ backgroundColor: '#eeeeee' }}>
                                            <p style={{fontSize: '8em', color: '#cccccc'}}><span className="icon-chain"></span></p>
                                            <p className="text-lg">No Livestock groups yet?</p>
                                            <p className="text-sm">Add a livestock group and they'll show up here</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                        </Form>

                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowLivestockGroupModal(prev => !prev)}
                        />
                    </ModalWrapper>
                </animated.div>
            ) : null}
            {showAddNoteModal ? (
                <animated.div style={animationAddNote}>
                    <ModalAddNoteWrapper className="bg-light pt-5 px-5" showAddNoteModal={showAddNoteModal}>

                        <p className="text-lg">Bulk Add Note</p>
                        <Form>
                            <Row>
                                <Container className="m-0 p-2">
                                    <Row>
                                        <Col className="p-2 text-center" md={12} style={{ backgroundColor: '#FFFACD'}}>
                                            <span className="icon-warning"></span>
                                            This update will apply to all 0 animals in the 'Four Legs' group.
                                        </Col>
                                    </Row>
                                    <Row className="my-1">
                                        <Form.Group as={ Col } md={ 12 } controlId="bulknote">
                                        <Form.Label>Bulk Note</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col md={12}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">
                                                <span className="icon-key"></span> &nbsp;Keywords
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Example: Vet, Vaccine, etc"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                        </Col>
                                     </Row>
                                    <Row className="mb-2">
                                        <Col md={6}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1">
                                                        <span className="icon-calendar"></span>
                                            </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                    placeholder="01/12/2020"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </Col>
                                        <Col md={6}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1">
                                                    Category
                                            </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control as="select">
                                                    <option></option>
                                                    <option>Breeding</option>
                                                    <option>Dewarming</option>
                                                    <option>General</option>
                                                    <option>Others</option>
                                                </Form.Control>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Container className="text-right mr-5 mb-5 p-3" style={{ borderTop: 'solid 1px #999999' }}>
                                            <DefaultButton aria-label='Close modal' className="mx-1 p-4"
                                                onClick={() => setShowAddNoteModal(prev => !prev)}>Cancel</DefaultButton>
                                            <PrimaryButton type="submit" className="p-4">Update Group</PrimaryButton>
                                        </Container>
                                    </Row>
                                </Container>
                            </Row>
                        </Form>

                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowAddNoteModal(prev => !prev)}
                        />
                    </ModalAddNoteWrapper>
                </animated.div>
            ) : null}
            {showMoveToFieldModal ? (
                <animated.div style={animationMoveToField}>
                    <ModalAddNoteWrapper className="bg-light pt-5 px-5" showMoveToFieldModal={showMoveToFieldModal}>

                        <p className="text-lg">Bulk Move to Field</p>
                        <Form>
                            <Row>
                                <Container className="m-0 p-2">
                                    <Row>
                                        <Col className="p-2 text-center" md={12} style={{ backgroundColor: '#FFFACD' }}>
                                            <span className="icon-warning"></span>
                                            This update will apply to all 0 animals in the 'FourLegs' group.
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Form.Group as={Container} md={6} controlId="bulknote" className="px-5 my-5 text-center">
                                            <Form.Label>Select Field to move Animals into</Form.Label>
                                            <Form.Control as="select">
                                                <option>--Select Field--</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Container className="text-right mr-5 mb-5 p-3" style={{ borderTop: 'solid 1px #999999' }}>
                                            <DefaultButton aria-label='Close modal' className="mx-1 p-4"
                                                onClick={() => setShowMoveToFieldModal(prev => !prev)}>Cancel</DefaultButton>
                                            <PrimaryButton type="submit" className="p-4">Update Group</PrimaryButton>
                                        </Container>
                                    </Row>
                                </Container>
                            </Row>
                        </Form>

                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowMoveToFieldModal(prev => !prev)}
                        />
                    </ModalAddNoteWrapper>
                </animated.div>
            ) : null}
            {showBulkUpdateGroupModal ? (
                <animated.div style={animationBulkUpdateGroup}>
                    <ModalWrapperBulkUpdate className="bg-light py-2 px-4" showBulkUpdateGroupModal={showBulkUpdateGroupModal}>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Container className="m-0 p-2">
                                    <Row>
                                        <Col className="p-2 mt-4 text-center" md={12} style={{ backgroundColor: '#FFFACD' }}>
                                            <span className="icon-warning"></span>
                                            This update will apply to all 0 animals in the 'Four Legs' group.
                                        </Col>
                                    </Row>
                                    <p className="text-lg">Bulk Update Group</p>
                                    <Col className="m-0 p-0" md={6} style={{ float: "left" }}>


                                        <p className="text-sm" style={{
                                            borderBottom: 'solid',
                                            paddingBottom: '10px',
                                            borderBottomWidth: '1px',
                                            borderBottomColor: '#666666'
                                        }}>Basic Informaion</p>
                                        <Col md={12}>
                                            <Form.Group as={Row} controlId="animaltype">
                                                <Form.Label column md="3">
                                                    Animal Type
                                    </Form.Label>
                                                <Col md="9">
                                                    <Form.Control as="select" Value={state.animaltype} onChange={handleInputChange}>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control>

                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="keywords">
                                                <Form.Label column sm="3">
                                                    Keywords
                                    </Form.Label>
                                                <Col sm="9">
                                                    <Form.Control type="text" placeholder="Dairy, Stud, Fiber, etc"
                                                        Value={state.keywords} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                                <Form.Label column sm="3">
                                                    Status
                                    </Form.Label>
                                                <Col sm="9">
                                                    <Form.Control Value={state.status} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="breedingstatus">
                                                <Form.Label column sm="3">
                                                    Breeding Status
                                    </Form.Label>
                                                <Col sm="9">
                                                    <Form.Control Value={state.breedingstatus} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                                <Col sm="9">
                                                    <label style={{ paddingRight: '15px' }}>Breeding Stock</label>
                                                    <input type="checkbox" placeholder="Breeding Stock" className="px-1"
                                                        Value={state.breedingstock} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>

                                        </Col>

                                        <p className="text-sm" style={{
                                            borderBottom: 'solid',
                                            paddingBottom: '10px',
                                            borderBottomWidth: '1px',
                                            borderBottomColor: '#666666'
                                        }}>Physical Characteristics</p>
                                        <Col md={12}>
                                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                                <Form.Label column md="3">
                                                    Sex
                                                 </Form.Label>
                                                <Col md="9">
                                                    <Form.Control Value={state.name} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="neutered">
                                                <Form.Label column md="3">
                                                    &nbsp;
                                                </Form.Label>
                                                <Col md="9">

                                                    <input type="checkbox" id="neutered" placeholder="Breeding Stock" className="px-1"
                                                        Value={state.neutered} onChange={handleInputChange}
                                                    />
                                                    <label style={{ paddingLeft: '15px' }}>Neutered</label>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="breed">
                                                <Form.Label column md="3">
                                                    Breed
                                    </Form.Label>
                                                <Col md="9">
                                                    <Form.Control type="text" Value={state.breed} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="coloring">
                                                <Form.Label column md="3">
                                                    Coloring
                                                </Form.Label>
                                                <Col onMouseDownCapture="9">
                                                    <Form.Control type="text" Value={state.coloring} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="retentionscore">
                                                <Form.Label column md="4">
                                                    Retention Score
                                    </Form.Label>
                                                <Col md="8">
                                                    <Form.Control
                                                        as="select"
                                                        className="mr-sm-2"
                                                        id="inlineFormCustomSelect"
                                                        custom
                                                    >
                                                        <option value="0">Choose...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="description">
                                                <Form.Label column md="3">
                                                    Description
                                    </Form.Label>
                                                <Col md="9">

                                                    <Form.Control as="textarea" Value={state.description} rows={3} />

                                                </Col>
                                            </Form.Group>


                                        </Col>
                                      
                                    </Col>
                                    <Col md={6} style={{ float: "left" }}>
                                        <p className="text-sm" style={{
                                            borderBottom: 'solid',
                                            paddingBottom: '10px',
                                            borderBottomWidth: '1px',
                                            borderBottomColor: '#666666'
                                        }}>Birth Information</p>
                                        <Form.Group as={Row} controlId="birthdate">
                                            <Form.Label column sm="3">
                                                Birth Date
                                            </Form.Label>
                                            <Col sm="9">
                                                <Form.Control type="text" placeholder=""
                                                    Value={state.birthdate} onChange={handleInputChange}
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="birthweight">
                                            <Form.Label column sm="3">
                                                Birth Weight
                                            </Form.Label>
                                            <Col sm="9">
                                                <Form.Control Value={state.birthweight} onChange={handleInputChange}
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="raisedorpurchased">
                                            <Form.Label column md="5">
                                                Raised Or Purchased
                                            </Form.Label>

                                            <Col md={7}>
                                                <Form.Check
                                                    inline
                                                    type="radio"
                                                    label="Raised"
                                                    name="raisedorpurchased"
                                                    id="Raised"
                                                    onChange={visible_true}
                                                />
                                                <Form.Check
                                                    inline
                                                    type="radio"
                                                    label="Purchased"
                                                    name="raisedorpurchased"
                                                    id="Purchased"
                                                    onChange={visible_true}
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Col className="m-0 p-0" id="demacation" style={{ display: 'none' }}>
                                            <Form.Group as={Row} controlId="purchasedate">
                                                <Form.Label column sm="4">
                                                    Purchase Date
                                            </Form.Label>
                                                <Col sm="8">
                                                    <Form.Control type="text" placeholder=""
                                                        Value={state.purchasedate} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="purchaseprice">
                                                <Form.Label column sm="4">
                                                    Purchase Price
                                            </Form.Label>
                                                <Col sm="8">
                                                    <Form.Control Value={state.purchaseprice} onChange={handleInputChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="raisedorpurchased">
                                                <Form.Label column md="1">
                                                    &nbsp;
                                            </Form.Label>

                                                <Col md={11}>
                                                    <Form.Check
                                                        inline
                                                        type="Checkbox"
                                                        label="Record a new expense transaction in Accounting section"
                                                        name=""
                                                        id="Raised"
                                                        onChange={visible_true}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="purchasedfrom">
                                                <Form.Label column md="5">
                                                    Purchased From
                                    </Form.Label>
                                                <Col md="7">
                                                    <Form.Control as="select" disabled Value={state.purchasedfrom} onChange={handleInputChange}>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control>

                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="breeder">
                                                <Form.Label column md="5">
                                                    Breeder
                                    </Form.Label>
                                                <Col md="7">
                                                    <Form.Control as="select" Value={state.breeder} onChange={handleInputChange}>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control>

                                                </Col>
                                            </Form.Group>

                                        </Col>
                                        <p className="text-sm" style={{
                                            borderBottom: 'solid',
                                            paddingBottom: '10px',
                                            borderBottomWidth: '1px',
                                            borderBottomColor: '#666666'
                                        }}>Additional Information</p>
                                        <Col md={12}>
                                            <Form.Group as={Row} controlId="veterinarian">
                                                <Form.Label column md="5">
                                                    Veterinarian
                                    </Form.Label>
                                                <Col md="7">
                                                    <Form.Control as="select" Value={state.veterinarian} onChange={handleInputChange}>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control>

                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="onfeed">
                                                <Form.Label column md="3">
                                                    On Feed
                                            </Form.Label>

                                                <Col md={9}>
                                                    <Form.Check
                                                        inline
                                                        type="Checkbox"
                                                        label="On Feed"
                                                        name="onfeed"
                                                        id="onfeed"
                                                        onChange={visible_true}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="feedtype">
                                                <Form.Label column md="3">
                                                    Feed Type
                                                 </Form.Label>
                                                <Col md="9" className="m-0 p-0">
                                                    <Row>
                                                        <Col md="5" className="m-0 p-0">
                                                            <Form.Control Value={state.feedtype} onChange={handleInputChange}
                                                            />
                                                        </Col>
                                                        <Col md="7" className="m-0 pl-1">
                                                            <InputGroup className="mb-2">
                                                                <InputGroup.Prepend>
                                                                    <InputGroup.Text>Cost N</InputGroup.Text>
                                                                </InputGroup.Prepend>
                                                                <FormControl id="inlineFormInputGroupUsername2" placeholder="0.00" />
                                                            </InputGroup>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="othertagnumber">
                                                <Form.Label column md="5">
                                                    Measure Harvests In
                                                </Form.Label>
                                                <Col md="7">
                                                    <Form.Control as="select" Value={state.veterinarian} onChange={handleInputChange}>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="estimatedrevenue">
                                                <Form.Label column md="5">
                                                    Estimated Revenue
                                    </Form.Label>
                                                <Col md="7">
                                                    <InputGroup className="mb-2">
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text>N</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <FormControl id="estimatedrevenue" name="estimatedrevenue" placeholder="0.00" />
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text>per harvest unit</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                    </InputGroup>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="estimatedvalue">
                                                <Form.Label column md="5">
                                                    Estimated Value
                                            </Form.Label>
                                                <Col md="7">
                                                    <InputGroup className="mb-2">
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text>N</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <FormControl id="estimatedvalue" name="estimatedvalue" placeholder="0.00" />

                                                    </InputGroup>
                                                </Col>
                                            </Form.Group>
                                        </Col>



                                    </Col>
                                </Container>

                            </Row>
                            <Row>
                                <Container className="text-right mr-5 mb-5 p-3" style={{ borderTop: 'solid 1px #999999' }}>
                                    <DefaultButton aria-label='Close modal' className="mx-1 p-4"
                                        onClick={() => setShowBulkUpdateGroupModal(prev => !prev)}>Cancel</DefaultButton>
                                    <PrimaryButton type="submit" className="p-4">Update Group</PrimaryButton>
                                </Container>
                            </Row>
                        </Form>
                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowBulkUpdateGroupModal(prev => !prev)}
                        />
                    </ModalWrapperBulkUpdate>
                </animated.div>
            ) : null}
            {showAddTreatmentModal ? (
                <animated.div style={animationAddTreatment}>
                    <ModalAddNoteWrapper className="bg-light pt-5 px-5" showAddTreatmentModal={showAddTreatmentModal}>

                        <p className="text-lg">Bulk Update Group</p>
                        <Form>
                            <Row>
                                <Container className="m-0 p-2">
                                    <Row>
                                        <Col className="p-2 text-center" md={12} style={{ backgroundColor: '#FFFACD' }}>
                                            <span className="icon-warning"></span>
                                            This update will apply to all 0 animals in the 'Four Legs' group.
                                        </Col>
                                    </Row>
                                    <Row className="my-1">
                                        <Form.Group as={Col} md={6} controlId="bulknote">
                                            <Form.Label>Treatment Type</Form.Label>
                                            <Form.Control as="select">
                                                <option></option>
                                                <option>Breeding</option>
                                                <option>Dewarming</option>
                                                <option>General</option>
                                                <option>Others</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md={6} controlId="bulknote">
                                            <Form.Label>Treatment Location</Form.Label>
                                            <Form.Control Value={state.name} onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="my-1">
                                        <Form.Group as={Col} md={6} controlId="productused">
                                            <Form.Label>Product Used</Form.Label>
                                            <Form.Control Value={state.productused} onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md={6} controlId="batch">
                                            <Form.Label>Batch #</Form.Label>
                                            <Form.Control Value={state.batch} onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="my-1">
                                        <Form.Group as={Col} md={6} controlId="treatmentapplication">
                                            <Form.Label>Treatment Application</Form.Label>
                                            <Form.Control as="select" Value={state.treatmentapplication}>
                                                <option></option>
                                                <option>Breeding</option>
                                                <option>Dewarming</option>
                                                <option>General</option>
                                                <option>Others</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md={6} controlId="bulknote">
                                            <Form.Label>Amount Applied</Form.Label>
                                            <Form.Control Value={state.name} onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} md={12} controlId="comments">
                                            <Form.Label>Comments</Form.Label>
                                            <Form.Control as="textarea" rows={3} Value={state.comments}/>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-2">
                                        <Col md={6}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1">
                                                        <span className="icon-key"></span> &nbsp;Keyword
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                    placeholder="01/12/2020"
                                                    aria-label="basic-addon1"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </Col>
                                        <Col md={6}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1">
                                                        <span className="icon-calendar"></span>
                                            </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control Value={state.name} onChange={handleInputChange}
                                                />
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Container className="text-right mr-5 my-4 p-3" style={{ borderTop: 'solid 1px #999999' }}>
                                            <DefaultButton aria-label='Close modal' className="mx-1 p-4"
                                                onClick={() => setShowAddTreatmentModal(prev => !prev)}>Cancel</DefaultButton>
                                            <PrimaryButton type="submit" className="p-4">Update Group</PrimaryButton>
                                        </Container>
                                    </Row>
                                </Container>
                            </Row>
                        </Form>

                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowAddTreatmentModal(prev => !prev)}
                        />
                    </ModalAddNoteWrapper>
                </animated.div>
            ) : null}
            {showEditGroupModal ? (
                <animated.div style={animationEditGroup}>
                    <ModalAddNoteWrapper className="bg-light pt-5 px-5" showEditGroupModal={showEditGroupModal}>

                        <p className="text-lg">Edit FourLegs</p>
                        <Form>
                            <Row>
                                <Container className="m-0 p-2">
                                    <Row>
                                        <Col className="p-2 text-center" md={12} style={{ backgroundColor: '#FFFACD' }}>
                                            <span className="icon-warning"></span>
                                            This update will apply to all 0 animals in the 'Four Legs' group.
                                        </Col>
                                    </Row>
                                    <Row className="my-1">
                                        <Form.Group as={Col} md={6} controlId="bulknote">
                                            <Form.Label>Treatment Type</Form.Label>
                                            <Form.Control as="select">
                                                <option></option>
                                                <option>Breeding</option>
                                                <option>Dewarming</option>
                                                <option>General</option>
                                                <option>Others</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md={6} controlId="bulknote">
                                            <Form.Label>Treatment Location</Form.Label>
                                            <Form.Control Value={state.name} onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="my-1">
                                        <Form.Group as={Col} md={6} controlId="productused">
                                            <Form.Label>Product Used</Form.Label>
                                            <Form.Control Value={state.productused} onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md={6} controlId="batch">
                                            <Form.Label>Batch #</Form.Label>
                                            <Form.Control Value={state.batch} onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="my-1">
                                        <Form.Group as={Col} md={6} controlId="treatmentapplication">
                                            <Form.Label>Treatment Application</Form.Label>
                                            <Form.Control as="select" Value={state.treatmentapplication}>
                                                <option></option>
                                                <option>Breeding</option>
                                                <option>Dewarming</option>
                                                <option>General</option>
                                                <option>Others</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md={6} controlId="bulknote">
                                            <Form.Label>Amount Applied</Form.Label>
                                            <Form.Control Value={state.name} onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} md={12} controlId="comments">
                                            <Form.Label>Comments</Form.Label>
                                            <Form.Control as="textarea" rows={3} Value={state.comments} />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-2">
                                        <Col md={6}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1">
                                                        <span className="icon-key"></span> &nbsp;Keyword
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                    placeholder="01/12/2020"
                                                    aria-label="basic-addon1"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </Col>
                                        <Col md={6}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1">
                                                        <span className="icon-calendar"></span>
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control Value={state.name} onChange={handleInputChange}
                                                />
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Container className="text-right mr-5 my-4 p-3" style={{ borderTop: 'solid 1px #999999' }}>
                                            <DefaultButton aria-label='Close modal' className="mx-1 p-4"
                                                onClick={() => setShowEditGroupModal(prev => !prev)}>Cancel</DefaultButton>
                                            <PrimaryButton type="submit" className="p-4">Update Group</PrimaryButton>
                                        </Container>
                                    </Row>
                                </Container>
                            </Row>
                        </Form>

                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowEditGroupModal(prev => !prev)}
                        />
                    </ModalAddNoteWrapper>
                </animated.div>
            ) : null}
            {showDeleteModal ? (
                <animated.div style={animationDelete}>
                    <ModalDelete className="bg-danger text-white pt-3 px-5" showDeleteModal={showDeleteModal}>

                        <Row>
                            <Container className="m-0 p-2">
                                <p className="text-lg">Are you sure you want to delete 'FourLegs'? This will not remove group animals.</p>
                                <p className="text-sm">Be certain, this cannot be undone.</p>
                                <Row>
                                    <Col className="text-right mr-2 mt-0 p-3" style={{ borderTop: 'solid 1px #999999' }}>

                                        <Col md={12}>
                                            <DefaultButton type="submit" className="p-2"
                                                onClick={() => setShowDeleteModal(prev => !prev)}>Cancel</DefaultButton>
                                            <PrimaryButton type="submit" className="p-2"
                                                onClick={() => setShowDeleteModal(prev => !prev)}>Yes, I'm positive certain.</PrimaryButton>
                                        </Col>

                                    </Col>
                                </Row>
                            </Container>
                        </Row>


                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowDeleteModal(prev => !prev)}
                        />
                    </ModalDelete>
                </animated.div>
            ) : null}

        </Container>
    );
};
