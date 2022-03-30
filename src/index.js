import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/91u-EtzIG7L._AC_UL604_SR604,400_.jpg"
    alt=""
  />
);

const Title = () => <h1>The Storyteller: Tales of Life and Music</h1>;
const Author = () => <h4>Dave Grohl</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
