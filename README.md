# My Website

Welcome to My Website! This project showcases an interactive platform where users can easily drag and drop PDF files for processing. Built with HTML, CSS, and JavaScript (using jQuery and pdf.js), this application allows users to extract text from PDF documents seamlessly.

![Screenshot](screenshot.png)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Running the Server with http-server](#running-the-server-with-http-server)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Drag and Drop Upload**: Users can effortlessly upload PDF files by dragging and dropping them into the designated area.
- **Text Extraction**: Utilizes pdf.js to extract and display text content from PDF files.
- **Responsive Design**: The website adapts to different screen sizes, providing an excellent user experience on both desktop and mobile devices.
- **User-Friendly Interface**: Clear navigation and instructions make it easy for users to engage with the application.

## Technologies Used

- **HTML5**: For structuring the web pages.
- **CSS3**: For styling the web pages and making them visually appealing.
- **JavaScript**: For adding interactivity to the website.
- **jQuery**: For simplified DOM manipulation and event handling.
- **pdf.js**: A JavaScript library for rendering PDF files in the browser.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/my-website.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd my-website
    ```

3. **Open `index.html`** in your favorite web browser or use the HTTP server to run it.

## Usage

1. Open the website in your web browser.
2. Drag and drop your PDF files into the designated upload area.
3. The text content from the PDF will be extracted and logged in the console.
4. Enjoy the features and explore the content!

## Running the Server with http-server

To run your website locally and avoid CORS issues, you can use the `http-server` package. Follow these steps:

1. **Install http-server globally**:

    You need to have Node.js installed on your system. If you haven’t installed Node.js, please do so before continuing.

    Run the following command in your terminal or command prompt:

    ```bash
    npm install -g http-server
    ```

2. **Navigate to your project directory**:

    If you aren't already in your project directory (where your `index.html` file is located), run:

    ```bash
    cd path/to/your/my-website
    ```

3. **Start http-server**:

    Run the following command to start the server:

    ```bash
    http-server
    ```

    By default, this starts a server on port 8080. You can access your website at `http://localhost:8080`.

4. **Disable CORS (if necessary)**:

    The `http-server` should handle CORS issues out of the box. However, if you need to explicitly disable CORS, you can use the following command:

    ```bash
    http-server --cors
    ```

    This will allow all cross-origin requests.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/YourFeature
    ```
3. Make your changes.
4. Commit your changes:
    ```bash
    git commit -m "Add some feature"
    ```
5. Push to the branch:
    ```bash
    git push origin feature/YourFeature
    ```
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Thank you for visiting My Website! I hope you find it useful. If you have any questions or feedback, please feel free to reach out.
