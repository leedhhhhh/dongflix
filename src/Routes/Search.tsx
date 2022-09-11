import { useLocation, useSearchParams } from "react-router-dom";

function Search() {
  // const location = useLocation();
  // const keyword = new URLSearchParams(location.search).get("keyword");
  // console.log(keyword);

  const [searchParams, _] = useSearchParams();
  const keyword = searchParams.get("keyword");
  console.log(keyword);
  return null;
}

export default Search;
