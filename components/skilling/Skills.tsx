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
          <SkillsItem img="/Attack_icon.png" text="Attack" />
          <SkillsItem img="/Strength_icon.png" text="Strength" />
          <SkillsItem img="/Defence_icon.png" text="Defence" />
          <SkillsItem img="/Ranged_icon.png" text="Ranged" />
          <SkillsItem img="/Prayer_icon.png" text="Prayer" />
          <SkillsItem img="/Agility_icon.png" text="Agility" />
          <SkillsItem img="/Herblore_icon.png" text="Herblore" />
          <SkillsItem img="/Thieving_icon.png" text="Thieving" />
          <SkillsItem img="/Crafting_icon.png" text="Crafting" />
          <SkillsItem img="/Fletching_icon.png" text="Fletching" />
          <SkillsItem img="/Smithing_icon.png" text="Smithing" />
          <SkillsItem img="/Fishing_icon.png" text="Fishing" />
          <SkillsItem img="/Cooking_icon.png" text="Cooking" />
          <SkillsItem img="/Firemaking_icon.png" text="Firemaking" />
          <SkillsItem img="/Woodcutting_icon.png" text="Woodcutting" />
          <SkillsItem img="/Farming_icon.png" text="Farming" />
          <SkillsItem img="/Magic_icon.png" text="Magic" />
          <SkillsItem img="/Runecraft_icon.png" text="Runecrafting" />
          <SkillsItem img="/Construction_icon.png" text="Construction" />
          <SkillsItem img="/Slayer_icon.png" text="Slayer" />
          <SkillsItem img="/Hunter_icon.png" text="Hunter" />
          <SkillsItem img="/Mining_icon.png" text="Mining" />
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
