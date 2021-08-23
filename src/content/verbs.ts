
export interface Verb {
    id: number;
    infinitive: string;
    pastSimple: string;
    active: boolean;
    correctAnswered: boolean;
    checked: boolean;
}

export const verbs: Verb[] = [
    { id: 0 , infinitive: "leave", pastSimple: "left" , active: false , checked: false, correctAnswered: false },
    { id: 1 , infinitive: "go", pastSimple: "vent" , active: false , checked: false, correctAnswered: false },
    { id: 2 , infinitive: "take", pastSimple: "took" , active: false , checked: false, correctAnswered: false },
    { id: 3 , infinitive: "see", pastSimple: "saw" , active: true , checked: false, correctAnswered: false },
    { id: 4 , infinitive: "say", pastSimple: "said" , active: true , checked: false, correctAnswered: false },
    { id: 5 , infinitive: "sing", pastSimple: "sung" , active: true , checked: false, correctAnswered: false },
    { id: 6 , infinitive: "tell", pastSimple: "told" , active: true , checked: false, correctAnswered: false },
    { id: 7 , infinitive: "think", pastSimple: "thought" , active: true , checked: false, correctAnswered: false },
    { id: 8 , infinitive: "sell", pastSimple: "sold" , active: true , checked: false, correctAnswered: false },
    { id: 9 , infinitive: "be", pastSimple: "was" , active: true , checked: false, correctAnswered: false },
    { id: 10 , infinitive: "bring", pastSimple: "brought" , active: true , checked: false, correctAnswered: false },
    { id: 11 , infinitive: "see", pastSimple: "saw" , active: true , checked: false, correctAnswered: false },
    { id: 12 , infinitive: "do", pastSimple: "did" , active: true , checked: false, correctAnswered: false },
    { id: 13 , infinitive: "forget", pastSimple: "forgot" , active: true , checked: false, correctAnswered: false },
    { id: 14 , infinitive: "feel", pastSimple: "felt" , active: true , checked: false, correctAnswered: false },
    { id: 15 , infinitive: "know", pastSimple: "knew" , active: true , checked: false, correctAnswered: false },
    { id: 16 , infinitive: "spend", pastSimple: "spent" , active: true , checked: false, correctAnswered: false },
];

export interface NavItem {
    id: number;
    title: string;
    path : string;
}

export const navigation: NavItem[] = [
    { id: 1, title: "Home", path : '/' },
    { id: 2, title: "Limited Time", path : '/limited-time' },
    { id: 3, title: "Learn Mode", path : '/learn-mode' },
]
export interface VerbsState {
    cards: Array<Verb>;
    score: number;
}
