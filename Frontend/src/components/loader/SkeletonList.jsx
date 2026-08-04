import SkeletonCard from "./SkeletonCard";

const SkeletonList = ({ count = 6 }) => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default SkeletonList;
