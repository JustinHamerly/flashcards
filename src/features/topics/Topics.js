import NewTopicForm from "../../components/NewTopicForm";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { useSelector } from "react-redux";
import { getTopics } from "./topicsSlice";

export default function Topics() {
  const topics = useSelector(getTopics);
  console.log('topics: ', topics)

  return (
    <section className="center">
      <h1>Topics</h1>
      {topics ?
        <ul className="topics-list">
          {Object.values(topics).map((topic, i) => (
            <li className="topic" key={i}>
              <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
                <div className="topic-container">
                  <img src={topic.icon} alt="" />
                  <div className="text-content">
                    <h2>{topic.name}</h2>
                    <p>{topic.quizIds.length} Quizzes</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        : null
      }
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
