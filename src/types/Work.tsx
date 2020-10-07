export default interface Work {
  id: number;
  name: string;
  image: string;
  description: string;
  member: number;
  url: string;
  tags: {
    id: number;
    content: string;
    kind: number;
    created_at: string;
    updated_at: string;
  }[];
  created_at: string;
  updated_at: string;
}