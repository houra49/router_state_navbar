import { Link } from 'react-router-dom'
import React, { Component } from 'react';
const styles = {
    header: {
        height: 48,
        width: "100%",
        backgroundColor: "#faeee7",
        color: "white",
        padding: "6px 10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "Lobster"
    },
    logoBereich: {
        float: "left"
    },
    logo: {
        width: "50px",
        height: "50px",
        borderRadius: "10px"
    },
    navText: {
        color: "#ffbbcc",
        fontSize: "30px",
        margin: "0 10px"
    },
    dunkelButton: {
        fontFamily: "Lobster",
        fontSize: "15px",
        background: "#5eb7b7",
        border: "2px solid #ffbbcc",
        display: "block",
        height: "50px",
        margin: "10px",
        padding: "2px 25px",
        textDecoration: "none",
        borderRadius: "30px",
        lineHight: "45px",
        color: "#fffdf9",
        cursor: "pointer",
    },
    hellButton: {
        fontFamily: "Lobster",
        fontSize: "15px",
        background: "#9be3de",
        border: "2px solid #ffbbcc",
        display: "block",
        margin: "10px",
        padding: "15px 25px",
        textDecoration: "none",
        borderRadius: "30px",
        lineHight: "45px",
        color: "#fffdf9",
        cursor: "pointer",
    },
    rechtButtons: {
        float: "right",
        paddingRight: 20,
        width: "550px",
        display: "flex",
        listStyle: "none"
    },
    leerenPlatz: {
        float: "left", flex: 1
    }
};
class Nav extends Component {
    state = {
        isClicked: false
    }
    changeBackground = () => {
        this.setState({ isClicked: !this.state.isClicked });
    }
    render() {
        return (
            <header style={styles.header}>

                <h1 style={styles.navText}>Kim's Cafe' Köln</h1>
                <ul style={styles.rechtButtons} >
                    <li><Link onClick={this.changeBackground} className={this.state.isClicked === false ? "hellButton" : "dunkelButton"} to="/SpeiseKarte">
                        SpeiseKarte
                    </Link></li>
                    <li><Link to="/Contact" style={styles.hellButton}>Contact</Link></li>
                    <li><Link to="/Öffnungszeiten" style={styles.hellButton}>Öffnungszeiten</Link></li>
                    <li><Link to="/Gallery" style={styles.hellButton}>Gallery</Link></li>
                </ul>
            </header >
        );
    }
}
//style={styles.hellButton}
export default Nav;