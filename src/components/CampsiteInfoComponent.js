import { Row } from "reactstrap";
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: this.props.campsite
        };
    }

    renderCampsite(campsite) {
        if (campsite) {
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
        }

        return <div />
    }

    renderComments(comment2){
        if (comment2) {
            return (
                <div className="col-md-5 m-1" >
                    <h4>Comments</h4>
                    {comment2.map(comment => 
                    <div key={comment.id}>{comment.text}<br></br> --{comment.author} ,
                     {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} 
                     <br></br><br></br>
                     </div>   )}
                    
                </div>
            )
        }

        return <div />
    }

    render() {
        const CampsiteInfo  =  this.props.campsite ;
        
                                
        
        if (CampsiteInfo === null || CampsiteInfo === undefined){

            return(
                <div>
                   
                </div>
            )
        }
        else {
            return(
                <div className="Row">
                     { this.renderCampsite(CampsiteInfo)};
                     { this.renderComments(CampsiteInfo.comments)};
                </div>
                
            )

        }


    }




}
export default CampsiteInfo;