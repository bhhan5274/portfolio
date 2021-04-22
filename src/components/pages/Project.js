import React, {Fragment, useEffect} from 'react';
import axios from 'axios';
import {GET_PROJECT} from "../../actions/types";
import {connect} from 'react-redux';
import ProjectGallery from "../project/ProjectGallery";
import ProjectContents from "../project/ProjectContents";

const Project = ({mode, dispatch, project, setImage, match: {params: {id}}}) => {
    const getProject = async (id) => {
        try{
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/career/v1/projects/${id}/view`);
            dispatch({
                type: GET_PROJECT,
                payload: res.data
            });
        }catch(err){
            dispatch({
                type: GET_PROJECT,
                payload: null
            });
        }
    };

    useEffect(() => {
        getProject(id);

        return () => {
            dispatch({
                type: GET_PROJECT,
                payload: null
            });
        };
    }, [id]);

    return (
        <Fragment>
            <ProjectGallery project={project} setImage={setImage}/>
            <ProjectContents mode={mode} project={project} />
        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    mode: state.mode,
    project: state.project
});

export default connect(mapStateToProps)(Project);