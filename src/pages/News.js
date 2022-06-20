import React from "react";
import CardDetail from "components/ui/CardDetail/CardDetail";
import { useParams } from "react-router-dom";
import { blogData } from "./../data/Blogs";
function News() {
  let { id } = useParams();
  console.log(id);

  //   console.log(portfolioData);
  var selectedItem = blogData.filter((item) => item.id === Number(id));

  return (
    <div>
      {selectedItem.map((item) => (
        <CardDetail item={item} key={item.id} />
      ))}
    </div>
  );
}

export default News;
