import React, { Component ,PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import avatar from 'source/images/avatar.png'
import overlay from 'source/images/IMG_20170211_154420_Fotor.jpg';

export  default class CardItem extends Component  {
    static PropTypes = {
        title: PropTypes.string
    }

    constructor(props){
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({
            expanded: expanded
        });
    }

    handleToggle = (event, toggle) => {
        this.setState({
            expanded: toggle
        })
    }

    handleExpand = () => {
        this.setState({expanded: true});
    }

    handleReduce = () => {
        this.setState({expanded: false});
    }


    render() {

        const { title, subtitle, overlayTitle, cardTitle, cardSubtitle , diary, isShowAction} = this.props;

        const showAction =isShowAction ? (
            <CardActions>
                <FlatButton label="关闭" onTouchTap={this.handleExpand} />
                <FlatButton label="展开" onTouchTap={this.handleReduce} />
            </CardActions>
        ) : '';

        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title={title}
                    subtitle={subtitle}
                    avatar={avatar}
                    actAsExpander={false}
                    showExpandableButton={false}
                />
                <CardText>
                    <Toggle
                        toggled={this.state.expanded}
                        onToggle={this.handleToggle}
                        labelPosition="right"
                        label="打开详细内容..."
                    />
                </CardText>
                <CardMedia
                    expandable={true}
                    overlay={<CardTitle subtitle={overlayTitle} />}
                >
                    <img src={overlay} />
                </CardMedia>
                <CardTitle title={ cardTitle } subtitle={ cardSubtitle } expandable={true} />
                <CardText expandable={true}>
                    { diary }
                </CardText>

            </Card>
        )
    }
}