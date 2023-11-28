export default function ButtonLp({ children, variant }) {
  return <button className={`btn ${variant} md:mt-0 mt-4`}>{children}</button>;
}
