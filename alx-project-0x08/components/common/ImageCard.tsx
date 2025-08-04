import { GeneratedImageProps } from "@/interfaces";
import Image from "next/image";

const ImageCard: React.FC<GeneratedImageProps> = ({ imageUrl, prompt, width }) => {
  return (
    <div>
      <Image
        src={imageUrl}
        alt={prompt}
        width={typeof width === "number" ? width : 400}
        height={300}
        className="w-full max-w-md rounded-lg shadow-lg"
        style={{ objectFit: "cover" }}
      />
      <Image
        src={imageUrl}
        alt={prompt}
        width={typeof width === "number" ? width : 400}
        height={300}
        className="w-full max-w-md rounded-lg shadow-lg"
        style={{ objectFit: "cover" }}
      />
      <h2 className={`${width ? 'text-sm' : 'text-xl'} font-semibold mt-2`}>Your Prompt:</h2>
      <p className={`${width ? 'text-xs' : 'text-lg'} text-gray-700 mb-4`}>{prompt}</p>
    </div>
  )
}

export default ImageCard;
