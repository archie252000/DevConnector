import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layouts/spinner';

const Post = ({getPosts, post: {posts, loading }}) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return (
        <div>
            
        </div>
    )
}

Post.propTypes = {

}

const mapStatesToProps = state => ({
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
})

export default connect(mapStatesToProps, {getPosts })(Post);
