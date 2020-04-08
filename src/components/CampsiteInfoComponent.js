import React, {Component, Fragment} from 'react';
import { Row, ModalFooter,Col, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,Modal,ModalBody,ModalHeader,Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm,Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';

const maxLength = len => val => !(val) || (val.length <= len);
const minLength = len => val => val && (val.length >= len);


class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            isModalOpen: false

        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    toggleModal(values){
        this.setState ({isModalOpen:!this.state.isModalOpen})
    }
    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.campsiteId, values.rating, values.yourName, values.comment);

    }
    render() {
        
        return (
            <Fragment>  
        <button onClick={this.toggleModal} className="fa fa-pencil" outline color="secondary" >Submit Comment</button>
        <Modal isOpen={this.state.isModalOpen}>
            <ModalHeader>Submit Comment</ModalHeader>
            <ModalBody>
            <div className="col-md-10">
                <LocalForm onSubmit={this.handleSubmit}>
                <Row className="form-group">
                    <Label htmlFor="rating" >Rating</Label>
                    <Col md={10}>
                     <Control.select model=".rating" id="rating" name="rating"
                            placeholder="Rating" className="form-control">
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                     </Control.select>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="yourName" >Your Name</Label>
                    <Col md={10}>
                        <Control.text model=".yourName" id="yourName" name="yourName"
                            placeholder="Your Name"
                            className="form-control"
                            validators={{
                                minLength: minLength(2),
                                maxLength: maxLength(15)
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".yourName"
                            show="touched"
                            component="div"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be at least 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                        />     
                        </Col>                  
                </Row>
                <Row className="form-group">
                    <Label htmlFor="comment" >Comment</Label>
                    <Col md={10}>
                        <Control.textarea model=".comment" id="comment" name="comment"
                            rows="6"
                            className="form-control">
                        </Control.textarea>
                    </Col>
                </Row>
                <button   color="primary" >Submit</button>
                </LocalForm>
            </div>    
            </ModalBody>
                
        </Modal>
        </Fragment>

        );
    }
}

function RenderCampsite({campsite}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>

                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>       
        </div>
    )
    return <div />
}

    function RenderComments({comments,addComment, campsiteId}){
            return (
                <div className="col-md-5 m-1" >
                    <h4>Comments</h4>
                    {comments.map(comment => 
                    <div key={comment.id}>{comment.text}<br></br> --{comment.author} ,
                     {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} 
                     <br></br><br></br>
                     </div>   )}
                    <CommentForm campsiteId={campsiteId} addComment={addComment}/>
                </div>
            )
        return <div />
    }

    function CampsiteInfo(props) {
        const CampsiteInfo  =  props.campsite ;
        
        if (props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }                       
        if (props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        if (CampsiteInfo === null || CampsiteInfo === undefined){

            return(
                <div>
                   
                </div>
            )
        }
        else {

            return(
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>{props.campsite.name}</h2>
                            <hr />
                </div>
            </div>
                    <div className="Row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments 
                            comments={props.comments} 
                            addComment={props.addComment}
                            campsiteId={props.campsite.id}
                        />
                    </div>
                </div>
            )

        }


    }


export default CampsiteInfo;