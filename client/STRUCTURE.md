Project Structure: 
    -- Reusable components are in src/components folder.
    -- pages are in src/pages folder
    -- each page or componenet has its own styles within it. 
    -- pages are rendered in the app.js object
    -- app.js is in a container
    -- pages are enclosed in a fragment and do not need a wrapping div, unless necessary for styling.
    -- each page is divided into sections.
    -- Each section in a page must be wrapped in a row->col, unless its an independent aboslute or fixed positioned element. 
    -- Styles are inherited into t top styles sheet in src/styles folder named styles.scss. This is done so variables and mixins can work.