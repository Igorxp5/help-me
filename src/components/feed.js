import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.date = props.date;
        this.description = props.description;
        this.profile = props.profile;
        this.classes = makeStyles(theme => ({
            card: {
                maxWidth: 345,
            },
            media: {
                height: 0,
                paddingTop: '56.25%', // 16:9
            },
            expand: {
                transform: 'rotate(0deg)',
                marginLeft: 'auto',
                transition: theme.transitions.create('transform', {
                    duration: theme.transitions.duration.shortest,
                }),
            },
            expandOpen: {
                transform: 'rotate(180deg)',
            },
            avatar: {
                backgroundColor: red[500],
            },
        }));
    }

    render() {
        return (
            <Card className={this.classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={this.classes.avatar}>
                            R
                        </Avatar>
                    }
                    title={this.name}
                    subheader={this.date}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.description}
                    </Typography>
                </CardContent>
            </Card>
        )
    }

}

export default Feed;