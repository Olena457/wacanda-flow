import css from "./BallComponent.module.css";

const BallComponent = () => {
  const spheres = Array.from({ length: 9 }, (_, i) => i);
  const items = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <section className={css.container}>
      <section className={css.loader}>
        {spheres.map((sphereIndex) => (
          <article
            key={sphereIndex}
            style={{ "--rot": sphereIndex }}
            className={`${css.sphere} ${css[`sphere${sphereIndex + 1}`]}`}
          >
            {items.map((itemIndex) => (
              <div
                key={itemIndex}
                className={css.item}
                style={{ "--rot-y": itemIndex }}
              ></div>
            ))}
          </article>
        ))}
      </section>
    </section>
  );
};

export default BallComponent;
