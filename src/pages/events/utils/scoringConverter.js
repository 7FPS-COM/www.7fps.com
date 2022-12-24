function scoringConverter(scoring) {
    var placement = []
    var eliminations = 0

    for(let i = 0; i < scoring.length; i++) {
        const element = scoring[i]
        if(element.trackedStat === "PLACEMENT_STAT_INDEX") {
            for(let y = 0; y < element.rewardTiers.length; y++) {
                const reward = element.rewardTiers[y]
                placement.push({top: reward.keyValue, points: reward.pointsEarned})
            }
        }
        if(element.trackedStat === "TEAM_ELIMS_STAT_INDEX") {
            eliminations = element.rewardTiers[0].pointsEarned
        }
    }

    placement = placement.sort((a,b)=>b.top-a.top)

    let cumulativeSum = 0
    for(let i = 0; i < placement.length; i++) {
        const element = placement[i]
        cumulativeSum += element.points
        element.cumulative = cumulativeSum
        placement[i] = element
    }

    placement = placement.reverse()

    return {placement, eliminations}
}

export default scoringConverter;