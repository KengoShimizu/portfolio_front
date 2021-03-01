export default interface Work {
  name: string;
  image: string;
  description: string;
  member: number;
  url: string;
  tags: number[];
  new_tags: {
    id: number;
    content: string;
    kind: number;
  }[];
}