import React from "react";
import Chip from "@material-ui/core/Chip";
import styles from "./TagSelector.module.scss";

const TagSelector = () => {
  const mealsChipData = [
    { key: 0, label: "breakfast" },
    { key: 1, label: "lunch" },
    { key: 2, label: "dinner" },
    { key: 3, label: "snack" },
    { key: 4, label: "dessert" },
  ];
  const timeChipData = [
    { key: 5, label: "~10 min" },
    { key: 6, label: "20 min" },
    { key: 7, label: "30 min" },
    { key: 8, label: "40 min" },
    { key: 9, label: "50 min" },
    { key: 10, label: "60+ min" },
  ];
  const allergyChipData = [
    { key: 11, label: "gluten-free" },
    { key: 12, label: "dairy-free" },
    { key: 13, label: "vegan" },
    { key: 14, label: "nut-free" },
    { key: 15, label: "low sugar" },
    { key: 16, label: "low carb" },
  ];
  const [activeIndex, setActiveIndex] = React.useState([]);

  const handleClick = (key) => {
    if (activeIndex.indexOf(key) > -1) {
      setActiveIndex((keys) => keys.filter((k) => k !== key));
    } else {
      setActiveIndex((keys) => keys.concat(key));
    }
  };

  return (
    <>
      <div className={styles.chipContainer}>
        Meals:
        {mealsChipData.map((data) => {
          return (
            <span key={data.key} className={styles.chip}>
              <Chip
                className={
                  activeIndex.indexOf(data.key) > -1 ? styles.mealChips : ""
                }
                size="small"
                label={data.label}
                onClick={() => handleClick(data.key)}
              />
            </span>
          );
        })}
      </div>
      <div className={styles.chipContainer}>
        Time:
        {timeChipData.map((data) => {
          return (
            <span key={data.key} className={styles.chip}>
              <Chip
                className={
                  activeIndex.indexOf(data.key) > -1 ? styles.timeChips : ""
                }
                size="small"
                label={data.label}
                onClick={() => handleClick(data.key)}
              />
            </span>
          );
        })}
      </div>
      <div className={styles.chipContainer}>
        Diet:
        {allergyChipData.map((data) => {
          return (
            <span key={data.key} className={styles.chip}>
              <Chip
                className={
                  activeIndex.indexOf(data.key) > -1 ? styles.allergyChips : ""
                }
                size="small"
                label={data.label}
                onClick={() => handleClick(data.key)}
              />
            </span>
          );
        })}
      </div>
    </>
  );
};

export default TagSelector;
