import React from 'react';
import {useLocation} from 'react-router-dom';

function Contact() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get('name');
  return <div>
   <h1>Hello {name}, Contact us here..</h1>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, omnis, laboriosam ab libero ex culpa animi quam harum minima odio rerum. Laborum, officiis dicta? Saepe assumenda aspernatur explicabo repellendus impedit.</p>
  </div>;
}

export default Contact;
