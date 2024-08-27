const Fallback: React.FC = () => {
  return (
    <div>
      <div>Something went wrong</div>
    </div>
  );
};

export const errorHandler = (error: any, errorInfo: React.ErrorInfo) => {
  console.log("Logging", error, errorInfo);
};

export default Fallback;
