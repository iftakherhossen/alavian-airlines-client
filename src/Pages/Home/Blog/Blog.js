import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Article from './Article';

const Blog = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-scrubland-00954.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setArticles(data));
    }, [])

    return (
        <div id="blog" className="blog">
            <div className="text-center">
                <h5 className="font-color-1">BLOG POSTS</h5>
                <h3>RECENT AVIATION NEWS</h3>
            </div>
            <div>
                <Row sm={1} md={2} lg={3} className="g-4 pt-3 pb-5">
                    {
                        articles.map(article => <Article
                            key={article._id}
                            article={article}
                        ></Article>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Blog;