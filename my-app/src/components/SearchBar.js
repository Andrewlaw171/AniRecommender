import React from 'react';
import ReactDOM from 'react-dom';

import './SearchBar.css';

class SearchBar extends React.Component{
    render() {
        return (
            <div id="mainDiv">
                <div id="navbarContainer">
                    <ul id="navbar">
                        <li><a href="default.asp">Home</a></li>
                        <li><a href="news.asp">News</a></li>
                        <li><a href="contact.asp">Contact</a></li>
                        <li><a href="about.asp">About</a></li>
                    </ul>
                </div>
                
                <div id="searchBarDiv">
                    <form id = "searchBarForm" action="/" method="get">
                        <label>
                            <input placeholder="Username" id="searchBar" type="text" name="username" />
                        </label>
                        <input id="submitButton" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

const { search } = window.location;
const query = new URLSearchParams(search).get('username');

console.log("query: " + query)

export default SearchBar;