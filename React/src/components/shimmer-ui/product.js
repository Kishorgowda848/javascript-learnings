import "../shimmer-ui/style.css";
const flexContainer = {
  display: "flex",
};

const ShimmerUi = () => {
  return (
    <div style={flexContainer}>
      {Array(20)
        .fill(0)
        .map((element, index) => {
          return (
            <div style={{ padding: "1%" }} key={index}>
              <div className="container">
                <article>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="shimmer"></div>
                </article>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ShimmerUi;
