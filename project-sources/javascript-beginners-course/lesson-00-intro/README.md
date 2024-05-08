# JavaScript Development Environment Setup

This guide will help you set up your development environment including instructions for code editors (WebStorm and Visual Studio Code), Node.js using NVM and running your first JavaScript program.

## Code Editors

You can use any code editor or Integrated Development Environment (IDE) that supports JavaScript. Below are the setup instructions for WebStorm and Visual Studio Code, two popular choices among developers.

### WebStorm IDE

1. Download the trial version of WebStorm IDE from [JetBrains](https://www.jetbrains.com/webstorm).
2. Install the downloaded trial version on your computer.

### Visual Studio Code (VSCode)

1. Download Visual Studio Code from [Visual Studio Code](https://code.visualstudio.com/).
2. Follow the installation instructions provided on the website to install VSCode on your computer.

**Note:** While WebStorm and Visual Studio Code are popular choices, you're welcome to use any other code editor or IDE that supports JavaScript development according to your preference.

## Node.js and NVM

### Install Node Version Manager (NVM)

1. Download `nvm-setup.exe` from the [NVM Windows releases page](https://github.com/coreybutler/nvm-windows/releases).
2. Run the installation file and complete the installation process.
3. After installation, verify the installation by running the following command in CMD:

    ```cmd
    nvm -v
    ```

   If the version is displayed correctly, your installation was successful.

### Install Node.js Using NVM

- To install the latest version of Node.js, run:

    ```cmd
    nvm install latest
    ```

- To install a specific version of Node.js, use:

    ```cmd
    nvm install vX.Y.Z
    ```

- To check installed versions of Node.js, run:

    ```cmd
    nvm list
    ```

- To select another version of Node.js, use:

    ```cmd
    nvm use vA.B.C
    ```

## Run Your First JavaScript Command

1. Create a folder for development (e.g., `dev`).
2. Inside the `dev` folder, create a project folder (e.g., `hello-world`).
3. Within the `hello-world` folder, create a file named `index.js`.
4. Open the folder in your chosen code editor or IDE.
5. Add the following line of code to `index.js`:

    ```javascript
    console.log("Hello, World!");
    ```

6. Run your program with the following command in your terminal or command prompt:

    ```cmd
    node index.js
    ```

Experiment as you wish with different `console.log` messages to see the output in the console.


Sergey Moshkanov [@mowkdev](https://github.com/mowkdev)

- [LinkedIn](https://www.linkedin.com/in/vladimir-metnew/)
- [YouTube](https://www.youtube.com/@mowkdev)