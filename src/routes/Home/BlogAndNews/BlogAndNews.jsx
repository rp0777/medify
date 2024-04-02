import { Fragment } from "react";
import styles from "./BlogAndNews.module.css";

const blogsData = [
  {
    id: 0,
    img: "/blogs/blog1.png",
    type: "Medical",
    date: "March 31, 2024",
    topic: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: {
      avatar: "/blogs/author1.png",
      name: "Rebecca Lee",
    },
  },
  {
    id: 1,
    img: "/blogs/blog1.png",
    type: "Medical",
    date: "March 31, 2024",
    topic: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: {
      avatar: "/blogs/author1.png",
      name: "Rebecca Lee",
    },
  },
  {
    id: 2,
    img: "/blogs/blog1.png",
    type: "Medical",
    date: "March 31, 2024",
    topic: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: {
      avatar: "/blogs/author1.png",
      name: "Rebecca Lee",
    },
  },
];

const BlogCards = ({ blogsData }) => (
  <Fragment>
    {blogsData.map((blog) => (
      <div className={styles.blogCard} key={blog.id}>
        <img src={blog.img} />

        <p className={styles.blogTypeAndDate}>
          {blog.type} &nbsp; | &nbsp; {blog.date}
        </p>

        <p className={styles.blogTopic}>{blog.topic}</p>

        <div className={styles.authorDetails}>
          <img className={styles.authorAvatar} src={blog.author.avatar} />

          <p className={styles.authorName}>{blog.author.name}</p>
        </div>
      </div>
    ))}
  </Fragment>
);

const BlogAndNews = () => {
  return (
    <div className={styles.blogAndNews}>
      <p className={styles.subHeading}>Blog & News</p>

      <p className={styles.heading}>Read Our Latest News</p>

      <div className={styles.blogCards}>
        <BlogCards blogsData={blogsData} />
      </div>
    </div>
  );
};

export default BlogAndNews;
