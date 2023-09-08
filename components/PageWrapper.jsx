export default function PageWrapper(props) {
  return (
    <div className="h-full min-h-screen pt-[80px] w-screen">
      {props.children}
    </div>
  );
}
