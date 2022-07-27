type PremiumStateLabelProps = {
  className:string
}

function PremiumStateLabel({className}:PremiumStateLabelProps): JSX.Element {
  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}

export default PremiumStateLabel;
