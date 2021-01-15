import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Container, Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap'
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react'
import {

CloseModalButton,
ModalWrapper,
ModalAddNoteWrapper,
ModalWrapperBulkUpdate

} from '../CSS/Styled'

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
    setShowModal,
    showGroupModal,
    setShowGroupModal,
    showProductsGroupModal,
    setShowProductsGroupModal
    
}) => {
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [ShowInventoryHistoryModal, setShowInventoryHistoryModal] = useState(false);
    const [showProductOrdersModal, setShowProductOrdersModal] = useState(false);
    const [showImagesModal, setShowImagesModal] = useState(false);

    
    
    const openInventoryHistoryModal = () => {
        setShowInventoryHistoryModal(prev => !prev);
    };


    const openDetailsModal = () => {
        setShowDetailsModal(prev => !prev);
    };

    const openProductOrdersModal = () => {
        setShowProductOrdersModal(prev => !prev);
    };

    const openImagesModal = () => {
        setShowImagesModal(prev => !prev);
    };

    
    
    const animationModal = useSpring({
        config: {
            duration: 500
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`

    });

    const animationGroupModal = useSpring({
        config: {
            duration: 500
        },
        opacity: showGroupModal ? 1 : 0,
        transform: showGroupModal ? `translateY(0%)` : `translateY(-100%)`

    });
   
    const animationProductsGroup = useSpring({
        config: {
            duration: 500
        },
        opacity: showProductsGroupModal ? 1 : 0,
        transform: showProductsGroupModal ? `translateY(0%)` : `translateY(-100%)`

    });

    const animationDetails = useSpring({
        config: {
            duration: 500
        },
        opacity: showDetailsModal ? 1 : 0,
        transform: showDetailsModal ? `translateY(0%)` : `translateY(-100%)`

    });
    
    const animationInventoryHistory = useSpring({
        config: {
            duration: 500
        },
        opacity: ShowInventoryHistoryModal ? 1 : 0,
        transform: ShowInventoryHistoryModal ? `translateY(0%)` : `translateY(-100%)`

    });

    const animationProductOrders = useSpring({
        config: {
            duration: 500
        },
        opacity: showProductOrdersModal ? 1 : 0,
        transform: showProductOrdersModal ? `translateY(0%)` : `translateY(-100%)`

    });

    const animationImages = useSpring({
        config: {
            duration: 500
        },
        opacity: showImagesModal ? 1 : 0,
        transform: showImagesModal ? `translateY(0%)` : `translateY(-100%)`

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
                <animated.div style={animationModal}>
                    <ModalAddNoteWrapper className="bg-light pt-5 px-5" showModal={showModal}>

                        <p className="text-lg">Bulk Add Note</p>
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
                                        <Form.Group as={Col} md={12} controlId="bulknote">
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
                                                onClick={() => setShowModal(prev => !prev)}>Cancel</DefaultButton>
                                            <PrimaryButton type="submit" className="p-4">Update Group</PrimaryButton>
                                        </Container>
                                    </Row>
                                </Container>
                            </Row>
                        </Form>

                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowModal(prev => !prev)}
                        />
                    </ModalAddNoteWrapper>
                </animated.div>
            ) : null}

            {showGroupModal ? (
                <animated.div style={animationGroupModal}>
                    <ModalAddNoteWrapper className="bg-light pt-5 px-5" showGroupModal={showGroupModal}>

                        <p className="text-lg">Bulk Add Note</p>
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
                                        <Form.Group as={Col} md={12} controlId="bulknote">
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
                                                onClick={() => setShowGroupModal(prev => !prev)}>Cancel</DefaultButton>
                                            <PrimaryButton type="submit" className="p-4">Update Group</PrimaryButton>
                                        </Container>
                                    </Row>
                                </Container>
                            </Row>
                        </Form>

                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowGroupModal(prev => !prev)}
                        />
                    </ModalAddNoteWrapper>
                </animated.div>
            ) : null}

            {showProductsGroupModal ? (
                <animated.div style={animationProductsGroup}>
                    <ModalWrapper className="bg-light pt-5 px-5" showProductsGroupModal={showProductsGroupModal}>


                            <Container className="m-0 p-2" style={{ position: 'relative' }}>
                                    <Row>
                                        <p className="text-lg">Fowl</p>
                                    </Row>
                                    <Row>
                                        <Col md={9} className="my-1">
                                            
                                            <DefaultButton onClick={ openDetailsModal } style={{borderColor: '#cccccc', color: '#666666'}}>
                                                Details</DefaultButton>
                                            <DefaultButton onClick={ openImagesModal } className="ml-1" style={{ borderColor: '#cccccc', color: '#666666' }}>
                                                Images</DefaultButton>
                                            <DefaultButton onClick={openProductOrdersModal } className="mx-1" style={{ borderColor: '#cccccc', color: '#666666' }}>
                                                Product Orders</DefaultButton>
                                            <DefaultButton onClick={openInventoryHistoryModal } style={{ borderColor: '#cccccc', color: '#666666' }}>
                                                Inventory History</DefaultButton>
                                        </Col>
                                        <Col md={3} className="my-1">

                                           
                                        </Col>
                                    </Row>   
                                    <Row>
                                        <Col md={12} className="my-2 p-1 text-center border">
                                            <p style={{fontSize: '8em', color: '#cccccc'}}><span className="icon-chain"></span></p>
                                            <p className="text-lg">No Livestock groups yet?</p>
                                            <p className="text-sm">Add a livestock group and they'll show up here</p>
                                        </Col>
                                    </Row>
                                </Container>

                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowProductsGroupModal(prev => !prev)}
                        />
                    </ModalWrapper>
                </animated.div>
            ) : null}
            {showDetailsModal ? (
                <animated.div style={animationDetails}>
                    <ModalAddNoteWrapper className="bg-light pt-5 px-5" showDetailsModal={showDetailsModal}>

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
                                                onClick={() => setShowDetailsModal(prev => !prev)}>Cancel</DefaultButton>
                                            <PrimaryButton type="submit" className="p-4">Update Group</PrimaryButton>
                                        </Container>
                                    </Row>
                                </Container>
                            </Row>
                        </Form>

                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowDetailsModal(prev => !prev)}
                        />
                    </ModalAddNoteWrapper>
                </animated.div>
            ) : null}
            {ShowInventoryHistoryModal ? (
                <animated.div style={animationInventoryHistory}>
                    <ModalAddNoteWrapper className="bg-light pt-5 px-5" ShowInventoryHistoryModal={ShowInventoryHistoryModal}>

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
                                                onClick={() => setShowInventoryHistoryModal(prev => !prev)}>Cancel</DefaultButton>
                                            <PrimaryButton type="submit" className="p-4">Update Group</PrimaryButton>
                                        </Container>
                                    </Row>
                                </Container>
                            </Row>
                        </Form>

                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowInventoryHistoryModal(prev => !prev)}
                        />
                    </ModalAddNoteWrapper>
                </animated.div>
            ) : null}
            {showProductOrdersModal ? (
                <animated.div style={animationProductOrders}>
                    <ModalWrapperBulkUpdate className="bg-light py-2 px-4" showProductOrdersModal={showProductOrdersModal}>
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
                                        onClick={() => setShowProductOrdersModal(prev => !prev)}>Cancel</DefaultButton>
                                    <PrimaryButton type="submit" className="p-4">Update Group</PrimaryButton>
                                </Container>
                            </Row>
                        </Form>
                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowProductOrdersModal(prev => !prev)}
                        />
                    </ModalWrapperBulkUpdate>
                </animated.div>
            ) : null}
            {showImagesModal ? (
                <animated.div style={animationImages}>
                    <ModalAddNoteWrapper className="bg-light pt-5 px-5" showImagesModal={showImagesModal}>

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
                                                onClick={() => setShowImagesModal(prev => !prev)}>Cancel</DefaultButton>
                                            <PrimaryButton type="submit" className="p-4">Update Group</PrimaryButton>
                                        </Container>
                                    </Row>
                                </Container>
                            </Row>
                        </Form>

                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowImagesModal(prev => !prev)}
                        />
                    </ModalAddNoteWrapper>
                </animated.div>
            ) : null}

        </Container>
    );
};
