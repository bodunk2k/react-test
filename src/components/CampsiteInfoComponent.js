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
            );
        }

        return <div />;
    }

    render() {
        const CampsiteInfo  =  this.newMethod() ;
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
                </div>
            )

        }
    }


    newMethod() {
        return this.props.campsite;
    }
}
export default CampsiteInfo;