import React, { Component } from "react";
import Menu from "../menu/menu";
import "./directory.scss";

export default class Directory extends Component {
  state = {
    sections: [
      {
        title: "hats",
        imageUrl:
          "https://cdn.images.fecom-media.com/HE1497324_155037-P.jpg?width=348",
        id: 1
      },
      {
        title: "jackets",
        imageUrl: "https://c.stocksy.com/a/ZOf000/z9/159127.jpg?1573383588",
        id: 2
      },
      {
        title: "shoes",
        imageUrl:
          "https://images.asos-media.com/products/nike-air-max-dia-black-and-white-trainers/13307633-1-blackwhite?$n_480w$&wid=476&fit=constrain",
        id: 3
      },
      {
        title: "womens",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSd2LH5UZf9Qi92P7JEaQi7hMzAXVsGG_wyrBIBRH_ptM09654V",
        size: "large",
        id: 4
      },
      {
        title: "mens",
        imageUrl:
          "https://i.insider.com/54fdc12decad042920ceb0c8?width=800&format=jpeg",
        size: "large",

        id: 5
      }
    ]
  };
  render() {
    return (
      <div className="directory">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <Menu key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
