import { weapons } from "./weapons";
import { armors } from "./armors";

export const classes = {
  warrior: {
    strength: 20,
    agility: 15,
    intelligence: 10,
    endurance: 20,
    profiency: [
      {
        name: "sword",
        level: 0,
      },
      {
        name: "axe",
        level: 0,
      },
      {
        name: "spear",
        level: 0,
      },
      {
        name: "hammer",
        level: 0,
      },
    ],
    equipment: [weapons.swords[0], weapons.shields[0], armors.plates[0]],
  },
  mage: {
    strength: 10,
    agility: 15,
    intelligence: 25,
    endurance: 15,
    profiency: [
      {
        name: "staff",
        level: 0,
      },
      {
        name: "fire",
        level: 0,
      },
      {
        name: "water",
        level: 0,
      },
      {
        name: "wind",
        level: 0,
      },
      {
        name: "earth",
        level: 0,
      },
      {
        name: "electricity",
        level: 0,
      },
      {
        name: "wand",
        level: 0,
      },
      {
        name: "spellbook",
        level: 0,
      },
    ],
    equipment: [weapons.staff[0], armors.robes[0]],
  },
  archer: {
    strength: 15,
    agility: 25,
    intelligence: 10,
    endurance: 15,
    profiency: [
      {
        name: "short bow",
        level: 0,
      },
      {
        name: "long bow",
        level: 0,
      },
      {
        name: "crossbow",
        level: 0,
      },
    ],
    equipment: [armors.leather[0], weapons.shortBow[0]],
  },
  alchemist: {
    strength: 10,
    agility: 15,
    intelligence: 20,
    endurance: 15,
    profiency: [
      {
        name: "potions",
        level: 0,
      },
      {
        name: "elixirs",
        level: 0,
      },
      {
        name: "herbs",
        level: 0,
      },
      {
        name: "poison",
        level: 0,
      },
    ],
    equipment: [weapons.spellbooks[0], armors.robes[0]],
  },
  healer: {
    strength: 10,
    agility: 15,
    intelligence: 20,
    endurance: 15,
    profiency: [
      {
        name: "holy",
        level: 0,
      },
    ],
    equipment: [armors.robes[0], weapons.wands[0]],
  },
  paladin: {
    strength: 20,
    agility: 15,
    intelligence: 10,
    endurance: 20,
    profiency: [
      {
        name: "holy",
        level: 0,
      },
      {
        name: "sword",
        level: 0,
      },
      {
        name: "axe",
        level: 0,
      },
      {
        name: "spear",
        level: 0,
      },
      {
        name: "hammer",
        level: 0,
      },
    ],
    equipment: [weapons.hammer[0], weapons.shields[0], armors.plates[0]],
  },
};
