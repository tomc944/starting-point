import React from 'react';
import { render } from 'react-dom'

const App = (
  <div>
    Got here!
  </div>
)


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('entry');
  if (root) { render(App, root) }
});
