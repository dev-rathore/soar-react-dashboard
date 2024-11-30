import { ImagePlus } from "lucide-react";
import { Button } from "../ui";
import { useRef, useState } from "react";
import { cn } from "../../utils/tailwind";

interface ImageModalProps {
  file: File | null;
  handleFileChange: (files: FileList | null) => void;
  handleRemove: () => void;
  handleUpload: () => void;
  previewUrl: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  file,
  handleFileChange,
  handleRemove,
  handleUpload,
  previewUrl,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileChange(e.target.files);
  }

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFileChange(files);
  };

  return (
    <>
      <div
        className="mt-2"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div
          aria-label="Upload Image"
          className={cn(
            "flex flex-col items-center justify-center gap-2 w-full h-64 border-2 border-accent-100 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100",
            isDragging && "border-accent-200",
          )}
          onClick={() => inputRef.current?.click()}
        >
          {
            previewUrl ? (
              <img
                alt="Preview"
                className="w-full h-full object-cover overflow-hidden rounded-lg"
                src={previewUrl}
              />
            ) : (
              <div
                className="flex flex-col items-center justify-center p-5"
              >
                <ImagePlus className="w-12 h-12 mb-4 text-accent-100" />
                <p className="mb-2 text-sm text-center text-accent-100"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-center text-accent-100">PNG, JPG or JPEG</p>
              </div>
            )
          }
          <input
            ref={inputRef}
            accept="image/png, image/jpeg, image/jpg"
            className="hidden"
            id="photo-upload"
            onChange={handleInputChange}
            type="file"
          />
        </div>
        {
          file && (
            <p className="mt-2 text-sm text-accent-100 break-all">
              Selected file: {file.name}
            </p>
          )
        }
      </div>
      <div className="flex gap-4 mt-4">
        <Button
          onClick={handleRemove}
          type="button"
        >
          Remove
        </Button>
        <Button
          disabled={!file}
          onClick={handleUpload}
          type="button"
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default ImageModal;
