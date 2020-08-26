import React, { useContext } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import NavigationContext from "../../hooks/NavigationContext";
import { findByLabelText } from "@testing-library/react";

const Nav = () => {
    const { navigation, setCurrentPage } = useContext(NavigationContext);

    const handleChange = (event) => {
        setCurrentPage(event.target.value);
        event.preventDefault();
    }

    return (
        <div className="nav-wrapper">
            <ToggleButtonGroup
                name="nav"
                aria-label="Navigation"
                defaultValue="projects"
                style={styles.buttonGroup}
            >
                <ToggleButton
                    name="nav"
                    variant="secondary"
                    style={navigation.page === "projects" ? styles.buttonSelected : styles.button}
                    value="projects"
                    onChange={handleChange}
                >Projects
                </ToggleButton>
                <ToggleButton
                    name="nav"
                    variant="secondary"
                    style={navigation.page === "about" ? styles.buttonSelected : styles.button}
                    value="about"
                    onChange={handleChange}
                >About
                </ToggleButton>
                <ToggleButton
                    name="nav"
                    variant="secondary"
                    style={navigation.page === "contact" ? styles.buttonSelected : styles.button}
                    value="contact"
                    onChange={handleChange}
                >Contact
                </ToggleButton>
            </ToggleButtonGroup>
            <p>{navigation.page}</p>
        </div>
    );
}

const styles = {
    buttonGroup: {
        width: "100%"
    },
    button: {
        backgroundColor: "#777",
        borderWidth: 0,
    },
    buttonSelected: {
        backgroundColor: "#CCC",
        color: "black",
        borderWidth: 0,
    }
}

export default Nav;
