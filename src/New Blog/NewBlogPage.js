import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Grid, TextField } from "@mui/material";
import Dropdown from 'react-dropdown';

import {
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    Menu,
    Modal,
    Box,
    Typography,
    Button,
} from "@material-ui/core";
import ReactPlayer from "react-player";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import defaultImg from "../Assets/Images/Blog-Default-Img.png";

import { Helmet } from "react-helmet";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import EditSharpIcon from "@material-ui/icons/EditSharp";
import AddPost from "./AddPost";



export default function NewBlogPage() {
    const [activeTab, setActiveTab] = useState('allPosts');
    const [selectedOption, setSelectedOption] = useState(null);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = options[0];

    const handleSelect = (option) => {
        setSelectedOption(option);
        console.log('Selected option:', option);
    };

    return (
        <div className="HomeContainer">
            <h1 style={{ color: '#ad8131' }}>Blog</h1>
            <div
                style={{
                    backgroundColor: 'white',
                    width: '80%',
                    height: '80%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}
                className="ContentContainer"
            >
                <h4 onClick={() => handleTabChange('allPosts')}>All Posts</h4>
                <h4 onClick={() => handleTabChange('healthyTips')}>Healthy Tips</h4>
                <h4 onClick={() => handleTabChange('recipes')}>Recipes</h4>
                <h4 onClick={() => handleTabChange('livingWell')}>Living Well</h4>
                <h3
                    style={{ color: '#ad8131', cursor: 'pointer' }}
                    onClick={() => handleTabChange('addPost')}
                >
                    <AddIcon />
                </h3>
            </div>

            {activeTab === 'addPost' && (
                <div className="AddPostPage">
                    <h1 style={{ color: '#ad8131', textAlign: 'center' }}>Create a Blog</h1>
                    <div className="PostContainer" style={{ backgroundColor: 'white', width: '1000px', height: '100%' }}>
                        <Grid style={{ padding: 30, display: 'flex', justifyContent: 'space-evenly' }}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Today's Date"
                                    type="date"
                                    name="date"
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Author's Name"
                                    type="text"
                                    name="name"
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Dropdown 
                                style={{}}
                                    options={options}
                                    onChange={handleSelect} 
                                    value={selectedOption} 
                                    placeholder="Select an option"
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            )}
        </div>
    );
}

