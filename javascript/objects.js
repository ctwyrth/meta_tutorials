let storeManager = {
  rangeTilesPerTurn: 4,
  socialSkills: 50,
  streetSmarts: 50,
  health: 30,
  specialAbility: "finding business opportunities",
  greeting: "Let's make some money",
}

let assistantManager = {
  movement: 3,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40,
  specialAbility: "young and ambitious",
  greeting: "Let's make some money"
}

storeManager.nextAchievement = "open a new store";
assistantManager.nextAchievement = "get promoted";

console.log(storeManager);
console.log(assistantManager);