const SureStrike = `
<b>Sure Strike</b><br />
Class: Gladiator<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Attack<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 73<br />
Cast Time: Cast Instantly<br />
Cooldown: 30s<br />
Available when equipping Greatsword/Polearm<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 1881~1885 unavoidable physical damage.
`;

const PrecisionCut = `
<b>Severe Precision Cut</b><br />
Class: Gladiator<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Area of Effect<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Area within a Radius of Target<br />
Usage Cost: MP 49<br />
Cast Time: Cast Instantly<br />
Cooldown: 1m30s<br />
Available when equipping Greatsword / Polearm<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Swings your weapon widely to inflict 1422 - 1426 unavoidable physical damage on up to 6 targets within 7m.There is a chance to inflict the Stumbled state.`;

const DrainingBlow = `
<b>Draining Blow </b><br />
Class: Gladiator<br />
Level: 20<br />
Category: Normal Stigma<br />
Skill Type: Normal<br />
Attribute: Stun<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 21<br />
Cast Time: Cast Instantly<br />
Cooldown: 30s<br />
Available when equipping Melee Weapon<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 259 - 263 physical damage on a stumbled target and absorbs 100% of the inflicted damage as HP.
`;

const DrainingSword = `
<b>Draining Sword</b><br />
Class: Gladiator<br />
Level: 55<br />
Category: Major Stigma<br />
Skill Type: Normal<br />
Attribute: Attack<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 58<br />
Cast Time: Cast Instantly<br />
Cooldown: 1m<br />
Available when equipping Melee Weapon<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 758 - 762 physical damage on a target and has a chance to absorb 100% of the damage as HP.
`;

const WhirlingStrike = `
<b>Whirling Strike</b><br />
Class: Gladiator<br />
Level: 55<br />
Category: Major Stigma<br />
Skill Type: Normal<br />
Attribute: Attack<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 29<br />
Cast Time: Cast Instantly<br />
Cooldown: 1m<br />
Available when equipping Melee Weapon<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 858~862 physical damage by dashing to a target within 17m.<br />
`;

const UnravelingAssault = `
<b>Unraveling Assault</b><br />
Class: Gladiator<br />
Level: 55<br />
Category: Linked Stigma<br />
Skill Type: Chain Skills<br />
Attribute: Area of Effect<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Area within a Radius of Target<br />
Usage Cost: MP 187<br />
Cast Time: Cast Instantly<br />
Cooldown: 1m30s<br />
Available when equipping Greatsword/Polearm<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 816 - 820 physical damage on a target within 7m.<br />
Repeat Activation 3 times.
`;

const DauntlessSpirit = `
<b>Dauntless Spirit</b><br />
Class: Gladiator<br />
Level: 20<br />
Category: Normal Stigma<br />
Skill Type: Normal<br />
Attribute: Special<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Self<br />
Usage Cost: MP 18<br />
Cast Time: Cast Instantly<br />
Cooldown: 1m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
For 10s, creates a protective shield that has a 100% chance to block damage each time you receive attack. The protective shield blocks up to 1200 damage.
`;

const GladiatorStigmas = new Array(SureStrike, PrecisionCut, DrainingBlow, DrainingSword, WhirlingStrike, UnravelingAssault, DauntlessSpirit);

const DivineJustice = `
<b>Divine Justice</b><br />
Class: Templar<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Stun<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 165<br />
Cast Time: 0.5s<br />
Cooldown: 2m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 714 magical earth damage on a target within 25m radius and stuns the target for 2s.
`;

const ShieldBurst = `
<b>Shield burst</b><br />
Class: Templar<br />
Level: 55<br />
Category: Major Stigma<br />
Skill Type: Normal<br />
Attribute: Stun<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 252<br />
Cast Time: 1s<br />
Cooldown: 30s<br />
Available when equipping Melee Weapon;Shield<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 1185 - 1189 physical damage on a target with an attack that always hits and causes the target to stumble.<br />
Requires a shield.
`;

const PunishingWave = `
<b>Punishing Wave</b><br />
Class: Templar<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Abnormal Condition<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Area within a Radius of Target<br />
Usage Cost: MP 170<br />
Cast Time: Cast Instantly<br />
Cooldown: 3m<br />
Available when equipping Melee Weapon<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 444 - 448 physical damage on up to 6 enemies within 7m radius, and immobilizes them for 10s.
`;

const InciteRage = `
<b>Incite Rage</b><br />
Class: Templar<br />
Level: 20<br />
Category: Normal Stigma<br />
Skill Type: Normal<br />
Attribute: Special<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 86<br />
Cast Time: Cast Instantly<br />
Cooldown: 1m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Taunts a target within 15m radius to increase its Enmity, which lasts for 5 seconds. If the target is a PC, there is a chance to make them look at the caster.
`;

const PrayerOfVictory = `
<b>Prayer of Victory</b><br />
Class: Templar<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Buff<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Area within a Radius of Target<br />
Usage Cost: MP 206<br />
Cast Time: Cast Instantly<br />
Cooldown: 5m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Increases Maximum HP of the caster and up to 5 additional Alliance members within a 30m radius by 1000 for 3m.
`;

const ShieldofVengeance = `
<b>Shield of Vengeance</b><br />
Class: Templar<br />
Level: 55<br />
Category: Linked Stigma<br />
Skill Type: Normal<br />
Attribute: Special<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Self<br />
Usage Cost: MP 690<br />
Cast Time: Cast Instantly<br />
Cooldown: 3m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Reflects the next attack to hit you back to the enemy once for 10s. Only usable in PvP.
`;

const EternalDenial = `
<b>Eternal Denial</b><br />
Class: Templar<br />
Level: 55<br />
Category: Linked Stigma<br />
Skill Type: Normal<br />
Attribute: Special<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Self<br />
Usage Cost: MP 690<br />
Cast Time: Cast Instantly<br />
Cooldown: 3m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Decreases the damage received by 60% and significantly reduces movement speed for [%e1.snare.RemainTime]. The protective shield blocks up to 50000 damage.
`;

const TemplarStigmas = new Array(DivineJustice, ShieldBurst, PunishingWave, InciteRage, PrayerOfVictory, ShieldofVengeance, EternalDenial);

const DashAndSlash = `
<b>Dash And Slash</b><br />
Class: Assassin<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Special<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 165<br />
Cast Time: Cast Instantly<br />
Cooldown: 3m<br />
Available when equipping Melee Weapon<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 1048~1052 physical damage and dashes to a target within 20m radius.
`;

const SearchingStrike = `
<b>Searching Strike</b><br />
Class: Assassin<br />
Level: 20<br />
Category: Normal Stigma<br />
Skill Type: Normal<br />
Attribute: Stun<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 66<br />
Cast Time: Cast Instantly<br />
Cooldown: 30s<br />
Available when equipping Melee Weapon<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 639 - 643 physical damage on a target while in Stealth. The target becomes momentarily stunned.
`;

const AgonyRune = `
<b>Agony Rune</b><br />
Class: Assassin<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Chain Skills<br />
Attribute: Attack<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 106<br />
Cast Time: Cast Instantly<br />
Cooldown: 12s<br />
Available when equipping Melee Weapon<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 1154 fire damage on a target within 10m.
`;

const ScoundrelsBond = `
<b>Scoundrel's Bond</b><br />
Class: Assassin<br />
Level: 55<br />
Category: Major Stigma<br />
Skill Type: Normal<br />
Attribute: Buff<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Self<br />
Usage Cost: MP 170<br />
Cast Time: Cast Instantly<br />
Cooldown: 2m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
For 30s, there is a 50% chance to drain HP when making flanking attacks on your target. Additionally, flanking attacks deal bonus damage.
`;

const ApplyLethalVenom = `
<b>Apply Lethal Venom</b><br />
Class: Assassin<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Buff<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Self<br />
Usage Cost: MP 206<br />
Cast Time: Cast Instantly<br />
Cooldown: 3m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
For 30s, there is a 20% chance of inflicting 528 damage with each attack.
`;

const LightningSlash = `
<b>Lightning Slash</b><br />
Class: Assassin<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Chain Skills<br />
Attribute: Abnormal Condition<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 83<br />
Cast Time: Cast Instantly<br />
Cooldown: 24s<br />
Available when equipping Melee Weapon<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 367 - 371 physical damage on the target. Decreases the target's Magical Acc by 200, Magic Resist by 200, and All Elemental Defense by 50 for 15s.
`;

const Shadowfall = `
<b>Shadowfall</b><br />
Class: Assassin<br />
Level: 20<br />
Category: Normal Stigma<br />
Skill Type: Normal<br />
Attribute: Stun<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 80<br />
Cast Time: Cast Instantly<br />
Cooldown: 1m<br />
Available when equipping Melee Weapon<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Grabs a stunned target and slams it downward to inflict 404 - 408 physical damage and causes the target to stumble.
`;

const AssassinStigmas = new Array(DashAndSlash, SearchingStrike, AgonyRune, ScoundrelsBond, ApplyLethalVenom, LightningSlash, Shadowfall);

const BlazingTrap = `
<b>Blazing Trap</b><br />
Class: Ranger<br />
Level: 20<br />
Category: Normal Stigma<br />
Skill Type: Normal<br />
Attribute: Trap<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Self<br />
Cast Time: Cast Instantly<br />
Cooldown: 20s<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Sets up a single-target trap around you. The trap remains active for 1m and explodes when an enemy approaches. Its area of effect is within 5m.
`;

const BowofBlessing = `
<b>Bow of Blessing</b><br />
Class: Ranger<br />
Level: 20<br />
Category: Normal Stigma<br />
Skill Type: Normal<br />
Attribute: Buff<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Self<br />
Usage Cost: MP 103<br />
Cast Time: Cast Instantly<br />
Cooldown: 3m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Increases Physical Attack of Bow by 20% for 1m.
`;

const ExplosiveArrow = `
<b>Explosive Arrow</b><br />
Class: Ranger<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Attack<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 30<br />
Cast Time: Cast Instantly<br />
Cooldown: 18s<br />
Available when equipping Bow<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 1003~1007 physical damage on a target within 27m.
`;

const LethalArrow = `
<b>Lethal Arrow</b><br />
Class: Ranger<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Attack<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 48<br />
Cast Time: 1s<br />
Cooldown: 24s<br />
Available when equipping Bow<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 1950~1954 physical damage on a target within 27m without a miss.
`;

const AgonizingArrow = `
<b>Agonizing Arrow</b><br />
Class: Ranger<br />
Level: 55<br />
Category: Major Stigma<br />
Skill Type: Normal<br />
Attribute: Abnormal Condition<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 86<br />
Cast Time: Cast Instantly<br />
Cooldown: 24s<br />
Available when equipping Bow<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 1777~1781 physical damage on a target within 27m by shooting arrows and poisons it for 24s.
`;

const SkyboundTrap = `
<b>Skybound Trap</b><br />
Class: Ranger<br />
Level: 20<br />
Category: Normal Stigma<br />
Skill Type: Normal<br />
Attribute: Trap<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Self<br />
Cast Time: 2s<br />
Cooldown: 2m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Sets up a ranged trap around you. The trap remains active for 1m, and when an enemy approaches within 10m of the trap, it explodes to inflict damage on up to 4 enemies and immobilize them midair.
`;

const SharpenArrows = `
<b>Sharpen Arrows</b><br />
Class: Ranger<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Buff<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Self<br />
Cast Time: Cast Instantly<br />
Cooldown: 1s<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Increases Physical Attackr Bow by 10% and raises Evasion by 50. However, the MP cost of skills increases by 10%.<br />
Active Skill.
`;

const RangerStigmas = new Array(BlazingTrap, BowofBlessing, ExplosiveArrow, LethalArrow, AgonizingArrow, SkyboundTrap, SharpenArrows);

const SpiritRuinousOffensive = `
<b>Class: Spiritmaster</b><br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Summon<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 200<br />
Cast Time: 0.8s<br />
Cooldown: 30s<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Commands your spirit to use its attack skill. Each spirit has an element-specific strike.<br />

Water Spirit: Magical water attack<br />
Wind Spirit: Sustained magical wind damage<br />
Earth Spirit: Slowing earth attack<br />
Fire Spirit: Magical fire attack<br />
Lava Spirit: Magical fire attack<br />
Tempest Spirit: Sustained magical wind damage
`;

const EarthenCall = `
<b>Earthen Call</b><br />
Class: Spiritmaster<br />
Level: 20<br />
Category: Normal Stigma<br />
Skill Type: Normal<br />
Attribute: Buff<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Self<br />
Usage Cost: MP 70<br />
Cast Time: Cast Instantly<br />
Cooldown: 2m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Removes movement restrictions and increases your resistance to abnormal movement conditions by 800 for 10 seconds.
`;

const HealingSpirit = `
<b>Class: Spiritmaster</b><br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Special<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Pet<br />
Usage Cost: MP 335<br />
Cast Time: Cast Instantly<br />
Cooldown: 1m30s<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Heals a spirit within 15m for 100% and removes all magical debuffs from it.
`;

const InfernalBlight = `
<b>Infernal Blight</b><br />
Class: Spiritmaster<br />
Level: 55<br />
Category: Major Stigma<br />
Skill Type: Normal<br />
Attribute: Abnormal Condition<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 488<br />
Cast Time: 1s<br />
Cooldown: 3m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Decreases Physical Def, All Elemental Defense and Magic Resist of a target within 25m by 1479, 200 and 230 respectively for 1m.
`;

const InfernalPain = `
<b>Infernal Pain</b><br />
Class: Spiritmaster<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Abnormal Condition<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 473<br />
Cast Time: 1.5s<br />
Cooldown: 30s<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 543 magical earth damage on a target within 25m, and deals 473 additional damage every 3s for 12s. It can be dispelled.
`;

const MagicsFreedom = `
<b>Magic's Freedom</b><br />
Class: Spiritmaster<br />
Level: 20<br />
Category: Normal Stigma<br />
Skill Type: Normal<br />
Attribute: Abnormal Condition<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 264<br />
Cast Time: 1.5s<br />
Cooldown: 1m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Reduces the Magic Suppression of a target within 25m by 500 for 15s.
`;

const MagicImplosion = `
<b>Magic Implosion</b><br />
Class: Spiritmaster<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Chain Skills<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Attribute: Special<br />
Target: Selected Target<br />
Usage Cost: MP 252<br />
Cast Time: Cast Instantly<br />
Cooldown: 30s<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Removes up to 3 buffs and Spiritmaster debuffs from the target, inflicts 446 damage for the first buff removed and 223 additional damage per additional buff removed.
The target also receives 139 damage every 3 for 30. It can be dispelled.
`;

const SpiritMasterStigmas = new Array(SpiritRuinousOffensive, EarthenCall, HealingSpirit, InfernalBlight, InfernalPain, MagicsFreedom, MagicImplosion);

const ElementalWard = `
<b>Elemental Ward</b><br />
Class: Sorcerer<br />
Level: 20<br />
Category: Normal Stigma<br />
Skill Type: Normal<br />
Attribute: Buff<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Self<br />
Usage Cost: MP 326<br />
Cast Time: Cast Instantly<br />
Cooldown: 3m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Increases your All Elemental Defense by 300 and your Magic Resist by 300 for 1m.
`;

const Aetherblaze = `
<b>Aetherblaze</b><br />
Class: Sorcerer<br />
Level: 55<br />
Category: Linked Stigma<br />
Skill Type: Normal<br />
Attribute: Buff<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Self<br />
Cast Time: Cast Instantly<br />
Cooldown: 3m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Increases your magical attack by 9% and decreases MP consumption by 20% for 15 seconds.
`;

const FlameSpray = `
<b>Flame Spray</b><br />
Class: Sorcerer<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Attack<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 912<br />
Cast Time: 3.5s<br />
Cooldown: 30s<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 3024 magical fire damage on a target within 25m.
`;

const RepulsionField = `
<b>Repulsion Field</b><br />
Class: Sorcerer<br />
Level: 55<br />
Category: Linked Stigma<br />
Skill Type: Normal<br />
Attribute: Special<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Self<br />
Usage Cost: MP 830<br />
Cast Time: Cast Instantly<br />
Cooldown: 5m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Immobilizes you within a shield for 6s that blocks 30000 damage each time you receive attack.
`;

const ManifestTornado = `
<b>Manifest Tornado</b><br />
Class: Sorcerer<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Stun<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 107<br />
Cast Time: Cast Instantly<br />
Cooldown: 3m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Summon Whirlwind for 3s. Deal magical wind damage to target and inflict Stun.
`;

const WindCutDown = `
<b>Wind Cut Down</b><br />
Class: Sorcerer<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Abnormal Condition<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 196<br />
Cast Time: 1s<br />
Cooldown: 24s<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 1023 magical wind damage on a target within 25m, and decreases Magical Acc by 200 for 5s to 7s.
`;

const GlacialShard = `
<b>Glacial Shard</b><br />
Class: Sorcerer<br />
Level: 55<br />
Category: Major Stigma<br />
Skill Type: Normal<br />
Attribute: Attack<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 1077<br />
Cast Time: 4s<br />
Cooldown: 1m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 4646 magical water damage on a target within 25m.
`;

const SorcererStigmas = new Array(ElementalWard, Aetherblaze, FlameSpray, RepulsionField, ManifestTornado, WindCutDown, GlacialShard);

const BlessingofStone = `
<b>Blessing of Stone</b><br />
Class: Chanter<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Buff<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 105<br />
Cast Time: Cast Instantly<br />
Cooldown: 0.5s<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Increases Maximum HP, All Elemental Defense, Physical Def, and Magic Suppression of a target within 25m radius by 25%, 50, 10% and 100 respectively for 30m.
Stigma Skill.
`;

const ElementalScreen = `
<b>Elemental Screen</b><br />
Class: Chanter<br />
Level: 55<br />
Category: Major Stigma<br />
Skill Type: Normal<br />
Attribute: Buff<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Group Member<br />
Usage Cost: MP 303<br />
Cast Time: Cast Instantly<br />
Cooldown: 3m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Increases Physical Def and All Elemental Defense of individual and up to 6 Force members within 20m radius by 2000 and 200 respectively for 30s.
`;

const MountainCrash = `
<b>Mountain Crash</b><br />
Class: Chanter<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Attack<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 144<br />
Cast Time: Cast Instantly<br />
Cooldown: 30s<br />
Available when equipping Melee Weapon<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 1345 - 1349 physical damage on a target within 25m radius, and deals further 103 damage every 3s for 12s.
`;

const WordofInstigation = `
<b>Word of Instigation</b><br />
Class: Chanter<br />
Level: 55<br />
Category: Linked Stigma<br />
Skill Type: Normal<br />
Attribute: Buff<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Group Member<br />
Usage Cost: MP 297<br />
Cast Time: Cast Instantly<br />
Cooldown: 1m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Increases Magic Boost, Accuracy, and Physical Attack of group members within 20m radius by 130, 130, and 20% respectively for 1m.
`;


const NumbingBlow = `
<b>Numbing Blow</b><br />
Class: Chanter<br />
Level: 55<br />
Category: Major Stigma<br />
Skill Type: Normal<br />
Attribute: Abnormal Condition<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 152<br />
Cast Time: Cast Instantly<br />
Cooldown: 40s<br />
Available when equipping Melee Weapon<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 615 - 619 physical damage on the target. The target's attack speed decreases and magic casting time increases by 50% for 7s.
`;

const HealingBurst = `
<b>Healing Burst</b><br />
Class: Chanter<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Healing<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 247<br />
Cast Time: 2s<br />
Cooldown: 10s<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Recovers the HP of a target within 23m radius by 2709.
`;

const Blast = `
<b>Blast</b><br />
Class: Chanter<br />
Level: 20<br />
Category: Normal Stigma<br />
Skill Type: Chain Skills<br />
Attribute: Stun<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br />
Usage Cost: MP 120<br />
Cast Time: Cast Instantly<br />
Cooldown: 1m<br />
Available when equipping Melee Weapon<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Inflicts 284 - 288 physical damage on a target and stuns it briefly.
`;

const ChanterStigmas = new Array(BlessingofStone, ElementalScreen, MountainCrash, WordofInstigation, NumbingBlow, HealingBurst, Blast);

const Benevolence = `
<b>Benevolence</b><br />
Class: Cleric<br />
Level: 55<br />
Category: Major Stigma<br />
Skill Type: Normal<br />
Attribute: Buff<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Self<br />
Cast Time: Cast Instantly<br />
Cooldown: 1s<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Healing Boost increases by 350, and 10% more MP is consumed while the skill is in use.<br />
Active Skill.
`;

const NobleGrace = `
<b>Noble Grace</b><br />
Class: Cleric<br />
Level: 20<br />
Category: Normal Stigma<br />
Skill Type: Normal<br />
Attribute: Buff<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Group Member<br />
Usage Cost: MP 135<br />
Cast Time: Cast Instantly<br />
Cooldown: 3m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Increases the effect of healing received by group members within 25m of the caster by 50% for 15s.
`;

const SummonHealingServant = `
<b>Summon Healing Servant</b><br />
Class: Cleric<br />
Level: 45<br />
Category: Greater Stigma<br />
Skill Type: Normal<br />
Attribute: Special<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Self<br />
Usage Cost: MP 200<br />
Cast Time: 1s<br />
Cooldown: 1m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Summons an immobile healing spirit that heals you and up to six alliance members within 30m for 301.<br />
Gains Stigma.
`;

const RestorationRelief = `
<b>Restoration Relief</b><br />
Class: Cleric<br />
Level: 55<br />
Category: Linked Stigma<br />
Skill Type: Normal<br />
Attribute: Healing<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Group Member<br />
Usage Cost: MP 580<br />
Cast Time: Cast Instantly<br />
Cooldown: 3m<br />
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Recovers the HP of surrounding group members by 2802 once in 3 minutes if their HP falls below 50%.
`;

const SplendorofRebirth = `
<b>Splendor of Rebirth</b><br/>
Class: Cleric<br/>
Level: 45<br/>
Category: Greater Stigma<br/>
Skill Type: Normal<br/>
Attribute: Healing<br/>
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br/>
Usage Cost: MP 228<br/>
Cast Time: Cast Instantly<br/>
Cooldown: 1m<br/>
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Instantly recovers the HP of a target within 25m radius by 405 and then recovers additional 405 HP every 3s for 30s. Also increases Physical Def and All Elemental Defense by 200 and 10 respectively.
`;

const SavingGrace = `
<b>Saving Grace</b><br/>
Class: Cleric<br/>
Level: 20<br/>
Category: Normal Stigma<br/>
Skill Type: Normal<br/>
Attribute: Healing<br/>
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Selected Target<br/>
Usage Cost: MP 203<br/>
Cast Time: Cast Instantly<br/>
Cooldown: 2m<br/>
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Recovers a target's HP by 1713 once in one minute if the target's HP falls below 50%.
`;

const RippleofPurification = `
<b>Ripple of Purification</b><br/>
Class: Cleric<br/>
Level: 45<br/>
Category: Greater Stigma<br/>
Skill Type: Normal<br/>
Attribute: Dispel<br/>
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Target: Group Member<br/>
Usage Cost: MP 513<br/>
Cast Time: 1s<br/>
Cooldown: 2m<br/>
<hr style="border-top: 1px solid white; margin-left: 5%; margin-right: 5%;" />
Removes up to 3 abnormal conditions cast on individual and up to 6 allies within 25m radius, and also recovers 3456 HP.
`;

const ClericStigmas = new Array(Benevolence, NobleGrace, SummonHealingServant, RestorationRelief, SplendorofRebirth, SavingGrace, RippleofPurification);