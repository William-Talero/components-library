export interface FileUploaderProps {
  maxFileSize?: number;
  maxFileNameLength?: number;
  allowedExtensions?: string[];
  maxFiles?: number;
  onFilesChange?: (files: File[]) => void;
}
