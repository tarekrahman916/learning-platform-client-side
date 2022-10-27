import React from "react";

const Blog = () => {
  return (
    <div className="container my-5">
      <div className="border p-3 mb-3 shadow">
        <h2>(1) What is cors?</h2>
        <p className="ms-4">
          Cross-origin resource sharing (CORS) is a browser mechanism which
          enables controlled access to resources located outside of a given
          domain. It extends and adds flexibility to the same-origin policy
          (SOP). However, it also provides potential for cross-domain attacks,
          if a website's CORS policy is poorly configured and implemented
        </p>
      </div>
      <div className="border p-3 mb-3 shadow">
        <h2>
          (2) Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p className="ms-4">
          The Firebase Realtime Database lets you build rich, collaborative
          applications by allowing secure access to the database directly from
          client-side code. Data is persisted locally, and even while offline,
          realtime events continue to fire, giving the end user a responsive
          experience.
        </p>
        <h5>Optional options do have implement authentication-</h5>
        <ul>
          <li>Auth0</li>
          <li>MongoDB</li>
          <li>Passport</li>
          <li>Okta</li>
        </ul>
      </div>
      <div className="border p-3 mb-3 shadow">
        <h2>(3) How does the private route work?</h2>
        <p className="ms-4">
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in).
        </p>
      </div>
      <div className="border p-3 mb-3 shadow">
        <h2>(4) What is Node? How does Node work?</h2>
        <p className="ms-4">
          The Node.js run-time environment includes everything you need to
          execute a program written in JavaScript.
        </p>
        <p className="ms-4">
          Node.js accepts the request from the clients and sends the response,
          while working with the request node.js handles them with a single
          thread. To operate I/O operations or requests node.js use the concept
          of threads. Thread is a sequence of instructions that the server needs
          to perform. It runs parallel on the server to provide the information
          to multiple clients. Node.js is an event loop single-threaded
          language. It can handle concurrent requests with a single thread
          without blocking it for one request.
        </p>
      </div>
    </div>
  );
};

export default Blog;
