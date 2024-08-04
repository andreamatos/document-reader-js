$(document).ready(() => { // Waits for the document to be fully loaded before executing the function
  const dropZone = $('.upload-area'); // Selects the element with the class 'upload-area' and stores it in the variable dropZone

  // Prevent default drag-and-drop behaviors in the whole document
  $(document).on('dragover drop', e => {
      e.preventDefault();  // Prevents the default browser behavior during drag-and-drop
      e.stopPropagation(); // Prevents the event from bubbling up to parent elements
  });

  // Prevent default drag-and-drop behaviors in the upload area
  dropZone.on('dragover', e => {
      e.preventDefault(); // Prevents the default behavior of the browser during drag-and-drop
      e.stopPropagation(); // Prevents the event from propagating upward
      $(e.currentTarget).addClass('active'); // Adds an 'active' class to the current target for styling to indicate it's ready to accept a file
  });

  dropZone.on('dragleave', e => {
      e.preventDefault();  // Prevents the default behavior of the browser during drag-and-drop
      e.stopPropagation(); // Prevents the event from propagating upward
      $(e.currentTarget).removeClass('active'); // Removes the 'active' class when the drag leaves the upload area
  });

  dropZone.on('drop', e => { // Listens for the drop event in the dropZone area
      e.preventDefault(); // Prevents the default behavior of the browser when dropping
      e.stopPropagation(); // Prevents the event from bubbling up to parent elements
      $(e.currentTarget).removeClass('active'); // Removes the 'active' class when a file is dropped

      const files = Array.from(e.originalEvent.dataTransfer.files); // Converts the files from the drop event to an array for easier manipulation
      const pdfFiles = files.filter(file => file.type === 'application/pdf'); // Filters the array to only include PDF files

      // If there are PDF files, process each one; otherwise, log a message
      pdfFiles.length ? pdfFiles.forEach(processPdf) : console.log('Please drop a PDF file.'); 
  });

  const processPdf = pdfFile => { // Function to process each PDF file
      const reader = new FileReader(); // Creates a new FileReader object to read the file

      reader.onload = e => { // Defines what to do when the file is loaded
          const typedArray = new Uint8Array(e.target.result); // Converts the result to a Uint8Array for pdf.js to process

          // Load the PDF document with pdf.js
          pdfjsLib.getDocument(typedArray).promise
              .then(pdfDoc => handlePdfDocument(pdfDoc)) // If successful, proceed to handle the PDF document
              .catch(error => console.error('Error processing PDF:', error)); // Logs an error if the PDF fails to load
      };

      reader.readAsArrayBuffer(pdfFile); // Reads the PDF file as an ArrayBuffer
  };

  const handlePdfDocument = pdfDoc => { // Function to handle the loaded PDF document
      const numPages = pdfDoc.numPages; // Gets the number of pages in the PDF
      console.log(`Number of pages: ${numPages}`); // Logs the number of pages in the console

      // Maps through each page in the PDF to extract the text content
      const promises = $.map(new Array(numPages), (_, i) => 
          pdfDoc.getPage(i + 1).then(page => 
              page.getTextContent().then(textContent => {
                  // Logs the text of each item in the text content
                  textContent.items.forEach(item => console.log(item.str));
              })
          )
      );

      // Waits for all promises to be resolved; logs an error if any promise fails
      $.when.apply($, promises).catch(error => console.error('Error processing page texts:', error));
  };
});
