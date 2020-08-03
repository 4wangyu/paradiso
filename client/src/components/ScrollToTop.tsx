import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import $ from "jquery";

function ScrollToTop() {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen((e) => {
      console.log(e);

      $("html").animate(
        {
          scrollTop: 0,
        },
        "slow"
      );
    });
    return () => {
      unlisten();
    };
  });

  return null;
}

export default ScrollToTop;
