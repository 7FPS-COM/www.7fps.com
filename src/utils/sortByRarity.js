function sortByRarity(data) {
    const exotic = data.weapons.filter(e => e.rarity === "exotic")
    const transcendent = data.weapons.filter(e => e.rarity === "transcendent")
    const mythic = data.weapons.filter(e => e.rarity === "mythic")
    const legendary = data.weapons.filter(e => e.rarity === "legendary")
    const epic = data.weapons.filter(e => e.rarity === "epic")
    const rare = data.weapons.filter(e => e.rarity === "rare")
    const uncommon = data.weapons.filter(e => e.rarity === "uncommon")
    const common = data.weapons.filter(e => e.rarity === "common")

    const unknown = data.weapons.filter(e => !["exotic", "transcendent", "mythic", "legendary", "epic", "rare", "uncommon", "common"].includes(e.rarity))

    data.weapons = [
        ...unknown,
        ...exotic,
        ...transcendent,
        ...mythic,
        ...legendary,
        ...epic,
        ...rare,
        ...uncommon,
        ...common
        ]

    return data
}

export default sortByRarity;