import CardDetail from "components/ui/CardDetail/CardDetail";
import { useParams } from "react-router-dom";
import { portfolioData } from "./../data/Portfolios";

function ProjectDetail() {
  let { id } = useParams();

  var selectedItem = portfolioData.filter((item) => item.id === Number(id));

  return (
    <div>
      {selectedItem.map((item) => (
        <CardDetail item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ProjectDetail;
