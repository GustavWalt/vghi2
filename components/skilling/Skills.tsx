import React from "react";
import styles from "../../style/modules/skills/Skills.module.scss";

import SkillsItem from "../assets/SkillsItem";
import H1 from "../assets/H1";
import Fade from "../assets/Fade";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <Fade>
        <H1 title="OSRS SKILLING SERVICE" />
        <div className={styles.items}>
          <SkillsItem img="/attack_icon.png" text="Attack" />
          <SkillsItem img="/strength_icon.png" text="Strength" />
          <SkillsItem img="/defence_icon.png" text="Defence" />
          <SkillsItem img="/ranged_icon.png" text="Ranged" />
          <SkillsItem img="/prayer_icon.png" text="Prayer" />
          <SkillsItem img="/agility_icon.png" text="Agility" />
          <SkillsItem img="/herblore_icon.png" text="Herblore" />
          <SkillsItem img="/thieving_icon.png" text="Thieving" />
          <SkillsItem img="/crafting_icon.png" text="Crafting" />
          <SkillsItem img="/fletching_icon.png" text="Fletching" />
          <SkillsItem img="/smithing_icon.png" text="Smithing" />
          <SkillsItem img="/fishing_icon.png" text="Fishing" />
          <SkillsItem img="/cooking_icon.png" text="Cooking" />
          <SkillsItem img="/firemaking_icon.png" text="Firemaking" />
          <SkillsItem img="/woodcutting_icon.png" text="Woodcutting" />
          <SkillsItem img="/farming_icon.png" text="Farming" />
          <SkillsItem img="/magic_icon.png" text="Magic" />
          <SkillsItem img="/runecraft_icon.png" text="Runecrafting" />
          <SkillsItem img="/construction_icon.png" text="Construction" />
          <SkillsItem img="/slayer_icon.png" text="Slayer" />
          <SkillsItem img="/hunter_icon.png" text="Hunter" />
          <SkillsItem img="/mining_icon.png" text="Mining" />
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
