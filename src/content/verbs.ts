
export interface Verb {
    id: number;
    infinitive: string;
    pastSimple: string;
    active: boolean;
    checked: boolean;
}

export interface VerbsState {
    cards: any;
    score: number;
}


export const verbs: Verb[] = [
    {id: 0 , infinitive: "leave", pastSimple: "left" , active: true , checked: false },
    {id: 1 , infinitive: "go", pastSimple: "vent" , active: true , checked: false},
    {id: 2 , infinitive: "take", pastSimple: "took" , active: true , checked: false},
    {id: 3 , infinitive: "see", pastSimple: "saw" , active: true , checked: false},
]
