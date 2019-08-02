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

const useStyles = {
    card: {
        marginBottom: 20
    },
    avatar: {
        backgroundColor: red[500],
    }
};

class Feed extends React.Component {
    construct(props) {
        this.props = props;
    }

    render() {
        return (
            <Card style={useStyles.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" style={useStyles.avatar} src={this.props.avatar}>
                            {this.props.name.toUpperCase()[0]}
                        </Avatar>
                    }
                    title={this.props.name}
                    subheader={this.props.date}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.description}<br />
                        <i style={useStyles.contentLocation}>em {this.props.location}</i>
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default Feed;