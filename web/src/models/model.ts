export interface VideoFile {
  id: string;
  name: string;
}

export interface VideoFiles {
  files: VideoFile[];
  total: number;
}

export interface LinkType {
  page: number;
  selected: boolean;
}

export interface PaginationType {
  last: number;
  prev: number;
  next: number;
  links: LinkType[];
}
