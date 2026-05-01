export default function Button({ children, variant = 'primary', size = 'medium', onClick }) {
  const className = `btn btn-${variant} btn-${size}`;
  
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
