import React, {Fragment} from 'react';
import Banner from "./Banner";

const Home = ({mode}) => {
    return (
        <Fragment>
            <Banner mode={mode} />
        </Fragment>
    );
};

export default Home;
