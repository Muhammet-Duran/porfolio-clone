import { useState, useEffect } from "react";
import Button from "components/ui/Button/Button";
import TitleArea from "components/ui/TitleArea/TitleArea";
// import { blogImg1, blogImg2, blogImg3 } from "./../../assets/Index";
import { blogData } from "data/Blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from "./Blog.module.css";
import cn from "classnames";

// const BlogList = [
//   {
//     id: 1,
//     image: blogImg1,
//     category: "Development",
//     title: "Getting tickets to the big show",
//   },
//   {
//     id: 2,
//     image: blogImg2,
//     category: "Development",
//     title: "Getting tickets to the big show",
//   },
//   {
//     id: 3,
//     image: blogImg3,
//     category: "Development",
//     title: "Getting tickets to the big show",
//   },
//   {
//     id: 4,
//     image: blogImg1,
//     category: "Development",
//     title: "Getting tickets to the big show",
//   },
//   {
//     id: 5,
//     image: blogImg2,
//     category: "Development",
//     title: "Getting tickets to the big show",
//   },
// ];
function Blog() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    setBlog(blogData);
  }, []);
  const sectionTitle = "Latest News";
  const sectionDescription =
    "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration.";
  return (
    <div id="blog">
      <div className={cn("section-wrapper")}>
        <div className={cn("container", styles.blog_container)}>
          <TitleArea title={sectionTitle} description={sectionDescription} />
          <Swiper
            className={styles.swiper_slide_area}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            modules={[Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
          >
            {blog.map((item) => (
              <SwiperSlide key={item.id} className={styles.blog_item}>
                <div className={styles.item_inner}>
                  <div className={styles.thumbnail}>
                    <img
                      className={styles.img}
                      alt={item.category}
                      src={item.image}
                    />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.blog_type}>{item.category}</p>
                    <h4 className={styles.b_title}>{item.title}</h4>
                    <div className={styles.blog_btn_area}>
                      <Button preferences="blog_btn" to={`/blog/${item.id}`}>
                        read more
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Blog;
