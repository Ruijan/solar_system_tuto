import {List, ListItem, ListItemText, Typography} from "@mui/material";
import React from "react";

export function VSCodeInstallation() {
    return <>
        <Typography variant="h5" component="h2" gutterBottom>
            Installing Visual Studio Code and Setting Up Python
        </Typography>
        <Typography variant="body1" paragraph>
            Follow these steps to install Visual Studio Code (VSCode) and set up your Python environment.
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
            Step 1: Install Visual Studio Code
        </Typography>
        <List>
            <ListItem>
                <ListItemText primary="1. Go to the Visual Studio Code website: https://code.visualstudio.com/"/>
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="2. Click on the 'Download' button for your operating system (Windows, macOS, or Linux)."/>
            </ListItem>
            <ListItem>
                <ListItemText primary="3. Run the downloaded installer and follow the installation instructions."/>
            </ListItem>
        </List>

        <Typography variant="h6" component="h3" gutterBottom>
            Step 2: Install Python
        </Typography>
        <List>
            <ListItem>
                <ListItemText primary="1. Go to the Python website: https://www.python.org/"/>
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="2. Click on the 'Downloads' button and select the version for your operating system."/>
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="3. Run the downloaded installer and follow the installation instructions. Make sure to check the option to add Python to your PATH during installation."/>
            </ListItem>
        </List>

        <Typography variant="h6" component="h3" gutterBottom>
            Step 3: Set Up VSCode for Python Development
        </Typography>
        <List>
            <ListItem>
                <ListItemText primary="1. Open Visual Studio Code."/>
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`."/>
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="3. In the Extensions view, search for 'Python' and install the official Python extension by Microsoft."/>
            </ListItem>
            <ListItem>
                <ListItemText primary="4. After the installation, you may need to reload VSCode."/>
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="5. Open the Command Palette by pressing `Ctrl+Shift+P` and type 'Python: Select Interpreter'. Choose the Python interpreter that you installed in Step 2."/>
            </ListItem>
            <ListItem>
                <ListItemText primary="6. Create a new Python file and start coding!"/>
            </ListItem>
        </List>

        <Typography variant="body1" paragraph>
            With these steps, you should have a fully functional Python development environment set up in Visual Studio
            Code.
        </Typography>
    </>;
}
