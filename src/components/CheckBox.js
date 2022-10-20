export default function CheckBox({ className, children, ...rest }) {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      {children}
    </label>
  );
}
