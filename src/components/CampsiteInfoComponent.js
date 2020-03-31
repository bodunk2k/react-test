import { Row } from "reactstrap";
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';



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

    function RenderComments({comments}){
            return (
                <div className="col-md-5 m-1" >
                    <h4>Comments</h4>
                    {comments.map(comment => 
                    <div key={comment.id}>{comment.text}<br></br> --{comment.author} ,
                     {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} 
                     <br></br><br></br>
                     </div>   )}
                    
                </div>
            )
        return <div />
    }

    function CampsiteInfo(props) {
        const CampsiteInfo  =  props.campsite ;
        
                                
        
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
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            )

        }


    }


export default CampsiteInfo;