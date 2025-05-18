const html = document.querySelector('#filter-content [data-filter="html"]');
const css = document.querySelector('#filter-content [data-filter="css"]');
const javascript  = document.querySelector('#filter-content [data-filter="js"]');
const htmlContent = document.getElementById('html');
const cssContent = document.getElementById('css');
const jsContent = document.getElementById('javascript');
const allButtons = document.querySelectorAll('.filter');
const tabButtons = [html, css, javascript];
const tabContents = [htmlContent, cssContent, jsContent];

/**
 * Sets the 'active' class on the clicked button and removes it from all other tab buttons.
 *
 * @param {HTMLElement} clickedBtn - The button element that was clicked.
 */
const setActive = (clickedBtn) => {
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
        clickedBtn.classList.add('active');
    })
}
/**
 * Displays the specified content element by removing the 'hidden' class,
 * and hides all other tab content elements by adding the 'hidden' class.
 *
 * @param {HTMLElement} currentContent - The content element to display.
 */
const displayContent = (currentContent) => {
    tabContents.forEach(content => {
        if(content === currentContent) {
            content.classList.remove('hidden');
        }
        else {
            content.classList.add('hidden');
        }
    })
}

/**
 * Handles filter toggle events and displays content based on the selected filter.
 *
 * @param {Event} e - The event object from the filter button click.
 * @returns {void}
 */
const toggleFilters = (e) => {
    const filter = e.currentTarget.getAttribute('data-filter');
    if(filter === "html") {
            displayHtmlContent();
        }
        else if(filter === "css") {
            displayCssContent();
        }
        else {
            displayJsContent();
        }
}



/**
 * Displays the CSS content in the UI and sets the CSS tab as active.
 *
 * Calls `displayContent` with the CSS content and updates the active tab to CSS.
 *
 * @function
 * @returns {void}
 */
const displayCssContent = () => {
    displayContent(cssContent);
    setActive(css);
}

/**
 * Displays the JavaScript content in the UI and sets the JavaScript tab as active.
 * Calls `displayContent` with the JavaScript content and updates the active tab using `setActive`.
 *
 * @function
 * @returns {void}
 */
const displayJsContent = () => {
    displayContent(jsContent);
    setActive(javascript);
    
}


/**
 * Displays the HTML content and sets the active state for the HTML tab.
 * Calls `displayContent` with the current HTML content and updates the active tab using `setActive`.
 */
const displayHtmlContent = () => {
    displayContent(htmlContent);     
    setActive(html);
    
}


for(let button of allButtons) {
   button.addEventListener('click', toggleFilters);
}

