import P from 'prop-types';
import './styles.css';

export const PostCard = ({ id, title, body, cover }) => {
  return (
    <div className="post">
      <div className="post-content">
        <img src={cover} alt={title} />
        <h2>
          {title} {id}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  id: P.number.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
  cover: P.string.isRequired,
};
