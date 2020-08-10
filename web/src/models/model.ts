export interface VideoFile {
  id: string;
  name: string;
}

export interface VideoFiles {
  files: VideoFile[];
  total: number;
}
