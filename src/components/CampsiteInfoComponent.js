import { Row } from "reactstrap";
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';



function RenderCampsite({campsite}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
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
                <div className="Row">
                     <RenderCampsite campsite={props.campsite} />
                     <RenderComments comments={props.campsite.comments} />
                </div>
                
            )

        }


    }


export default CampsiteInfo;