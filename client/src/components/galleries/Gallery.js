import useFetch from "../../hooks/useFetch";
import "./gallery.css";

const Gallery = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRWfp5mfEKZEViKWUxBgeOSRk-Ml7_y4JAAtc4b22i_nCs3rU0MqfEpvGfqW79M7ViRf0ggJjSOPXrC3VPyo2-a-Q"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Chocolate Hills Bohol</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQoayxLYO7VQpoaJdcBYxYfTsF0Qdxf3S5D-OsyyzksDYbpM7d9-PuZCIpqU3UksJ6rIagQW69b4GbrxkeIi5v87g"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Puerto Princesa Palawan</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTdp_H1bJL7MZrdZWM_s-PJVIf701IMM0xHdezcnvlNWD603sWVWCk4RWuMbdVT47nmm-ynpvTPzATi0jmpNWXgfg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kawasan Falls Cebu</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
