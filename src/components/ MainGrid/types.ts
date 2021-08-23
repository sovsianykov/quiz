import { Verb } from "../../content/verbs";

export interface GridItemProps {
    item: Verb;
    onClick(id: number): void;
}

export interface GridProps {
    items: Verb[];
}
