import React from "react";
import { connect } from "react-redux";
import { fetchdata } from "../Actions";
class Videos extends React.Component {
  componentDidMount() {
    this.props.fetchdata();
  }
  renderList() {
    return this.props.post.map((v) => {
      return (
        <div className="r-items">
          <div className="r-image">
            <img
              src={v.snippet.thumbnails.medium.url}
              alt=""
              srcset=""
              className="r-product-image"
            />
            <div className="r-item-name">
             {v.snippet.title}
            </div>
            <div className="r-item-price">
              <span className="fas fa-eye i"></span>
              <h2>{v.statistics.viewCount} m views 2days ago</h2>
            </div>
            <div className="r-channle-detail">
              <div className="r-channle-detail-pic">
                <img
                  src="img/4902560.jpg"
                  alt=""
                  className="r-channle-detail-img"
                />
              </div>
              <h3>{v.snippet.channelTitle}</h3>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="video">
          <div className="video-suggestions">
            <ul className="video-suggestions-list">
              <li className="video-suggestions-list-item">
                <a href="#" className="video-suggestion">
                  All
                </a>
              </li>
              <li className="video-suggestions-list-item">
                <a href="#" className="video-suggestion">
                  music
                </a>
              </li>
              <li className="video-suggestions-list-item">
                <a href="#" className="video-suggestion">
                  cricket
                </a>
              </li>
              <li className="video-suggestions-list-item">
                <a href="#" className="video-suggestion">
                  football
                </a>
              </li>
              <li className="video-suggestions-list-item">
                <a href="#" className="video-suggestion">
                  News
                </a>
              </li>
              <li className="video-suggestions-list-item">
                <a href="#" className="video-suggestion">
                  coding
                </a>
              </li>
              <li className="video-suggestions-list-item">
                <a href="#" className="video-suggestion">
                  game
                </a>
              </li>
              <li className="video-suggestions-list-item">
                <a href="#" className="video-suggestion">
                  karate
                </a>
              </li>
              <li className="video-suggestions-list-item">
                <a href="#" className="video-suggestion">
                  ufc
                </a>
              </li>
              <li className="video-suggestions-list-item">
                <a href="#" className="video-suggestion">
                  nba
                </a>
              </li>
              <li className="video-suggestions-list-item">
                <a href="#" className="video-suggestion">
                  react
                </a>
              </li>
              <li className="video-suggestions-list-item">
                <a href="#" className="video-suggestion">
                  nodejs
                </a>
              </li>
            </ul>
          </div>
          <div className="result-images">
            <div className="r-product">{this.renderList()}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapto = (state) => {
  console.log(state.post);
  return { post: state.post };
};
export default connect(mapto, { fetchdata })(Videos);
