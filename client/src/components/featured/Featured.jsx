import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=palawan,cebu,boracay"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/e7/b0/ea/photo0jpg.jpg?w=700&h=500&s=1"
              alt="palawan"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Palawan</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/originals/2d/fa/42/2dfa42f821ceed9766955695bfa7dd6f.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Boracay</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/736x/02/ae/fb/02aefb1c300bb403724a8e0c053b6d6e--cebu-city-the-philippines.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Cebu</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
