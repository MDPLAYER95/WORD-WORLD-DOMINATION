export type Difficulty = "easy" | "medium" | "hard";

export interface HistoryItem {
  word: string;
  explanation: string;
  emoji: string;
  isError?: boolean;
}