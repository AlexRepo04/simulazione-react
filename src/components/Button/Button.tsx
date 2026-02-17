import "./Button.css";

interface Props {
  label: string;
  url: URL;
}

function BtnLearnMore() {
  return (
    <>
      <div className="hero-btn">
        <button href={url}>{label}</button>
      </div>
    </>
  );
}

export default BtnLearnMore;
