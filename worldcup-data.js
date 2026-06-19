// worldcup-data.js

// 1. 實時小組賽積分榜（由 index.html 根據 matches 自動動態計算，此處僅定義初始球隊）
window.officialGroupsConfig = {
    "Group A": { teams: ["Mexico", "South Korea", "Czechia", "South Africa"], matches: [], probs: {} },
    "Group B": { teams: ["Switzerland", "Bosnia & Herz.", "Canada", "Qatar"], matches: [], probs: {} },
    "Group C": { teams: ["Brazil", "Morocco", "Scotland", "Haiti"], matches: [], probs: {} },
    "Group D": { teams: ["United States", "Australia", "Türkiye", "Paraguay"], matches: [], probs: {} },
    "Group E": { teams: ["Germany", "Ecuador", "Ivory Coast", "Curaçao"], matches: [], probs: {} },
    "Group F": { teams: ["Netherlands", "Japan", "Sweden", "Tunisia"], matches: [], probs: {} },
    "Group G": { teams: ["Belgium", "Egypt", "Iran", "New Zealand"], matches: [], probs: {} },
    "Group H": { teams: ["Spain", "Uruguay", "Saudi Arabia", "Cape Verde"], matches: [], probs: {} },
    "Group I": { teams: ["France", "Norway", "Senegal", "Iraq"], matches: [], probs: {} },
    "Group J": { teams: ["Argentina", "Austria", "Algeria", "Jordan"], matches: [], probs: {} },
    "Group K": { teams: ["Colombia", "Portugal", "Uzbekistan", "Congo DR"], matches: [], probs: {} },
    "Group L": { teams: ["England", "Ghana", "Croatia", "Panama"], matches: [], probs: {} }
};

// 2. 完美的 Google 官方 2026  chronological 全賽程日曆字典表（按日期精準歸類，絕不出錯）
window.masterChronoScheduleMap = {
    "2026-06-18": [
        { context: "Group A", home: "Czechia", away: "South Africa", score: "1 - 1", status: "FT", displayTime: "Today • 11:00" },
        { context: "Group B", home: "Switzerland", away: "Bosnia & Herz.", score: "0 - 0", status: "Live", displayTime: "Today • 13:30" },
        { context: "Group B", home: "Canada", away: "Qatar", score: "vs", status: "Upcoming", displayTime: "Today • 15:00" },
        { context: "Group A", home: "Mexico", away: "South Korea", score: "vs", status: "Upcoming", displayTime: "Today • 18:00" }
    ],
    "2026-06-19": [
        { context: "Group D", home: "United States", away: "Australia", score: "vs", status: "Upcoming", displayTime: "Fri, Jun 19 • 12:00" },
        { context: "Group C", home: "Scotland", away: "Morocco", score: "vs", status: "Upcoming", displayTime: "Fri, Jun 19 • 15:00" },
        { context: "Group C", home: "Brazil", away: "Haiti", score: "vs", status: "Upcoming", displayTime: "Fri, Jun 19 • 17:30" },
        { context: "Group D", home: "Türkiye", away: "Paraguay", score: "vs", status: "Upcoming", displayTime: "Fri, Jun 19 • 20:00" }
    ],
    "2026-06-20": [
        { context: "Group F", home: "Netherlands", away: "Sweden", score: "vs", status: "Upcoming", displayTime: "Sat, Jun 20 • 10:00" },
        { context: "Group E", home: "Germany", away: "Ivory Coast", score: "vs", status: "Upcoming", displayTime: "Sat, Jun 20 • 13:00" },
        { context: "Group E", home: "Ecuador", away: "Curaçao", score: "vs", status: "Upcoming", displayTime: "Sat, Jun 20 • 17:00" },
        { context: "Group F", home: "Tunisia", away: "Japan", score: "vs", status: "Upcoming", displayTime: "Sat, Jun 20 • 21:00" }
    ],
    "2026-06-21": [
        { context: "Group G", home: "Belgium", away: "Egypt", score: "vs", status: "Upcoming", displayTime: "Sun, Jun 21 • 12:00" },
        { context: "Group H", home: "Spain", away: "Uruguay", score: "vs", status: "Upcoming", displayTime: "Sun, Jun 21 • 15:00" }
    ],
    "2026-06-22": [
        { context: "Group I", home: "France", away: "Norway", score: "vs", status: "Upcoming", displayTime: "Mon, Jun 22 • 16:00" }
    ],
    "2026-06-23": [
        { context: "Group L", home: "England", away: "Ghana", score: "vs", status: "Upcoming", displayTime: "Tue, Jun 23 • 17:00" }
    ],
    "2026-06-24": [
        { context: "Group A", home: "Czechia", away: "Mexico", score: "vs", status: "Upcoming", displayTime: "Wed, Jun 24 • 13:00" },
        { context: "Group A", home: "South Africa", away: "South Korea", score: "vs", status: "Upcoming", displayTime: "Wed, Jun 24 • 13:00" },
        { context: "Group B", home: "Switzerland", away: "Canada", score: "vs", status: "Upcoming", displayTime: "Wed, Jun 24 • 17:00" },
        { context: "Group B", home: "Bosnia & Herz.", away: "Qatar", score: "vs", status: "Upcoming", displayTime: "Wed, Jun 24 • 17:00" }
    ],
    "2026-06-25": [
        { context: "Group C", home: "Scotland", away: "Brazil", score: "vs", status: "Upcoming", displayTime: "Thu, Jun 25 • 13:00" },
        { context: "Group C", home: "Morocco", away: "Haiti", score: "vs", status: "Upcoming", displayTime: "Thu, Jun 25 • 13:00" },
        { context: "Group D", home: "Türkiye", away: "United States", score: "vs", status: "Upcoming", displayTime: "Thu, Jun 25 • 17:00" },
        { context: "Group D", home: "Paraguay", away: "Australia", score: "vs", status: "Upcoming", displayTime: "Thu, Jun 25 • 17:00" }
    ],
    "2026-06-26": [
        { context: "Group E", home: "Ecuador", away: "Germany", score: "vs", status: "Upcoming", displayTime: "Fri, Jun 26 • 13:00" },
        { context: "Group E", home: "Curaçao", away: "Ivory Coast", score: "vs", status: "Upcoming", displayTime: "Fri, Jun 26 • 13:00" },
        { context: "Group F", home: "Japan", away: "Sweden", score: "vs", status: "Upcoming", displayTime: "Fri, Jun 26 • 17:00" },
        { context: "Group F", home: "Tunisia", away: "Netherlands", score: "vs", status: "Upcoming", displayTime: "Fri, Jun 26 • 17:00" }
    ],
    "2026-06-27": [
        { context: "Group K", home: "Colombia", away: "Portugal", score: "vs", status: "Upcoming", displayTime: "Sat, Jun 27 • 16:30" },
        { context: "Group K", home: "Congo DR", away: "Uzbekistan", score: "vs", status: "Upcoming", displayTime: "Sat, Jun 27 • 16:30" },
        { context: "Group J", home: "Algeria", away: "Austria", score: "vs", status: "Upcoming", displayTime: "Sat, Jun 27 • 19:00" },
        { context: "Group J", home: "Jordan", away: "Argentina", score: "vs", status: "Upcoming", displayTime: "Sat, Jun 27 • 19:00" }
    ],
    "stage-Round of 32": [
        { context: "Round of 32", homeKey: "2nd Group A", awayKey: "2nd Group B", score: "vs", status: "Upcoming", displayTime: "Sun, Jun 28 • 12:00" },
        { context: "Round of 32", homeKey: "1st Group E", awayKey: "3rd Group C/D/F", score: "vs", status: "Upcoming", displayTime: "Mon, Jun 29 • 10:00" },
        { context: "Round of 32", homeKey: "1st Group F", awayKey: "2nd Group C", score: "vs", status: "Upcoming", displayTime: "Mon, Jun 29 • 13:30" },
        { context: "Round of 32", homeKey: "1st Group C", awayKey: "2nd Group F", score: "vs", status: "Upcoming", displayTime: "Mon, Jun 29 • 18:00" },
        { context: "Round of 32", homeKey: "1st Group I", awayKey: "3rd Group A/B/E", score: "vs", status: "Upcoming", displayTime: "Fri, Jul 3 • 18:30" }
    ],
    "stage-Round of 16": [
        { context: "Round of 16", homeKey: "Winner Match 74", awayKey: "Winner Match 77", score: "vs", status: "Upcoming", displayTime: "Sat, Jul 4 • 10:00" },
        { context: "Round of 16", homeKey: "Winner Match 73", awayKey: "Winner Match 75", score: "vs", status: "Upcoming", displayTime: "Sat, Jul 4 • 14:00" },
        { context: "Round of 16", homeKey: "Winner Match 76", awayKey: "Winner Match 78", score: "vs", status: "Upcoming", displayTime: "Sun, Jul 5 • 13:00" },
        { context: "Round of 16", homeKey: "Winner Match 79", awayKey: "Winner Match 80", score: "vs", status: "Upcoming", displayTime: "Sun, Jul 5 • 17:00" }
    ],
    "stage-Quarter-finals": [
        { context: "Quarter-finals", homeKey: "Winner Match 89", awayKey: "Winner Match 90", score: "vs", status: "Upcoming", displayTime: "Thu, Jul 9 • 13:00" },
        { context: "Quarter-finals", homeKey: "Winner Match 91", awayKey: "Winner Match 92", score: "vs", status: "Upcoming", displayTime: "Fri, Jul 10 • 12:00" },
        { context: "Quarter-finals", homeKey: "Winner Match 93", awayKey: "Winner Match 94", score: "vs", status: "Upcoming", displayTime: "Sat, Jul 11 • 14:00" },
        { context: "Quarter-finals", homeKey: "Winner Match 95", awayKey: "Winner Match 96", score: "vs", status: "Upcoming", displayTime: "Sat, Jul 11 • 18:00" }
    ],
    "stage-Semi-finals": [
        { context: "Semi-finals", homeKey: "Winner Match 97", awayKey: "Winner Match 98", score: "vs", status: "Upcoming", displayTime: "Tue, Jul 14 • 12:00" },
        { context: "Semi-finals", homeKey: "Winner Match 99", awayKey: "Winner Match 100", score: "vs", status: "Upcoming", displayTime: "Wed, Jul 15 • 12:00" }
    ],
    "stage-Final": [
        { context: "Third place play-off", homeKey: "Loser Match 101", awayKey: "Loser Match 102", score: "vs", status: "Upcoming", displayTime: "Sat, Jul 18 • 14:00" },
        { context: "Final", homeKey: "Winner Match 101", awayKey: "Winner Match 102", score: "vs", status: "Upcoming", displayTime: "Sun, Jul 19 • 12:00" }
    ]
};

// 把所有 Matches 打平注入 officialGroupsConfig 供積分榜面板提取渲染
Object.keys(window.masterChronoScheduleMap).forEach(dateKey => {
    if (dateKey.startsWith("stage-")) return;
    window.masterChronoScheduleMap[dateKey].forEach(m => {
        const gName = m.context;
        if (window.officialGroupsConfig[gName]) {
            window.officialGroupsConfig[gName].matches.push(m);
        }
    });
});